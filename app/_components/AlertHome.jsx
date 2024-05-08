import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

const AlertHome = () => {
  return (
    <Alert className="w-4/5 sm:w-4/6 shadow-pxl">
      <RocketIcon className="h-3 w-3 md:h-4 md:w-4" />
      <AlertTitle className="font-bold text-xs underline md:text-base">
        Bonjour !
      </AlertTitle>
      <AlertDescription className=" text-[10px] leading-tight md:text-sm">
        Le code, c’est ma tasse de thé… ou plutôt, ma tasse de café !
      </AlertDescription>
    </Alert>
  );
};

export default AlertHome;
