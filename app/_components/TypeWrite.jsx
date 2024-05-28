"use client";

import { TypeAnimation } from "react-type-animation";

const TypeWrite = () => {
  return (
    <div className="w-full lg:py-4 flex justify-center items-center">
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          500,
          "I'm a Developer",
          1500,
          "I'm a Gamer",
          1500,
          "I'm a Baker",
          1500,
          "I'm a Dad",
          500,
        ]}
        speed={1}
        className="text-4xl lg:text-6xl font-bold text-center bg-gradient-to-l from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeWrite;
