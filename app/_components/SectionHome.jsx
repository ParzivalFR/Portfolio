import Blob from "../icons/Blob";

const SectionHome = () => {
  return (
    <section className="flex flex-col-reverse cursor-default">
      <div className="w-full lg:w-4/5 m-auto px-10 py-4 rounded-md flex flex-col md:flex-row items-center gap-5">
        <Blob className={"w-52 md:w-1/2 max-w-96"}></Blob>
        <blockquote className="text-justify text-sm md:w-1/2">
          Ayant fait la transition de l'artisanat à la programmation, j'ai
          troqué la farine contre des lignes de code. Pendant dix ans, j'ai
          perfectionné l'art de la boulangerie, créant baguettes, boules et
          croissants. Aujourd'hui, je me consacre à façonner des sites web. Une
          allergie à la farine m'a orienté vers une nouvelle passion : le{" "}
          <code className="w-max text-sm bg-foreground/20 rounded-sm px-2 py-1 hover:cursor-default hover:bg-foreground/50 transition duration-500 ease-in-out">
            Développement Web
          </code>
          . Sérieux, assidu et toujours prêt à relever de nouveaux défis,
          j'incarne la transition d'un boulanger vers un développeur passionné.
          Ma philosophie ?
          <cite className="w-full flex flex-col justify-center items-center text-xs text-center mt-2">
            “ De la boulangerie à la programmation, il n’y a qu’un pas. ”
            <span className="flex justify-center not-italic">🍞💻</span>
          </cite>
        </blockquote>
      </div>
    </section>
  );
};

export default SectionHome;
