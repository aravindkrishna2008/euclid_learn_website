import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const Quote = () => {
  return (
    <div className="bg-[#F7F9FC] px-[6.25vw] py-[10vw] flex flex-col items-center justify-cente ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col text-center justify-center items-center"
      >
        <Image
          width={10000}
          height={10000}
          src="/icons/smiley/smiley_group.svg"
          className="sm:w-[23vw] w-[70vw]"
          alt="quote"
        />
        <h1 className="sm:text-[2.8125vw] text-[8vw] w-[80vw] font-semibold text-[#25272C] tracking-[-0.06vw] leading-[115%]">
          Our Happy Students
        </h1>
        <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#25272C] mt-[1.25vw] w-[80vw] sm:w-[32vw] mx-auto">
          Don&apos;t just take our word for it. Hear what our students have to 
          say about their experience
        </p>
      </motion.div>
      <div className="flex flex-col sm:flex-row mt-[5vw] gap-[1.25vw] justify-between">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center gap-[1.25vw]"
        >
          <div className="rounded-[2.3vw] sm:h-[45vw] bg-white p-[5vw] sm:p-[2.5vw] flex flex-col justify-between">
            <Image
              width={10000}
              height={10000}
              src="/icons/general_icons/quote.svg"
              className="sm:w-[2.2vw] sm:h-[2.2vw] w-[5vw] h-[5vw]"
            />
            <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42] mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[23vw] mx-auto">
            We are grateful to Woojin for creating an incredibly positive learning environment for my daughter throughout the year. My daughter showed significant improvement in both test scores and grades in a short period of time. In essence, these classes identify the exact questions that appear on assessments and provide solutions in a way that is simple for the student to comprehend. My daughter highly recommends these classes to anyone looking to boost their academic performance and achieve better grades in school.
            </p>
            <div className="flex flex-row mt-[4vw] sm:mt-[1.25vw]">
              <Image
                width={10000}
                height={10000}
                src="/team/default.webp"
                className="sm:w-[4.6vw] sm:h-[4.6vw] h-[10vw] w-[10vw] rounded-full"
              />
              <div className="flex flex-col ml-[1.25vw] justify-center">
                <h1 className="sm:text-[1.4vw] text-[5vw] font-semibold text-[#5B616E] tracking-[-0.014vw] leading-[130%]">
                Anjali 

                </h1>
                <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#8E95A2]">
                  Parent
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[2.3vw] sm:h-[45vw] bg-white p-[5vw] sm:p-[2.5vw] flex flex-col justify-between">
            <Image
              width={10000}
              height={10000}
              src="/icons/general_icons/quote.svg"
              className="sm:w-[2.2vw] sm:h-[2.2vw] w-[5vw] h-[5vw]"
            />
            <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42] mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[23vw] mx-auto">
            Working with Abhinav was an amazing experience. Thanks to him and the team, I&apos;ve developed a solid strategy for navigating high school. Under Abhinav&apos;s guidance, I achieved a significant milestone by publishing my research paper in a respected journal (IEEE). I was suprised by how his advice not only boosted my grades but also sharpened my time management skills and increased my confidence in my own abilities. <Link href="https://assets-eu.researchsquare.com/files/rs-4294555/v2_covered_4399fd54-d645-4560-9f30-7b572780c2c3.pdf?c=1717434129" className="text-[#2a55ff] hover:underline">Link to my research paper</Link>
            </p>
            <div className="flex flex-row mt-[4vw] sm:mt-[1.25vw]">
              <Image
                width={10000}
                height={10000}
                src="/team/default.webp"
                className="sm:w-[4.6vw] sm:h-[4.6vw] h-[10vw] w-[10vw] rounded-full"
              />
              <div className="flex flex-col ml-[1.25vw] justify-center">
                <h1 className="sm:text-[1.4vw] text-[5vw] font-semibold text-[#5B616E] tracking-[-0.014vw] leading-[130%]">
              Shanker 
                </h1>
                <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#8E95A2]">
                San Jose, Ca
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-[1.25vw]"
        >
          <div className="rounded-[2.3vw] sm:h-[37vw] bg-white p-[5vw] sm:p-[2.5vw] flex flex-col justify-between">
            <Image
              width={10000}
              height={10000}
              src="/icons/general_icons/quote.svg"
              className="sm:w-[2.2vw] sm:h-[2.2vw] w-[5vw] h-[5vw]"
            />
            <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42] mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[23vw] mx-auto">
              Euclid Learn has done an excellent job of solidifying my
              daughter&apos;s understanding of calculus. My daughter
              significantly improved her testing average and grades in a short
              period of time. In essence, these classes identify the real
              questions that appear on assessments and provide solutions in a
              way that is simple for the student to comprehend. We are grateful
              to Abhinav for giving our daughter such a positive learning
              environment throughout the summer.
            </p>
            <div className="flex flex-row mt-[4vw] sm:mt-[1.25vw]">
              <Image
                width={10000}
                height={10000}
                src="/team/default.webp"
                className="sm:w-[4.6vw] sm:h-[4.6vw] h-[10vw] w-[10vw] rounded-full"
              />
              <div className="flex flex-col ml-[1.25vw] justify-center">
                <h1 className="sm:text-[1.4vw] text-[5vw] font-semibold text-[#5B616E] tracking-[-0.014vw] leading-[130%]">
                  John Doe
                </h1>
                <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#8E95A2]">
                  Parent
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[2.3vw] sm:h-[37vw] bg-white p-[5vw] sm:p-[2.5vw] flex flex-col justify-between">
            <Image
              width={10000}
              height={10000}
              src="/icons/general_icons/quote.svg"
              className="sm:w-[2.2vw] sm:h-[2.2vw] w-[5vw] h-[5vw]"
            />
            <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42] mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[23vw] mx-auto">
            Anirudh literally saved my academic career! I felt so lost and overwhelmed in my classes when April rolled around so I was convinced I would do terrible on the AP Exams. When a friend recommended Anirudh, I decided to give him a shot, and it turns out hes an AMAZING teacher. I still can&apos;t believe I scored a 5 on APUSH, Calculus AB and a 4 on AP Language. Please use him if your in a similar spot I seriously can&apos;t recommend this guy enough.
            </p>
            <div className="flex flex-row mt-[4vw] sm:mt-[1.25vw]">
              <Image
                width={10000}
                height={10000}
                src="/team/default.webp"
                className="sm:w-[4.6vw] sm:h-[4.6vw] h-[10vw] w-[10vw] rounded-full"
              />
              <div className="flex flex-col ml-[1.25vw] justify-center">
                <h1 className="sm:text-[1.4vw] text-[5vw] font-semibold text-[#5B616E] tracking-[-0.014vw] leading-[130%]">
                Stacy
                </h1>
                <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#8E95A2]">
                Wisconsin                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center gap-[1.25vw]"
        >
          <div className="rounded-[2.3vw] sm:h-[45vw] bg-white p-[5vw] sm:p-[2.5vw] flex flex-col justify-between">
            <Image
              width={10000}
              height={10000}
              src="/icons/general_icons/quote.svg"
              className="sm:w-[2.2vw] sm:h-[2.2vw] w-[5vw] h-[5vw]"
            />
            <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42] mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[23vw] mx-auto">
              Euclid Learn has done an excellent job of solidifying my
              daughter&apos;s understanding of calculus. My daughter
              significantly improved her testing average and grades in a short
              period of time. In essence, these classes identify the real
              questions that appear on assessments and provide solutions in a
              way that is simple for the student to comprehend. We are grateful
              to Abhinav for giving our daughter such a positive learning
              environment throughout the summer.
            </p>
            <div className="flex flex-row mt-[4vw] sm:mt-[1.25vw]">
              <Image
                width={10000}
                height={10000}
                src="/team/default.webp"
                className="sm:w-[4.6vw] sm:h-[4.6vw] h-[10vw] w-[10vw] rounded-full"
              />
              <div className="flex flex-col ml-[1.25vw] justify-center">
                <h1 className="sm:text-[1.4vw] text-[5vw] font-semibold text-[#5B616E] tracking-[-0.014vw] leading-[130%]">
                  John Doe
                </h1>
                <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#8E95A2]">
                  Parent
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[2.3vw] sm:h-[45vw] bg-white p-[5vw] sm:p-[2.5vw] flex flex-col justify-between">
            <Image
              width={10000}
              height={10000}
              src="/icons/general_icons/quote.svg"
              className="sm:w-[2.2vw] sm:h-[2.2vw] w-[5vw] h-[5vw]"
            />
            <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42] mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[23vw] mx-auto">
              Euclid Learn helped me develop a strategic plan to navigate high
              school by clarifying what I should prioritize. Through
              Abhinav&apos;s guidance, I was able to publish my research paper
              in a respectable journal. Furthermore, his suggestions improved my
              grades, time management, and confidence in my abilities.
            </p>
            <div className="flex flex-row mt-[4vw] sm:mt-[1.25vw]">
              <Image
                width={10000}
                height={10000}
                src="/team/default.webp"
                className="sm:w-[4.6vw] sm:h-[4.6vw] h-[10vw] w-[10vw] rounded-full"
              />
              <div className="flex flex-col ml-[1.25vw] justify-center">
                <h1 className="sm:text-[1.4vw] text-[5vw] font-semibold text-[#5B616E] tracking-[-0.014vw] leading-[130%]">
                  David
                </h1>
                <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#8E95A2]">
                  Tribeca, NY
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quote;