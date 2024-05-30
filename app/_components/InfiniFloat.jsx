import { FaGithub, FaNpm, FaReact, FaSass } from "react-icons/fa";
import { MdCss, MdHtml, MdJavascript } from "react-icons/md";
import { SiGithubcopilot } from "react-icons/si";
import Express from "../icons/Express";
import MongoDB from "../icons/MongoDB";
import Nextjs from "../icons/Nextjs";
import Nodejs from "../icons/Nodejs";
import Tailwind from "../icons/Tailwind";
import VercelIcon from "../icons/VercelIcon";

const InfiniFloat = () => {
  return (
    <>
      <section className="bg-foreground/10 overflow-hidden rotate-3 w-svw">
        <div className="logos group items-center relative overflow-hidden whitespace-nowrap py-0 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)] flex gap-20">
          <div className="animate-slide-left items-center py-2 inline-flex w-max gap-10 md:gap-20">
            <MdHtml size={100} />
            <MdCss size={100} />
            <MdJavascript size={100} />
            <FaReact size={70} />
            <FaSass size={70} />
            <FaGithub size={70} />
            <SiGithubcopilot size={70} />
            <MongoDB size={64} />
            <Nodejs size={100} />
            <FaNpm size={100} />
            <Express width={120} />
            <VercelIcon size={120} />
            <Nextjs width="150" />
            <Tailwind width="250" />
          </div>
          <div className="animate-slide-left items-center py-2 inline-flex w-max gap-10 md:gap-20">
            <MdHtml size={100} />
            <MdCss size={100} />
            <MdJavascript size={100} />
            <FaReact size={70} />
            <FaSass size={70} />
            <FaGithub size={70} />
            <SiGithubcopilot size={70} />
            <MongoDB size={64} />
            <Nodejs size={100} />
            <FaNpm size={100} />
            <Express width={120} />
            <VercelIcon size={120} />
            <Nextjs width="150" />
            <Tailwind width="250" />
          </div>
        </div>
      </section>
    </>
  );
};

export default InfiniFloat;
