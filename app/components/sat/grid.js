import { motion } from "framer-motion";
import Image from "next/image";

const Grid = () => {
  return (
    <div className="relative bg-[#F5F7FA]">
      <div className="container mx-auto p-4">
        <div className="grid sm:grid-cols-2 gap-2 pb-[20vh]">
          {/* Row 1: Image and Text */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col sm:flex-row gap-[10vw] rounded-[1.25vw]"
          >
            <Image
              width={10000}
              height={10000}
              src="/stock_image/sat/sat1.jpeg"
              alt="ap1"
              className="rounded-[1.25vw] h-[40vh] object-cover mt-[10vh]"
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center pb-[0.5vh] sm:mt-0 mt-[10vw] sm:ml-[10vw]"
          >
            <p className="sm:text-[3.75vw] sm:w-[30vw] text-[10vw] font-semibold leading-[120%]">
              We&apos;ll Meet You Where You Are
            </p>
            <p className="font-light text-[#383A42] text-[4vw] sm:w-[20vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] pt-[1vh]">
              We match each student to the right tutor for them. Online tools
              like animated whiteboards and digital notes make it simple to
              learn.
            </p>
          </motion.div>

          {/* Row 2: Text and Image */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center sm:hidden items-center mt-[5vh]"
          >
            <Image
              width={10000}
              height={10000}
              src="/stock_image/sat/sat2.jpeg"
              alt="ap1"
              className="rounded-[1.25vw] h-[50vh] w-[130vh] object-cover mt-[5vh]"
            />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center sm:mt-0 mt-[10vw] pt-[0.5vh]"
          >
            <p className="text-left sm:text-[3.75vw] sm:w-[30vw] text-[10vw] font-semibold leading-[120%] tl-[30vh]">
              Stay Engaged and Accountable
            </p>
            <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] sm:pr-[18vh] pt-[1vh]">
              We match each student to the right tutor for them. Online tools
              like animated whiteboards and digital notes make it simple to
              learn.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="justify-center hidden sm:flex items-center mt-[5vh]"
          >
            <Image
              width={10000}
              height={10000}
              src="/stock_image/sat/sat2.jpeg"
              alt="ap1"
              className="rounded-[1.25vw] h-[50vh] w-[130vh] object-cover mt-[5vh]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Grid;