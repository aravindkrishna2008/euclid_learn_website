import { motion } from "framer-motion";
import Image from "next/image";

const WhyEuclid = () => {
  return (
    <section className="bg-[#F7F2DF] px-[6.25vw] py-[10vw] flex items-center flex-col">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[#3958F2] text-[3vw] sm:text-[1.2vw] font-semibold"
      >
        Why Choose EUCLID?
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[10vw] sm:text-[5vw] w-[80vw] sm:w-[50vw] text-center font-semibold leading-[105%] mt-[3.75vw]"
      >
        Gain a Competitive Advantage
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="sm:w-[27vw] w-[80vw] text-[4vw] font-light text-center mt-[2vw] sm:mt-[1vw] sm:text-[1.25vw]"
      >
        Receive exclusive one-on-one mentoring from our award-winning coaches.
      </motion.p>
      <motion.figure
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          width={10000}
          height={10000}
          src="/icons/smiley/smiley_yellow_blue.png"
          alt="Smiling yellow and blue icon"
          className="sm:w-[41vw] w-[80vw] mt-[7vw]"
        />
      </motion.figure>
      <div className="flex flex-col sm:flex-row mt-[12vw] gap-[1.25vw]">
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-yellow-50 p-8 rounded-[2.5vw]"
        >
          <Image
            width={10000}
            height={10000}
            src="/icons/general_icons/computer.svg"
            alt="Computer icon"
            className="sm:w-[2.5vw] sm:h-[2.5vw] sm:block hidden"
          />
          <div className="flex flex-col sm:w-[24vw]">
            <h2 className="sm:w-[50%] w-[100%] text-[6vw] sm:text-[2vw] font-semibold mt-[2.5vw] text-[#383A42] leading-[120%] tracking-[-0.28px]">
              One on One Learning
            </h2>
            <p className="sm:text-[1.25vw] text-[4vw] mt-[1vw] text-[#383A42] tracking-[0.16px] leading-[160%] font-light">
              Students connect with our mentors individually via Google Meet for
              private lessons, ensuring focused attention and personalized
              guidance.
            </p>
          </div>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-yellow-50 p-8 rounded-[2.5vw]"
        >
          <Image
            width={10000}
            height={10000}
            src="/icons/general_icons/brain.svg"
            alt="Brain icon"
            className="sm:w-[2.5vw] sm:h-[2.5vw] sm:block hidden"
          />
          <div className="flex flex-col sm:w-[24vw]">
            <h2 className="sm:w-[50%] w-[100%] text-[6vw] sm:text-[2vw] font-semibold mt-[2.5vw] text-[#383A42] leading-[120%] tracking-[-0.28px]">
              Understand Concepts Better
            </h2>
            <p className="sm:text-[1.25vw] text-[4vw] mt-[1vw] text-[#383A42] tracking-[0.16px] leading-[160%] font-light">
              Mentors personalize student solutions based on diagnostics and
              teach in an efficient manner by presenting uniquely insightful
              problems.
            </p>
          </div>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-yellow-50 p-8 rounded-[2.5vw]"
        >
          <Image
            width={10000}
            height={10000}
            src="/icons/general_icons/community.svg"
            alt="Community icon"
            className="sm:w-[2.5vw] sm:h-[2.5vw] sm:block hidden"
          />
          <div className="flex flex-col sm:w-[24vw]">
            <h2 className="sm:w-[50%] w-[100%] text-[6vw] sm:text-[2vw] font-semibold mt-[2.5vw] text-[#383A42] leading-[120%] tracking-[-0.28px]">
              Students Come First
            </h2>
            <p className="sm:text-[1.25vw] text-[4vw] mt-[1vw] text-[#383A42] tracking-[0.16px] leading-[160%] font-light">
              Lessons are taught with the student in mind and we prioritize and
              optimize performance on the assessments they want to focus on.
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default WhyEuclid;
