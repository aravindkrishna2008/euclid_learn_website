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
     <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "USA Computing Olympiad",
    "description": "Achieve higher USACO scores with personalized mentorship from our team of programming experts.",
    "url": "https://www.euclidlearn.com/usaco",
    "provider": {
      "@type": "Organization",
      "name": "Euclid Learn",
      "url": "https://www.euclidlearn.com"
    }
  })}
</script>
      <PopUp freeTutoringRefClick={freeTutoringRefClick} />
      <header>
        <Navbar
          freeTutoringRefClick={freeTutoringRefClick}
          pricerefclick={pricerefclick}
          teacherClick={teacherClick}
        />
      </header>
      <main>
        <Hero
          freeTutoringRefClick={freeTutoringRefClick}
          pricerefclick={pricerefclick}
        />
        <section>
          <About />
        </section>
        <section>
          <Road2Plat />
        </section>
        <section>
          <TwoPrinciples />
        </section>
        <section>
          <HowItWorks />
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
