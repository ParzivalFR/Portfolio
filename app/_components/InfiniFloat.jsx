import Css from "../icons/Css";
import GithubIcon from "../icons/GithubIcon";
import Html from "../icons/Html";
import Javascript from "../icons/Javascript";
import Nextjs from "../icons/Nextjs";
import Nodejs from "../icons/Nodejs";
import React from "../icons/React";
import VercelIcon from "../icons/VercelIcon";

const InfiniFloat = () => {
  return (
    <>
      <section class="bg-foreground/10 overflow-hidden rotate-3 w-dvw">
        <div class="logos group items-center relative overflow-hidden whitespace-nowrap py-0 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          <div class="animate-slide-left items-center py-2 group-hover:animation-pause inline-flex w-max">
            <React className="mx-10" width="64" height="64" />
            <Css className="mx-10" width="64" height="64" />
            <Nextjs className="mx-10" width="100" height="100" />
            <GithubIcon className="mx-10" size={64} />
            <Javascript className="mx-10" size={64} />
            <Nodejs className="mx-10" size={100} />
            <Html className="mx-10" width="64" height="64" />
            <VercelIcon className="mx-10" size={120} />
          </div>

          <div class="animate-slide-left items-center py-2 group-hover:animation-pause inline-flex w-max">
            <React className="mx-10" width="64" height="64" />
            <Css className="mx-10" width="64" height="64" />
            <Nextjs className="mx-10" width="100" height="100" />
            <GithubIcon className="mx-10" size={64} />
            <Javascript className="mx-10" size={64} />
            <Nodejs className="mx-10" size={100} />
            <Html className="mx-10" width="64" height="64" />
            <VercelIcon className="mx-10" size={120} />
          </div>
        </div>
      </section>
    </>
  );
};

export default InfiniFloat;
