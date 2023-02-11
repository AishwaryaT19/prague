import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  aboutBackground,
  aboutMain,
  about_array,
  About_company_backgr,
  companyName,
  descContent,
  descHead,
  serHead,
  servicePic,
  services,
  skills,
  timeline,
  timlineCon,
} from "../components/Info";
import { RiCompasses2Line, RiLightbulbLine } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";

export default function About() {
  return (
    <section id="About">
      <Head>
        <title>{`${companyName} | About Us`}</title>
        <meta
          name="description"
          content={companyName + " | " + descContent}
        />
      </Head>
      <section
        className="main"
        style={{ backgroundImage: `url("${aboutBackground}")` }}
      >
        <span className="overlay"></span>
        <span>ABOUT US</span>
        <h1>{aboutMain}</h1>
      </section>
      <section className="desc">
        <div className="img-container">
          <Image src={About_company_backgr} alt="main" fill sizes="100%" />
        </div>
        <div className="stuff-container">
          <span>ABOUT US</span>
          <h2>{descHead}</h2>
          <p>{descContent}</p>
          <h4>{about_array}</h4>
          <ul>
            {skills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
      </section>
      <section className="services">
        <div className="img-container">
          <Image src={servicePic} alt="back" fill sizes="100%" />
          <span className="overlay"></span>
        </div>
        <div className="stuff-container">
          <span>Services</span>
          <h4>{serHead}</h4>

          <div className="cards-container">
            {services.map((ser, index) => {
              let B = ser.serviceIcon;
              return (
                <div className="card" key={index}>
                  <B className="icon" />
                  <h3>{ser.serviceName}</h3>
                  <p>{ser.serviceDesc}</p>
                  <Link href="/projects">READ</Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="timeline">
        <span>Timeline</span>
        <h3>{timeline}</h3>
        <div className="container">
          {timlineCon.map((tm, index) => {
            return (
              <div className="card" key={index}>
                <span>{tm.year}</span>

                <div className="def">
                  <h5>{tm.name}</h5>
                  <span>{tm.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
