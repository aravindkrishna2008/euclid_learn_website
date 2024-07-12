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
import PopUp from "./components/resuable/popup";


export default function Home() {
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
      <PopUp freeTutoringRefClick={freeTutoringRefClick} />

      <Navbar
        freeTutoringRefClick={freeTutoringRefClick}
        pricerefclick={pricerefclick}
        teacherClick={teacherClick}
      />
      <div className="sm:px-[6.25vw] ">
        <Hero
          freeTutoringRefClick={freeTutoringRefClick}
          pricerefclick={pricerefclick}
        />
        <HeroCarousel
          freeTutoringRefClick={freeTutoringRefClick}
          pricerefclick={pricerefclick}
          className="mt-[6.25vw]" // Add this line
        />
      </div>
      <WhyEuclid
        freeTutoringRefClick={freeTutoringRefClick}
        pricerefclick={pricerefclick}
      />
      <Results
        freeTutoringRefClick={freeTutoringRefClick}
        pricerefclick={pricerefclick}
      />
      <Quote
        freeTutoringRefClick={freeTutoringRefClick}
        pricerefclick={pricerefclick}
      />
      <div ref={priceRef}></div>
      <Pricing
        freeTutoringRefClick={freeTutoringRefClick}
        pricerefclick={pricerefclick}
      />
      <div ref={teacherRef}></div>
      <Teachers
        freeTutoringRefClick={freeTutoringRefClick}
        pricerefclick={pricerefclick}
        teacherRef={teacherRef}
      />
      <Faq />
      <div ref={freeTutoringRef} pricerefclick={pricerefclick}></div>
      <FreeTutoring />
      <Footer />
    </div>
  );
}