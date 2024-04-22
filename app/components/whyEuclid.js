const WhyEuclid = () => {
  return (
    <div className="bg-[#F7F2DF] px-[6.25vw] py-[10vw] flex items-center flex-col">
      <p className="text-[#3958F2] text-[1.2vw] font-semibold">
        Why Choose EUCLID?
      </p>
      <h1 className="text-[5vw] w-[50vw] text-center font-semibold  leading-[105%] mt-[3.75vw]">
        Gain a Competitive Advantage
      </h1>
      <p className="w-[27vw] font-light text-center mt-[1vw] text-[1.25vw]">
        Receive exclusive one-on-one mentoring from our award-winning coaches.
      </p>
      <img src="smiley_yellow_blue.png" className="w-[41vw] mt-[7vw]" />
      <div className="flex flex-row mt-[12vw] gap-[1.25vw]">
        <div className="bg-yellow-50 p-8 rounded-[2.5vw]">
          <img src="/icons/computer.svg" className="w-[2.5vw] h-[2.5vw]" />
          <div className="flex flex-col w-[24vw]">
            <h1 className="w-[50%] text-[2vw] font-semibold mt-[2.5vw] text-[#383A42] leading-[120%] tracking-[-0.28px]">
              One on One Learning
            </h1>
            <p className="text-[1.25vw] mt-[1vw] text-[#383A42] tracking-[0.16px] leading-[160%] font-light">
              {" "}
              Students connect with our mentors individually via Google Meet for
              private lessons, ensuring focused attention and personalized
              guidance.
            </p>
          </div>
        </div>
        <div className="bg-yellow-50 p-8 rounded-[2.5vw]">
          <img src="/icons/brain.svg" className="w-[2.5vw] h-[2.5vw]" />
          <div className="flex flex-col w-[24vw]">
            <h1 className="w-[70%] text-[2vw] font-semibold mt-[2.5vw] text-[#383A42] leading-[120%] tracking-[-0.28px]">
              Understand Concepts Better
            </h1>
            <p className="text-[1.25vw] mt-[1vw] text-[#383A42] tracking-[0.16px] leading-[160%] font-light">
              {" "}
              Mentors personalize student solutions based on diagnostics and
              teach in an efficient manner by presenting uniquely insightful
              problems.
            </p>
          </div>
        </div>
        <div className="bg-yellow-50 p-8 rounded-[2.5vw]">
          <img src="/icons/community.svg" className="w-[2.5vw] h-[2.5vw]" />
          <div className="flex flex-col w-[24vw]">
            <h1 className="w-[50%] text-[2vw] font-semibold mt-[2.5vw] text-[#383A42] leading-[120%] tracking-[-0.28px]">
              Students Come First
            </h1>
            <p className="text-[1.25vw] mt-[1vw] text-[#383A42] tracking-[0.16px] leading-[160%] font-light">
              {" "}
              Lessons are taught with the student in mind and we prioritize and
              optimize performance on the assessments they want to focus on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyEuclid;
