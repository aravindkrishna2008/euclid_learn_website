import Image from "next/image";

import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="px-[6.25vw] ">
        <Hero />
      </div>
    </div>
  );
}
