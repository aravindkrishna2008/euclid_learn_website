import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Quote = () => {
  return (
    <section className="bg-[#F7F9FC] px-[6.25vw] py-[10vw] flex flex-col items-center justify-center">
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
          alt="Smiling Group"
        />
        <h1 className="sm:text-[2.8125vw] text-[8vw] w-[80vw] font-semibold text-[#25272C] tracking-[-0.06vw] leading-[115%]">
          Our Happy Students
        </h1>
        <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#25272C] mt-[1.25vw] w-[80vw] sm:w-[32vw] mx-auto">
          Don&apos;t just take our word for it. Hear what our students have to say about their experience.
        </p>
      </motion.div>
      <div className="flex flex-col sm:flex-row mt-[5vw] gap-[1.25vw] justify-between">
        <motion.article
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center gap-[1.25vw]"
        >
          <blockquote className="rounded-[2.3vw] sm:h-[45vw] bg-white p-[5vw] sm:p-[2.5vw] flex flex-col justify-between">
            <Image
              width={10000}
              height={10000}
              src="/icons/general_icons/quote.svg"
              className="sm:w-[2.2vw] sm:h-[2.2vw] w-[5vw] h-[5vw]"
              alt="Quote Icon"
            />
            <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42] mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[23vw] mx-auto">
              We are grateful to Woojin for creating an incredibly positive learning environment for my daughter throughout the year. My daughter showed significant improvement in both test scores and grades in a short period of time. In essence, these classes identify the exact questions that appear on assessments and provide solutions in a way that is simple for the student to comprehend. My daughter highly recommends these classes to anyone looking to boost their academic performance and achieve better grades in school.
            </p>
            <footer className="flex flex-row mt-[4vw] sm:mt-[1.25vw]">
              <Image
                width={10000}
                height={10000}
                src="/team/default.webp"
                className="sm:w-[4.6vw] sm:h-[4.6vw] h-[10vw] w-[10vw] rounded-full"
                alt="Anjali"
              />
              <div className="flex flex-col ml-[1.25vw] justify-center">
                <h2 className="sm:text-[1.4vw] text-[5vw] font-semibold text-[#5B616E] tracking-[-0.014vw] leading-[130%]">
                  Anjali
                </h2>
                <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#8E95A2]">
                  Parent
                </p>
              </div>
            </footer>
          </blockquote>
          <blockquote className="rounded-[2.3vw] sm:h-[45vw] bg-white p-[5vw] sm:p-[2.5vw] flex flex-col justify-between">
            <Image
              width={10000}
              height={10000}
              src="/icons/general_icons/quote.svg"
              className="sm:w-[2.2vw] sm:h-[2.2vw] w-[5vw] h-[5vw]"
              alt="Quote Icon"
            />
            <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42] mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[23vw] mx-auto">
              Working with Abhinav was a game changer and an amazing experience. Under Abhinav&apos;s guidance, I achieved a significant milestone by publishing my research paper in a respected journal (IEEE). I was surprised by how his advice not only boosted my grades but also sharpened my time management skills and increased my confidence in my own abilities. Abhinav and the team played a crucial role in developing a comprehensive strategy for navigating high school successfully.{" "}
              <Link
                href="https://assets-eu.researchsquare.com/files/rs-4294555/v2_covered_4399fd54-d645-4560-9f30-7b572780c2c3.pdf?c=1717434129"
                className="text-[#2a55ff] hover:underline"
              >
                Link to my research paper
              </Link>
            </p>
            <footer className="flex flex-row mt-[4vw] sm:mt-[1.25vw]">
              <Image
                width={10000}
                height={10000}
                src="/team/default.webp"
                className="sm:w-[4.6vw] sm:h-[4.6vw] h-[10vw] w-[10vw] rounded-full"
                alt="Shanker"
              />
              <div className="flex flex-col ml-[1.25vw] justify-center">
                <h2 className="sm:text-[1.4vw] text-[5vw] font-semibold text-[#5B616E] tracking-[-0.014vw] leading-[130%]">
                  Shanker
                </h2>
                <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#8E95A2]">
                  Student
                </p>
              </div>
            </footer>
          </blockquote>
        </motion.article>
        <motion.article
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-[1.25vw]"
        >
          <blockquote className="rounded-[2.3vw] sm:h-[45vw] bg-white p-[5vw] sm:p-[2.5vw] flex flex-col justify-between">
            <Image
              width={10000}
              height={10000}
              src="/icons/general_icons/quote.svg"
              className="sm:w-[2.2vw] sm:h-[2.2vw] w-[5vw] h-[5vw]"
              alt="Quote Icon"
            />
            <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42] mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[23vw] mx-auto">
              Abhinav&apos;s expertise in teaching competitive programming is unmatched. What sets Abhinav apart is his commitment to his students and attention to detail —he consistently went above and beyond to assist with practice problems, making sure I thorougly understood every concept, even outside of our sessions. Abhinav is also very approachable and creates a comfortable learning environment where I never hesitated to ask questions or seek clarification. I highly recommend his services without reservation.
            </p>
            <footer className="flex flex-row mt-[4vw] sm:mt-[1.25vw]">
              <Image
                width={10000}
                height={10000}
                src="/team/default.webp"
                className="sm:w-[4.6vw] sm:h-[4.6vw] h-[10vw] w-[10vw] rounded-full"
                alt="Anish"
              />
              <div className="flex flex-col ml-[1.25vw] justify-center">
                <h2 className="sm:text-[1.4vw] text-[5vw] font-semibold text-[#5B616E] tracking-[-0.014vw] leading-[130%]">
                  Anish
                </h2>
                <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#8E95A2]">
                  Student
                </p>
              </div>
            </footer>
          </blockquote>
          <blockquote className="rounded-[2.3vw] sm:h-[37vw] bg-white p-[5vw] sm:p-[2.5vw] flex flex-col justify-between">
            <Image
              width={10000}
              height={10000}
              src="/icons/general_icons/quote.svg"
              className="sm:w-[2.2vw] sm:h-[2.2vw] w-[5vw] h-[5vw]"
              alt="Quote Icon"
            />
            <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42] mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[23vw] mx-auto">
              Anirudh literally saved my academic career! I felt so lost and overwhelmed in my classes when April rolled around so I was convinced I would do terrible on the AP Exams. When a friend recommended Anirudh, I decided to give him a shot, and it turns out hes an AMAZING teacher. I still can&apos;t believe I scored a 5 on APUSH, Calculus AB and a 4 on AP Biology. If you find yourself in a similar situation, give him a try - I seriously can&apos;t recommend this guy enough.
            </p>
            <footer className="flex flex-row mt-[4vw] sm:mt-[1.25vw]">
              <Image
                width={10000}
                height={10000}
                src="/team/default.webp"
                className="sm:w-[4.6vw] sm:h-[4.6vw] h-[10vw] w-[10vw] rounded-full"
                alt="Stacy"
              />
              <div className="flex flex-col ml-[1.25vw] justify-center">
                <h2 className="sm:text-[1.4vw] text-[5vw] font-semibold text-[#5B616E] tracking-[-0.014vw] leading-[130%]">
                  Stacy
                </h2>
                <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#8E95A2]">
                  Student
                </p>
              </div>
            </footer>
          </blockquote>
        </motion.article>
        <motion.article
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center gap-[1.25vw]"
        >
          <blockquote className="rounded-[2.3vw] sm:h-[45vw] bg-white p-[5vw] sm:p-[2.5vw] flex flex-col justify-between">
            <Image
              width={10000}
              height={10000}
              src="/icons/general_icons/quote.svg"
              className="sm:w-[2.2vw] sm:h-[2.2vw] w-[5vw] h-[5vw]"
              alt="Quote Icon"
            />
            <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42] mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[23vw] mx-auto">
              Abhinav&apos;s sessions were a masterclass of how to teach the SAT. I am still shocked that I scored a 1550 on the SAT with only a couple months of practice. Abhinav recognized that I&apos;m a lazy person so he personalized the instruction in a way where I could play to my strengths. One of his mottos is work smarter not harder which is something I have come to realize played an important role in my success. Nobody likes the hassle of preparing for the SAT, rather than take it several times get yourself a seasoned expert like Abhinav so you can knock it out of the ballpark in one go!
            </p>
            <footer className="flex flex-row mt-[4vw] sm:mt-[1.25vw]">
              <Image
                width={10000}
                height={10000}
                src="/team/default.webp"
                className="sm:w-[4.6vw] sm:h-[4.6vw] h-[10vw] w-[10vw] rounded-full"
                alt="Charlie"
              />
              <div className="flex flex-col ml-[1.25vw] justify-center">
                <h2 className="sm:text-[1.4vw] text-[5vw] font-semibold text-[#5B616E] tracking-[-0.014vw] leading-[130%]">
                  Charlie
                </h2>
                <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#8E95A2]">
                  Student
                </p>
              </div>
            </footer>
          </blockquote>
          <blockquote className="rounded-[2.3vw] sm:h-[45vw] bg-white p-[5vw] sm:p-[2.5vw] flex flex-col justify-between">
            <Image
              width={10000}
              height={10000}
              src="/icons/general_icons/quote.svg"
              className="sm:w-[2.2vw] sm:h-[2.2vw] w-[5vw] h-[5vw]"
              alt="Quote Icon"
            />
            <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42] mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[23vw] mx-auto">
              I worked with Abhinav 1 month prior to the AMC. Knowing barely anything and feeling rusty, I felt extremely stressed and anxious about the lack of proper training on the days leading up to the contest but I put my trust in Abhinav. Though I didn&apos;t qualify for the AIME, I improved my score by 20% and it&apos;s an all-time high. I plan on continuing to work with the Euclid Learn team and hopefully this coming contest I can qualify!
            </p>
            <footer className="flex flex-row mt-[4vw] sm:mt-[1.25vw]">
              <Image
                width={10000}
                height={10000}
                src="/team/default.webp"
                className="sm:w-[4.6vw] sm:h-[4.6vw] h-[10vw] w-[10vw] rounded-full"
                alt="Ethan"
              />
              <div className="flex flex-col ml-[1.25vw] justify-center">
                <h2 className="sm:text-[1.4vw] text-[5vw] font-semibold text-[#5B616E] tracking-[-0.014vw] leading-[130%]">
                  Ethan
                </h2>
                <p className="sm:text-[1.25vw] text-[4vw] font-light text-[#8E95A2]">
                  Student
                </p>
              </div>
            </footer>
          </blockquote>
        </motion.article>
      </div>
    </section>
  );
};

export default Quote;
