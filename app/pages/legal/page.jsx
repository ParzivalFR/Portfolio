import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import { Card } from "@/components/ui/card";
import { RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { LuMousePointer2 } from "react-icons/lu";

const Legal = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-10 w-full min-h-svh">
      <Header />
      <section className="flex flex-col justify-center items-center h-full w-full p-6">
        <div className="w-full lg:w-3/5 flex flex-col jusitfy-center items-center gap-10 p-6 rounded-xl shadow-pxl">
          <div className="relative flex justify-center items-center gap-2 p-4 rounded-lg">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary/80 text-center mb-4 underline underline-offset-4 transition hover:scale-95 duration-500 ease-in-out cursor-default">
              Mentions Légales
            </h1>
            <LuMousePointer2 className="absolute top-8 -right-4 w-8 h-8 text-primary" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <Card className="flex flex-col justify-between gap-2 p-4 bg-foreground/5 transition hover:scale-[1.02] shadow-pxl duration-500 ease-in-out ">
              <h2 className="inline-flex items-center gap-2 underline underline-offset-2 font-bold text-primary">
                <RocketIcon className="w-4 h-4 text-primary" />
                Propriétaire :
              </h2>
              <p className="text-xs font-semibold">Gaël RICHARD</p>
              <address>
                <p className="text-xs">7 rue du pré de la ramée</p>
                <p className="text-xs">44550 Montoir De Bretagne</p>
                <p className="text-xs">France.</p>
              </address>
            </Card>
            <Card className="flex flex-col justify-between gap-2 p-4 bg-foreground/5 transition hover:scale-[1.02] duration-500 ease-in-out">
              <h2 className="inline-flex items-center gap-2 underline underline-offset-2 font-bold text-primary">
                <RocketIcon className="w-4 h-4 text-primary" />
                Contact :
              </h2>
              <p className="text-xs">
                Pour toute demande d'information, vous pouvez me contacter à
                n'importe quel moment via le{" "}
                <Link
                  href={"/#contact"}
                  className="text-primary font-semibold underline underline-offset-2"
                >
                  formulaire
                </Link>{" "}
                de contact disponible sur le site.
              </p>
            </Card>
            <Card className="flex flex-col justify-between gap-2 p-4 bg-foreground/5 transition hover:scale-[1.02] duration-500 ease-in-out">
              <h2 className="inline-flex items-center gap-2 underline underline-offset-2 font-bold text-primary">
                <RocketIcon className="w-4 h-4 text-primary" />
                Hébergeurs :
              </h2>
              <p className="text-xs font-semibold">Vercel Inc.</p>
              <address>
                <p className="text-xs">340 S Lemon Ave #4133</p>
                <p className="text-xs">Walnut, CA 91789</p>
                <p className="text-xs">United States.</p>
              </address>
              <p className="text-xs font-semibold">InovaPerf ( Be1host )</p>
              <address>
                <p className="text-xs">14 rue Charles-V</p>
                <p className="text-xs">75004 Paris</p>
                <p className="text-xs">France.</p>
              </address>
            </Card>
            <Card className="flex flex-col justify-between gap-2 p-4 bg-foreground/5 transition hover:scale-[1.02] duration-500 ease-in-out">
              <h2 className="inline-flex items-center gap-2 underline underline-offset-2 font-bold text-primary">
                <RocketIcon className="w-4 h-4 text-primary" />
                Données personnelles :
              </h2>
              <p className="text-xs">
                Les informations envoyées via le formulaire de contact sont
                utilisées pour vous recontacter. Elles ne sont pas stockées dans
                une base de données et ne sont pas utilisées à des fins
                commerciales ou publicitaires. Pour plus d'informations, vous
                pouvez me contacter via le{" "}
                <Link
                  href={"/#contact"}
                  className="text-primary font-semibold underline underline-offset-2"
                >
                  formulaire
                </Link>{" "}
                de contact.
              </p>
            </Card>
            <Card className="flex flex-col justify-between gap-2 p-4 bg-foreground/5 transition hover:scale-[1.02] duration-500 ease-in-out">
              <h2 className="inline-flex items-center gap-2 underline underline-offset-2 font-bold text-primary">
                <RocketIcon className="w-4 h-4 text-primary" />
                Cookies :
              </h2>
              <p className="text-xs">
                Ce site utilise des cookies pour améliorer votre expérience
                utilisateur. En poursuivant votre navigation sur ce site, vous
                acceptez l'utilisation de cookies.
              </p>
            </Card>
            <Card className="flex flex-col justify-between gap-2 p-4 bg-foreground/5 transition hover:scale-[1.02] duration-500 ease-in-out">
              <h2 className="inline-flex items-center gap-2 underline underline-offset-2 font-bold text-primary">
                <RocketIcon className="w-4 h-4 text-primary" />
                Propriété intellectuelle :
              </h2>
              <p className="text-xs">
                L'ensemble des éléments de ce site sont protégés par les lois
                françaises et internationales relatives à la propriété
                intellectuelle. Tous les droits de reproduction sont réservés, y
                compris pour les documents téléchargeables et les
                représentations iconographiques et photographiques.
              </p>
            </Card>
            <Card className="flex flex-col justify-between gap-2 p-4 bg-foreground/5 transition hover:scale-[1.02] duration-500 ease-in-out">
              <h2 className="inline-flex items-center gap-2 underline underline-offset-2 font-bold text-primary">
                <RocketIcon className="w-4 h-4 text-primary" />
                Liens hypertextes :
              </h2>
              <p className="text-xs">
                Les liens hypertextes mis en place dans le cadre du présent site
                web en direction d'autres ressources présentes sur le réseau
                Internet ne sauraient engager ma responsabilité.
              </p>
            </Card>
            <Card className="flex flex-col justify-between gap-2 p-4 bg-foreground/5 transition hover:scale-[1.02] duration-500 ease-in-out">
              <h2 className="inline-flex items-center gap-2 underline underline-offset-2 font-bold text-primary">
                <RocketIcon className="w-4 h-4 text-primary" />
                Droit applicable :
              </h2>
              <p className="text-xs">
                Tout litige en relation avec l'utilisation du site{" "}
                <Link
                  href={"/"}
                  className="text-primary font-semibold underline underline-offset-2"
                >
                  Portfolio
                </Link>{" "}
                est soumis au droit français. Il est fait attribution exclusive
                de juridiction aux tribunaux compétents.
              </p>
            </Card>
          </div>
          <Card className="flex flex-col justify-between gap-2 p-4 bg-foreground/5 transition hover:scale-[1.02] duration-500 ease-in-out">
            <h2 className="inline-flex items-center gap-2 underline underline-offset-2 font-bold text-primary">
              <RocketIcon className="w-4 h-4 text-primary" />
              Crédits :
            </h2>
            <p className="text-xs">
              Conception et développement du site :{" "}
              <Link
                href={
                  "https://www.linkedin.com/in/ga%C3%ABl-richard-680b8a263/"
                }
                className="text-primary font-semibold underline underline-offset-2"
              >
                Gaël RICHARD
              </Link>
            </p>
          </Card>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Legal;
