import Image from "next/image";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HeroCarousel from "./components/HeroCarousel/heroCarousel";
import WhyEuclid from "./components/whyEuclid";
import Results from "./components/results";
import Quote from "./components/quote";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="px-[6.25vw]">
        <Hero />
        <HeroCarousel />
      </div>
      <WhyEuclid />
      <Results />
      <Quote />
    </div>
  );
}
