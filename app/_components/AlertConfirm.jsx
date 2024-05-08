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
import { DotFilledIcon, QuestionMarkIcon } from "@radix-ui/react-icons";

export function AlertConfirm() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default">Send</Button>
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
          <AlertDialogAction>Confirmer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
