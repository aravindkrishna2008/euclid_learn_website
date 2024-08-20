import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = ({ teacherClick, freeclick, freeTutoringRefClick, pricerefclick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isNavGone, setIsNavGone] = useState(false);

  const pages = [
    { name: "AP", path: "/ap" },
    { name: "SAT", path: "/sat" },
    { name: "AIME", path: "/aime" },
    { name: "USACO", path: "/usaco" },
    { name: "PRICING", path: "/pricing", onClick: pricerefclick },
    { name: "TEACHERS", path: "/teachers", onClick: teacherClick },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsSticky(scrollPosition > viewportHeight * 0.8); // 80vh
      setIsNavGone(scrollPosition > viewportHeight * 0.15); // 15vh
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsAnimating(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const handleLinkClick = (onClick) => {
    if (onClick) {
      onClick();
      setIsOpen(false); // Close the menu if it was open
    }
  };

  return (
    <header
      className={`flex flex-row text-[1.09375vw] font-semibold justify-between items-center py-[5vw] sm:py-[1.5vw] bg-white px-[6.25vw] w-[100%] z-20 transition-all duration-300 ease-in-out ${
        isSticky ? "fixed shadow-md top-0 translate-y-0" : "relative"
      } ${isNavGone ? "-translate-y-full" : ""}`}
    >
      <div className="py-[0.625vw] hover:scale-105 transition-all duration-200 px-[0.9375vw] text-neutral-400">
        <Link legacyBehavior href="/">
          <a>
            <Image
              className="sm:w-[8vw] w-[15vw]"
              width={10000}
              height={10000}
              src="/logo/logo.svg"
              alt="Euclid Learn Logo"
            />
          </a>
        </Link>
      </div>
      <nav className="flex flex-row items-center">
        <ul className="hidden md:flex flex-row cursor-pointer">
          {pages.map((page, index) => (
            <li
              key={index}
              className="py-[0.625vw] px-[0.9375vw] hover:text-neutral-600 transition-all hover:-translate-y-1 duration-200 text-neutral-400 text-[1.09375vw]"
              onClick={() => handleLinkClick(page.onClick)}
            >
              {page.onClick ? (
                <span>{page.name}</span>
              ) : (
                <Link legacyBehavior href={page.path}>
                  <a>{page.name}</a>
                </Link>
              )}
            </li>
          ))}
        </ul>
        <button className="md:hidden text-neutral-400" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>
      <p
        onClick={freeTutoringRefClick}
        className="text-[#3958F2] font-semibold hidden md:block transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:text-[#3346a4]"
      >
        ENROLL NOW
      </p>
      {isOpen && (
        <nav
          className={`absolute top-[15vw] z-50 left-0 w-full bg-white flex flex-col items-center md:hidden ${
            isOpen ? "animate-slide-down" : "animate-slide-up "
          } ${isAnimating ? "animating" : ""}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <ul>
            {pages.map((page, index) => (
              <li
                key={index}
                className="py-4 text-neutral-400 text-[4vw]"
                onClick={() => handleLinkClick(page.onClick)}
              >
                {page.onClick ? (
                  <span>{page.name}</span>
                ) : (
                  <Link legacyBehavior href={page.path}>
                    <a onClick={toggleMenu}>{page.name}</a>
                  </Link>
                )}
              </li>
            ))}
            <li>
              <p
                onClick={freeTutoringRefClick}
                className="text-[#3958F2] cursor-pointer hover:text-[#3a50bb] text-[4vw] font-semibold py-4"
              >
                ENROLL NOW
              </p>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
