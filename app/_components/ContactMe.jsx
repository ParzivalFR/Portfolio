"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@mui/material";
import ky from "ky";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import DotPulse from "./DotPulse";

const ContactMe = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const form = useRef();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Adresse email invalide !",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    const result = await Swal.fire({
      title: "Êtes-vous certain ?",
      text: "Une fois envoyé, vous ne pourrez plus modifier votre message.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, envoyer !",
      cancelButtonText: "Annuler",
    });

    if (result.isConfirmed) {
      try {
        await ky.post("https://parzival.fun/api/contact", {
          json: { firstName, name, email, message },
        });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message envoyé avec succès !",
          showConfirmButton: false,
          timer: 2000,
        });

        setFirstName("");
        setName("");
        setEmail("");
        setMessage("");
        setIsChecked(false); // Assure-toi que l'état est réinitialisé
      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Échec de l'envoi du message !",
          showConfirmButton: false,
          timer: 2000,
        });
        console.error("Échec de l'envoi du message :", error.text);
      }
    }
  };

  useEffect(() => {
    const checkValues = () => {
      if (firstName && name && email && message && isChecked) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    checkValues();
  }, [firstName, name, email, message, isChecked]);

  return (
    <section id="contact" className="m-2">
      <Card className="relative w-full p-5 sm:p-10 sm:w-4/5 lg:w-3/5 m-auto bg-primary/5 rounded-lg shadow-pxl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Contact
        </h3>
        <DotPulse size={3} color="primary" />
        <p className="text-center text-xs m-4 text-foreground/40">
          Les informations envoyées via ce formulaire sont utilisées pour vous
          recontacter. Elles ne sont pas stockées dans une base de données et ne
          sont pas utilisées à des fins commerciales ou publicitaires.
        </p>
        <form ref={form} className="grid gap-2 md:gap-4 py-4">
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center gap-1 md:gap-4">
              <Label
                htmlFor="first-name"
                className="w-full text-center sm:text-left"
              >
                <span className="text-red-600">*</span> Prénom
              </Label>
              <Input
                id="first-name"
                name="first-name"
                placeholder="John"
                className="bg-secondary/20 col-span-3"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-center gap-1 md:gap-4">
              <Label htmlFor="name" className="w-full text-center sm:text-left">
                <span className="text-red-600">*</span> Nom
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Doe"
                className="bg-secondary/20 col-span-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 md:gap-4">
            <Label
              htmlFor="username"
              className="w-full text-center sm:text-left"
            >
              <span className="text-red-600">*</span> Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="john.doe@gmail.com"
              className="bg-secondary/20 col-span-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Textarea
            label={"Message"}
            name={"message"}
            id={"message-2"}
            cols={50}
            rows={6}
            placeholder={"Votre message..."}
            value={message}
            maxLength={300}
            className={"w-full bg-secondary/20"}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="w-full flex gap-2 justify-start flex-row-reverse items-center">
            <Checkbox
              style={{ color: "#8A2BE2" }}
              type="checkbox"
              id="data-consent"
              name="data-consent"
              checked={isChecked} // Utilisation de checked au lieu de defaultChecked
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />
            <label
              htmlFor="data-consent"
              className="text-xs italic min-w-[300px]"
            >
              J'accepte de soumettre mes informations personnelles via ce
              formulaire.
            </label>
          </div>
          <Button
            id="contact-submit"
            disabled={isDisabled}
            className="w-full mt-4 bg-primary/40 text-current hover:bg-primary/10 py-2 rounded-lg transition-colors duration-500 ease-in-out disabled:bg-primary/20 disabled:text-current disabled:cursor-not-allowed"
            variant="default"
            onClick={sendEmail}
          >
            Envoyez
          </Button>
        </form>
        <DotPulse size={3} color="primary" />
      </Card>
    </section>
  );
};

export default ContactMe;
