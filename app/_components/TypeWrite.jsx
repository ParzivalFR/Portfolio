"use client";

import { TypeAnimation } from "react-type-animation";

const TypeWrite = () => {
  return (
    <div className="w-full py-2 flex justify-center items-center">
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          500,
          "Web Developer",
          2000,
          "Gamer Enthusiast",
          2000,
          "Tech Love",
          2000,
          "Tech Enthusiast",
          2000,
        ]}
        speed={50}
        className="text-4xl lg:text-6xl font-bold text-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"
        repeat={Infinity}
        wrapper="h1"
      />
    </div>
  );
};

export default TypeWrite;
