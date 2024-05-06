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
import { Switch } from "@/components/ui/switch";
import Link from "next/link";
import * as React from "react";
import { useTheme } from "../hooks/ThemeContext";
import FormContact from "./FormContact";

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom");
  const { toggleTheme, checked } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="text-center">
          🚀 On va où ?
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <Link href="/">
            <DropdownMenuRadioItem value="Home">Accueil</DropdownMenuRadioItem>
          </Link>
          <Link href="#about">
            <DropdownMenuRadioItem value="About">
              À propos
            </DropdownMenuRadioItem>
          </Link>
          <Link href="#projects">
            <DropdownMenuRadioItem value="Projects">
              Projets
            </DropdownMenuRadioItem>
          </Link>
          <DropdownMenuSeparator />
          <div className="flex justify-center">
            <FormContact />
          </div>
          <DropdownMenuSeparator />
          <div className="flex justify-evenly">
            <div className="flex items-center gap-2">
              🎨 <Switch checked={checked} onClick={toggleTheme} />
            </div>
            <div className="flex items-center gap-2">
              🎙️ <Switch />
            </div>
          </div>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
