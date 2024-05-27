"use client";

import { confetti } from "@tsparticles/confetti";
import ky from "ky";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircularProgress } from "@mui/material";
import { FaHeart } from "react-icons/fa";
import { HiHashtag } from "react-icons/hi";
import { RiErrorWarningFill } from "react-icons/ri";

import Link from "next/link";
import Spacing from "./Spacing";

const Projects = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [heartStates, setHeartStates] = useState({});
  const [userIp, setUserIp] = useState("");
  const [likes, setLikes] = useState({});
  const [showProjects, setShowProjects] = useState(3);
  const [isSortedDescending, setIsSortedDescending] = useState(true); // Nouvel état

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localUserIp = localStorage.getItem("userIp");
      const newUserIp = localUserIp || uuidv4();
      setUserIp(newUserIp);
      localStorage.setItem("userIp", newUserIp);
    }

    const fetchData = async () => {
      try {
        const response = await ky.get("https://parzival.fun/api/projects");
        const data = await response.json();

        const sortedData = data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setFetchedData(sortedData);

        const likesData = await Promise.all(
          data.map(async (project) => {
            const response = await ky.get(
              `https://parzival.fun/api/likes/${project._id}`
            );
            const likes = await response.json();
            return { id: project._id, count: likes.length };
          })
        );

        const likesObj = likesData.reduce(
          (acc, { id, count }) => ({ ...acc, [id]: count }),
          {}
        );
        setLikes(likesObj);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleColor = async (id) => {
    setHeartStates((prevHeartStates) => ({
      ...prevHeartStates,
      [id]: !prevHeartStates[id],
    }));

    try {
      const likeEndpoint = heartStates[id]
        ? `https://parzival.fun/api/likes/${id}`
        : `https://parzival.fun/api/likes/${id}`;
      const method = heartStates[id] ? "DELETE" : "POST";

      await ky(likeEndpoint, {
        method,
        json: { userIp, postId: id },
      });

      if (!heartStates[id]) {
        confetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 0.6 },
        });
      }

      const response = await ky.get(`https://parzival.fun/api/likes/${id}`);
      const data = await response.json();
      setLikes((prevLikes) => ({ ...prevLikes, [id]: data.length }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowMoreProjects = () => {
    setShowProjects((prevShowMoreProjects) => prevShowMoreProjects + 2);
  };

  const handleShowHideProjects = () => {
    setShowProjects(3);
  };

  const toggleSort = () => {
    setFetchedData((prevFetchedData) => {
      const sortedData = prevFetchedData.sort((a, b) => {
        return isSortedDescending
          ? new Date(a.timestamp) - new Date(b.timestamp)
          : new Date(b.timestamp) - new Date(a.timestamp);
      });
      return [...sortedData];
    });
    setIsSortedDescending(!isSortedDescending); // Bascule l'état du tri
  };

  return (
    <section id="projects">
      <Tabs
        defaultValue="descending"
        className="w-full flex flex-col justify-center items-center p-4"
      >
        <TabsList>
          <TabsTrigger
            value="descending"
            onClick={() => {
              toggleSort();
            }}
          >
            Le plus récent
          </TabsTrigger>
          <TabsTrigger
            value="ascending"
            onClick={() => {
              toggleSort();
            }}
          >
            Le plus ancien
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {isLoading ? (
        <div className="size-full m-auto flex justify-center items-center">
          <CircularProgress color="secondary" className="m-auto" size={100} />
        </div>
      ) : error ? (
        <div className="size-full flex justify-center items-center">
          <Alert
            severity="error"
            className="w-4/5 m-auto border-foreground/50 bg-red-600/40 shadow-pxl"
          >
            <RiErrorWarningFill className="text-2xl md:text-xl" />
            <AlertTitle className="font-bold text-xs underline md:text-base">
              Error
            </AlertTitle>
            <AlertDescription className="text-[10px] leading-tight md:text-sm">
              {error.message}
            </AlertDescription>
          </Alert>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-10 p-4 w-4/5 m-auto">
          {fetchedData.slice(0, showProjects).map((project) => (
            <article
              key={project._id}
              className="relative flex flex-col justify-between h-full gap-5 p-4 bg-foreground/5 rounded-lg transition-transform transform hover:scale-105 duration-700 shadow-pxl"
            >
              <Link href={`/pages/projects/${project._id}`}>
                <div className="shadow-pxl w-full h-36 m-auto  rounded-xl flex justify-center items-center object-cover overflow-hidden">
                  <img
                    src={project.cover}
                    alt={project.title}
                    className=" object-cover"
                  />
                </div>
              </Link>
              <hr className="w-3/5 m-auto center rounded-lg border border-primary/80 " />
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <h2 className="flex items-center gap-1 lg:gap-2 font-black text-xl md:text-2xl">
                    <HiHashtag className="text-primary" />
                    {project.title}
                  </h2>
                  <q className="text-xs md:text-sm text-wrap">
                    {" "}
                    {project.shortDescription}{" "}
                  </q>
                </div>
                {project.skills && (
                  <ul className="flex flex-wrap gap-2 w-[85%] mt-5">
                    {project.skills.map((skill) => (
                      <li
                        key={skill}
                        className="bg-foreground/80 rounded px-1 sm:px-2 text-background text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="absolute bottom-1 right-1 w-20 flex items-center justify-end gap-2">
                <p className="text-[12px]">{likes[project._id] || 0}</p>
                <FaHeart
                  className={`text-2xl cursor-pointer transition-all transform hover:scale-110 duration-500 ${
                    heartStates[project._id]
                      ? "text-primary/80"
                      : "text-primary/20"
                  }`}
                  onClick={() => toggleColor(project._id)}
                />
              </div>
            </article>
          ))}
        </div>
      )}
      <Spacing size={20} />
      <div className="flex flex-col justify-center items-center">
        {showProjects < fetchedData.length ? (
          <>
            <p className="text-xs text-center text-green-500">
              Il reste {fetchedData.length - showProjects} projets à découvrir.
            </p>
            <button
              onClick={handleShowMoreProjects}
              className="w-[250px] bg-primary text-white font-bold p-2 rounded-lg shadow-pxl hover:bg-primary/80 transition-all duration-500"
            >
              Voir plus
            </button>
          </>
        ) : (
          <>
            <p className="text-xs text-center text-red-500">
              Vous avez découvert tous les projets.
            </p>
            <button
              onClick={handleShowHideProjects}
              className="w-[250px] bg-primary text-white font-bold p-2 rounded-lg shadow-pxl hover:bg-primary/80 transition-all duration-500"
            >
              Voir moins
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
