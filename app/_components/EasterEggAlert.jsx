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

export function EasterEggAlert({ children: chidren }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{chidren}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>👀 Oh !</AlertDialogTitle>
          <AlertDialogDescription>
            Oh ! Mais... Que'est-ce que.. Il me semble que tu as trouvé un
            easter egg ! 🥚
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Sortir</AlertDialogCancel>
          <AlertDialogAction>Ok</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
