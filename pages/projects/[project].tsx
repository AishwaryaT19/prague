import { projects, companyName } from "../../components/Info";
import { useRouter } from "next/router";
import Error from "../../components/error";
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";
import { TfiPinterest } from "react-icons/tfi";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
export default function Project() {
  const router = useRouter();

  const currentRoute = router.query.project as string;
  let x = 0;
  if (!currentRoute) {
    return <Error />;
  }
  for (let i = 0; i < projects.length; i++) {
    if (
      projects[i].projectName.toLowerCase() == currentRoute.replaceAll("-", " ")
    ) {
      x = i;
      break;
    } else {
      x = -1;
    }
    console.log(x);
  }
  if (x == -1) {
    return <Error />;
  } else {
    return (
      <div id="main">
        <Head>
          <title>
            {companyName} | {projects[x].projectName}
          </title>
        </Head>
        <div className="head">
          <span>interior</span>
          <h1>{projects[x].projectName}</h1>
          <p>{projects[x].projectDesc}</p>
          <div className="stuff-container">
            <div className="year">
              <span>year</span>
              <h3>{projects[x].projectYear}</h3>
            </div>
            <div className="location">
              <span>location</span>
              <h3>{projects[x].projectLocation}</h3>
            </div>
            <div className="creative">
              <span>creative director</span>
              <h3>{projects[x].creativeDirector}</h3>
            </div>
            <div className="visualisation">
              <span>visualization</span>
              <h3>{projects[x].viszualization}</h3>
            </div>
          </div>
          <div className="socials">
            <span>share project</span>
            <div className="icons">
              <Link
                href="{https://www.facebook.com/sharer.php?u=${window.location.href}? 
            imageurl=${this.state.imageUrl}}"
              >
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
        </div>
        <div className="img-container">
          <Image
            src={projects[x].projectImages[0]}
            fill
            sizes="100%"
            alt={projects[x].projectName}
          />
        </div>
        <div className="stf-container">
          <div className="img-container ig-one">
            <Image
              src={projects[x].projectImages[1]}
              fill
              sizes="100%"
              alt={projects[x].projectName}
            />
          </div>
          <p className="one">{projects[x].projectDescOne}</p>
          <p className="two">{projects[x].projectDescOne}</p>
          <div className="img-container ig-two">
            <Image
              src={projects[x].projectImages[2]}
              fill
              sizes="100%"
              alt={projects[x].projectName}
            />
          </div>
        </div>
        <div className="imgtwo-container">
          <Image
            src={projects[x].projectImages[3]}
            fill
            sizes="100%"
            alt={projects[x].projectName}
          />
        </div>
        <div className="last">
          <div className="imgthree-container">
            <Image
              src={projects[x].projectImages[4]}
              fill
              sizes="100%"
              alt={projects[x].projectName}
            />
          </div>
          <div className="imgfour-container">
            <Image
              src={projects[x].projectImages[5]}
              fill
              sizes="100%"
              alt={projects[x].projectName}
            />
          </div>
        </div>
        <div className="for">
          <span>This project is made for {projects[x].madeFor}</span>
        </div>
      </div>
    );
  }
}
