import Image from "next/image";

const Hero = ({ freeTutoringRefClick, pricerefclick }) => {
  return (
    <div className="sm:h-[70vh] h-[80vh] py-[10vh] flex flex-col justify-center items-center">
      <div className="p-[2vw] relative">
        <h1 className="font-semibold text-[17.5vw] w-[80vw] sm:text-[6.875vw] text-[#25272C] tracking-[-0.275vw] leading-[100%] text-center sm:w-[62vw]">
          Student Oriented Academic Coaching
        </h1>
        <Image
          width={10000}
          height={10000}
          src="/icons/smiley/smile_blue.svg"
          alt="hero"
          className="w-[5vw] h-[5vw] sm:block hidden absolute top-[-0.5vw] left-[9vw] -z-10"
        />
        <Image
          width={10000}
          height={10000}
          src="/icons/smiley/smile_yellow.svg"
          alt="hero"
          className="w-[5vw] h-[5vw] sm:block hidden absolute bottom-[2.5vw] left-[-1vw]"
        />
        <Image
          width={10000}
          height={10000}
          src="/icons/smiley/smile_orange.svg"
          alt="hero"
          className="w-[5vw] h-[5vw] sm:block hidden absolute bottom-[2.5vw] right-[-1vw] -z-10"
        />
        <Image
          width={10000}
          height={10000}
          src="/icons/smiley/smile_yellow.svg"
          alt="hero"
          className="w-[5vw] h-[5vw] sm:block hidden absolute top-[0vw] right-[18vw]"
        />
      </div>
      <p className="text-[#25272C] text-[4vw] sm:text-[1.5625vw] leading-[150%] font-light tracking-[-0.015625vw] w-[80vw] sm:w-[50vw] text-center">
        Providing Guidance One Student at a Time. Unlock Your Potential and
        Excel in Your Studies with Personalized and Private Guidance.
      </p>
      <div className="flex flex-col sm:flex-row mt-[5vw] sm:mt-[3vw] gap-[2vw] sm:gap-[0.9375vw]">
        <div
          className="sm:text-[1.09375vw] text-[4vw] leading-[150%] font-semibold tracking-[0.02vw] px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] cursor-pointer bg-[#3958F2] rounded-full text-white"
          onClick={freeTutoringRefClick}
        >
          Claim 1-Hour Free Tutoring
        </div>
        <div
          onClick={pricerefclick}
          className="sm:text-[1.09375vw] text-[4vw] leading-[150%] border border-[#3958F2] font-semibold tracking-[0.02vw] cursor-pointer  px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] text-[#3958F2] rounded-full"
        >
          View Pricing
        </div>
      </div>
    </div>
  );
};

export default Hero;
