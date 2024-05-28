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

export function AlertConfirm({ button, question, content, onClick, disabled }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default" disabled={disabled}>
          {button}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex">
            <QuestionMarkIcon className="w-6 h-6 mr-2 text-primary text-bold" />
            {question}
          </AlertDialogTitle>
          <AlertDialogDescription className="flex">
            <DotFilledIcon className="w-4 h-4 mr-2 text-primary" />
            {content}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={onClick}>Confirmer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
