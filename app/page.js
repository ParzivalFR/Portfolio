import Image from "next/image";
import Badges from "./_components/Badges";
import CursorLight from "./_components/CursorLight";
import Header from "./_components/Header";
import Spacing from "./_components/Spacing";

export default function Home() {
  return (
    <>
      <CursorLight>
        <Header />
        <Badges />
        <Spacing size={50} />
        <section className="flex flex-col-reverse gap-5">
          <div className="w-4/5 m-auto px-10 py-4 rounded-md flex flex-col items-center gap-10 bg-foreground/10">
            <h2 className="text-xl font-bold text-center">
              “Codeur Farfelu, Ancien Boulanger”
            </h2>
            <quote className="text-justify">
              Je suis passé du pétrin à la programmation, de la farine aux
              lignes de code. Pendant 10 années, j’ai façonné des baguettes, des
              miches & des croissants, mais maintenant, je modèle des sites web.
              Mon allergie à la farine m’a poussé vers une nouvelle passion : le{" "}
              <code className="text-sm bg-background/40 rounded-sm px-2 py-1 hover:cursor-default hover:bg-foreground/20 transition duration-500 ease-in-out">
                Développement Web
              </code>
              . Sérieux, assidu et toujours prêt à relever de nouveaux défis, je
              suis le boulanger qui a troqué sa pelle à pain contre un clavier.
              Mon credo ?
            </quote>
            <cite className="text-xs">
              “Du levain au code, il n’y a qu’un pas !” 🥐👨‍💻
            </cite>
          </div>
          <div>
            <Image
              src="/logo2.jpg"
              width={150}
              height={150}
              className="animate-pulse m-auto rounded-tl-[80px] rounded-br-[80px] rounded-bl-xl rounded-tr-xl shadow-pxl shadow-zinc-50 drop-shadow-md"
            />
          </div>
        </section>
      </CursorLight>
    </>
  );
}
