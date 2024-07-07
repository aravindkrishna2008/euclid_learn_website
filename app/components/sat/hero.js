import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        width={10000}
        height={10000}
        src="/stock_image/sat/ap.png"
        alt="ap hero"
        className="h-[85vh] w-[100%] object-cover filter"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-[50%] -translate-y-[50%] left-[10vw] sm:left-[6.25vw]"
      >
        <h1 className="text-[15vw] sm:text-[6.875vw] text-white font-semibold leading-[105%] w-[80vw] sm:w-[51vw] sm:tracking-[-3.52px]">
          SAT Private Tutoring
        </h1>
        <p className="mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[42.5vw] text-[4vw] sm:text-[1.4vw] text-white font-light leading-[150%]">
          Score higher on your SAT Exams with Euclid Learn or get your money back.
        </p>
        <div className="flex flex-col sm:flex-row mt-[5vw] sm:mt-[1.5vw] gap-[2vw] sm:gap-[0.9375vw]">
          <motion.div
            whileHover={{ scale: 1.05, translateY: -5 }}
            className="sm:text-[1.09375vw] hover:bg-[#314ac7] transition-all text-[4vw] leading-[150%] font-semibold tracking-[0.02vw] px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] cursor-pointer bg-[#3958F2] rounded-full text-white"
          >
            Claim 1-Hour Free Tutoring
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, translateY: -5 }}
            className="sm:text-[1.09375vw] text-[4vw] leading-[150%] border hover:border-[#314ac7] hover:text-[#314ac7] border-[#3958F2] font-semibold tracking-[0.02vw] cursor-pointer px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] text-[#3958F2] rounded-full"
          >
            View Pricing
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
