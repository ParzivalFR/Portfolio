"use client";

import Textarea from "@/app/_components/Textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import { DotFilledIcon, QuestionMarkIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const ContactMe = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = () => {
    if (!validateEmail(email)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Adresse email invalide !",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          }
        )
        .then(
          () => {
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
            console.log("SUCCESS!");
          },
          (error) => {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Échec de l'envoi du message !",
              showConfirmButton: false,
              timer: 2000,
            });
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  useEffect(() => {
    const checkValues = () => {
      if (firstName && name && email && message) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };
    checkValues();
  }, [firstName, name, email, message]);

  return (
    <section id="contact" className="m-2">
      <Card className="w-full p-5 sm:p-10 sm:w-4/5 lg:w-3/5 m-auto bg-primary/5 rounded-lg shadow-pxl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Contact
        </h3>
        <p className="text-center text-xs sm:text-sm md:text-md m-4 text-foreground/40">
          Veuillez entrer vos informations de contact & cliquez sur "Envoyer".
        </p>
        <form ref={form} className="grid gap-2 md:gap-4 py-4">
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center gap-1 md:gap-4">
              <Label htmlFor="name" className="text-right">
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
              <Label htmlFor="name" className="text-right">
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
            <Label htmlFor="username" className="text-right">
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                id="contact-submit"
                disabled={isDisabled}
                className="w-full mt-4 bg-primary/40 text-current hover:bg-primary/10 py-2 rounded-lg transition-colors duration-500 ease-in-out disabled:bg-primary/20 disabled:text-current disabled:cursor-not-allowed"
                variant="default"
              >
                Envoyez
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex">
                  <QuestionMarkIcon className="w-6 h-6 mr-2 text-primary text-bold" />
                  Êtes-vous certain ?
                </AlertDialogTitle>
                <AlertDialogDescription className="flex">
                  <DotFilledIcon className="w-4 h-4 mr-2 text-primary" />
                  Une fois avoir envoyé votre message, vous ne pourrez plus le
                  modifier. Êtes-vous sûr de vouloir continuer ?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuler</AlertDialogCancel>
                <AlertDialogAction onClick={sendEmail}>
                  Confirmer
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </form>
      </Card>
    </section>
  );
};

export default ContactMe;
