import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        width={10000}
        height={10000}
        src="/stock_image/aime/aime_hero.png"
        alt="usaco hero"
        className="h-[85vh] w-[100%] object-cover"
      />
      <div className="absolute top-[50%] -translate-y-[50%]  left-[10vw] sm:left-[6.25vw] ">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[15vw] sm:text-[6.875vw] text-white font-semibold leading-[105%] w-[80vw] sm:w-[40vw] sm:tracking-[-3.52px]"
        >
          Excel in AIME
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[40vw] text-[4vw] sm:text-[1.4vw] text-white font-light leading-[150%]"
        >
          Master the challenging AIME exam with specialized coaching and
          problem-solving techniques.
        </motion.p>
        <div className="flex flex-col sm:flex-row mt-[5vw] sm:mt-[1.5vw] gap-[2vw] sm:gap-[0.9375vw]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="sm:text-[1.09375vw] hover:-translate-y-1 duration-200 hover:scale-105 hover:bg-[#e7b841] transition-all text-[4vw] leading-[150%] font-semibold tracking-[0.02vw] px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] cursor-pointer bg-[#F3B71D] rounded-full text-[#1B125C]"
          >
            Claim 1-Hour Free Tutoring
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="sm:text-[1.09375vw] text-[4vw] leading-[150%] border hover:bg-[#F3B71D] hover:text-[#1B125C] hover:border-[#F3B71D] font-semibold tracking-[0.02vw] cursor-pointer px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] text-[#ffffff] rounded-full "
          >
            View Pricing
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
