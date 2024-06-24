import Image from "next/image";

const HowItWorks = () => {
  return (
    <div className="bg-[#F7F2DF] py-[20vw] sm:py-[10vw] px-[6.25vw] flex flex-col items-center justify-center">
      <p className="text-[#3958F2] text-[4vw] sm:text-[1.4vw] font-semibold">
        How it works
      </p>
      <h1 className="text-[#25272C] text-center text-[10vw] sm:text-[5vw] leading-[105%] tracking-[-1.92px] w-[80vw] sm:w-[55vw] mt-[1.25vw] font-semibold">
        Reach USACO Platinum with our proven method
      </h1>
      <div className="flex w-[100%] justify-between flex-col  sm:flex-row gap-[1.25vw] mt-[5vw]">
        <div className="bg-[#FDF9E9] rounded-[1.25vw] border-2 shadow-xl border-[#3958F2] items-center p-[5vw] sm:p-[2.5vw]">
          <p className="sm:text-[1.4vw] text-[4vw] mt-[0.625vw] font-semibold text-[#3958F2]">
            Step 1
          </p>
          <h1 className="sm:text-[2vw] text-[5vw] font-semibold leading-[120%]">
            Assessment
          </h1>
          <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2.5vw]  ">
            Upon enrollment, our mentors conduct a thorough assessment of the
            student&apos;s existing programming proficiency.
          </p>
        </div>
        <div className="bg-[#FDF9E9] rounded-[1.25vw] items-center p-[5vw] sm:p-[2.5vw]">
          <p className="sm:text-[1.4vw] text-[4vw] mt-[0.625vw] font-semibold text-[#3958F2]">
            Step 2
          </p>
          <h1 className="sm:text-[2vw] text-[5vw] font-semibold leading-[120%]">
            Tailored Syllabus
          </h1>
          <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2.5vw]  ">
            We develop a personalized syllabus based on the student&aposs
            specific needs and aspirations.
          </p>
        </div>
        <div className="bg-[#FDF9E9] rounded-[1.25vw] items-center p-[5vw] sm:p-[2.5vw]">
          <p className="sm:text-[1.4vw] text-[4vw] mt-[0.625vw] font-semibold text-[#3958F2]">
            Step 3{" "}
          </p>
          <h1 className="sm:text-[2vw] text-[5vw] font-semibold leading-[120%]">
            Mentorship
          </h1>
          <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2.5vw]  ">
            Students are paired with a dedicated mentor who will lead them
            through each level until they achieve Platinum.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
