import Image from "next/image";
import OfferingModal from "./offeringModal";
import { motion } from "framer-motion";

const Offerings = () => {
  return (
    <section className="bg-[#293CE7] relative py-[20vw] text-white sm:py-[10vw] px-[5vw] flex flex-col items-center justify-center">
      <Image
  width={10000}
  height={10000}
  src="/icons/smiley/blue_yellow_smile.svg"
  className="absolute -top-[5vw] left-[10vw] z-10 sm:w-[10vw] w-[10vw]"
  alt="Blue and yellow smiley face icon"
/>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="sm:text-[5vw] text-[10vw] w-[80vw] sm:w-[40vw] text-center leading-[105%] font-semibold tracking-[-1.92px]"
      >
        Our AP Course Offerings
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="sm:w-[30vw] w-[80vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw] text-center font-light"
      >
        Our AP Tutoring is available for these exams. Click the icon next to the exam name to learn more about it.
      </motion.p>
      <div className="flex w-[100%] justify-around flex-col sm:flex-row gap-[1.25vw] mt-[5vw]">
        {[
          {
            category: "Mathematics",
            iconSrc: "/icons/general_icons/math-book.svg",
            offerings: [
              {
                offering: "AP Calculus AB/BC",
                keyConcepts: "Differentiation, integration, limits, and application of derivatives and integrals.",
                testingPractices: "Weekly quizzes, timed exams, and comprehensive review sessions covering topics from both AB and BC Calculus, including multiple-choice and free-response question practice."
              },
              {
                offering: "AP Precalculus",
                keyConcepts: "Trigonometric functions, sequences, and polynomial equations.",
                testingPractices: "Weekly quizzes, timed exams, and comprehensive review sessions covering topics from Precalculus, including multiple-choice and free-response question practice."
              },
              {
                offering: "AP Statistics",
                keyConcepts: "Data collection, interpretation, and statistical inference.",
                testingPractices: "Weekly quizzes, timed exams, and comprehensive review sessions covering topics from AP Statistics, including multiple-choice and free-response question practice."
              }
            ]
          },
          {
            category: "Computer Science",
            iconSrc: "/icons/general_icons/code-brackets.svg",
            offerings: [
              {
                offering: "AP Computer Science A",
                keyConcepts: "Object-oriented programming, data structures, and algorithms.",
                testingPractices: "Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP Computer Science A exam, including multiple-choice and free-response question practice."
              }
            ]
          },
          {
            category: "Sciences",
            iconSrc: "/icons/general_icons/test-tube.svg",
            offerings: [
              {
                offering: "AP Biology",
                keyConcepts: "Cell structure, cellular processes, genetics, and evolution.",
                testingPractices: "Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP Biology exam, including multiple-choice and free-response question practice."
              },
              {
                offering: "AP Chemistry",
                keyConcepts: "Atomic structure, chemical reactions, and stoichiometry.",
                testingPractices: "Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP Chemistry exam, including multiple-choice and free-response question practice."
              },
              {
                offering: "AP Physics I, II, and C: Mech",
                keyConcepts: "Newtonian mechanics, electricity, and magnetism.",
                testingPractices: "Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP Physics exams, including multiple-choice and free-response question practice."
              }
            ]
          },
          {
            category: "Humanities",
            iconSrc: "/icons/general_icons/open-book.svg",
            offerings: [
              {
                offering: "AP US History",
                keyConcepts: "American history from pre-Columbian to the present.",
                testingPractices: "Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP US History exam, including multiple-choice and free-response question practice."
              },
              {
                offering: "AP Psychology",
                keyConcepts: "The scientific study of behavior and mental processes.",
                testingPractices: "Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP Psychology exam, including multiple-choice and free-response question practice."
              },
              {
                offering: "AP World History",
                keyConcepts: "Global processes and contacts in different types of human societies.",
                testingPractices: "Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP World History exam, including multiple-choice and free-response question practice."
              }
            ]
          }
        ].map(({ category, iconSrc, offerings }, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#3958F2] rounded-[1.25vw] flex flex-col p-[10vw] sm:px-[2.5vw] sm:py-[3.75vw] flex-grow"
          >
            <Image
  width={10000}
  height={10000}
  src={iconSrc}
  className="sm:w-[4.375vw] border-black w-[10vw]"
  alt={`${category} category icon`}
/>
            <h2 className="sm:text-[1.4vw] text-[5vw] text-white mt-[3.125vw] font-semibold">
              {category}
            </h2>
            <div className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[1.25vw]">
              {offerings.map((offering, i) => (
                <OfferingModal key={i} {...offering} />
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
