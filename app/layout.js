import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import CursorLight from "./_components/CursorLight";
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
    url: "https://https://gael-dev.fr",
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
    url: "https://https://gael-dev.fr",
    images: [
      "https://res.cloudinary.com/dbmjyltpp/image/upload/v1716816576/IMG_1883_o6atab.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <TokenProvider>
        <html lang="fr" suppressHydrationWarning>
          <head>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-1P0ENQYV95"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-1P0ENQYV95');
              `}
            </Script>
            <Script>
              {`
            window.axeptioSettings = {
              clientId: "66619834d925dc4a6a7e757b",
              cookiesVersion: "portfolio-fr-EU",
              googleConsentMode: {
                default: {
                  analytics_storage: "denied",
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                  wait_for_update: 500
                }
              }
            };

            (function(d, s) {
              var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
              e.async = true; e.src = "//static.axept.io/sdk.js";
              t.parentNode.insertBefore(e, t);
            })(document, "script");
          `}
            </Script>
          </head>
          <body className={`${poppins.className}`}>
            <WindowSizeProvider>
              <CursorLight>
                {children}
                {/* <ScrollToTop /> */}
              </CursorLight>
              <Analytics />
              <SpeedInsights />
            </WindowSizeProvider>
          </body>
        </html>
      </TokenProvider>
    </ThemeProvider>
  );
}
