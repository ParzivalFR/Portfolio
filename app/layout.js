import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
import CursorLight from "./_components/CursorLight";
import Footer from "./_components/Footer";
import ScrollToTop from "./_components/ScrollToTop";
import "./globals.css";
import { ThemeProvider } from "./hooks/ThemeContext";
import { TokenProvider } from "./hooks/TokenContext";
import { WindowSizeProvider } from "./hooks/WindowSizeContext";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Gael RICHARD - Développeur Web Fullstack",
  description:
    "Développeur Web Fullstack, je suis passionné par le développement web. Je suis spécialisé dans la création de sites web avec pour but de satisfaires les besoins de mes clients.",
  openGraph: {
    title: "Gael RICHARD - Développeur Web Fullstack",
    description:
      "Développeur Web Fullstack, je suis passionné par le développement web. Je suis spécialisé dans la création de sites web avec pour but de satisfaires les besoins de mes clients.",
    type: "website",
    url: "https://parzival-portfolio.vercel.app",
    image:
      "https://res.cloudinary.com/dbmjyltpp/image/upload/v1716566940/IMG_1882_zky80l.jpg",
    site_name: "Gael RICHARD - Développeur Web Fullstack",
    locale: "fr_FR",
  },
  twitter: {
    handle: "@gaelprodev",
    site: "@gaelprodev",
    cardType: "summary_large_image",
    title: "Gael RICHARD - Développeur Web Fullstack",
    description:
      "Développeur Web Fullstack, je suis passionné par le développement web. Je suis spécialisé dans la création de sites web avec pour but de satisfaires les besoins de mes clients.",
    type: "website",
    url: "https://parzival-portfolio.vercel.app",
    image:
      "https://res.cloudinary.com/dbmjyltpp/image/upload/v1716566940/IMG_1882_zky80l.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <TokenProvider>
      <html lang="fr">
        <WindowSizeProvider>
          <ThemeProvider>
            <body className={`${poppins.className}`}>
              <CursorLight>
                {children}
                <Footer />
                <ScrollToTop />
              </CursorLight>
              <Analytics />
              <SpeedInsights />
            </body>
          </ThemeProvider>
        </WindowSizeProvider>
      </html>
    </TokenProvider>
  );
}
