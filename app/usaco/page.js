"use client";
import { useRef } from "react";
import Navbar from "../components/resuable/navbar";
import Results from "../components/resuable/results";
import Quote from "../components/resuable/quote";
import Pricing from "../components/resuable/pricing";
import Teachers from "../components/resuable/teachers";
import Faq from "../components/resuable/faq";
import FreeTutoring from "../components/resuable/freeTutoring";
import Footer from "../components/resuable/footer";

import Hero from "../components/usaco/hero";
import About from "../components/usaco/about";
import Road2Plat from "../components/usaco/road2plat";
import TwoPrinciples from "../components/usaco/twoPrinciples";
import HowItWorks from "../components/usaco/howitworks";

export default function USACO() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <Navbar handleClick={handleClick} />
      <Hero />
      <About />
      <Road2Plat />
      <TwoPrinciples />
      <HowItWorks />
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
