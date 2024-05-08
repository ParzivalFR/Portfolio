import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./hooks/ThemeContext";
import { WindowSizeProvider } from "./hooks/WindowSizeContext";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Gael RICHARD - Portfolio",
  description:
    "French Developer Web passionate about the web and new technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <WindowSizeProvider>
        <ThemeProvider>
          <body className={`${poppins.className} min-h-dvh`}>
            {children}
            <Analytics />
            <SpeedInsights />
          </body>
        </ThemeProvider>
      </WindowSizeProvider>
    </html>
  );
}
