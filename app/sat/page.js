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

import Hero from "../components/sat/hero";
import About from "../components/sat/about";
import Road2Plat from "../components/sat/road2plat";
import TwoPrinciples from "../components/sat/twoPrinciples";
import HowItWorks from "../components/sat/howitworks";
import Grid from "../components/sat/grid";
import PremiumTutoring from "../components/sat/premium";
import Approach from "../components/sat/approach";
import ParentQuestionsSection from "../components/sat/Questions";


export default function USACO() {
  const freeTutoringRef = useRef(null);
  const priceRef = useRef(null);
  const teacherRef = useRef(null);
  const freeTutoringRefClick = () => {
    console.log("clicked");
    freeTutoringRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const pricerefclick = () => {
    console.log("clicked");
    priceRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const teacherClick = () => {
    console.log("clicked");
    teacherRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <Navbar
        freeTutoringRefClick={freeTutoringRefClick}
        pricerefclick={pricerefclick}
        teacherClick={teacherClick}
      />{" "}
      <Hero />
      <HowItWorks />
      <Grid/>
      <PremiumTutoring/>
      <Approach/>
      <ParentQuestionsSection/>
      
 
      
      
      <Quote
        freeTutoringRefClick={freeTutoringRefClick}
      />
      <div ref={priceRef}></div>
      <Pricing
        freeTutoringRefClick={freeTutoringRefClick}
      />
      <div ref={teacherRef}></div>
      <Teachers
        freeTutoringRefClick={freeTutoringRefClick}
      />
      <Faq />
      <div ref={freeTutoringRef} pricerefclick={pricerefclick}></div>
      <FreeTutoring />
      <Footer />
    </div>
  );
}
