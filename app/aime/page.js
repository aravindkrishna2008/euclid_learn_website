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

import Hero from "../components/aime/hero";
import About from "../components/aime/about";
import AtAGlance from "../components/aime/ataglance";
import PopUp from "../components/resuable/popup";


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
      <PopUp freeTutoringRefClick={freeTutoringRefClick} />
      <Navbar
        freeTutoringRefClick={freeTutoringRefClick}
        pricerefclick={pricerefclick}
        teacherClick={teacherClick}
      />{" "}
      <Hero freeTutoringRefClick={freeTutoringRefClick} />
      <About />
      <AtAGlance />
      <Results freeTutoringRefClick={freeTutoringRefClick} />
      <Quote freeTutoringRefClick={freeTutoringRefClick} />
      <div ref={priceRef}></div>
      <Pricing freeTutoringRefClick={freeTutoringRefClick} />
      <div ref={teacherRef}></div>
      <Teachers freeTutoringRefClick={freeTutoringRefClick} />
      <Faq />
      <div ref={freeTutoringRef} pricerefclick={pricerefclick}></div>
      <FreeTutoring />
      <Footer />
    </div>
  );
}
