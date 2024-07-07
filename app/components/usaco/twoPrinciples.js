import { motion } from "framer-motion";
import Image from "next/image";

const TwoPrinciples = () => {
  return (
    <div className="bg-[#293CE7] pb-[30vw] py-[20vw] sm:pb-[20vw] relative sm:py-[10vw] flex flex-col items-center justify-center">
      <Image
        width={10000}
        height={10000}
        src="/icons/smiley/blue_yellow_smile.svg"
        alt="blue yellow smile"
        className="w-[10vw] h-[10vw] object-cover top-[2vw] -rotate-12 right-0 absolute"
      />
      <Image
        width={10000}
        height={10000}
        src="/icons/smiley/blue_yellow_smile.svg"
        alt="blue yellow smile"
        className="w-[10vw] h-[10vw] object-cover bottom-0 left-[4vw] absolute"
      />
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="sm:text-[1.4vw] text-[4vw] text-[#F3B71D]"
      >
        Our Approach to USACO
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white text-[10vw] sm:text-[5vw] w-[80vw] sm:w-[50vw] tracking-[-1.92px] leading-[105%] text-center mt-[2.5vw] font-semibold"
      >
        Coaching based on Two Core Principles
      </motion.h1>
      <div className="flex gap-[1.25vw] flex-col sm:flex-row mt-[6.25vw]">
        {[
          {
            title: "Every Student is Unique",
            description:
              "Every student has a different level of coding and problem-solving experience, so we develop syllabus according to their experience level.",
            imgSrc: "/icons/general_icons/user.svg",
          },
          {
            title: "Mastery requires practice",
            description:
              "We understand that mastering algorithmic programming requires regular practice and reflective learning. That is why, our course is structured in a way to ensure that students receive consistent practice.",
            imgSrc: "/icons/general_icons/medal.svg",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className={`flex flex-col bg-[#3958F2] rounded-[1.875vw] w-[80vw] sm:w-[28vw] py-[5vw] px-[5vw] sm:px-[2.5vw] ${index === 1 ? "translate-y-0 sm:translate-y-[6.25vw]" : ""}`}
          >
            <Image
              width={10000}
              height={10000}
              src={item.imgSrc}
              alt={item.title}
              className="sm:w-[3.75vw] sm:h-[3.75vw] sm:block hidden object-cover"
            />
            <h1 className="sm:text-[2vw] text-[5vw] mt-[3.4375vw] font-semibold w-[50vw] sm:w-[16vw] leading-[120%] text-white">
              {item.title}
            </h1>
            <p className="sm:text-[1.25vw] text-[4vw] text-white font-light leading-[160%] tracking-[0.16px] mt-[1vw]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TwoPrinciples;