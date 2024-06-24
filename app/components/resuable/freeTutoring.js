import Image from "next/image";

const FreeTutoring = ({ handleClick }) => {
  return (
    <div className="bg-[#3958F2] py-[10vw] px-[6.25vw]">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between">
        <div className="w-[80vw] flex flex-col gap-[2vw] sm:gap-0">
          <h1 className="sm:text-[5vw] text-[10vw] text-white leading-[105%] font-semibold">
            Claim 1-Hour Free Tutoring
          </h1>
          <p className="mt-[3.125vw] w-[65%] text-[4vw] sm:text-[1.4vw] text-white font-semibold leading-[130%]">
            Fill the form or contact us to claim your 1-Hour Free Tutoring.
          </p>

          <div className="flex flex-row mt-[1.25vw] items-center">
            <Image
              width={10000}
              height={10000}
              className="sm:w-[1.875vw] w-[5vw]"
              src="/icons/general_icons/mail.svg"
            />
            <p className="text-white font-light ml-[1.25vw] text-[3vw]  sm:text-[1.25vw] ">
              contact@euclidlearn.com
            </p>
          </div>
          <div className="flex flex-row mt-[0.3vw] items-center">
            <Image
              width={10000}
              height={10000}
              className="sm:w-[1.875vw] w-[5vw]"
              src="/icons/general_icons/phone.svg"
            />
            <p className="text-white font-light ml-[1.25vw] text-[3vw] sm:text-[1.25vw] ">
              +1 408-706-6234
            </p>
          </div>
        </div>
        <div className="bg-[#4766FF] mt-[5vw] sm:mt-0 sm:w-[80vw] p-[5vw] sm:p-[2.5vw] flex flex-col gap-[2vw] rounded-[1.875vw]">
          <input
            type="text"
            placeholder="Student Name"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
          />
          <input
            type="text"
            placeholder="Student Email"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
          />
          <input
            type="text"
            placeholder="Parent Name"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
          />
          <input
            type="text"
            placeholder="Parent Email"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
          />
          <input
            type="text"
            placeholder="Grade"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
          />
          <input
            type="text"
            placeholder="Subject you need help with"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
          />
          <textarea
            type="text"
            placeholder="Write any concerns here"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
          />
          <button className="bg-[#F3B71D] mt-[4vw] sm:mt-0 sm:w-[70%] text-[#181953] rounded-full sm:py-[1vw] py-[3vw] px-[1.875vw] fomt-semibold text-[3vw] sm:text-[1vw] font-semibold">
            Claim 1-Hour Free Tutoring
          </button>
        </div>
      </div>
    </div>
  );
};
export default FreeTutoring;
