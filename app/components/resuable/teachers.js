import { motion } from "framer-motion";
import Image from "next/image";

const Teachers = ({ teacherRef }) => {
  return (
    <section className="bg-white flex flex-col items-center justify-center py-[10vw] px-[17vw]">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[#25272C] font-semibold text-[10vw] sm:text-[5vw] leading-snug"
      >
        Our Teachers
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[#25272C] font-light text-[4vw] sm:text-[1.25vw] mt-[1vw] text-center w-[80vw] sm:w-[50%]"
      >
        Our team is composed of diligent top-performing students with prestigious awards, high standardized test scores, and extensive teaching experience.
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[4vw] sm:gap-[1.25vw] mt-[5vw]">
        
        <motion.article
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-[1.875vw] justify-center items-center text-center"
        >
          <Image
            src="/team/orange3.png"
            width={300}
            height={300}
            className="object-cover rounded-[2vw] fixed-size"
            alt="Shivang Tiwari"
          />
          <div>
            <h2 className="text-[#5B616E] text-[5vw] sm:text-[1.4vw] font-semibold tracking-normal">
              Shivang Tiwari
            </h2>
            <p className="text-[#196aff] font-light text-[3vw] sm:text-[1vw] underline">
              <a href="https://icpc.global/ICPCID/TA70T9WDEW5N" target="_blank" rel="noopener noreferrer">
                ICPC 2023 World Finalist
              </a>
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              EE at IIT Bombay
            </p>
          </div>
        </motion.article>

        <motion.article
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-[1.875vw] justify-center items-center text-center"
        >
          <Image
            src="/team/Abhinav.png"
            width={300}
            height={300}
            className="object-cover rounded-[2vw] fixed-size"
            alt="Abhinav Raja"
          />
          <div>
            <h2 className="text-[#5B616E] text-[5vw] sm:text-[1.4vw] font-semibold tracking-normal">
              Abhinav Raja
            </h2>
            <p className="text-[#196aff] font-light text-[3vw] sm:text-[1vw] underline">
              <a href="https://usaco.org/current/data/open24_gold_results.html#:~:text=Abhinav%20Raja" target="_blank" rel="noopener noreferrer">
                USACO Platinum
              </a>
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              1580 SAT Score
            </p>
          </div>
        </motion.article>

        <motion.article
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-[1.875vw] justify-center items-center text-center"
        >
          <Image
            src="/team/Woojin.png"
            width={300}
            height={300}
            className="object-cover rounded-[2vw] fixed-size"
            alt="Woojin Yoon"
          />
          <div>
            <h2 className="text-[#5B616E] text-[5vw] sm:text-[1.4vw] font-semibold tracking-normal">
              Woojin Yoon
            </h2>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              240 USAMO Index
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              1570 SAT Score
            </p>
          </div>
        </motion.article>
        
        <motion.article
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-[1.875vw] justify-center items-center text-center"
        >
          <Image
            src="/team/someguy.webp"
            width={300}
            height={300}
            className="object-cover rounded-[2vw] fixed-size"
            alt="Ritam Chakraborty"
          />
          <div>
            <h2 className="text-[#5B616E] text-[5vw] sm:text-[1.4vw] font-semibold tracking-normal">
              Ritam Chakraborty
            </h2>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              CDSS @ UC Berkeley
            </p>
          </div>
        </motion.article>
      </div>
      <div ref={teacherRef}></div>
    </section>
  );
};

export default Teachers;
