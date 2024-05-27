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
    images: [
      {
        type: "image/jpeg",
        width: 1200,
        height: 630,
        url: "https://res.cloudinary.com/dbmjyltpp/image/upload/v1716816576/IMG_1883_o6atab.jpg",
      },
    ],
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
    images: [
      "https://res.cloudinary.com/dbmjyltpp/image/upload/v1716816576/IMG_1883_o6atab.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <TokenProvider>
      <html lang="fr" suppressHydrationWarning>
        <WindowSizeProvider>
          <body className={`${poppins.className}`}>
            <CursorLight>
              <ThemeProvider>{children}</ThemeProvider>
              <Footer />
              <ScrollToTop />
            </CursorLight>
            <Analytics />
            <SpeedInsights />
          </body>
        </WindowSizeProvider>
      </html>
    </TokenProvider>
  );
}
