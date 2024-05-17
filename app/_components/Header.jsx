"use client";

import { Toggle } from "@/components/ui/toggle";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "../hooks/ThemeContext";
import { useWindowSize } from "../hooks/WindowSizeContext";
import { MenuBtn } from "./MenuBtn";
import UserAvatar from "./UserAvatar";

const Header = () => {
  const { toggleTheme, checked } = useTheme();
  const WindowSizeContext = useWindowSize();
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userId"));
  }, [token]);

  const handleToken = () => {
    setToken(localStorage.removeItem("token"));
    setUserId(localStorage.removeItem("userId"));
  };

  return (
    <header className="w-full sm:w-4/5 m-auto p-2">
      <div className="bg-card-foreground/10 h-14 md:h-16 m-auto rounded-xl mt-2 flex items-center p-2 justify-between">
        <UserAvatar />
        <div className="flex items-center gap-2">
          {!token ? (
            <Link
              href="/pages/login"
              className="text-xs sm:text-sm md:text-base hover:text-primary/90 transition-colors duration-700 ease-in-out"
            >
              Connexion
            </Link>
          ) : (
            <>
              <Link
                href={`/pages/admin`}
                className="text-xs sm:text-sm md:text-base hover:text-primary/90 transition-colors duration-700 ease-in-out"
              >
                Panel
              </Link>
              <Link
                href="/pages/login"
                onClick={handleToken}
                className="text-xs sm:text-sm md:text-base hover:text-primary/90 transition-colors duration-700 ease-in-out"
              >
                Déconnexion
              </Link>
            </>
          )}
          <MenuBtn />
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
