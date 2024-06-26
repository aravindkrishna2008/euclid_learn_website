import Image from "next/image";

const PremiumTutoring = () => {
  return (
    <section className="flex flex-col items-center h-screen bg-blue-600 text-white">
    <div className="text-center  mt-[20vh]">
      <h1 className="text-4xl sm:text-[4vw] text-[5vw] font-semibold leading-[120%]">Premium Tutoring</h1>
      <div className="flex justify-center mb-6">
        <div className="p-4 rounded-full ">
        <Image
            src="/icons/medals/Group.svg"
            className="sm:w-[100vw] w-[30vw] sm:h-[10vw] mb-8 mt-8"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <p className="font-light text-[#ffffff] text-[4vw] sm:text-[1vw] leading-[25.6px] tracking-[0.28px]">
        This is next-level SAT prep. Our premium tutors have all 
      </p>
      <p className="font-light text-[#ffffff] text-[4vw] sm:text-[1vw] leading-[25.6px] tracking-[0.28px]">
      scored in the 99th percentile and have been teaching for
      
      </p>
      
      <p className="font-light text-[#ffffff] text-[4vw] sm:text-[1vw] leading-[25.6px] tracking-[0.28px]">
      more than 8 years. They'll
        provide personalized, one-on-
      </p>
      <p className="font-light text-[#ffffff] text-[4vw] sm:text-[1vw] leading-[25.6px] tracking-[0.28px]">
      one support tailored to your specific
        needs.
      </p>
    </div>
  </section>
  );
};

export default PremiumTutoring;
