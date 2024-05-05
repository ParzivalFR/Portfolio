import Css from "../icons/Css";
import Express from "../icons/Express";
import GitHubCopilot from "../icons/GitHubCopilot";
import GithubIcon from "../icons/GithubIcon";
import Html from "../icons/Html";
import Javascript from "../icons/Javascript";
import MongoDB from "../icons/MongoDB";
import Nextjs from "../icons/Nextjs";
import Nodejs from "../icons/Nodejs";
import Npm from "../icons/Npm";
import React from "../icons/React";
import Sass from "../icons/Sass";
import Tailwind from "../icons/Tailwind";
import VercelIcon from "../icons/VercelIcon";

const InfiniFloat = () => {
  return (
    <>
      <section className="bg-foreground/10 overflow-hidden rotate-3 w-dvw">
        <div className="logos group items-center relative overflow-hidden whitespace-nowrap py-0 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)] flex gap-20">
          <div className="animate-slide-left items-center py-2 inline-flex w-max gap-20">
            <Html size={64} />
            <Css size={64} />
            <Javascript size={64} />
            <React width="64" height="64" />
            <Sass width="64" height="64" />
            <GithubIcon size={64} />
            <GitHubCopilot width={120} height={70} />
            <MongoDB size={64} />
            <Nodejs size={100} />
            <Npm size={100} />
            <Express width={120} />
            <VercelIcon size={120} />
            <Nextjs width="150" />
            <Tailwind width="250" />
          </div>

          <div className="animate-slide-left items-center py-2 inline-flex w-max gap-20">
            <Html size={64} />
            <Css size={64} />
            <Javascript size={64} />
            <React width="64" height="64" />
            <Sass width="64" height="64" />
            <GithubIcon size={64} />
            <GitHubCopilot width={120} height={70} />
            <MongoDB size={64} />
            <Nodejs size={100} />
            <Npm size={100} />
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
