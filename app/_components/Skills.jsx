import { Progress } from "@/components/ui/progress";
import { FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section className="w-4/5 m-auto">
      {/* <div className="flex flex-col justify-center items-center">
        <h2 className=" text-3xl sm:text-5xl">Skills</h2>
        <p className="italic text-[10px] sm:text-sm md:text-base text-justify ">
          Technologies que j'ai apprises et utilisées au cours de mes projets :
        </p>
      </div> */}
      {/* Liste des langages appris */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 p-5 m-auto bg-foreground/5 rounded-lg sm:p-10 shadow-pxl">
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-2 p-4 md:p-10 w-2/3 hover:bg-primary/10 rounded-lg transition-colors duration-500 ease-in-out">
            <FaHtml5 className="size-12" />
            <Progress value={90} className="w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center  gap-2 p-4 md:p-10 w-2/3 hover:bg-primary/10 rounded-lg transition-colors duration-500 ease-in-out">
            <IoLogoCss3 className="size-12" />
            <Progress value={80} className="w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center  gap-2 p-4 md:p-10 w-2/3 hover:bg-primary/10 rounded-lg transition-colors duration-500 ease-in-out">
            <RiJavascriptFill className="size-12" />
            <Progress value={65} className="w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-2 p-4 md:p-10 w-2/3 hover:bg-primary/10 rounded-lg transition-colors duration-500 ease-in-out">
            <RiTailwindCssFill className="size-12" />
            <Progress value={70} className="w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center  gap-2 p-4 md:p-10 w-2/3 hover:bg-primary/10 rounded-lg transition-colors duration-500 ease-in-out">
            <FaReact className="size-12" />
            <Progress value={65} className="w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center  gap-2 p-4 md:p-10 w-2/3 hover:bg-primary/10 rounded-lg transition-colors duration-500 ease-in-out">
            <RiNextjsFill className="size-12" />
            <Progress value={55} className="w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center  gap-2 p-4 md:p-10 w-2/3 hover:bg-primary/10 rounded-lg transition-colors duration-500 ease-in-out">
            <FaNodeJs className="size-12" />
            <Progress value={60} className="w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-2 p-4 md:p-10 w-2/3 hover:bg-primary/10 rounded-lg transition-colors duration-500 ease-in-out">
            <FaSass className="size-12" />
            <Progress value={60} className="w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center  gap-2 p-4 md:p-10 w-2/3 hover:bg-primary/10 rounded-lg transition-colors duration-500 ease-in-out">
            <SiMongodb className="size-12" />
            <Progress value={40} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
