import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ContactMe from "../icons/ContactMe";

const DialogDemo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <ContactMe size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className=" rounded-lg max-w-[350px] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact</DialogTitle>
          <DialogDescription>
            Veuillez entrer vos informations de contact & cliquez sur "Envoyer".
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Prénom
              </Label>
              <Input id="name" placeholder="John" className="col-span-3" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nom
              </Label>
              <Input id="name" placeholder="Doe" className="col-span-3" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              placeholder="johndoe@gmail.com"
              className="col-span-3"
            />
          </div>
          <div className="grid w-full gap-1.5 mt-5">
            <Label htmlFor="message-2">Votre message</Label>
            <Textarea
              placeholder="Entrez votre message ici..."
              id="message-2"
              rows={6}
            />
            <p className="text-sm text-muted-foreground text-center">
              Merci de ne pas partager d'informations sensibles.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Envoyer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogDemo;
