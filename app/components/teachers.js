const Teachers = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center py-[10vw] px-[17vw]">
      <h1 className="text-[#25272C] font-semibold text-[10vw] sm:text-[5vw] leading-snug">
        Our Teachers
      </h1>
      <p className="text-[#25272C] font-light text-[4vw] sm:text-[1.25vw] mt-[1vw] text-center w-[80vw] sm:w-[50%]">
        Our team is composed of diligent top-performing students with
        prestigious awards, high standardized test scores, and extensive
        teaching experience.
      </p>
      <div className="flex flex-col sm:flex-row gap-[4vw] sm:gap-[1.25vw] mt-[5vw]">
        <div className="flex flex-col gap-[1.875vw] justify-center items-center  text-center">
          <img src="/Anirudh.png" />
          <div>
            <p className="text-[#5B616E] text-[5vw] sm:text-[1.4vw] font-semibold tracking-normal">
              Anirudh Shyam
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              4 Yrs of Mentoring Experience
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              1580 SAT Score
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1.875vw] justify-center items-center  text-center">
          <img src="/Woojin.png" />
          <div>
            <p className="text-[#5B616E] text-[5vw] sm:text-[1.4vw] font-semibold tracking-normal">
              Woojin Yoon
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              1560 SAT Score
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              USAMO
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1.875vw] justify-center items-center  text-center">
          <img src="/Abhinav.png" />
          <div>
            <p className="text-[#5B616E] text-[5vw] sm:text-[1.4vw] font-semibold tracking-normal">
              Abhinav Raja
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              Distinguished Honor Roll Top 1%
            </p>
            <p className="text-[#8E95A2] font-light text-[3vw] sm:text-[1vw]">
              USACO Platinum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
