import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

const AlertHome = () => {
  return (
    <Alert className="shadow-pxl">
      <RocketIcon className="h-3 w-3 md:h-4 md:w-4" />
      <AlertTitle className="font-bold text-xs underline md:text-base">
        Bonjour !
      </AlertTitle>
      <AlertDescription className=" text-[10px] leading-tight md:text-sm">
        Mon code est mon sortilège, mon café ma potion magique et les jeux vidéo
        mon aventure épique.
      </AlertDescription>
    </Alert>
  );
};

export default AlertHome;