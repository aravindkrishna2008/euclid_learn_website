import "./globals.css";
import { Inter } from "next/font/google";
import { GeistMono, GeistSans } from "geist/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Euclid Learn",
  description: "Euclid Learn - equitable and extensive training programs for students grades 6-12 for national and international math and computing olympiads.",
};
//wewe
export default function RootLayout({ children }) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <link rel="icon" href="/icons/smiley/smile_blue.svg" sizes="any" />
      <head />
      <body>{children}</body>
    </html>
  );
}
