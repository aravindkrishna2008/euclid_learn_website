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
    freeTutoringRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const pricerefclick = () => {
    priceRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const teacherClick = () => {
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
        <Hero />
        <HeroCarousel
          className="mt-[6.25vw]" // Add this line
        />
      </div>
      <WhyEuclid />
      <Results freeTutoringRefClick={freeTutoringRefClick} />
      <Quote freeTutoringRefClick={freeTutoringRefClick} />
      <div ref={priceRef}></div>
      <Pricing freeTutoringRefClick={freeTutoringRefClick} />
      <div ref={teacherRef}></div>
      <Teachers
        freeTutoringRefClick={freeTutoringRefClick}
        teacherRef={teacherRef}
      />
      <Faq />
      <div ref={freeTutoringRef}></div>
      <FreeTutoring />
      <Footer
        freeTutoringRefClick={freeTutoringRefClick}
        teacherClick={teacherClick}
      />
    </div>
  );
}
