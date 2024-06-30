import Image from "next/image";

const ParentQuestionsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-[#25272C] text-center text-[10vw] sm:text-[5vw] leading-[105%] tracking-[-1.92px] w-[80vw] sm:w-[55vw] mt-[1.25vw] font-semibold mb-[1vw]">
        Parents, Do You Have Questions?
      </h1>
      <div className=" p-6 rounded-full mb-2">
        <Image
          src="/stock_image/sat/Vector.svg"
          className="sm:w-[100vw] w-[50vw] sm:h-[15vw] mb-4 mt-8"
          width={1000}
          height={1000}
        />
      </div>
      <p className="text-gray-700 text-center mb-6 max-w-md">
        Talk to an SAT expert and have all of your questions answered – for
        free. You&apos;ll know exactly where you stand and where to go next.
      </p>
      <div className="flex flex-col sm:flex-row mt-[5vw] sm:mt-[1.5vw] gap-[2vw] sm:gap-[0.9375vw]">
        <div className="sm:text-[1.09375vw] text-[4vw] leading-[150%] font-semibold tracking-[0.02vw] px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] cursor-pointer bg-[#3958F2] rounded-full text-white">
          Call Now{" "}
        </div>
        <div className="sm:text-[1.09375vw] text-[4vw] leading-[150%] border border-[#3958F2] font-semibold tracking-[0.02vw] cursor-pointer  px-[5vw] py-[3vw] sm:px-[1.875vw] sm:py-[1.09375vw] text-[#3958F2] rounded-full">
          Book A Free Meeting{" "}
        </div>
      </div>
    </section>
  );
};

export default ParentQuestionsSection;
