import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = ({ teacherClick, freeclick, freeTutoringRefClick, pricerefclick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isNavGone, setIsNavGone] = useState(false);

  const pages = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms and Conditions", path: "/TOS" },
  ];
  
  const pages2 = [
    { name: "Home", path: "/" },
    { name: "Teachers", path: "/teachers", onClick: teacherClick },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsSticky(scrollPosition > viewportHeight * 0.8); // 80vh
      setIsNavGone(scrollPosition > viewportHeight * 0.15); // 80vh
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
    <footer className="bg-[#25272C] px-[10vw] h-[45vw] py-[5vw] relative">
      <nav className="flex w-[40vw] text-[1.25vw] text-[#B6BAC3] cursor-pointer font-light flex-row justify-between">
        <ul className="flex flex-col gap-[1vw]">
          {pages2.map((page, index) => (
            <li
              key={index}
              className="py-[0.625vw] px-[0.9375vw] hover:text-neutral-600 transition-all hover:-translate-y-1 duration-200 text-neutral-400 text-[1.09375vw]"
              onClick={() => handleLinkClick(page.onClick)}
            >
              {page.onClick ? (
                <span>{page.name}</span>
              ) : (
                <Link legacyBehavior href={page.path}>{page.name}</Link>
              )}
            </li>
          ))}
          <li 
            onClick={freeTutoringRefClick} 
            className="py-[0.625vw] px-[0.9375vw] hover:text-neutral-600 transition-all hover:-translate-y-1 duration-200 text-neutral-400 text-[1.09375vw]"
          >
            Services
          </li>
          {isOpen && (
            <div
              className={`absolute top-[15vw] z-50 left-0 w-full bg-white flex flex-col items-center md:hidden ${
                isOpen ? "animate-slide-down" : "animate-slide-up "
              } ${isAnimating ? "animating" : ""}`}
              onAnimationEnd={handleAnimationEnd}
            >
              {pages.map((page, index) => (
                <li
                  key={index}
                  className="py-4 text-neutral-400 text-[4vw]"
                  onClick={() => handleLinkClick(page.onClick)}
                >
                  {page.onClick ? (
                    <span>{page.name}</span>
                  ) : (
                    <Link legacyBehavior href={page.path} onClick={toggleMenu}>
                      {page.name}
                    </Link>
                  )}
                </li>
              ))}
              <li 
                onClick={freeTutoringRefClick} 
                className="py-[0.625vw] px-[0.9375vw] hover:text-neutral-600 transition-all hover:-translate-y-1 duration-200 text-neutral-400 text-[1.09375vw]"
              >
                Services
              </li>
            </div>
          )}
        </ul>
        <ul className="flex flex-col gap-[1vw]">
          <li>
            <Link legacyBehavior href="https://discord.gg/aHQsDyEk">
              <p className="hover:underline">Discord</p>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="https://www.youtube.com/@euclidlearn">
              <p className="hover:underline">YouTube</p>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="https://x.com/euclid_learn">
              <p className="hover:underline">Twitter/X</p>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-[1vw]">
          {pages.map((page, index) => (
            <li key={index} className="hover:underline">
              <Link legacyBehavior href={page.path}>
                <a>{page.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-neutral-400" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>
      <Image
        width={10000}
        height={10000}
        src="/icons/smiley/footer.svg"
        alt="Footer smiley face icon"
        className="w-[40vw] z-30 absolute right-[8vw] bottom-0 mt-[5vw]"
      />
      <div className="absolute bottom-[5.8vw]">
        <h1 className="text-[2.8vw] text-white font-semibold w-[32vw] leading-[115%]">
          Providing Guidance, One Student at a Time
        </h1>
        <Image
          width={10000}
          height={10000}
          src="/logo/logo2.svg"
          alt="Euclid Learn logo"
          className="w-[7.5vw] mt-[2vw]"
        />
        <p className="mt-[2vw] text-white text-[0.8vw]">
          © 2024 Euclid Learn. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
