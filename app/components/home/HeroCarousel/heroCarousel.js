"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselItem from "./carouselItem";

const HeroCarousel = () => {
  const items = [
    {
      image: "/stock_image/home/hero_carousol_img_1.jpeg",
      name: "Excel in AIME",
      description:
        "Master the challenging American Invitational Mathematics Examination (AIME) with specialized coaching and problem-solving techniques.",
      background: "#3958F2",
      link: "/aime", // Example link destination
    },
    {
      image: "/stock_image/sat/ap.jpeg",
      name: "SAT Private Tutoring",
      description:
        "Score higher on your SAT Exams with Euclid Learn or get your money back.",
      background: "#f58c4c",
      link: "/sat", // Example link destination
    },
    {
      image: "/stock_image/ap/apt.png",
      name: "AP Tutoring",
      description:
        "Study smarter with step-by-step guidance, regular assessments, hands-on practice, and timed exams. Get fully prepared for your AP exams and master the material.",
      background: "#f0ba2f",
      link: "/ap",
    },
    {
      image: "/stock_image/sat/sat1.jpeg",
      name: "USA Computing Olympiad",
      description:
        "Achieve higher USACO scores with personalized mentorship from our team of programming experts. Our mentors have extensive experience in competitive programming and have achieved top scores.",
      background: "#1c164a",
      link: "/usaco",
    },
    // ... other items
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 9000;

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === items.length - 1 ? 0 : prevSlide + 1
      );
    }, slideInterval);

    return () => clearInterval(slideTimer);
  }, [items.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="sm:h-[90vh] relative  sm:rounded-[1.875vw] overflow-hidden flex items-center justify-center sm:mb-[10vw] mt-[11vw]  pb-7">
      <AnimatePresence>
        {items.map(
          (item, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0.5, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center w-full h-full"
              >
                <CarouselItem
                  image={item.image}
                  description={item.description}
                  name={item.name}
                  background={item.background}
                  items={items}
                  handleDotClick={handleDotClick}
                  currentSlide={currentSlide}
                  link={item.link} // Pass the link prop
                />
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroCarousel;
