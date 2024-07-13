import { motion } from "framer-motion";
import Image from "next/image";

const Results = ({freeTutoringRefClick}) => {
  return (
    <div className="w-full bg-[#25272c] sm:h-[112vh] py-[20vw] sm:py-0 relative overflow-hidden flex items-center justify-center">
      <Image
        width={10000}
        height={10000}
        src="/grid/noline.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0 opacity-20"
      />
      <div className="w-full h-full flex flex-col z-10 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sm:text-[5vw] text-[10vw] font-semibold text-white text-center leading-[105%] tracking-[-1.92px] pt-[20vw]"
          >
            View our Results
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sm:text-[1.25vw] text-[4vw] text-white font-light mt-[1.25vw] w-[80vw] sm:w-[30vw] tracking-[0.16px] text-center"
          >
            Discover the Results We&apos;ve Delivered So Far. Our Achievements
            Speak for Themselves.
          </motion.p>
        </div>
        <div className="flex flex-col sm:flex-row mt-[4vw] gap-[1.25vw] justify-between">
          {[
            { value: "1490", label: "SAT Average", color: "#3958F2" },
            { value: "10+", label: "USACO Promotions", color: "#F3B71D" },
            { value: "25%", label: "Test Improvement", color: "#F7711F" },
            { value: "5+", label: "AIME Qualifiers", color: "#F46036" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-[#383A42] py-8 rounded-[1.25vw] w-[80vw] sm:w-[20vw]"
            >
              <div className="flex flex-col items-center justify-center">
                <h1
                  className="sm:text-[3.75vw] text-[15vw] font-semibold"
                  style={{ color: item.color }}
                >
                  {item.value}
                </h1>
                <p className="sm:text-[1.25vw] text-[4vw] text-white tracking-[0.16px] leading-[160%] font-light">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row mt-[6vw] gap-[3.125vw] items-center justify-center  pb-[20vw]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex text-[4vw] text-center sm:text-left sm:text-[1vw] flex-col"
          >
            <p className="font-light text-white">
              Ready to Achieve Your Goals?
            </p>
            <p className="font-light text-white">
              Enroll Now and Join Our Success Stories!
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, translateY: -5 }}
            onClick={freeTutoringRefClick}
            className="sm:text-[1.09375vw] hover:-translate-y-1 duration-200 hover:scale-105 hover:bg-[#314ac7] transition-all sm:mt-0 mt-[2vw] text-[4vw] leading-[150%] font-semibold tracking-[0.02vw] px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] cursor-pointer bg-[#3958F2] rounded-full text-white "
          >
            Claim 1-Hour Free Tutoring
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Results;