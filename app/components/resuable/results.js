import Image from "next/image";

const Results = () => {
  return (
    <div className="w-full bg-[#25272c] sm:h-[85vh] py-[20vw] sm:py-0 relative overflow-hidden flex items-center justify-center ">
      <Image
        width={10000}
        height={10000}
        src="/grid/gridGray.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0 opacity-20"
      />
      <div className="w-full h-full flex flex-col z-10 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="sm:text-[5vw] text-[10vw] font-semibold text-white text-center leading-[105%] tracking-[-1.92px]">
            View our Results
          </h1>
          <p className="sm:text-[1.25vw] text-[4vw] text-white font-light mt-[1.25vw] w-[80vw] sm:w-[30vw] tracking-[0.16px] text-center">
            Discover the Results We&apos;ve Delivered So Far. Our Achievements
            Speak for Themselves.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row mt-[4vw] gap-[1.25vw] justify-between">
          <div className="bg-[#383A42] py-8 rounded-[1.25vw] w-[80vw] sm:w-[20vw]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="sm:text-[3.75vw] text-[15vw] font-semibold  text-[#3958F2] leading-[120%] tracking-[-0.28px]">
                1420
              </h1>
              <p className="sm:text-[1.25vw] text-[4vw] text-white tracking-[0.16px] leading-[160%] font-light">
                {" "}
                SAT Average
              </p>
            </div>
          </div>
          <div className="bg-[#383A42] py-8 rounded-[1.25vw] w-[80vw] sm:w-[20vw]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="sm:text-[3.75vw] text-[15vw] font-semibold  text-[#F3B71D] leading-[120%] tracking-[-0.28px]">
                3+
              </h1>
              <p className="sm:text-[1.25vw] text-[4vw] text-white tracking-[0.16px] leading-[160%] font-light">
                {" "}
                Promotions
              </p>
            </div>
          </div>
          <div className="bg-[#383A42] py-8 rounded-[1.25vw] w-[80vw] sm:w-[20vw]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="sm:text-[3.75vw] text-[15vw] font-semibold  text-[#F7711F] leading-[120%] tracking-[-0.28px]">
                18%
              </h1>
              <p className="sm:text-[1.25vw] text-[4vw] text-white tracking-[0.16px] leading-[160%] font-light">
                {" "}
                Test Improvement
              </p>
            </div>
          </div>
          <div className="bg-[#383A42] py-8 rounded-[1.25vw] w-[80vw] sm:w-[20vw]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="sm:text-[3.75vw] text-[15vw]  font-semibold  text-[#F46036] leading-[120%] tracking-[-0.28px]">
                3+
              </h1>
              <p className="sm:text-[1.25vw] text-[4vw] text-white tracking-[0.16px] leading-[160%] font-light">
                {" "}
                AIME Qualifiers
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  mt-[6vw] gap-[3.125vw] items-center justify-center">
          <div className="flex text-[4vw] text-center sm:text-left sm:text-[1vw] flex-col">
            <p className=" font-light text-white">
              Ready to Achieve Your Goals?
            </p>
            <p className="font-light text-white">
              Enroll Now and Join Our Success Stories!
            </p>
          </div>
          <div className="sm:text-[1.09375vw] hover:-translate-y-1 duration-200 hover:scale-105 hover:bg-[#314ac7] transition-all sm:mt-0 mt-[2vw] text-[4vw] leading-[150%] font-semibold tracking-[0.02vw] px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] cursor-pointer bg-[#3958F2] rounded-full text-white">
            Claim 1-Hour Free Tutoring
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
