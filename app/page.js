import { Divider } from "@nextui-org/divider";
import CoffeeTime from "./_components/CoffeeTime";
import ContactMe from "./_components/ContactMe";
import { EasterEggAlert } from "./_components/EasterEggAlert";
import Header from "./_components/Header";
import InfiniFloat from "./_components/InfiniFloat";
import Projects from "./_components/Projects";
import SectionHome from "./_components/SectionHome";
import Skills from "./_components/Skills";
import Spacing from "./_components/Spacing";
import TypeWrite from "./_components/TypeWrite";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-svh">
        <Spacing size={20} />
        <EasterEggAlert />
        <CoffeeTime>
          Le code, c’est ma tasse de thé… ou plutôt, ma tasse de café !
        </CoffeeTime>
        <Spacing size={20} />
        <TypeWrite />
        <SectionHome />
        <Spacing size={40} />
        <Divider className="w-2/3 h-px m-auto bg-current rounded" />
        <Spacing size={100} />
        <InfiniFloat />
        <Spacing size={100} />
        <Divider className="w-2/3 h-[0.5px] m-auto bg-current rounded" />
        <Spacing size={50} />
        <Skills />
        <Spacing size={50} />
        <Divider className="w-2/3 h-[0.5px] m-auto bg-current rounded" />
        <Spacing size={50} />
        <Projects />
        <Spacing size={50} />
        <Divider className="w-2/3 h-[0.5px] m-auto bg-current rounded" />
        <Spacing size={50} />
        <ContactMe />
        <Spacing size={50} />
      </main>
    </>
  );
}
