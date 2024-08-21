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
    <>
      <PopUp freeTutoringRefClick={freeTutoringRefClick} />
      <header>
        <Navbar
          freeTutoringRefClick={freeTutoringRefClick}
          pricerefclick={pricerefclick}
          teacherClick={teacherClick}
        />
      </header>
      <main>
        <Hero freeTutoringRefClick={freeTutoringRefClick} />
        <section>
          <HowItWorks />
        </section>
        <section>
          <Grid />
        </section>
        <section>
          <PremiumTutoring />
        </section>
        <section>
          <Approach />
        </section>
        <section>
          <ParentQuestionsSection />
        </section>
        <section>
          <Quote freeTutoringRefClick={freeTutoringRefClick} />
        </section>
        <section ref={priceRef}>
          <Pricing freeTutoringRefClick={freeTutoringRefClick} />
        </section>
        <section ref={teacherRef}>
          <Teachers freeTutoringRefClick={freeTutoringRefClick} />
        </section>
        <section>
          <Faq />
        </section>
        <section ref={freeTutoringRef}>
          <FreeTutoring />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
