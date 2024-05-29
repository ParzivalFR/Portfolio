"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BoatDown from "../public/404-boat.png";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <main className="flex flex-col justify-center items-center w-full h-svh">
        <Header />
        <div className="relative flex flex-col mt-10 lg:mt-20 items-center w-full h-full">
          <h1 className="text-9xl font-bold text-primary/90">404</h1>
          <p className="text-xs italic text-foreground/60">
            Page introuvable.. Elle a coulé..
          </p>
          <Button
            className="relative z-[1] mt-4"
            onClick={() => router.push("/")}
          >
            Retour à l'accueil
          </Button>
          <Image
            src={BoatDown}
            alt="Boat Down 404 page error"
            width={1600}
            height={1600}
            className="absolute right-1/2 translate-x-1/2 top-36 w-80 md:top-10 sm:w-full max-w-[500px]"
          />
        </div>
        <Footer />
      </main>
    </>
  );
}
