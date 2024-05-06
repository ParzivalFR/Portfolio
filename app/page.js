import { Divider } from "@nextui-org/divider";
import AlertHome from "./_components/AlertHome";
import CursorLight from "./_components/CursorLight";
import { EasterEggAlert } from "./_components/EasterEggAlert";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import InfiniFloat from "./_components/InfiniFloat";
import ScrollToTop from "./_components/ScrollToTop";
import SectionHome from "./_components/SectionHome";
import Spacing from "./_components/Spacing";
import ColorsTimeline from "./_components/Timeline";

export default function Home() {
  return (
    <div>
      <CursorLight>
        <Header />
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
        <Spacing size={40} />
        <ColorsTimeline />
        <Spacing size={40} />
        <Divider className="w-2/3 h-[0.5px] m-auto bg-current rounded" />
        <Spacing size={100} />
        <Footer />
        <ScrollToTop />
      </CursorLight>
    </div>
  );
}
