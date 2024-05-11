"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiExternalLinkLine } from "react-icons/ri";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section
      id="projects"
      className="grid gap-y-20 gap-x-10 grid-cols-1 center md:grid-cols-2 lg:grid-cols-3 w-full md:w-4/5 sm:m-auto"
    >
      {projects &&
        projects.map((project) => (
          <div
            key={project.id}
            className="relative flex flex-col space-y-3 h-80 w-4/5 md:w-full m-auto bg-foreground/5 p-5 rounded-md"
          >
            <div className="flex items-center overflow-hidden h-3/5 w-full rounded-xl">
              <img
                src={project.cover.replace("/upload/", "/upload/f_webp/")}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">
                {project.title} - Projet {project.number}
              </h3>
              <p className="text-sm">{project.shortDescription}</p>
              <p className="text-sm">Fait en {project.year}</p>
              {project.skills && (
                <div className="flex flex-wrap space-x-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-foreground/10 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
              <Link
                href={project.url}
                target="_blank"
                className="absolute top-2 right-2"
              >
                <RiExternalLinkLine size={25} />
              </Link>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Projects;
