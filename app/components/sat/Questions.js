import { motion } from "framer-motion";
import Image from "next/image";

const ParentQuestionsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[#25272C] text-center text-[10vw] sm:text-[5vw] leading-[105%] tracking-[-1.92px] w-[80vw] sm:w-[55vw] mt-[1.25vw] font-semibold mb-[1vw]"
      >
        Parents, Do You Have Questions?
      </motion.h1>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="p-6 rounded-full mb-2"
      >
        <Image
          src="/stock_image/sat/Vector.svg"
          className="sm:w-[100vw] w-[50vw] sm:h-[15vw] mb-4 mt-8"
          width={1000}
          height={1000}
        />
      </motion.div>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-gray-700 text-center mb-6 max-w-md"
      >
        Talk to an SAT expert and have all of your questions answered – for free. You&apos;ll know exactly where you stand and where to go next.
      </motion.p>
      <div className="flex flex-col sm:flex-row mt-[5vw] sm:mt-[1.5vw] gap-[2vw] sm:gap-[0.9375vw]">
        <motion.div
          whileHover={{ scale: 1.05, translateY: -5 }}
          className="sm:text-[1.09375vw] hover:bg-[#314ac7] transition-all text-[4vw] leading-[150%] font-semibold tracking-[0.02vw] px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] cursor-pointer bg-[#3958F2] rounded-full text-white"
        >
          Call Now
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, translateY: -5 }}
          className="sm:text-[1.09375vw] text-[4vw] leading-[150%] border hover:border-[#314ac7] hover:text-[#314ac7] border-[#3958F2] font-semibold tracking-[0.02vw] cursor-pointer px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] text-[#3958F2] rounded-full"
        >
          Book A Free Meeting
        </motion.div>
      </div>
    </section>
  );
};

export default ParentQuestionsSection;