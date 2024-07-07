import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#EFF3FF] py-[20vw] px-[6.25vw] sm:py-[10vw] gap-[2vw] grid grid-cols-1 sm:grid-cols-2 items-center justify-between">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col bg-white py-[3.75vw] px-[2.5vw] rounded-[1.875vw] w-[100%] sm:w-[43vw]"
      >
        <div className="flex flex-row items-center gap-[5vw] sm:gap-[1vw]">
          <Image
            src="/icons/general_icons/i_icon.svg"
            className="sm:w-[3.75vw] w-[10vw] sm:h-[3.75vw]"
            width={100}
            height={100}
          />
          <h1 className="text-[#202588] text-[8vw] sm:text-[2vw] tracking-[-0.28px] font-semibold leading-[120%]">
            About AIME
          </h1>
        </div>
        <p className="text-[#181953] text-[4vw] sm:text-[1.25vw] leading-[160%] mt-[2.5vw] tracking-[0.16px] font-light">
          The American Invitational Mathematics Exam (AIME) is a highly
          prestigious math competition organized by the Mathematical Association
          of America (MAA).
          <br />
          <br />
          AIME math contests are the next step in the AMC series of competitions
          that culminate with the International Mathematical Olympiad (IMO). Top
          scorers of the AMC 10 and 12 are invited to appear for the AIME. Each
          year, there are roughly 3000 AIME qualifiers, though the exact number
          varies. <br />
          <br />
          The AIME test consists of 15 questions to be completed in 3 hours, and
          each answer is an integer between 000 and 999. A student&apos;s AIME
          score is calculated by the number of questions they answer correctly.
          There is no negative marking in AIME results. <br />
          <br />
          Top students who receive an AIME qualifying score are invited to take
          the USA&apos;s national math olympiad, which is the next stage in the
          series of math competitions.
        </p>
      </motion.div>
      <div className="grid grid-rows-2 gap-[2vw] w-[100%] sm:w-[43vw] h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col bg-white py-[3.75vw] px-[2.5vw] rounded-[1.875vw] w-[100%] sm:w-[43vw]"
        >
          <div className="flex flex-row items-center gap-[5vw] sm:gap-[1vw]">
            <Image
              src="/icons/general_icons/book.svg"
              className="sm:w-[3.75vw] w-[10vw] sm:h-[3.75vw]"
              width={100}
              height={100}
            />
            <h1 className="text-[#202588] text-[8vw] sm:text-[2vw] tracking-[-0.28px] font-semibold leading-[120%]">
              Syllabus
            </h1>
          </div>
          <p className="text-[#181953] text-[4vw] sm:text-[1.25vw] leading-[160%] mt-[2.5vw] tracking-[0.16px] font-light">
            Algebra, Geometry, Number Theory, and Combinatorics.
            <br />
            <br />
            Challenging contest with only a handful of high scores. Qualifying
            is quite an accomplishment, and very few are able to solve many
            questions on it. Deep understanding of the topics in necessary.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col bg-white py-[3.75vw] px-[2.5vw] rounded-[1.875vw] w-[100%] sm:w-[43vw]"
        >
          <div className="flex flex-row items-center gap-[5vw] sm:gap-[1vw]">
            <Image
              src="/icons/general_icons/schedule.svg"
              className="sm:w-[3.75vw] w-[10vw] sm:h-[3.75vw]"
              width={100}
              height={100}
            />
            <h1 className="text-[#202588] text-[8vw] sm:text-[2vw] tracking-[-0.28px] font-semibold leading-[120%]">
              Schedule
            </h1>
          </div>
          <p className="text-[#181953] text-[4vw] sm:text-[1.25vw] leading-[160%] mt-[2.5vw] tracking-[0.16px] font-light">
            The AIME is generally sometime in early-to-mid March, and occurs
            about one month after the AMC 10/12.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;