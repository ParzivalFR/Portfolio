import { Divider } from "@nextui-org/divider";
import AlertHome from "./_components/AlertHome";
import ContactMe from "./_components/ContactMe";
import { EasterEggAlert } from "./_components/EasterEggAlert";
import Header from "./_components/Header";
import InfiniFloat from "./_components/InfiniFloat";
import Projects from "./_components/Projects";
import SectionHome from "./_components/SectionHome";
import Skills from "./_components/Skills";
import Spacing from "./_components/Spacing";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-svh">
        <Spacing size={40} />
        <EasterEggAlert />
        <AlertHome />
        <Spacing size={40} />
        <SectionHome />
        <Spacing size={40} />
        <Divider className="w-2/3 h-px m-auto bg-current rounded" />
        <Spacing size={100} />
        <InfiniFloat />
        <Spacing size={100} />
        <Divider className="w-2/3 h-[0.5px] m-auto bg-current rounded" />
        <Spacing size={100} />
        <Skills />
        <Spacing size={50} />
        <Divider className="w-2/3 h-[0.5px] m-auto bg-current rounded" />
        <Spacing size={100} />
        <Projects />
        <Spacing size={100} />
        <Divider className="w-2/3 h-[0.5px] m-auto bg-current rounded" />
        <Spacing size={100} />
        <ContactMe />
        <Spacing size={50} />
      </main>
    </>
  );
}
