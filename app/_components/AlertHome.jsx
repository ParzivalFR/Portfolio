import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

const AlertHome = () => {
  return (
    <Alert className="shadow-pxl">
      <RocketIcon className="h-4 w-4" />
      <AlertTitle className="font-bold text-base underline leading-tight">
        Bonjour !
      </AlertTitle>
      <AlertDescription className="text-xs italic md:text-sm">
        Mon code est mon sortilège, mon café ma potion magique et les jeux vidéo
        mon aventure épique.
      </AlertDescription>
    </Alert>
  );
};

export default AlertHome;
