import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const pages = [
    { name: "AP", path: "/ap" },
    { name: "SAT", path: "/sat" },
    { name: "ACT", path: "/act" },
    { name: "AIME", path: "/aime" },
    { name: "USACO", path: "/usaco" },
    { name: "PRICING", path: "/pricing" },
    { name: "TEACHERS", path: "/teachers" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="flex flex-row text-[1.09375vw] font-semibold justify-between items-center py-[5vw] sm:py-[1.5vw] bg-white px-[6.25vw]">
      <div className="py-[0.625vw] px-[0.9375vw] text-neutral-400">
        <Link href="/">
          <img src="/logo/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <div className="hidden md:flex flex-row">
          {pages.map((page, index) => (
            <div
              key={index}
              className="py-[0.625vw] px-[0.9375vw] text-neutral-400 text-[1.09375vw]"
            >
              <Link href={page.path}>{page.name}</Link>
            </div>
          ))}
        </div>
        <button className="md:hidden text-neutral-400" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <p className="text-[#3958F2] font-semibold hidden md:block">ENROLL NOW</p>
      {isOpen && (
        <div
          className={`absolute top-[15vw] left-0 w-full bg-white z-10 flex flex-col items-center md:hidden ${
            isOpen ? "animate-slide-down" : "animate-slide-up"
          } ${isAnimating ? "animating" : ""}`}
          onAnimationEnd={handleAnimationEnd}
        >
          {pages.map((page, index) => (
            <div key={index} className="py-4 text-neutral-400 text-[4vw]">
              <Link href={page.path} onClick={toggleMenu}>
                {page.name}
              </Link>
            </div>
          ))}
          <p className="text-[#3958F2] text-[4vw] font-semibold py-4">
            ENROLL NOW
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
