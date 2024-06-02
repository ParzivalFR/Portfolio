import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import VercelIcon from "../icons/VercelIcon";
import Spacing from "./Spacing";
import ScrollToTop from "./ScrollToTop";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="relative w-full mt-auto bg-foreground/5 py-4">
      <div className="flex justify-center">
        <VercelIcon size={150} />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Link
          href={"https://github.com/parzivalfr"}
          target="_blank"
          title="GitHub"
          className="transition duration-500 ease-in-out hover:scale-110 "
        >
          <FaGithubSquare size={20} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/ga%C3%ABl-richard-680b8a263/"}
          target="_blank"
          className="transition duration-500 ease-in-out hover:scale-110"
          title="LinkedIn"
          passHref
        >
          <FaLinkedin size={20} />
        </Link>
      </div>
      <Spacing size={10} />
      <div className="flex justify-center items-center gap-1">
        <p className="text-center text-xs sm:text-sm text-foreground/70">
          © {currentDate} Created with ❤️ by{" "}
          <Link
            href={"https://discord.com/users/1017721923259613234"}
            target="_blank"
            title="Parzival"
            passHref
          >
            <span className="text-foreground font-semibold transition duration-500 ease-in-out hover:text-primary/60 ">
              Parzival
            </span>
          </Link>
          .
        </p>
        <Divider className="h-[1.5px] w-[10px] bg-foreground rotate-90" />
        <Link href="/pages/legal" passHref>
          <p className="text-xs sm:text-sm text-foreground/70 transition duration-500 ease-in-out hover:text-primary/60">
            Mentions légales
          </p>
        </Link>
      </div>
      <ScrollToTop />
    </footer>
  );
};

export default Footer;
