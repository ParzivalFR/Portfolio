import { BiCheckShield } from "react-icons/bi";

const Qualities = ({ title, content }) => {
  const caractersData = [
    {
      title: "Passionné",
      content:
        "Développeur web passionné, je crée des sites qui répondent parfaitement aux besoins de clients. Mon écoute attentive me permet de proposer des solutions sur mesure, quel que soit le défi à relever.",
      style: "text-start text-sm px-4",
    },
    {
      title: "Rigoureux",
      content:
        "Ma rigueur garantit un travail de qualité supérieure. Je veille à ce que chaque projet soit réalisé avec une attention minutieuse aux détails, assurant ainsi la satisfaction totale des clients.",
      style: "text-center text-sm px-4",
    },
    {
      title: "Communication",
      content:
        "La communication fluide et proactive avec les clients est l'une des clés de la réussite de chaque projet, assurant une compréhension mutuelle et une satisfaction optimale.",
      style: "text-end text-sm px-4",
    },
  ];

  return (
    <section
      id="qualities"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-2 w-4/5 m-auto"
    >
      {caractersData.map((caracter, index) => (
        <div
          key={index}
          className="w-full h-full max-w-[400px] m-auto flex flex-col gap-4 justify-between items-center bg-foreground/5 border border-foreground/5 shadow-pxl p-4 rounded-lg transition hover:scale-[1.01] hover:cursor-default duration-700 ease-in-out"
        >
          <div className="flex items-center gap-2">
            <BiCheckShield className="text-2xl text-primary" />
            <h2 className="text-xl text-primary underline underline-offset-2">
              {caracter.title}
            </h2>
          </div>
          <p className={"text-sm px-4 text-justify"}>{caracter.content}</p>
        </div>
      ))}
    </section>
  );
};

export default Qualities;
