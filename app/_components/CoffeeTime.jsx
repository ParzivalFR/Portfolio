import { FiCoffee } from "react-icons/fi";

const CoffeeTime = ({ children }) => {
  return (
    <div className="relative flex items-center gap-1 md:gap-2 w-4/5 sm:w-3/6 shadow-pxl p-4 m-auto rounded-md bg-background/80 border border-foreground/10">
      <FiCoffee className="h-6 w-6 " />
      <hr className="border border-foreground min-w-[20px] md:w-[30px] rotate-90" />
      <p className="w-full text-[10px] leading-tight text-center md:text-sm">
        {children}
      </p>
    </div>
  );
};

export default CoffeeTime;
