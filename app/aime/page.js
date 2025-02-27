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
    "name": "Excel in AIME",
    "description": "Master the challenging AIME exam with specialized coaching and problem-solving techniques.",
    "url": "https://www.euclidlearn.com/aime",
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
        <Hero freeTutoringRefClick={freeTutoringRefClick} />
        <About />
        <AtAGlance />
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
    </>
  );
}