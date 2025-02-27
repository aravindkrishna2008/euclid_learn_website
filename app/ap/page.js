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

import Hero from "../components/ap/hero";
import About from "../components/aime/about";
import AtAGlance from "../components/aime/ataglance";
import Reasons from "../components/ap/reasons";
import PopUp from "../components/resuable/popup";

import Offerings from "../components/ap/offerings";

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
          <Reasons />
        </section>
        <section>
          <Offerings />
        </section>
        <Results freeTutoringRefClick={freeTutoringRefClick} />
        <Quote freeTutoringRefClick={freeTutoringRefClick} />
        <section ref={priceRef}>
          <Pricing freeTutoringRefClick={freeTutoringRefClick} />
        </section>
        <section ref={teacherRef}>
          <Teachers freeTutoringRefClick={freeTutoringRefClick} />
        </section>
        <Faq />
        <section ref={freeTutoringRef}>
          <FreeTutoring />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
      <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AP Tutoring",
    "description": "Get fully prepared for your AP exams and master the material.",
    "url": "https://www.euclidlearn.com/ap",
    "provider": {
      "@type": "Organization",
      "name": "Euclid Learn",
      "url": "https://www.euclidlearn.com"
    }
  })}
</script>
    </>
  );
}
