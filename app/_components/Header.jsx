import { DropdownMenuRadioGroupDemo } from "./MenuBtn";
import UserAvatar from "./UserAvatar";

const Header = () => {
  return (
    <header>
      <nav className="w-4/5 bg-card-foreground/10 h-14  md:h-16 m-auto rounded-xl mt-2 flex items-center p-2 justify-between">
        <UserAvatar />
        <DropdownMenuRadioGroupDemo />
      </nav>
    </header>
  );
};

export default Header;
