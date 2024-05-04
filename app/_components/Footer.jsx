import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground/10">
      <div className="flex justify-center p-5">
        <Link href="/">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/logoP.jpg" alt="Logo professionnel" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
        </Link>
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
