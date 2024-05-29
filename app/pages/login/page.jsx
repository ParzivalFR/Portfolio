"use client";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import { useToken } from "@/app/hooks/TokenContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Divider } from "@mui/material";
import ky from "ky";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Login = () => {
  const { token, login, logout } = useToken(); // Utilisez le hook useToken
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (token) {
      setDisabled(false);
    }
  }, [token]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await ky
        .post("https://parzival.fun/api/auth/signup", {
          json: { email, password },
        })
        .json();
      login(response.token, response.userId); // Utilisez la fonction login du TokenContext
      Swal.fire({
        icon: "success",
        title: "Inscription réussie !",
        text: "Vous êtes inscrit avec succès, vous pouvez maintenant vous connecter.",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erreur d'inscription !",
        text: `Vous n'avez pas pu vous inscrire: ${error}.`,
      });
    }
    setEmail("");
    setPassword("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await ky
        .post("https://parzival.fun/api/auth/login", {
          json: { email, password },
        })
        .json();
      login(response.token, response.userId); // Utilisez la fonction login du TokenContext
      Swal.fire({
        icon: "success",
        title: "Connexion réussie",
        text: "Vous êtes connecté",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erreur de connexion !",
        text: `Email ou mot de passe incorrect: ${error}.`,
      });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <main className="flex flex-col justify-center items-center w-full h-svh">
      <Header />
      <section className="flex flex-col justify-center items-center h-full w-full">
        <Tabs defaultValue="Connexion" className="w-4/5 md:w-[400px]">
          <TabsList className="grid w-full grid-cols-2 border border-foreground/10">
            <TabsTrigger value="Connexion">Connexion</TabsTrigger>
            <TabsTrigger value="Inscription">Inscription</TabsTrigger>
          </TabsList>
          <TabsContent value="Connexion">
            <form
              onSubmit={handleLogin}
              className="w-full m-auto flex flex-col items-center gap-10 bg-background/60 p-6 rounded-lg shadow-pxl border border-foreground/20"
            >
              <div className="w-full flex flex-col gap-2 ">
                <h1 className="text-3xl text-center">Connexion</h1>
                <p className="text-xs italic text-center">
                  Connectez-vous pour accéder à votre espace personnel.
                </p>
              </div>
              <Divider className="w-4/5 bg-primary rounded m-auto" />
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="email">
                  <span className="text-red-600">*</span> Email
                </Label>
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
                <Label htmlFor="password">
                  <span className="text-red-600">*</span> Password
                </Label>
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
          </TabsContent>
          <TabsContent value="Inscription">
            <form
              onSubmit={handleRegister}
              className="w-full m-auto flex flex-col items-center gap-10 bg-background/60 p-6 rounded-lg shadow-pxl border border-foreground/20"
            >
              <div className="w-full flex flex-col gap-2 ">
                <h1 className="text-3xl text-center">Inscription</h1>
                <p className="text-xs italic text-center">
                  Rentrez vos informations pour vous inscrire.
                </p>
              </div>
              <Divider className="w-4/5 bg-primary rounded m-auto" />
              <div className="flex flex-col gap-2 w-full">
                <Label htmlFor="email">
                  <span className="text-red-600">*</span> Email
                </Label>
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
                <Label htmlFor="password">
                  <span className="text-red-600">*</span> Password
                </Label>
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
              <Button
                type="submit"
                className="w-[100px] m-auto"
                disabled={disabled}
              >
                Inscription
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </section>
      <Footer />
    </main>
  );
};

export default Login;
