import { projects } from "../../components/Info";
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
      <div className="container">
        {newprojectlist.map((pr, index) => {
          console.log(pr.projectName);
          return (
            <Link
              href={`/projects/${pr.projectName
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              className="card"
              key={index}
            >
              <div className="img-container">
                <Image src={pr.imgUrl} fill sizes="100%" alt={pr.projectName} />
              </div>
              <div className="stuff-container">
                <span className="name">{pr.projectName}</span>
                <span className="location">{pr.projectLocation}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
