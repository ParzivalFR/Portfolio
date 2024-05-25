"use client";

import { Toggle } from "@/components/ui/toggle";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "../hooks/ThemeContext";
import { useWindowSize } from "../hooks/WindowSizeContext";
import { CurtainMenuPage } from "./CurtainMenu";
import UserAvatar from "./UserAvatar";
const Header = () => {
  const { theme, toggleTheme, checked } = useTheme();
  const WindowSizeContext = useWindowSize();

  return (
    <header className="w-full sm:w-4/5 m-auto p-2">
      <div className="bg-card-foreground/10 h-14 md:h-16 m-auto rounded-xl mt-2 flex items-center p-2 justify-between">
        <UserAvatar />
        <div className="flex items-center gap-2">
          <CurtainMenuPage />
          {WindowSizeContext > 768 ? (
            <Toggle checked={checked} onClick={toggleTheme}>
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </Toggle>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
