import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./hooks/ThemeContext";

const roboto = Roboto({
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
      <ThemeProvider>
        <body className={`${roboto.className} min-h-dvh`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
