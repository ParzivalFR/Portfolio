import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactMe = () => {
  return (
    <section id="#contact" className="m-2">
      <Card className="w-full p-5 sm:p-10 sm:w-4/5 lg:w-3/5 m-auto bg-primary/5 rounded-lg shadow-pxl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Contact
        </h3>
        <p className="text-center text-sm sm:text-base md:text-lg m-4 text-foreground/40">
          Veuillez entrer vos informations de contact & cliquez sur "Envoyer".
        </p>
        <form className="grid gap-2 md:gap-4 py-4">
          <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center gap-1 md:gap-4">
              <Label htmlFor="name" className="text-right">
                Prénom
              </Label>
              <Input
                id="name"
                placeholder="John"
                className="bg-secondary/20 col-span-3"
              />
            </div>
            <div className="flex flex-col items-center gap-1 md:gap-4">
              <Label htmlFor="name" className="text-right">
                Nom
              </Label>
              <Input
                id="name"
                placeholder="Doe"
                className="bg-secondary/20 col-span-3"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 md:gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              placeholder="john.doe@gmail.com"
              className="bg-secondary/20 col-span-3"
            />
          </div>
          <div className="w-full gap-1 mt-2 md:gap-4 md:mt-5 flex flex-col items-center">
            <Label htmlFor="message-2">Votre message</Label>
            <Textarea
              placeholder="Entrez votre message ici..."
              id="message-2"
              className="bg-secondary/20 w-full"
              rows="6"
            />
          </div>
          <Button
            type="submit"
            className="w-full mt-4 bg-primary/10 text-primary/90 py-2 rounded-lg"
          >
            Envoyer
          </Button>
        </form>
      </Card>
    </section>
  );
};

export default ContactMe;
