import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OfferingModal = ({ offering, keyConcepts, testingPractices, freeTutoringRefClick }) => {
  const [show, setShow] = useState(false);
  const [render, setRender] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    setRender(true);
  }, []);

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  if (!render) {
    return null;
  }

  return (
    <div className="flex relative transition-all duration-300 flex-row gap-[0.625vw]">
      <h1>{offering}</h1>
      <Image
        src="/icons/general_icons/info-circle.svg"
        className={`sm:w-[1vw] w-[4vw] transition-all duration-300 cursor-pointer ${
          show ? "hidden" : "block"
        }`}
        height={1000}
        width={1000}
        onClick={() => setShow(true)}
      />

      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className={`sm:w-[35vw] w-[80vw] transition-all duration-300 ${
          show ? "block z-50" : "hidden -z-10 shadow-xl"
        } rounded-[1.875vw] text-center absolute bg-white p-[10vw] sm:py-[3.75vw] px-[5vw] sm:px-[2.5vw] flex flex-col`}
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <h1 className="sm:text-[1.4vw] text-[6vw] text-black font-semibold">
          {offering}
        </h1>
        <p className="font-light sm:mt-[1.875vw] mt-[7vw] text-[#25272C] text-[4vw] sm:text-[1vw]">
          <span className="font-semibold"> Key Concepts:</span> {keyConcepts}
        </p>
        <p className="font-light mt-[5vw] sm:mt-[1.25vw] text-[#25272C] text-[4vw] sm:text-[1vw]">
          <span className="font-semibold"> Testing Practice:</span>{" "}
          {testingPractices}
        </p>
        <div className="flex flex-col w-[100%] items-center justify-center sm:flex-row-reverse mt-[5vw] sm:mt-[1.5vw] gap-[2vw] sm:gap-[0.9375vw]">
          <button
            onClick={freeTutoringRefClick}
            className="sm:text-[1.09375vw] text-[4vw] leading-[150%] font-semibold tracking-[0.02vw] px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] cursor-pointer bg-[#3958F2] rounded-full text-white"
          >
            Claim 1-Hour Free Tutoring
          </button>
          <button
            onClick={() => setShow(false)}
            className="sm:text-[1.09375vw] text-[4vw] leading-[150%] border border-[#25272C] font-semibold tracking-[0.02vw] cursor-pointer px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] text-[#25272C] rounded-full"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OfferingModal;
