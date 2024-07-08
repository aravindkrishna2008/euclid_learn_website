import { motion } from "framer-motion";
import Image from "next/image";

const Teachers = ({ teacherRef }) => {
  return (
    <div className="bg-white flex flex-col items-center justify-center py-[10vw] px-[17vw]">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[#25272C] font-semibold text-[10vw] sm:text-[5vw] leading-snug"
      >
        Our Teachers
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[#25272C] font-light text-[4vw] sm:text-[1.25vw] mt-[1vw] text-center w-[80vw] sm:w-[50%]"
      >
        Our team is composed of diligent top-performing students with
        prestigious awards, high standardized test scores, and extensive
        teaching experience.
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-[4vw] sm:gap-[1.25vw] mt-[5vw]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-[1.875vw] justify-center items-center text-center"
        >
          <Image width={10000} height={10000} src="/team/Anirudh.png" />
          <div>
            <p className="text-[#5B616E] text-[5vw] sm:text-[1.4vw] font-semibold tracking-normal">
              Anirudh Shyam
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              4 Yrs of Mentoring Experience
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              1580 SAT Score
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-[1.875vw] justify-center items-center text-center"
        >
          <Image width={10000} height={10000} src="/team/Woojin.png" />
          <div>
            <p className="text-[#5B616E] text-[5vw] sm:text-[1.4vw] font-semibold tracking-normal">
              Woojin Yoon
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              1560 SAT Score
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              USAMO
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-[1.875vw] justify-center items-center text-center"
        >
          <Image width={10000} height={10000} src="/team/Abhinav.png" />
          <div>
            <p className="text-[#5B616E] text-[5vw] sm:text-[1.4vw] font-semibold tracking-normal">
              Abhinav Raja
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              Distinguished Honor Roll Top 1%
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              USACO Platinum
            </p>
          </div>
        </motion.div>
      </div>
      {/* <div ref={teacherRef}></div> */}
    </div>
  );
};

export default Teachers;
