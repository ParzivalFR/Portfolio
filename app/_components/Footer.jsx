import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import VercelIcon from "../icons/VercelIcon";
import Spacing from "./Spacing";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 mt-auto py-4">
      <div className="flex justify-center">
        <VercelIcon size={150} />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Link
          href={"https://github.com/parzivalfr"}
          target="_blank"
          className="transition duration-500 ease-in-out hover:scale-105 hover:text-primary/60"
        >
          <FaGithubSquare size={30} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/ga%C3%ABl-richard-680b8a263/"}
          target="_blank"
          className="transition duration-500 ease-in-out hover:scale-105 hover:text-primary/60"
        >
          <FaLinkedin size={30} />
        </Link>
      </div>
      <Spacing size={10} />
      <div>
        <p className="text-center text-sm text-foreground/70">
          © {currentDate} Created with ❤️ by{" "}
          <Link
            href={"https://discord.com/users/1017721923259613234"}
            target="_blank"
          >
            <span className="text-accent-foreground transition duration-500 ease-in-out hover:text-primary/60 font-semibold">
              Parzival
            </span>
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
