import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  FaCheck,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    { icon: FaHtml5, name: "html", value: 90 },
    { icon: IoLogoCss3, name: "css", value: 80 },
    { icon: RiJavascriptFill, name: "javascript", value: 65 },
    { icon: RiTailwindCssFill, name: "tailwind", value: 70 },
    { icon: FaReact, name: "react", value: 65 },
    { icon: RiNextjsFill, name: "nextjs", value: 55 },
    { icon: FaNodeJs, name: "nodejs", value: 60 },
    { icon: FaSass, name: "sass", value: 60 },
    { icon: SiMongodb, name: "mongodb", value: 40 },
    { icon: FaGithub, name: "github", value: 75 },
    { icon: FaGitAlt, name: "git", value: 70 },
  ];

  return (
    <TooltipProvider>
      <section className="w-4/5 m-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 p-5 m-auto bg-foreground/5 rounded-lg sm:p-10 shadow-pxl">
          {skills.map((skill, index) => (
            <Tooltip key={index}>
              <TooltipTrigger className="cursor-default">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col items-center gap-2 p-4 md:p-10 w-2/3 hover:bg-primary/10 rounded-lg transition-colors duration-500 ease-in-out">
                    <skill.icon className="size-12" />
                    <Progress value={skill.value} className="w-full" />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-primary/40">
                <p className="flex gap-1 items-center">
                  <FaCheck />
                  {skill.value}
                </p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Skills;
