"use client";

import Header from "@/app/_components/Header";
import ImageModal from "@/app/_components/ImageModal";
import Spacing from "@/app/_components/Spacing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircularProgress } from "@mui/material";
import DOMPurify from "dompurify";
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

  const [selectedImage, setSelectedImage] = useState(null);
  const [numberShowImage, setNumberShowImage] = useState(2);
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
        const response = await ky.get("https://parzival.fun/api/projects");
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

  const handleShowImages = () => {
    setNumberShowImage((prevNumber) => prevNumber + 2);
  };

  const handleHideImages = () => {
    setNumberShowImage(2);
  };

  const handleDelete = async (id) => {
    const confirmation = await Swal.fire({
      title: "Es-tu sûr ?",
      text: "Une fois supprimé, tu ne pourras pas revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Annuler",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
    });

    if (confirmation.isConfirmed) {
      try {
        await ky.delete(`https://parzival.fun/api/projects/${id}`, {
          json: { userId },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFetchedData((prevData) =>
          prevData.filter((project) => project._id !== id)
        );
        await Swal.fire(
          "Projet supprimé !",
          "Votre projet a bien été supprimé.",
          "success"
        );
        router.push("/");
      } catch (error) {
        console.error(error);
        Swal.fire("Erreur", "Une erreur est survenue.", "error");
      }
    }
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
    })
      .then((result) => {
        if (result.isConfirmed) {
          router.push(`/pages/projects/${id}/edit`);
        }
      })
      .catch((error) => {
        Swal.fire("Erreur", "Une erreur est survenue.", "error");
        console.error(error);
      });
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
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
                <div className="w-full flex justify-center items-center gap-5 flex-wrap">
                  {project.images
                    .slice(0, numberShowImage)
                    .map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={project.title}
                        onClick={() => handleImageClick(image)}
                        className="relative w-full md:w-4/5 lg:w-[400px] xl:w-[500px] rounded-lg shadow-pxl transition-transform hover:scale-105 duration-700 ease-in-out"
                      />
                    ))}
                </div>
                <Spacing size={30} />
                {project.images.length > 1 &&
                project.images.length > numberShowImage ? (
                  <>
                    <span className="text-xs text-green-500">
                      Il reste {project.images.length - numberShowImage} images.
                    </span>
                    <button
                      className=" w-40 m-auto rounded-lg shadow-pxl border border-foreground/10 p-2 bg-primary/80 text-white transition-all duration-500 ease-in-out hover:bg-primary/50 hover:scale-95"
                      onClick={handleShowImages}
                    >
                      Afficher plus
                    </button>
                  </>
                ) : (
                  project.images.length > 1 && (
                    <>
                      <span className="text-xs text-red-500">
                        Toutes les images sont affichées.
                      </span>
                      <button
                        className=" w-40 m-auto rounded-lg shadow-pxl p-2 bg-primary/80 text-white transition-all duration-500 ease-in-out hover:bg-primary/50 hover:scale-95"
                        onClick={handleHideImages}
                      >
                        Afficher moins
                      </button>
                    </>
                  )
                )}
                <Spacing size={20} />

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
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(project.description),
                          }}
                        />
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
        {selectedImage && (
          <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />
        )}
      </main>
    </>
  );
}
