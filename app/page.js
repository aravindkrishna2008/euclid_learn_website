"use client";
import Image from "next/image";

import { useRef } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HeroCarousel from "./components/HeroCarousel/heroCarousel";
import WhyEuclid from "./components/whyEuclid";
import Results from "./components/results";
import Quote from "./components/quote";
import Pricing from "./components/pricing";
import Teachers from "./components/teachers";
import Faq from "./components/faq";
import FreeTutoring from "./components/freeTutoring";
import Footer from "./components/footer";

export default function Home() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <Navbar handleClick={handleClick} />
      <div className="sm:px-[6.25vw]">
        <Hero />
        <HeroCarousel />
      </div>
      <WhyEuclid handleClick={handleClick} />
      <Results handleClick={handleClick} />
      <Quote handleClick={handleClick} />
      <Pricing handleClick={handleClick} />
      <Teachers handleClick={handleClick} />
      <Faq />
      <div ref={ref}></div>
      <FreeTutoring />
      <Footer />
    </div>
  );
}
