const FreeTutoring = ({ handleClick }) => {
  return (
    <div className="bg-[#3958F2] py-[10vw] px-[6.25vw]">
      <div className="flex flex-row justify-between">
        <div className="w-[35vw]">
          <h1
            className="text-[5vw] text-white leading-[105%] font-semibold"
          >
            Claim 1-Hour Free Tutoring
          </h1>
          <p className="mt-[3.125vw] w-[65%] text-[1.4vw] text-white font-semibold leading-[130%]">
            Fill the form or contact us to claim your 1-Hour Free Tutoring.
          </p>

          <div className="flex flex-row mt-[1.25vw] items-center">
            <img className="w-[1.875vw]" src="/icons/mail.svg" />
            <p className="text-white font-light ml-[1.25vw]  text-[1.25vw] ">
              contact@euclidlearn.com
            </p>
          </div>
          <div className="flex flex-row mt-[0.3vw] items-center">
            <img className="w-[1.875vw]" src="/icons/phone.svg" />
            <p className="text-white font-light ml-[1.25vw]  text-[1.25vw] ">
              +1 408-706-6234
            </p>
          </div>
        </div>
        <div className="bg-[#4766FF] w-[40vw] p-[2.5vw] flex flex-col gap-[2vw] rounded-[1.875vw]">
          <input
            type="text"
            placeholder="Student Name"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[1.25vw] mt-[1.25vw]"
          />
          <input
            type="text"
            placeholder="Student Email"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[1.25vw] mt-[1.25vw]"
          />
          <input
            type="text"
            placeholder="Parent Name"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[1.25vw] mt-[1.25vw]"
          />
          <input
            type="text"
            placeholder="Parent Email"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[1.25vw] mt-[1.25vw]"
          />
          <input
            type="text"
            placeholder="Grade"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[1.25vw] mt-[1.25vw]"
          />
          <input
            type="text"
            placeholder="Subject you need help with"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[1.25vw] mt-[1.25vw]"
          />
          <textarea
            type="text"
            placeholder="Write any concerns here"
            className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[1.25vw] mt-[1.25vw]"
          />
          <button className="bg-[#F3B71D] w-[50%] text-[#181953] rounded-full py-[1vw] px-[1.875vw] fomt-semibold text-[1vw] font-semibold">
            Claim 1-Hour Free Tutoring
          </button>
        </div>
      </div>
    </div>
  );
};
export default FreeTutoring;
