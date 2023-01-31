import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [onScroll, setOnScroll] = useState(0);
  function handleScroll() {
    const a = window.scrollY;
    setOnScroll(a);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return onScroll;
}
