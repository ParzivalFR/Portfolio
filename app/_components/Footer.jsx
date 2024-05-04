import Link from "next/link";
import VercelIcon from "../icons/VercelIcon";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground/5 mt-auto">
      <div className="flex justify-center p-5">
        <VercelIcon size={150} />
      </div>
      <div>
        <p className="text-center text-sm text-foreground/70 pb-5">
          © {currentDate} Created with ❤️ by{" "}
          <Link
            href={"https://discord.com/users/1017721923259613234"}
            target="_blank"
          >
            <span className="text-accent-foreground">Parzival</span>
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
