import "./globals.css";
import { Inter } from "next/font/google";
import { GeistMono, GeistSans } from "geist/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Euclid Learn",
  description: "TODO: SEO OPTMIZED DESCRIPTION",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body>{children}</body>
    </html>
  );
}
