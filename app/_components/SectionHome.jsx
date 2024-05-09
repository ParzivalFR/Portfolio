import Blob from "../icons/Blob";

const SectionHome = () => {
  return (
    <section className="flex flex-col-reverse cursor-default">
      <div className="w-full sm:w-4/5 m-auto px-10 py-4 rounded-md flex flex-col items-center gap-5">
        <h1 className="text-3xl font-bold text-center">
          Codeur Farfelu, Ancien Boulanger
        </h1>
        <Blob className={"w-52 md:w-96"}></Blob>
        <blockquote className="text-justify">
          Je suis passé du pétrin à la programmation, de la farine aux lignes de
          code. Pendant 10 années, j’ai façonné des baguettes, des miches & des
          croissants, mais maintenant, je modèle des sites web. Mon allergie à
          la farine m’a poussé vers une nouvelle passion : le{" "}
          <code className="w-max text-sm bg-foreground/20 rounded-sm px-2 py-1 hover:cursor-default hover:bg-foreground/50 transition duration-500 ease-in-out ">
            Développement Web
          </code>
          . Sérieux, assidu et toujours prêt à relever de nouveaux défis, je
          suis le boulanger qui a troqué sa pelle à pain contre un clavier. Mon
          credo ?
        </blockquote>
        <cite className="text-xs text-nowrap">
          “Du levain au code, il n’y a qu’un pas !”
          <span className="flex justify-center not-italic	">🍞💻</span>
        </cite>
      </div>
    </section>
  );
};

export default SectionHome;
