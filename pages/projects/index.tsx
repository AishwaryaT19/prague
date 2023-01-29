import { projects } from "components/Info";
import Link from "next/link";
import Image from "next/image";
const newprojectlist = projects;
const num = 4 - (projects.length % 4);
for (let i = 0; i < num; i++) {
  newprojectlist.push(projects[i]);
  console.log(i);
}
export default function Projects() {
  return (
    <div id="projects">
      {newprojectlist.map((pr, index) => {
        return (
          <div className="card" key={index}>
            <div className="img-container">
              <Image src={pr.imgUrl} fill sizes="100%" alt={pr.projectName} />
            </div>
            <div className="stuff-container">
              <Link
                href={`/projects/${pr.projectName
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className="name"
                key={index}
              >
                {pr.projectName}
              </Link>
              <Link
                href={`/projects/${pr.projectName
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className="location"
                key={index}
              >
                {pr.projectLocation}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
