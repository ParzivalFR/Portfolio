"use client";
import Spacing from "@/app/_components/Spacing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Divider } from "@mui/material";
import { Label } from "@radix-ui/react-dropdown-menu";
import ky from "ky";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    ky.post("http://185.157.247.55:3005/api/auth/login", {
      json: { email, password },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        router.push("/pages/admin");
      })
      .catch((error) => console.log(error));

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Spacing size={80} />
      <main className="w-full sm:w-4/5 m-auto flex justify-center items-center">
        <section className="w-full">
          <form
            onSubmit={handleSubmit}
            className="w-4/5 sm:w-3/5 md:w-[400px] m-auto flex flex-col gap-10 bg-background/60 p-6 rounded-lg shadow-pxl"
          >
            <div className="w-full flex flex-col gap-2 ">
              <h1 className="text-3xl text-center">Connexion</h1>
              <p className="text-xs italic text-center">
                Connectez-vous pour accéder à votre espace personnel.
              </p>
            </div>
            <Divider className="w-4/5 m-auto bg-primary rounded" />
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                className="bg-secondary text-current"
                aria-placeholder="Email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                className="bg-secondary text-current"
                aria-placeholder="Mot de passe"
                placeholder="Mot de passe"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-[100px] m-auto">
              Connexion
            </Button>
          </form>
        </section>
      </main>
      <Spacing size={80} />
    </>
  );
};

export default Login;
