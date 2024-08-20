"use client";
import Image from "next/image";
import { useState } from "react";

const PopUp = ({ freeTutoringRefClick }) => {
  const [shown, setShown] = useState(true);

  return (
    <aside
      className={`bg-[#3958F2] ${
        shown ? "flex" : "hidden"
      } relative py-[1vw] px-[6.25vw] text-white items-center justify-center flex-row gap-[1.25vw]`}
      role="dialog"
      aria-live="polite"
    >
      <p className="text-[1vw]">
        Claim your 1-Hour Free Tutoring with our award-winning teachers
      </p>
      <button
        onClick={freeTutoringRefClick}
        className="text-[1vw] text-[#3958F2] cursor-pointer hover:-translate-y-1 duration-200 hover:scale-105 hover:opacity-70 bg-white rounded-full px-[0.8vw] py-[0.4vw] leading-[130%] font-semibold"
      >
        Claim 1-Hour Free Tutoring
      </button>
      <Image
        src="/icons/general_icons/x.svg"
        className="w-[1.5vw] h-[1.5vw] cursor-pointer absolute right-[6.25vw]"
        width={1000}
        height={1000}
        alt="Close Pop-up"
        onClick={() => setShown(false)}
      />
    </aside>
  );
};

export default PopUp;
