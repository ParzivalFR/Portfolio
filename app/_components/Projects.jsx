"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/projects.json");
        const data = await res.json();
        setProjects(data);
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchProjects();
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
            className="flex flex-col space-y-3 h-80 w-4/5 md:w-full m-auto bg-foreground/5 p-5 rounded-md"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-2/5 w-full object-cover rounded-xl"
            />
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
              <Link href={project.url}>{project.url}</Link>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Projects;
