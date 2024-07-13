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

import Hero from "../components/TOS/hero";
import Grid from "../components/TOS/list";
import About from "../components/sat/about";
import Road2Plat from "../components/sat/road2plat";
import TwoPrinciples from "../components/sat/twoPrinciples";
import HowItWorks from "../components/sat/howitworks";

import PremiumTutoring from "../components/sat/premium";
import Approach from "../components/sat/approach";
import ParentQuestionsSection from "../components/sat/Questions";
import PopUp from "../components/resuable/popup";

export default function USACO() {
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
      />{" "}
      <Hero freeTutoringRefClick={freeTutoringRefClick} />
      <Grid />
      <FreeTutoring />
      <Footer />
    </div>
  );
}
