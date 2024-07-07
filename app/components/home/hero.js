import { motion } from "framer-motion";
import Image from "next/image";

const Hero = ({ freeTutoringRefClick, pricerefclick }) => {
  return (
    <div className="sm:h-[70vh] h-[80vh] py-[10vh] flex flex-col justify-center items-center ">
      <div className="p-[2vw] relative">
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-semibold text-[17.5vw] w-[80vw] sm:text-[6.875vw] text-[#25272C] tracking-[-0.275vw] leading-[100%] text-center sm:w-[62vw]"
        >
          Student Oriented Academic Coaching
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-[5vw] h-[5vw] sm:block hidden absolute top-[-0.5vw] left-[9vw] -z-10"
        >
          <Image
            width={10000}
            height={10000}
            src="/icons/smiley/smile_blue.svg"
            alt="hero"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-[5vw] h-[5vw] sm:block hidden absolute bottom-[2.5vw] left-[-1vw]"
        >
          <Image
            width={10000}
            height={10000}
            src="/icons/smiley/smile_yellow.svg"
            alt="hero"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-[5vw] h-[5vw] sm:block hidden absolute bottom-[2.5vw] right-[-1vw] -z-10"
        >
          <Image
            width={10000}
            height={10000}
            src="/icons/smiley/smile_orange.svg"
            alt="hero"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-[5vw] h-[5vw] sm:block hidden absolute top-[0vw] right-[18vw]"
        >
          <Image
            width={10000}
            height={10000}
            src="/icons/smiley/smile_yellow.svg"
            alt="hero"
          />
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[#25272C] text-[4vw] sm:text-[1.5625vw] leading-[150%] font-light tracking-[-0.015625vw] w-[80vw] sm:w-[50vw] text-center"
      >
        Providing Guidance One Student at a Time. Unlock Your Potential and
        Excel in Your Studies with Personalized and Private Guidance.
      </motion.p>
      <div className="flex flex-col sm:flex-row mt-[5vw] sm:mt-[3vw] gap-[2vw] sm:gap-[0.9375vw]">
        <motion.div
          whileHover={{ scale: 1.05, translateY: -5 }}
          onClick={freeTutoringRefClick}
          className="sm:text-[1.09375vw] hover:-translate-y-1 duration-200 hover:scale-105 hover:bg-[#314ac7] transition-all text-[4vw] leading-[150%] font-semibold tracking-[0.02vw] px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] cursor-pointer bg-[#3958F2] rounded-full text-white"
        >
          Claim 1-Hour Free Tutoring
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, translateY: -5 }}
          onClick={pricerefclick}
          className="sm:text-[1.09375vw] text-[4vw] leading-[150%] border hover:-translate-y-1 duration-200 hover:scale-105 hover:border-[#314ac7] hover:text-[#314ac7] border-[#3958F2] font-semibold tracking-[0.02vw] cursor-pointer px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] text-[#3958F2] rounded-full"
        >
          View Pricing
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;