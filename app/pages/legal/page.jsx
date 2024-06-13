import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import legalData from "@/app/data/legal.json"; // Importe le JSON
import { RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { LuMousePointer2 } from "react-icons/lu";

const Legal = () => {
  const renderContent = (content) => {
    return content.map((item, index) => {
      if (item.type === "text") {
        return (
          <p key={index} className={item.className}>
            {item.text}
            {item.link && (
              <Link href={item.link.href} className={item.link.className}>
                {item.link.text}
              </Link>
            )}
            {item.textEnd}
          </p>
        );
      }
      if (item.type === "address") {
        return (
          <address key={index}>
            {item.content.map((addr, idx) => (
              <p key={idx} className={addr.className}>
                {addr.text}
              </p>
            ))}
          </address>
        );
      }
      return null;
    });
  };

  return (
    <main className="flex flex-col justify-center items-center gap-10 w-full min-h-svh">
      <Header />
      <section className="flex flex-col justify-center items-center h-full w-full p-6">
        <div className="w-full lg:w-3/5 flex flex-col justify-center items-center gap-10 p-6 rounded-xl shadow-pxl">
          <div className="relative flex justify-center items-center gap-2 p-4 rounded-lg">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary/80 text-center mb-4 underline underline-offset-4 transition hover:scale-95 duration-500 ease-in-out cursor-default">
              Mentions Légales
            </h1>
            <LuMousePointer2 className="absolute top-8 -right-4 w-8 h-8 text-primary" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {legalData.map((section, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-center md:items-start gap-2 p-4"
              >
                <h2 className="inline-flex items-center gap-2 underline underline-offset-2 font-bold text-primary">
                  <RocketIcon className="w-4 h-4 text-primary" />
                  {section.title}
                </h2>
                {renderContent(section.content)}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Legal;
