import "./globals.css";
import { Inter } from "next/font/google";
import { GeistMono, GeistSans } from "geist/font";
import PopUp from "./components/resuable/popup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Euclid Learn",
  description: "TODO: SEO OPTMIZED DESCRIPTION",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body>
        <PopUp />
        {children}
      </body>
    </html>
  );
}
