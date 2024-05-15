"use client";
import Spacing from "@/app/_components/Spacing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ky from "ky";
import { useEffect, useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import { VscListSelection } from "react-icons/vsc";

import DotPulse from "@/app/_components/DotPulse";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function Project({ params }) {
  const [fetchData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [likes, setLikes] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ky.get(
          "http://185.157.247.55:3005/api/projects"
        );
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
          `http://185.157.247.55:3005/api/likes/${params.id}`
        );
        const data = await response.json();
        const filteredLikes = data.filter((like) => like.postId === params.id);
        setLikes(filteredLikes);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    fetchLikes();
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main className=" min-h-svh">
      <Spacing size={40} />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
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
              <Spacing size={50} />
              <div className="relative w-full lg:w-4/5 flex justify-center items-center shadow-pxl">
                <DotPulse size={4} color={"primary"} />
                <Carousel className={"w-full rounded-2xl overflow-hidden"}>
                  <CarouselContent>
                    {project.images.map((image) => (
                      <CarouselItem>
                        <img
                          key={project._id}
                          src={image}
                          alt={project.title}
                          className="w-full object-cover"
                          onClick={handleOpen}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-5 md:size-12 border-none bg-background/30 hover:bg-background/70 duration-500" />
                  <CarouselNext className="right-5 md:size-12 border-none bg-background/30 hover:bg-background/70 duration-500" />
                </Carousel>
              </div>
              <Spacing size={70} />
              <div className="w-full flex flex-col gap-10 md:flex-row">
                <Accordion type="single" className="w-full" collapsible>
                  <AccordionItem
                    value="item-1"
                    className="w-full border-none bg-background/30 p-1 md:p-2 rounded-lg shadow-pxl"
                  >
                    <AccordionTrigger>
                      <span className="flex items-center gap-2">
                        <VscListSelection size={20} className="text-primary" />
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
                        <VscListSelection size={20} className="text-primary" />
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
  );
}
