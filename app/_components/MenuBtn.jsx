"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import * as React from "react";
import { useTheme } from "../hooks/ThemeContext";
import { useWindowSize } from "../hooks/WindowSizeContext";
export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom");
  const { toggleTheme, checked } = useTheme();
  const windowNotMobile = useWindowSize();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="hover:bg-background/70">
          Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {!windowNotMobile ? (
          <>
            <DropdownMenuLabel className="flex justify-between items-center">
              🚀 On va où ?
              <Toggle checked={checked} onClick={toggleTheme}>
                {checked ? <SunIcon /> : <MoonIcon />}
              </Toggle>
            </DropdownMenuLabel>
          </>
        ) : (
          <DropdownMenuLabel className="text-center">
            🚀 On va où ?
          </DropdownMenuLabel>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <Link href="/">
            <DropdownMenuRadioItem value="Home">Accueil</DropdownMenuRadioItem>
          </Link>
          <Link href="#projects">
            <DropdownMenuRadioItem value="Projects">
              Projets
            </DropdownMenuRadioItem>
          </Link>
          <Link href="#contact">
            <DropdownMenuRadioItem value="Contact">
              Contact
            </DropdownMenuRadioItem>
          </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
