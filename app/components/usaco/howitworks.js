import { motion } from "framer-motion";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="bg-[#F7F2DF] py-[20vw] sm:py-[10vw] px-[6.25vw] flex flex-col items-center justify-center">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[#3958F2] text-[4vw] sm:text-[1.4vw] font-semibold"
      >
        How it works
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[#25272C] text-center text-[10vw] sm:text-[5vw] leading-[105%] tracking-[-1.92px] w-[80vw] sm:w-[55vw] mt-[1.25vw] font-semibold"
      >
        Reach USACO Platinum with our proven method
      </motion.h1>
      <div className="flex w-[100%] justify-between flex-col sm:flex-row gap-[1.25vw] mt-[5vw]">
        {[
          {
            step: "Step 1",
            title: "Assessment",
            description:
              "Upon enrollment, our mentors conduct a thorough assessment of the student's existing programming proficiency.",
          },
          {
            step: "Step 2",
            title: "Tailored Syllabus",
            description:
              "We develop a personalized syllabus based on the student's specific needs and aspirations.",
          },
          {
            step: "Step 3",
            title: "Mentorship",
            description:
              "Students are paired with a dedicated mentor who will lead them through each level until they achieve Platinum.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-[#FDF9E9] rounded-[1.25vw] border-2 shadow-xl border-[#3958F2] items-center p-[5vw] sm:p-[2.5vw]"
          >
            <p className="sm:text-[1.4vw] text-[4vw] mt-[0.625vw] font-semibold text-[#3958F2]">
              {item.step}
            </p>
            <h1 className="sm:text-[2vw] text-[5vw] font-semibold leading-[120%]">
              {item.title}
            </h1>
            <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2.5vw]">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
