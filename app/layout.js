import "./globals.css";
import { Inter } from "next/font/google";
import { GeistMono, GeistSans } from "geist/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Euclid Learn",
  description: "Score higher on the SAT, AP Exams, AMC, USACO, Codeforces, and Tech Interviews with our expert guidance, coaching, and tutoring. ",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <link rel="icon" href="/icons/smiley/smile_blue.svg" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
