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
    <>
      <PopUp freeTutoringRefClick={freeTutoringRefClick} />
      <header>
        <Navbar
          freeTutoringRefClick={freeTutoringRefClick}
          pricerefclick={pricerefclick}
          teacherClick={teacherClick}
        />
      </header>
      <main className="sm:px-[6.25vw]">
        <section>
          <Hero />
        </section>
        <section className="mt-[6.25vw]">
          <HeroCarousel />
        </section>
        <section>
          <WhyEuclid />
        </section>
        <section>
          <Results freeTutoringRefClick={freeTutoringRefClick} />
        </section>
        <section>
          <Quote freeTutoringRefClick={freeTutoringRefClick} />
        </section>
        <section ref={priceRef}>
          <Pricing freeTutoringRefClick={freeTutoringRefClick} />
        </section>
        <section ref={teacherRef}>
          <Teachers
            freeTutoringRefClick={freeTutoringRefClick}
            teacherRef={teacherRef}
          />
        </section>
        <section>
          <Faq />
        </section>
        <section ref={freeTutoringRef}>
          <FreeTutoring />
        </section>
      </main>
      <footer>
        <Footer
          freeTutoringRefClick={freeTutoringRefClick}
          teacherClick={teacherClick}
        />
      </footer>
    </>
  );
}
