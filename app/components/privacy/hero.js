import { motion } from "framer-motion";
import Image from "next/image";

const Hero = ({ freeTutoringRefClick, pricerefclick }) => {
  return (
    <div className="sm:h-[70vh] h-[80vh] py-[10vh] flex flex-col justify-center items-center mt-[2vh]">
      <div className="p-[2vw] relative">
      <motion.p
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-medium text-[4vw] sm:text-[1.5vw] text-[#1A2DE9] text-center sm:w-[62vw] mb-[2vh]"
        >
          Privacy Policy
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-semibold text-[17.5vw] w-[70vw] sm:text-[7vw] text-[#25272C] tracking-[-0.275vw] leading-[100%] text-center sm:w-[62vw]"
        >
          We respect
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-semibold text-[17.5vw] w-[70vw] sm:text-[7vw] text-[#25272C] tracking-[-0.275vw] leading-[100%] text-center sm:w-[62vw]"
        >
         your privacy
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-[4vw] h-[4vw] sm:block hidden absolute top-[-1vw] left-[8vw] -z-10"
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
          className="w-[4vw] h-[4vw] sm:block hidden absolute bottom-[2.5vw] left-[0vw]"
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
          className="w-[4vw] h-[4vw] sm:block hidden absolute bottom-[2.5vw] right-[0vw] -z-10"
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
          className="w-[4vw] h-[4vw] sm:block hidden absolute top-[-1vw] right-[17vw]"
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
                  Your privacy matters to us at EUCLID. We respect the information we collect on our website.

      </motion.p>
    </div>
  );
};

export default Hero;
