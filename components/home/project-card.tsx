import Image from "next/image";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

export default function ProjectCard({proj}:{proj:Record<string,any>}) {
  return (
    <div className="project-card">
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
  )
}
