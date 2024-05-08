"use client";

import { Toggle } from "@/components/ui/toggle";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "../hooks/ThemeContext";
import { useWindowSize } from "../hooks/WindowSizeContext";
import { DropdownMenuRadioGroupDemo } from "./MenuBtn";
import UserAvatar from "./UserAvatar";

const Header = () => {
  const { toggleTheme, checked } = useTheme();
  const WindowSizeContext = useWindowSize();

  return (
    <header className="w-full m-auto">
      <div className="bg-card-foreground/10 h-14  md:h-16 m-auto rounded-xl mt-2 flex items-center p-2 justify-between">
        <UserAvatar />
        <div className="flex items-center gap-2">
          <DropdownMenuRadioGroupDemo />
          {WindowSizeContext > 768 ? (
            <Toggle checked={checked} onClick={toggleTheme}>
              {checked ? <SunIcon /> : <MoonIcon />}
            </Toggle>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
