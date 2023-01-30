import React from "react";
import Image from "next/image";
import { logo } from "./Info";
import Link from "next/link";

export default function Header() {
  return (
    <header id="header">
      <Link className="img-container" href="/">
        <Image src={logo} alt="back" fill sizes="100%" />
      </Link>
      <nav className="navigation">
        <Link className="heading" href="/">
          Home
        </Link>
        <Link className="heading" href="/about">
          About
        </Link>
        <Link className="heading" href="/projects">
          Projects
        </Link>
      </nav>
    </header>
  );
}
