"use client";

import { Toggle } from "@/components/ui/toggle";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useTheme } from "../hooks/ThemeContext";
import Spacing from "./Spacing";

export const CurtainMenuPage = () => {
  const { toggleTheme, checked } = useTheme();
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUserId(localStorage.getItem("userId"));
  }, []);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  const handleToken = () => {
    setToken(localStorage.removeItem("token"));
    setUserId(localStorage.removeItem("userId"));
  };

  return (
    <>
      <button
        onClick={toggle}
        className="text-current rounded-md px-4 py-2 bg-background/90 hover:bg-background/50 transition-colors duration-500 ease-in-out"
      >
        Menu
      </button>
      <Menu open={open}>
        <button
          aria-label="Close"
          className="absolute top-3 right-3 text-5xl text-white cursor-pointer transition-transform duration-700 ease-in-out hover:rotate-180"
          onClick={toggle}
        >
          <MdOutlineClose className="size-14 lg:size-18 text-foreground/60" />
        </button>
        <MenuContainer>
          {!token ? (
            <>
              <MenuItem href="/pages/login">Connexion</MenuItem>
              <Spacing size={20} />
              <hr className="w-2/5 sm:w-2/6 md:w-1/6 m-auto border-primary/80" />
              <Spacing size={20} />
            </>
          ) : (
            <>
              <MenuItem href="/pages/admin" onClick={toggle}>
                Panel
              </MenuItem>
              <MenuItem href="/" onClick={handleToken}>
                Déconnexion
              </MenuItem>
              <Spacing size={20} />
              <hr className="w-2/5 sm:w-2/6 md:w-1/6 m-auto border-primary/80" />
              <Spacing size={20} />
            </>
          )}
          <MenuItem href="/" onClick={toggle}>
            Accueil
          </MenuItem>
          <MenuItem href="/#projects" onClick={toggle}>
            Projets
          </MenuItem>
          <MenuItem href="/#skills" onClick={toggle}>
            Skills
          </MenuItem>
          <MenuItem href="/#contact" onClick={toggle}>
            Contact
          </MenuItem>
          <MenuItem>
            <Toggle checked={checked} onClick={toggleTheme}>
              {checked ? <SunIcon /> : <MoonIcon />}
            </Toggle>
          </MenuItem>
        </MenuContainer>
      </Menu>
    </>
  );
};

/* Logic*/
const style = {
  container: `relative top-1/4 w-full text-center mt-8`,
  item: `text-3xl text-current cursor-pointer hover:text-foreground/40 transition-colors duration-700 ease-in-out`,
  menu: {
    open: `h-full w-full `,
    close: `w-0 h-full`,
    default: `overflow-x-hidden overflow-hidden transition-all duration-700 fixed z-10 top-0 right-0 bg-background/95`,
  },
};

function Menu({ children, open }) {
  return (
    <div
      className={`${style.menu.default} 
      ${open ? style.menu.open : style.menu.close}`}
    >
      {children}
    </div>
  );
}

function MenuContainer({ children }) {
  return <div className={style.container}>{children}</div>;
}

function MenuItem({ children, href, onClick }) {
  return (
    <div className="p-2">
      <a href={href} className={style.item} onClick={onClick}>
        {children}
      </a>
    </div>
  );
}
