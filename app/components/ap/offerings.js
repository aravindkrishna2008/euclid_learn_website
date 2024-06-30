import Image from "next/image";
import OfferingModal from "./offeringModal";

const Offerings = () => {
  return (
    <div className="bg-[#293CE7] relative py-[20vw] text-white sm:py-[10vw] px-[5vw] flex flex-col items-center justify-center">
      <Image
        width={10000}
        height={10000}
        src="/icons/smiley/blue_yellow_smile.svg"
        className="absolute -top-[5vw]  left-[10vw] z-10 sm:w-[10vw] w-[10vw]"
      />
      <h1 className="sm:text-[5vw] text-[10vw] w-[80vw] sm:w-[40vw] text-center leading-[105%] font-semibold tracking-[-1.92px]">
        Our AP Course Offerings{" "}
      </h1>
      <p className="sm:w-[30vw] w-[80vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw] text-center font-light ">
        Our AP Tutoring is available for these exams. Click the icon next to the
        exam name to learn more about it.
      </p>
      <div className="flex w-[100%] justify-around flex-col sm:flex-row gap-[1.25vw] mt-[5vw]">
        <div className="bg-[#3958F2] rounded-[1.25vw] flex flex-col p-[10vw] sm:px-[2.5vw] sm:py-[3.75vw] flex-grow">
          <Image
            width={10000}
            height={10000}
            src="/icons/general_icons/math-book.svg"
            className="sm:w-[4.375vw] border-black  w-[10vw]"
          />
          <p className="sm:text-[1.4vw] text-[5vw] text-white  mt-[3.125vw] font-semibold">
            Mathematics
          </p>
          <p className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[1.25vw]  ">
            <OfferingModal
              offering="AP Calculus AB/BC"
              keyConcepts="Differentiation, integration, limits, and application of derivatives and integrals."
              testingPractices="Weekly quizzes, timed exams, and comprehensive review sessions covering topics from both AB BC Calculus, including multiple-choice and free-response question practice."
            />
            <OfferingModal
              offering="AP Precalculus"
              keyConcepts="Differentiation, integration, limits, and application of derivatives and integrals."
              testingPractices="Weekly quizzes, timed exams, and comprehensive review sessions covering topics from both AB BC Calculus, including multiple-choice and free-response question practice."
            />
            <OfferingModal
              offering="AP Statistics"
              keyConcepts="Differentiation, integration, limits, and application of derivatives and integrals."
              testingPractices="Weekly quizzes, timed exams, and comprehensive review sessions covering topics from both AB BC Calculus, including multiple-choice and free-response question practice."
            />
          </p>
        </div>
        <div className="bg-[#3958F2] rounded-[1.25vw] flex flex-col p-[10vw] sm:px-[2.5vw] sm:py-[3.75vw] flex-grow">
          <Image
            width={10000}
            height={10000}
            src="/icons/general_icons/code-brackets.svg"
            className="sm:w-[4.375vw] w-[10vw]"
          />
          <p className="sm:text-[1.4vw] text-[5vw] text-white  mt-[3.125vw] font-semibold">
            Computer Science
          </p>
          <p className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[1.25vw]  ">
            <OfferingModal
              offering="AP Computer Science A"
              keyConcepts="Object-oriented programming, data structures, and algorithms."
              testingPractices="Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP Computer Science A exam, including multiple-choice and free-response question practice."
            />
          </p>
        </div>
        <div className="bg-[#3958F2] rounded-[1.25vw] flex flex-col p-[10vw] sm:px-[2.5vw] sm:py-[3.75vw] flex-grow">
          <Image
            width={10000}
            height={10000}
            src="/icons/general_icons/test-tube.svg"
            className="sm:w-[4.375vw] w-[10vw]"
          />
          <p className="sm:text-[1.4vw] text-[5vw] text-white  mt-[3.125vw] font-semibold">
            Sciences
          </p>
          <p className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[1.25vw]  ">
            <OfferingModal
              offering="AP Biology"
              keyConcepts="Cell structure, cellular processes, genetics, and evolution."
              testingPractices="Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP Biology exam, including multiple-choice and free-response question practice."
            />
            <OfferingModal
              offering="AP Chemistry"
              keyConcepts="Cell structure, cellular processes, genetics, and evolution."
              testingPractices="Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP Biology exam, including multiple-choice and free-response question practice."
            />
            <OfferingModal
              offering="AP Physics I, II, and C: Mech"
              keyConcepts="Cell structure, cellular processes, genetics, and evolution."
              testingPractices="Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP Biology exam, including multiple-choice and free-response question practice."
            />
          </p>
        </div>
        <div className="bg-[#3958F2] rounded-[1.25vw] flex flex-col p-[10vw] sm:px-[2.5vw] sm:py-[3.75vw] flex-grow">
          <Image
            width={10000}
            height={10000}
            src="/icons/general_icons/open-book.svg"
            className="sm:w-[4.375vw] w-[10vw]"
          />
          <p className="sm:text-[1.4vw] text-[5vw] text-white  mt-[3.125vw] font-semibold">
            Humanities
          </p>
          <p className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[1.25vw]  ">
            <OfferingModal
              offering="AP US History"
              keyConcepts="Cell structure, cellular processes, genetics, and evolution."
              testingPractices="Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP Biology exam, including multiple-choice and free-response question practice."
            />
            <OfferingModal
              offering="AP Psychology"
              keyConcepts="Cell structure, cellular processes, genetics, and evolution."
              testingPractices="Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP Biology exam, including multiple-choice and free-response question practice."
            />
            <OfferingModal
              offering="AP World History"
              keyConcepts="Cell structure, cellular processes, genetics, and evolution."
              testingPractices="Weekly quizzes, timed exams, and comprehensive review sessions covering topics from the AP Biology exam, including multiple-choice and free-response question practice."
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
