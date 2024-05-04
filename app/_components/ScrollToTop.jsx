"use client";

const ScrollToTop = () => {
  // const [clicked, setClicked] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top fixed z-50 bottom-8 right-8 bg-foreground text-background rounded-full border-none w-10 h-10 flex justify-center items-center cursor-pointer transition duration-300 `}
      aria-label="Scroll to top"
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 11l7-7 7 7M5 19l7-7 7 7"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
