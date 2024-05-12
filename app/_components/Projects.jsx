"use client";

import { confetti } from "@tsparticles/confetti";
import ky from "ky";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { useFetch } from "../hooks/UseFetch";

const Projects = () => {
  const { fetchedData, isLoading, error } = useFetch(
    "http://185.157.247.55:3005/api/projects"
  );

  const [heartStates, setHeartStates] = useState({});
  const [userIp, setUserIp] = useState("");
  const [likes, setLikes] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localUserIp = localStorage.getItem("userIp");
      if (!localUserIp) {
        const newUserIp = uuidv4(); // Génère un identifiant unique lors du montage du composant
        setUserIp(newUserIp);
        localStorage.setItem("userIp", newUserIp);
      } else {
        setUserIp(localUserIp);
      }
    }

    // Récupérer les likes pour chaque projet
    if (fetchedData && Array.isArray(fetchedData)) {
      fetchedData.forEach(async (project) => {
        const response = await ky.get(
          `http://185.157.247.55:3005/api/likes/${project._id}`
        );
        const data = await response.json();
        setLikes((prevLikes) => ({
          ...prevLikes,
          [project._id]: data.length,
        }));
      });
    }
  }, [fetchedData]);

  const toggleColor = async (id) => {
    setHeartStates({
      ...heartStates,
      [id]: !heartStates[id],
    });

    try {
      if (heartStates[id]) {
        await ky.delete(`http://185.157.247.55:3005/api/likes/${id}`, {
          json: { userIp, postId: id },
        });
        console.log("Deleted");
      } else {
        await ky.post(`http://185.157.247.55:3005/api/likes/${id}`, {
          json: { userIp, postId: id },
        });
        confetti({
          particleCount: 200,
          spread: 60,
          origin: { y: 0.6 },
        });
        console.log("Created");
      }

      // Rafraîchir les likes
      const response = await ky.get(
        `http://185.157.247.55:3005/api/likes/${id}`
      );
      const data = await response.json();
      setLikes((prevLikes) => ({
        ...prevLikes,
        [id]: data.length,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-10 p-4 w-4/5 m-auto">
      {isLoading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p>Une erreur est survenue, veuillez m'excuser.</p>
      ) : (
        fetchedData.map((project) => (
          <article
            key={project._id}
            className="relative flex flex-col justify-between gap-10 p-4 bg-foreground/5 rounded-lg transition-transform transform hover:scale-105 duration-700 shadow-pxl"
          >
            <div className="flex justify-center items-center object-cover">
              <img src={project.cover} alt={project.title} />
            </div>
            <div>
              <h2 className="font-bold text-xl">{project.title}</h2>
              <p>{project.shortDescription}</p>
              {project.skills && (
                <ul className="flex flex-wrap gap-2 w-[90%] mt-5">
                  {project.skills.map((skill) => (
                    <li
                      key={skill}
                      className="bg-foreground/50 rounded px-1 text-background text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <FaHeart
              className={`absolute bottom-2 right-3 text-2xl cursor-pointer transition-all transform hover:scale-110 duration-500 ${
                heartStates[project._id] ? "text-primary/80" : "text-primary/20"
              }`}
              onClick={(e) => toggleColor(project._id)}
            />
            <p>{likes[project._id] || 0} likes</p>
          </article>
        ))
      )}
    </section>
  );
};

export default Projects;
