"use client";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
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
    <div className="w-full bg-[#3958F2] sm:h-[70vh] py-[5vh] sm:rounded-3xl relative overflow-hidden flex items-center justify-center sm:mb-[10vw]">
      <Image
        width={10000}
        height={10000}
        src="/grid/gridBlue.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0 opacity-20"
      />
      <div className="w-full h-full flex items-center justify-center">
        <CSSTransition in={true} timeout={500} classNames="slide" unmountOnExit>
          <CarouselItem
            key={currentSlide}
            image={items[currentSlide].image}
            description={items[currentSlide].description}
            name={items[currentSlide].name}
          />
        </CSSTransition>
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
