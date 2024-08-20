import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-[#DCE3FD] py-[20vw] sm:py-[10vw] gap-[4vw] flex flex-col sm:flex-row items-center justify-center">
      <motion.figure
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          width={10000}
          height={10000}
          src="/icons/general_icons/block.gif"
          unoptimized
          className="sm:w-[25vw] w-[50vw]"
          alt="USACO Block Image"
        />
      </motion.figure>
      <motion.article
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="flex flex-col"
      >
        <h1 className="sm:text-[5vw] text-[10vw] text-[#0F0F0F] font-semibold tracking-[-1.92px]">
          About USACO
        </h1>
        <p className="sm:w-[37.5vw] w-[80vw] text-[#0F0F0F] text-[4vw] sm:text-[1.25vw] font-light">
          Euclid Learn excels in preparing students for the USA Computing
          Olympiad (USACO), a prestigious competition that demonstrates advanced
          problem-solving ability. Beyond coding, the USACO instills a strategic
          problem-solving mindset, shaping analytical thinkers to excel beyond
          the competition.
        </p>
      </motion.article>
    </section>
  );
};

export default About;
