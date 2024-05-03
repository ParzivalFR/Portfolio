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

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom");
  const { toggleTheme, checked } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>🚀 Where do you want to go ?</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <Link href="/">
            <DropdownMenuRadioItem value="Home">Home</DropdownMenuRadioItem>
          </Link>
          <Link href="/about">
            <DropdownMenuRadioItem value="About">About</DropdownMenuRadioItem>
          </Link>
          <Link href="/projects">
            <DropdownMenuRadioItem value="Projects">
              Projects
            </DropdownMenuRadioItem>
          </Link>
          <Link href="/contact">
            <DropdownMenuRadioItem value="Contact">
              Contact
            </DropdownMenuRadioItem>
          </Link>
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
