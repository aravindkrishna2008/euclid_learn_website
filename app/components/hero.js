const Hero = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <div className="p-[2vw] relative">
        <h1 className="font-semibold text-[6.875vw] text-[#25272C] tracking-[-0.275vw] leading-[100%] text-center w-[62vw]">
          Student Oriented Academic Coaching
        </h1>
        <img
          src="/icons/smile_blue.svg"
          alt="hero"
          className="w-[5vw] h-[5vw] absolute top-[-0.5vw] left-[9vw] -z-10"
        />
        <img
          src="/icons/smile_yellow.svg"
          alt="hero"
          className="w-[5vw] h-[5vw] absolute bottom-[2.5vw] left-[-1vw]"
        />
        <img
          src="/icons/smile_orange.svg"
          alt="hero"
          className="w-[5vw] h-[5vw] absolute bottom-[2.5vw] right-[-1vw] -z-10"
        />
        <img
          src="/icons/smile_yellow.svg"
          alt="hero"
          className="w-[5vw] h-[5vw] absolute top-[0vw] right-[18vw]"
        />
      </div>
      <p className="text-[#25272C] text-[1.5625vw] leading-[150%] font-light tracking-[-0.015625vw] w-[50vw] text-center">
        Providing Guidance One Student at a Time. Unlock Your Potential and
        Excel in Your Studies with Personalized and Private Guidance.
      </p>
      <div className="flex flex-row mt-[3vw] gap-[0.9375vw]">
        <div className="text-[1.09375vw] leading-[150%] font-semibold tracking-[0.02vw] px-[1.875vw] py-[1.09375vw] cursor-pointer bg-[#3958F2] rounded-full text-white">
          Claim 1-Hour Free Tutoring
        </div>
        <div className="text-[1.09375vw] leading-[150%] border border-[#3958F2] font-semibold tracking-[0.02vw] cursor-pointer px-[1.875vw] py-[1.09375vw] text-[#3958F2] rounded-full">
          View Pricing
        </div>
      </div>
      s
    </div>
  );
};

export default Hero;
