"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselItem from "./carouselItem";
import Image from "next/image";

const HeroCarousel = () => {
  const items = [
    {
      image: "/stock_image/home/hero_carousol_img_1.jpeg",
      name: "Excel in AIME",
      description:
        "Master the challenging American Invitational Mathematics Examination (AIME) with specialized coaching and problem-solving techniques.",
    },
    {
      image: "/stock_image/sat/ap.jpeg",
      name: "SAT Private Tutoring",
      description:
        "Score higher on your SAT Exams with Euclid Learn or get your money back.",
    },
    {
      image: "/stock_image/ap/apt.png",
      name: "AP Tutoring",
      description:
        "Master the challenging American Invitational Mathematics Examination (AIME) with specialized coaching and problem-solving techniques.",
    },
    {
      image: "/stock_image/sat/sat1.jpeg",
      name: "USA Computing Olympiad",
      description:
        "Achieve higher USACO scores with personalized mentorship from our team of programming experts. Our mentors have extensive experience in competitive programming and have achieved top scores.",
    },
    // ... other items
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000;

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
    <div className="w-full bg-[#3958F2] sm:h-[70vh] py-[10vh] sm:rounded-3xl relative overflow-hidden flex items-center justify-center sm:mb-[10vw] mt-[11vw]">
      <Image
        width={10000}
        height={10000}
        src="/grid/ble.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0"
      />
      <div className="w-full h-full flex items-center justify-center relative">
        <AnimatePresence>
          {items.map((item, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <CarouselItem
                  image={item.image}
                  description={item.description}
                  name={item.name}
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
      <div className="absolute bottom-4 flex space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;