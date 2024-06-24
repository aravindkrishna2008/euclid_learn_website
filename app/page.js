"use client";
import Image from "next/image";

import { useRef } from "react";

import Navbar from "./components/resuable/navbar";
import Hero from "./components/home/hero";
import HeroCarousel from "./components/home/HeroCarousel/heroCarousel";
import WhyEuclid from "./components/home/whyEuclid";
import Results from "./components/resuable/results";
import Quote from "./components/resuable/quote";
import Pricing from "./components/resuable/pricing";
import Teachers from "./components/resuable/teachers";
import Faq from "./components/resuable/faq";
import FreeTutoring from "./components/resuable/freeTutoring";
import Footer from "./components/resuable/footer";

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
