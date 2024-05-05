import Image from "next/image";

const SectionHome = () => {
  return (
    <section className="flex flex-col-reverse gap-5 cursor-default">
      <div className="w-4/5 m-auto px-10 py-4 rounded-md flex flex-col items-center gap-10">
        <h1 className="text-3xl font-bold text-center">
          “Codeur Farfelu, Ancien Boulanger”
        </h1>
        <Image
          src="/logo2.jpg"
          alt="Logo de l'auteur"
          width={150}
          height={150}
          className="z-0 animate- m-auto rounded-tl-[70px] rounded-br-[70px] rounded-bl-sm rounded-tr-sm shadow-pxl shadow-foreground drop-shadow-md md:w-48 md:h-48"
        />
        <quote className="text-justify">
          Je suis passé du pétrin à la programmation, de la farine aux lignes de
          code. Pendant 10 années, j’ai façonné des baguettes, des miches & des
          croissants, mais maintenant, je modèle des sites web. Mon allergie à
          la farine m’a poussé vers une nouvelle passion : le{" "}
          <code className="text-sm bg-background/40 rounded-sm px-2 py-1 hover:cursor-default hover:bg-foreground/20 transition duration-500 ease-in-out">
            Développement Web
          </code>
          . Sérieux, assidu et toujours prêt à relever de nouveaux défis, je
          suis le boulanger qui a troqué sa pelle à pain contre un clavier. Mon
          credo ?
        </quote>
        <cite className="text-xs">
          “Du levain au code, il n’y a qu’un pas !” 🥐👨‍💻
        </cite>
      </div>
    </section>
  );
};

export default SectionHome;
