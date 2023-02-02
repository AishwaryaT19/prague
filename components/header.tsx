import React from "react";
import Image from "next/image";
import { logo } from "./Info";
import Link from "next/link";
import { useState } from "react";
import useScrollPosition from "../hooks/useScroll";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { infs } from "./Info";
export default function Header() {
  const [mobileView, setMobileView] = useState(false);
  const scrollPos = useScrollPosition();
  console.log(scrollPos);
  function close() {
    setMobileView(false);
  }

  return (
    <header id="header" className={scrollPos > 75 ? "dark" : "light"}>
      <Link className="img-container" href="/">
        <Image src={logo} alt="back" fill sizes="100%" />
      </Link>
      <nav id="navigation" className={`${mobileView ? "active" : "inactive"}`}>
        <Link
          className="heading"
          href="/"
          onClick={() => setMobileView(!mobileView)}
        >
          Home
        </Link>
        <Link
          className="heading"
          href="/about"
          onClick={() => setMobileView(!mobileView)}
        >
          About
        </Link>
        <Link
          className="heading"
          href="/projects"
          onClick={() => setMobileView(!mobileView)}
        >
          Projects
        </Link>
        <div className={`${mobileView ? "open" : "close"} socials`}>
          <Link
            className="heading"
            href={"https://api.whatsapp.com/send?phone=" + infs[0].number + ""}
            onClick={() => setMobileView(!mobileView)}
          >
            <FaWhatsapp />
          </Link>
          <Link
            className="heading"
            href={"tel:" + infs[0].number}
            onClick={() => setMobileView(!mobileView)}
          >
            <FaPhone />
          </Link>
          <Link
            className="heading"
            href={"mailto:" + infs[0].email}
            onClick={() => setMobileView(!mobileView)}
          >
            <FaEnvelope />
          </Link>
        </div>
      </nav>
      <div
        className={`${mobileView ? "open" : "close"} burger`}
        onClick={() => setMobileView(!mobileView)}
      >
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </header>
  );
}
