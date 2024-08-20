import { motion } from "framer-motion";
import Image from "next/image";

const Approach = () => {
  return (
    <section className="bg-[#F5F7FA] py-[20vw] sm:py-[10vw] px-[6.25vw] flex flex-col items-center justify-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[#3958F2] text-[4vw] sm:text-[1.4vw] font-semibold"
      >
        How it works
      </motion.p>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[#25272C] text-center text-[10vw] sm:text-[5vw] leading-[105%] tracking-[-1.92px] w-[80vw] sm:w-[55vw] mt-[1.25vw] font-semibold"
      >
        Our Approach to SAT
      </motion.h1>
      <div className="flex w-[100%] justify-between flex-col sm:flex-row gap-[1.25vw] mt-[5vw]">
        <motion.article
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#ffffff] rounded-[1.25vw] border-2 shadow-xl border-[#3958F2] items-center p-[5vw] sm:p-[2.5vw]"
        >
          <header>
            <p className="sm:text-[1.4vw] text-[4vw] mt-[0.625vw] font-semibold text-[#3958F2]">
              Step 1
            </p>
            <h2 className="sm:text-[2vw] text-[5vw] font-semibold leading-[120%]">
              Assessment
            </h2>
          </header>
          <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2.5vw]">
            Upon enrollment, we gather info from you about your academic
            background, study style, and goals.
          </p>
        </motion.article>
        <motion.article
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#ffffff] rounded-[1.25vw] items-center p-[5vw] sm:p-[2.5vw]"
        >
          <header>
            <p className="sm:text-[1.4vw] text-[4vw] mt-[0.625vw] font-semibold text-[#3958F2]">
              Step 2
            </p>
            <h2 className="sm:text-[2vw] text-[5vw] font-semibold leading-[120%]">
              Match
            </h2>
          </header>
          <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2.5vw] mb-[3.5vw]">
            Once we understand your needs, we select the tutor who is the best
            fit for the results you wish to achieve.
          </p>
        </motion.article>
        <motion.article
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#ffffff] rounded-[1.25vw] items-center p-[5vw] sm:p-[2.5vw]"
        >
          <header>
            <p className="sm:text-[1.4vw] text-[4vw] mt-[0.625vw] font-semibold text-[#3958F2]">
              Step 3
            </p>
            <h2 className="sm:text-[2vw] text-[5vw] font-semibold leading-[120%]">
              A Custom Plan
            </h2>
          </header>
          <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2.5vw]">
            Each tutor creates a study plan to fit each individual
            student&apos;s needs and schedule.
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default Approach;
