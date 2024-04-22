const Results = () => {
  return (
    <div className="w-full bg-[#25272c] h-[85vh] relative overflow-hidden flex items-center justify-center mb-[10vw]">
      <img
        src="/gridGray.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
      />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[5vw] font-semibold text-white text-center leading-[105%] tracking-[-1.92px]">
            View our Results
          </h1>
          <p className="text-[1.25vw] text-white font-light mt-[1.25vw] w-[30vw] tracking-[0.16px] text-center">
            Discover the Results We've Delivered So Far. Our Achievements Speak
            for Themselves.
          </p>
        </div>
        <div className="flex flex-row mt-[4vw] gap-[1.25vw] justify-between">
          <div className="bg-[#383A42] py-8 rounded-[1.25vw] w-[20vw]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[3.75vw] font-semibold  text-[#3958F2] leading-[120%] tracking-[-0.28px]">
                1420
              </h1>
              <p className="text-[1.25vw] text-white tracking-[0.16px] leading-[160%] font-light">
                {" "}
                SAT Average
              </p>
            </div>
          </div>
          <div className="bg-[#383A42] py-8 rounded-[1.25vw] w-[20vw]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[3.75vw] font-semibold  text-[#F3B71D] leading-[120%] tracking-[-0.28px]">
                3+
              </h1>
              <p className="text-[1.25vw] text-white tracking-[0.16px] leading-[160%] font-light">
                {" "}
                Promotions
              </p>
            </div>
          </div>
          <div className="bg-[#383A42] py-8 rounded-[1.25vw] w-[20vw]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[3.75vw] font-semibold  text-[#F7711F] leading-[120%] tracking-[-0.28px]">
                18%
              </h1>
              <p className="text-[1.25vw] text-white tracking-[0.16px] leading-[160%] font-light">
                {" "}
                Test Improvement
              </p>
            </div>
          </div>
          <div className="bg-[#383A42] py-8 rounded-[1.25vw] w-[20vw]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[3.75vw] font-semibold  text-[#F46036] leading-[120%] tracking-[-0.28px]">
                3+
              </h1>
              <p className="text-[1.25vw] text-white tracking-[0.16px] leading-[160%] font-light">
                {" "}
                AIME Qualifiers
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row  mt-[6vw] gap-[3.125vw] items-center justify-center">
          <div className="flex flex-col">
            <p className="text-[1vw] font-light text-white">
              Ready to Achieve Your Goals?
            </p>
            <p className="text-[1vw] font-light text-white">
              Enroll Now and Join Our Success Stories!
            </p>
          </div>
          <div className="bg-[#3958F2] rounded-full px-6 py-[14px] text-white cursor-pointer font-semibold">
            Claim 1-Hour Free Tutoring
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
