import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
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
} from "../components/Info";
export default function Home() {
  const [testyIndex, setTesyIndex] = useState(0);

  return (
    <section id="Home">
      <Head>
        <title>Home Page</title>
      </Head>
      <section
        className="main"
        style={{ backgroundImage: `url("${yearsOfExpBackground}")` }}
      >
        <span className="overlay"></span>
        <span>{place}</span>
        <h1>{main}</h1>
        <p>{objective}</p>
        <Link href="/projects">EXPLORE IT</Link>
      </section>
      <section className="about-us">
        <div className="img-container">
          <Image src="/assests/images/main.jpg" alt="main" fill sizes="100%" />
          <div className="shadow">
            <span>14</span>
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
            return (
              <div className="project-card" key={index}>
                <div className="img-container">
                  <Image
                    src={proj.imgUrl}
                    fill
                    sizes="100%"
                    alt={proj.projectName}
                  />
                </div>
                <div className="stuff-container">
                  <span>{proj.projectYear}</span>
                  <Link
                    className="heading"
                    href={`/projects/${proj.projectName
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {proj.projectName}
                  </Link>
                  <p>{proj.projectDesc}</p>
                  <Link
                    className="link-tag"
                    href={`/projects/${proj.projectName
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    <span>READ</span>
                    <HiArrowLongRight className="arrow" />
                  </Link>
                </div>
              </div>
            );
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
                transform: `translateY(-${testyIndex * 30}vh)`,
              }}
            >
              {testimonials.map((test, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      height: `${100 / testimonials.length}%`,
                    }}
                  >
                    <span>"</span>
                    <p>{test.message}</p>
                    <span>{test.name}</span>
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
