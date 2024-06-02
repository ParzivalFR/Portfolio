"use client";

import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top absolute z-10 -top-3 right-4 bg-foreground text-background rounded-sm border-none w-8 h-8 md:w-10 md:h-10 flex justify-center items-center cursor-pointer hover:bg-foreground hover:opacity-60 transition duration-300 `}
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <FaArrowUp className="w-4 h-4 md:w-6 md:h-6" />
    </button>
  );
};

export default ScrollToTop;
