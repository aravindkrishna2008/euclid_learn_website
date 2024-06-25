import Image from "next/image";

const AtAGlance = () => {
  return (
    <div className="bg-[#C0CEFD] text-[#0F0F0F] py-[20vw] sm:py-[10vw] px-[6.25vw] flex flex-col items-center justify-center">
      <h1 className="sm:text-[5vw] text-[10vw] text-[#0F0F0F] w-[80vw] sm:w-[40vw] text-center leading-[105%] font-semibold tracking-[-1.92px]">
        At a Glance
      </h1>
      <p className="sm:w-[30vw] w-[80vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw] text-center font-light ">
        The AIME test is a 15 problem exam. There are 180 minutes given in the
        exam. Problems increase in difficulty as the problem number increases.
      </p>
      <div className="flex w-[100%] justify-between flex-col sm:flex-row gap-[1.25vw] mt-[5vw]">
        <div className="bg-[#0F0F0F] rounded-[1.25vw] flex flex-col p-[10vw] sm:px-[2.5vw] sm:py-[3.75vw] flex-grow">
          <Image
            width={10000}
            height={10000}
            src="/icons/general_icons/community_2.svg"
            className="sm:w-[4.375vw] w-[10vw]"
          />
          <p className="sm:text-[1.4vw] text-[5vw] text-white  mt-[3.125vw] font-semibold">
            Top 2.5%
          </p>
          <p
            className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[1.25vw]  "
            style={{
              color: "rgba(255, 255, 255, 0.60)",
            }}
          >
            AIME qualifiers represent the top 2.5% of AMC 10 test-takers and the
            top 5% of AMC 12 test-takers.
          </p>
        </div>
        <div className="bg-[#0F0F0F] rounded-[1.25vw] flex flex-col p-[10vw] sm:px-[2.5vw] sm:py-[3.75vw] flex-grow">
          <Image
            width={10000}
            height={10000}
            src="/icons/general_icons/list.svg"
            className="sm:w-[4.375vw] w-[10vw]"
          />
          <p className="sm:text-[1.4vw] text-[5vw] text-white  mt-[3.125vw] font-semibold">
            15 Questions
          </p>
          <p
            className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[1.25vw]  "
            style={{
              color: "rgba(255, 255, 255, 0.60)",
            }}
          >
            The AIME exam is a 15 problem exam.
          </p>
        </div>
        <div className="bg-[#0F0F0F] rounded-[1.25vw] flex flex-col p-[10vw] sm:px-[2.5vw] sm:py-[3.75vw] flex-grow">
          <Image
            width={10000}
            height={10000}
            src="/icons/general_icons/timer.svg"
            className="sm:w-[4.375vw] w-[10vw]"
          />
          <p className="sm:text-[1.4vw] text-[5vw] text-white  mt-[3.125vw] font-semibold">
            180 Minutes
          </p>
          <p
            className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[1.25vw]  "
            style={{
              color: "rgba(255, 255, 255, 0.60)",
            }}
          >
            There are 180 minutes given in the exam.
          </p>
        </div>
        <div className="bg-[#0F0F0F] rounded-[1.25vw] flex flex-col p-[10vw] sm:px-[2.5vw] sm:py-[3.75vw] flex-grow">
          <Image
            width={10000}
            height={10000}
            src="/icons/general_icons/ease-in.svg"
            className="sm:w-[4.375vw] w-[10vw]"
          />
          <p className="sm:text-[1.4vw] text-[5vw] text-white  mt-[3.125vw] font-semibold">
            Increasing Difficulty
          </p>
          <p
            className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[1.25vw]  "
            style={{
              color: "rgba(255, 255, 255, 0.60)",
            }}
          >
            Short-answer computational problems which increase in difficulty
            with each question.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AtAGlance;
