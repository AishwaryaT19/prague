import Link from "next/link";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { TfiPinterest } from "react-icons/tfi";
import { logo, infs, footer, copyright } from "./Info";
import Image from "next/image";
export default function Footer() {
  return (
    <footer id="footer" style={{ backgroundImage: `url("${footer}")` }}>
      <span className="overlay"></span>
      <div className="main">
        <div className="info">
          <Link href="/" className="img-container">
            <Image src={logo} alt="back" fill sizes="100%" />
          </Link>
          <p>{infs[0].inf}</p>
        </div>
        <div className="contact">
          <h2>get in touch</h2>
          <div className="touch">
            <Link
              href={"tel:" + infs[0].number}
              target="_blank"
              rel="noopener noreferrer"
            >
              {infs[0].number}
            </Link>
            <Link
              href={"mailto:" + infs[0].email}
              target="_blank"
              rel="noopener noreferrer"
            >
              {infs[0].email}
            </Link>
            <Link
              href={"http://maps.google.com/?q= " + infs[0].address}
              target="_blank"
              rel="noopener noreferrer"
            >
              {infs[0].address}
            </Link>
          </div>
        </div>
      </div>
      <div className="sub">
        <div className="rights">
          <span>{copyright}</span>
        </div>
        <div className="social">
          <Link href="">
            <RiFacebookFill />
          </Link>
          <Link href="">
            <RiLinkedinFill />
          </Link>
          <Link href="">
            <RiTwitterFill />
          </Link>
          <Link href="">
            <TfiPinterest />
          </Link>
        </div>
      </div>
    </footer>
  );
}
