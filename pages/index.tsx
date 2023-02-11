import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  projects,
  place,
  main,
  objective,
  abHead,
  abContent,
  yearsOfExpBackground,
  projectSubHead,
  testimonials,
  testimonialHeading,
  companyName,
  mainButton,
  years_of_Experience
} from "../components/Info";
import { FaQuoteLeft } from "react-icons/fa";
import dynamic from "next/dynamic";
// import ProjectCard from "components/home/project-card";
const ProjectCard = dynamic(() => {
  return import("components/home/project-card");
});

export default function Home() {
  const [testyIndex, setTesyIndex] = useState(0);
  return (
    <section id="Home">
      <Head>
        <title>{`${companyName} | Home`}</title>
        <meta name="description" content={companyName + " | " + abContent} />
      </Head>
      <section className="main" style={{ backgroundImage: `url("${yearsOfExpBackground}")` }}>
        <span className="overlay"></span>
        <span>{place}</span>
        <h1>{main}</h1>
        <p>{objective}</p>
        <Link href="/projects">{mainButton}</Link>
      </section>
      <section className="about-us">
        <div className="img-container">
          <Image src="/assests/images/main.jpg" alt="main" fill sizes="100%" />
          <div className="shadow">
            <span>{years_of_Experience}</span>
            <span>YEARS</span>
          </div>
        </div>
        <div className="stuff-container">
          <h2>ABOUT US</h2>
          <span>{abHead}</span>
          <p>{abContent}</p>
        </div>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <span>{projectSubHead}</span>
        <div className="projects-container">
          {projects.slice(0, 6).map((proj, index) => {
            return <ProjectCard proj={proj} key={String(index)} />;
          })}
        </div>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <span>{testimonialHeading}</span>
        <div className="main-container">
          <div className="name-container">
            {testimonials.map((test, index) => {
              return (
                <span
                  key={index}
                  className={index === testyIndex ? "testy-active" : undefined}
                  onClick={() => {
                    setTesyIndex(index);
                  }}
                >
                  {test.name}
                </span>
              );
            })}
          </div>
          <div className="testy-container">
            <div
              className="overflow-container"
              style={{
                height: `${testimonials.length * 30}vh`,
                transform: `translateY(-${testyIndex * 30}vh)`
              }}
            >
              {testimonials.map((test, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      height: `${100 / testimonials.length}%`
                    }}
                  >
                    <span>
                      <FaQuoteLeft />
                    </span>
                    <p>{test.message}</p>
                    <span className="auth">{test.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
