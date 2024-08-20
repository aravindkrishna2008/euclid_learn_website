import { motion } from "framer-motion";

const Reasons = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between py-[10vw] px-[6.25vw] bg-[#F7F2DF]">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="sm:text-[5vw] text-[10vw] text-[#25272C] w-[80vw] sm:w-[24.5vw] font-semibold leading-[105%] tracking-[-1.92px]"
      >
        3 Reasons to Take AP Exams
      </motion.h2>
      <div className="flex mt-[5vw] sm:mt-[1.25vw] flex-col sm:flex-row gap-[1.25vw] items-center">
        <div className="flex flex-col gap-[1.25vw]">
          <motion.article
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="sm:p-[2.5vw] p-[5vw] sm:w-[25vw] rounded-[1.875vw] bg-[#FDF9E9]"
          >
            <header>
              <p className="sm:text-[1.4vw] text-[4vw] text-[#3958F2] mt-[0.625vw] font-semibold">
                #1
              </p>
              <h3 className="w-[100%] text-[5vw] sm:text-[2vw] text-[#383A42] leading-[120%] font-semibold">
                Get college
                <br /> credit
              </h3>
            </header>
            <p className="text-[4vw] sm:text-[1.25vw] mt-[2.5vw] font-light text-[#383A42]">
              Many colleges and universities offer course credit or advanced standing for high scores on AP exams. This can allow you to skip introductory courses, save money, & even graduate earlier.
            </p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="hidden sm:block p-[2.5vw] sm:w-[25vw] rounded-[1.875vw] bg-[#FDF9E9]"
          >
            <header>
              <p className="sm:text-[1.4vw] text-[4vw] text-[#3958F2] mt-[0.625vw] font-semibold">
                #3
              </p>
              <h3 className="w-[100%] text-[5vw] sm:text-[2vw] text-[#383A42] leading-[120%] font-semibold">
                Stand Out
                <br /> to institutes
              </h3>
            </header>
            <p className="text-[4vw] sm:text-[1.25vw] mt-[2.5vw] font-light text-[#383A42]">
              Many colleges and universities offer course credit or advanced standing for high scores on AP exams. This can allow you to skip introductory courses, save money, & even graduate earlier.
            </p>
          </motion.article>
        </div>
        <div className="flex flex-col gap-[1.25vw]">
          <motion.article
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sm:p-[2.5vw] p-[5vw] sm:w-[25vw] rounded-[1.875vw] bg-[#FDF9E9]"
          >
            <header>
              <p className="sm:text-[1.4vw] text-[4vw] text-[#3958F2] mt-[0.625vw] font-semibold">
                #2
              </p>
              <h3 className="w-[100%] text-[5vw] sm:text-[2vw] text-[#383A42] leading-[120%] font-semibold">
                Elevate your Success Odds
              </h3>
            </header>
            <p className="text-[4vw] sm:text-[1.25vw] mt-[2.5vw] font-light text-[#383A42]">
              Research shows that students who take AP exams have better college outcomes than their peers. Whatever your score, taking an AP Exam can keep you on track for college.
            </p>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="sm:hidden p-[5vw] sm:w-[25vw] rounded-[1.875vw] bg-[#FDF9E9]"
          >
            <header>
              <p className="sm:text-[1.4vw] text-[4vw] text-[#3958F2] mt-[0.625vw] font-semibold">
                #3
              </p>
              <h3 className="w-[100%] text-[5vw] sm:text-[2vw] text-[#383A42] leading-[120%] font-semibold">
                Stand Out
                <br /> to institutes
              </h3>
            </header>
            <p className="text-[4vw] sm:text-[1.25vw] mt-[2.5vw] font-light text-[#383A42]">
              Many colleges and universities offer course credit or advanced standing for high scores on AP exams. This can allow you to skip introductory courses, save money, & even graduate earlier.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
