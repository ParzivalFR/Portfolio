import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { DropdownMenuRadioGroupDemo } from "./MenuBtn";

const Header = () => {
  return (
    <header>
      <nav className="w-4/5 bg-zinc-200/40  h-12 md:h-16 m-auto rounded-xl mt-2 flex items-center p-2 justify-between">
        <Link href="/">
          <Avatar>
            <AvatarImage src="/logo2.jpg" alt="Photo de profil" />
            <AvatarFallback>GR</AvatarFallback>
          </Avatar>
        </Link>
        <DropdownMenuRadioGroupDemo />
      </nav>
    </header>
  );
};

export default Header;
