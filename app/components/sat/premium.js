import { motion } from "framer-motion";
import Image from "next/image";

const PremiumTutoring = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center h-screen bg-blue-600 text-white"
    >
      <header className="text-center mt-[20vh]">
        <h1 className="text-4xl sm:text-[4vw] text-[10vw] font-semibold leading-[120%]">
          Premium Tutoring
        </h1>
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-4 rounded-full"
          >
            <Image
              src="/icons/medals/Group.svg"
              className="sm:w-[100vw] w-[30vw] sm:h-[10vw] mb-8 mt-8"
              width={1000}
              height={1000}
              alt="Premium Tutoring Medal"
            />
          </motion.div>
        </div>
      </header>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-light text-[#ffffff] text-center w-[80vw] text-[4vw] sm:w-[34vw] sm:text-[1.25vw] leading-[160%] tracking-[0.28px]"
      >
        This is next-level SAT prep. Our premium tutors have all scored in the 99th percentile and have been teaching for more than 8 years. They&apos;ll provide personalized, one-on-one support tailored to your specific needs.
      </motion.p>
    </motion.section>
  );
};

export default PremiumTutoring;
