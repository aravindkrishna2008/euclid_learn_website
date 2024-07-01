import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        width={10000}
        height={10000}
        src="/stock_image/ap/hero.png"
        alt="usaco hero"
        className="h-[85vh] w-[100%] object-cover"
      />
      <div className="absolute top-[50%] -translate-y-[50%]  left-[10vw] sm:sm:left-[6.25vw] ">
        <h1 className="text-[15vw] sm:text-[6.875vw] text-[#25272C] font-semibold leading-[105%] w-[80vw] sm:w-[51vw] sm:tracking-[-3.52px]">
          AP Tutoring{" "}
        </h1>
        <p className="mt-[4vw] sm:mt-[1.25vw] w-[80vw] sm:w-[42.5vw] text-[4vw] sm:text-[1.4vw] text-[#25272C] font-light leading-[150%]">
          Study smarter with step-by-step guidance, regular assessments,
          hands-on practice, and timed exams. Get fully prepared for your AP
          exams and master the material.
        </p>
        <div className="flex flex-col sm:flex-row mt-[5vw] sm:mt-[1.5vw] gap-[2vw] sm:gap-[0.9375vw]">
          <div className="sm:text-[1.09375vw] hover:bg-[#314ac7] transition-all hover:-translate-y-1 duration-200 hover:scale-105 text-[4vw] leading-[150%] font-semibold tracking-[0.02vw] px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] cursor-pointer bg-[#3958F2] rounded-full text-white">
            Claim 1-Hour Free Tutoring
          </div>
          <div className="sm:text-[1.09375vw] text-[4vw] leading-[150%] border border-[#25272C] font-semibold tracking-[0.02vw] hover:border-[#4b4d59] hover:text-[#border-[#4b4d59]] transition-all hover:-translate-y-1 duration-200 hover:scale-105 cursor-pointer  px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] text-[#25272C] rounded-full">
            View Pricing
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
