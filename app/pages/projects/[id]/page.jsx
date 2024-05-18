"use client";
import DotPulse from "@/app/_components/DotPulse";
import Header from "@/app/_components/Header";
import Spacing from "@/app/_components/Spacing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CircularProgress } from "@mui/material";
import ky from "ky";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import { RiErrorWarningFill } from "react-icons/ri";
import { VscListSelection } from "react-icons/vsc";
import Swal from "sweetalert2";

export default function Project({ params }) {
  const router = useRouter();

  const [fetchData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [likes, setLikes] = useState({});

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    const localUserId = localStorage.getItem("userId");

    setToken(localToken);
    setUserId(localUserId);

    const fetchData = async () => {
      try {
        const response = await ky.get("http://localhost:3005/api/projects");
        const data = await response.json();
        const filteredData = data.filter(
          (project) => project._id === params.id
        );
        console.log(filteredData);
        setFetchedData(filteredData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    const fetchLikes = async () => {
      try {
        const response = await ky.get(
          `https://parzival.fun/api/likes/${params.id}`
        );
        const data = await response.json();
        setLikes((prevLikes) => ({
          ...prevLikes,
          [params.id]: data,
        }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchLikes();
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Es-tu sûr ?",
      text: "Une fois supprimé, tu ne pourras pas revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          ky.delete(`http://localhost:3005/api/projects/${id}`, {
            json: { userId },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setFetchedData((prevData) =>
            prevData.filter((project) => project._id !== id)
          );
        } catch (error) {
          Swal.fire("Erreur", "Une erreur est survenue.", "error");
          console.error(error);
        }
        Swal.fire(
          "Projet supprimé !",
          "Votre projet a bien été supprimé.",
          "success"
        );
        router.push("/");
      }
    });
  };

  const handleModify = async (id) => {
    Swal.fire({
      title: "Es-tu sûr ?",
      text: "Tu veux vraiment modifier ce projet ?",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, c'est parti !",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push(`/pages/projects/${id}/edit`);
      }
    });
  };

  return (
    <>
      <Header />
      <main className=" min-h-svh">
        <Spacing size={40} />
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
                Erreur
              </AlertTitle>
              <AlertDescription className="text-[10px] leading-tight md:text-sm">
                {error.message}
              </AlertDescription>
            </Alert>
          </div>
        ) : (
          <section className="w-4/5 m-auto">
            {fetchData.map((project) => (
              <div
                key={project._id}
                className="flex flex-col justify-center items-center w-full"
              >
                <Link
                  href={project.url}
                  target="_blank"
                  className="relative flex gap-2 hover:text-primary transition-colors duration-500 ease-in-out"
                >
                  <h1 className="text-4xl md:text-6xl">{project.title}</h1>

                  <FiExternalLink className="absolute top-1 -right-4 size-3 md:size-5 md:-right-6" />
                </Link>
                <Spacing size={20} />
                <p>
                  Ce projet a été liké{" "}
                  <span className="bg-foreground/80 rounded px-1 sm:px-2 text-background text-sm hover:bg-foreground/50 transition-colors duration-500 ease-in-out">
                    {likes[project._id] ? likes[project._id].length : 0}
                  </span>{" "}
                  fois.
                </p>
                <Spacing size={50} />
                <div className="relative w-full lg:w-4/5 h-36 sm:h-48 md:h-56 lg:h-96 rounded-2xl shadow-pxl">
                  <DotPulse size={4} color={"primary"} />
                  <Carousel
                    className={
                      "size-full rounded-2xl overflow-hidden object-contain "
                    }
                  >
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <img
                            src={image}
                            alt={project.title}
                            className="size-full rounded-2xl object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-5 md:size-12 border-none bg-background/30 hover:bg-background/70 duration-500" />
                    <CarouselNext className="right-5 md:size-12 border-none bg-background/30 hover:bg-background/70 duration-500" />
                  </Carousel>
                </div>

                <Spacing size={50} />

                {token && (
                  <div className="w-full flex items-center justify-center gap-12 md:gap-24">
                    <button
                      onClick={() => handleDelete(project._id)}
                      className=" w-32 bg-primary/60 hover:bg-primary/30 transition-colors duration-500 ease-in-out text-white px-4 py-2 rounded-lg shadow-pxl"
                    >
                      Supprimer
                    </button>
                    <button
                      onClick={() => handleModify(project._id)}
                      className=" w-32 bg-primary/60 hover:bg-primary/30 transition-colors duration-500 ease-in-out text-white px-4 py-2 rounded-lg shadow-pxl"
                    >
                      Modifer
                    </button>
                  </div>
                )}
                <Spacing size={50} />
                <div className="w-full flex flex-col gap-10 md:flex-row">
                  <Accordion type="single" className="w-full" collapsible>
                    <AccordionItem
                      value="item-1"
                      className="w-full border-none bg-background/30 p-1 md:p-2 rounded-lg shadow-pxl"
                    >
                      <AccordionTrigger>
                        <span className="flex items-center gap-2">
                          <VscListSelection
                            size={20}
                            className="text-primary"
                          />
                          Description
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p>{project.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <Accordion type="single" className="w-full" collapsible>
                    <AccordionItem
                      value="item-1"
                      className="w-full border-none bg-background/30 p-1 md:p-2 rounded-lg shadow-pxl"
                    >
                      <AccordionTrigger>
                        <span className="flex items-center gap-2">
                          <VscListSelection
                            size={20}
                            className="text-primary"
                          />
                          Skills
                        </span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          {project.skills.map((skill) => (
                            <li key={skill} className="flex items-center gap-1">
                              <CiBookmarkCheck className="text-primary" />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <Spacing size={50} />
              </div>
            ))}
          </section>
        )}
      </main>
    </>
  );
}
