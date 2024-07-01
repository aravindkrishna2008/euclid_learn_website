import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        width={10000}
        height={10000}
        src="/stock_image/aime/aime_hero.png"
        alt="usaco hero"
        className="h-[85vh] w-[100%] object-cover"
      />
      <div className="absolute top-[50%] -translate-y-[50%]  left-[10vw] sm:left-[6.25vw] ">
        <h1 className="text-[15vw] sm:text-[6.875vw] text-white font-semibold leading-[105%] w-[80vw] sm:w-[40vw] sm:tracking-[-3.52px]">
          Excel in AIME
        </h1>
        <p className="mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[40vw] text-[4vw] sm:text-[1.4vw] text-white font-light leading-[150%]">
          Master the challenging AIME exam with specialized coaching and
          problem-solving techniques.
        </p>
        <div className="flex flex-col sm:flex-row mt-[5vw] sm:mt-[1.5vw] gap-[2vw] sm:gap-[0.9375vw]">
          <div className="sm:text-[1.09375vw] hover:-translate-y-1 duration-200 hover:scale-105 hover:bg-[#e7b841] transition-all text-[4vw] leading-[150%] font-semibold tracking-[0.02vw] px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] cursor-pointer bg-[#F3B71D] rounded-full text-[#1B125C]">
            Claim 1-Hour Free Tutoring
          </div>
          <div className="sm:text-[1.09375vw] hover:-translate-y-1 duration-200 hover:scale-105 hover:opacity-70 transition-all text-[4vw] leading-[150%] border border-[#fff] font-semibold tracking-[0.02vw] cursor-pointer  px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] text-[#fff] rounded-full">
            View Pricing
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
