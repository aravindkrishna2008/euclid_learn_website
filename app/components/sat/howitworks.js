import { motion } from "framer-motion";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="bg-[#FFFFFF] py-[20vw] sm:py-[10vw] px-[6.25vw] flex flex-col items-center justify-center">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[#25272C] text-center text-[10vw] sm:text-[5vw] leading-[105%] tracking-[-1.92px] w-[80vw] sm:w-[55vw] mt-[1.25vw] font-semibold"
      >
        Why Choose EUCLID for Your SAT Prep?
      </motion.h1>
      <div className="flex w-[100%] justify-between flex-col sm:flex-row gap-[1.25vw] mt-[5vw]">
        <motion.article
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#FDF9E9] rounded-[1.25vw] items-center p-[5vw] sm:p-[2.5vw]"
        >
          <Image
            src="/icons/medals/medal1st.svg"
            className="sm:w-[3.75vw] w-[10vw] sm:h-[3.75vw] mb-8 mt-8"
            width={100}
            height={100}
            alt="Best Tutors in SAT Prep"
          />
          <h2 className="sm:text-[2vw] text-[5vw] font-semibold leading-[120%]">
            Best Tutors in SAT Prep
          </h2>
          <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2.5vw]">
            All EUCLID tutors are chosen based on their previous records, extensive knowledge, and empathy.
          </p>
        </motion.article>
        <motion.article
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#F3F4FF] rounded-[1.25vw] items-center p-[5vw] sm:p-[3vw]"
        >
          <Image
            src="/icons/general_icons/user1.svg"
            className="sm:w-[3.75vw] w-[10vw] sm:h-[3.75vw] mb-8 mt-8"
            width={100}
            height={100}
            alt="Individualized Guidance"
          />
          <h2 className="sm:text-[2vw] text-[5vw] font-semibold leading-[120%]">
            Individualized Guidance
          </h2>
          <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2.5vw]">
            Work 1-on-1 with an SAT expert to build a personal study plan.
          </p>
        </motion.article>
        <motion.article
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#FDF9E9] rounded-[1.25vw] items-center p-[5vw] sm:p-[2.5vw]"
        >
          <Image
            src="/icons/general_icons/Group 82.svg"
            className="sm:w-[3.75vw] w-[10vw] sm:h-[3.75vw] mb-8 mt-8"
            width={100}
            height={100}
            alt="Study on Web or Mobile"
          />
          <h2 className="sm:text-[2vw] text-[5vw] font-semibold leading-[120%]">
            Study on Web Or Mobile
          </h2>
          <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2.5vw]">
            On the go? Our classes, practice tests, and resources are available on both mobile and on web.
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default HowItWorks;
