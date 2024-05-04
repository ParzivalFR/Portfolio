import Badges from "./_components/Badges";
import CursorLight from "./_components/CursorLight";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import SectionHome from "./_components/SectionHome";
import Spacing from "./_components/Spacing";

export default function Home() {
  return (
    <>
      <CursorLight>
        <Header />
        <Badges />
        <Spacing size={50} />
        <SectionHome />
        <Spacing size={50} />
        <Footer />
      </CursorLight>
    </>
  );
}
