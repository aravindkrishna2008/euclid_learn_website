import Image from "next/image";

const Road2Plat = () => {
  return (
    <div className="bg-[#C0CEFD] text-[#0F0F0F] py-[20vw] sm:py-[10vw] px-[6.25vw] flex flex-col items-center justify-center">
      <h1 className="sm:text-[5vw] text-[10vw] text-[#0F0F0F] w-[80vw] sm:w-[40vw] text-center leading-[105%] font-semibold tracking-[-1.92px]">
        The Road to USACO Platinum
      </h1>
      <p className="sm:w-[30vw] w-[80vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw] text-center font-light ">
        Explore what you'll learn on this journey. Knowing the path helps you
        navigate it.
      </p>
      <div className="flex w-[100%] justify-between flex-col sm:flex-row gap-[1.25vw] mt-[5vw]">
        <div className="bg-[#0F0F0F] rounded-[1.25vw] flex flex-col justify-center items-center text-center p-[10vw] sm:p-0 sm:py-[3.75vw] flex-grow">
          <Image
            width={10000}
            height={10000}
            src="/icons/medals/bronze.svg"
            className="sm:w-[4.375vw] w-[10vw]"
          />
          <p className="sm:text-[1.4vw] text-[5vw] mt-[0.625vw] bronzeMedal font-semibold">
            Bronze
          </p>
          <p
            className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2vw]  "
            style={{
              color: "rgba(255, 255, 255, 0.70)",
            }}
          >
            At the bronze level, students build on their programming
            fundamentals, designing relatively simple algorithms to solve
            various problems.
          </p>
        </div>
        <div className="bg-[#0F0F0F] rounded-[1.25vw] flex flex-col justify-center items-center text-center p-[10vw] sm:p-0 sm:py-[3.75vw] flex-grow">
          <Image
            width={10000}
            height={10000}
            src="/icons/medals/silver.svg"
            className="sm:w-[4.375vw] w-[10vw]"
          />
          <p className="sm:text-[1.4vw] text-[5vw] mt-[0.625vw] silverMedal font-semibold">
            Silver
          </p>
          <p
            className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2vw]  "
            style={{
              color: "rgba(255, 255, 255, 0.70)",
            }}
          >
            At the silver level, students learn how to process data using sets,
            efficiently find items via binary search, and traverse graphs via
            Depth First Search.
          </p>
        </div>
        <div className="bg-[#0F0F0F] rounded-[1.25vw] flex flex-col justify-center items-center text-center p-[10vw] sm:p-0 sm:py-[3.75vw] flex-grow">
          <Image
            width={10000}
            height={10000}
            src="/icons/medals/gold.svg"
            className="sm:w-[4.375vw] w-[10vw]"
          />
          <p className="sm:text-[1.4vw] text-[5vw] mt-[0.625vw] goldMedal font-semibold">
            Gold
          </p>
          <p
            className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2vw]  "
            style={{
              color: "rgba(255, 255, 255, 0.70)",
            }}
          >
            At the gold level, students learn data structures like Fenwick
            Trees, Disjoint Set Unions, and more, along with famous algorithms
            like Dijkstra's Algo.
          </p>
        </div>
        <div className="bg-[#0F0F0F] rounded-[1.25vw] flex flex-col justify-center items-center text-center p-[10vw] sm:p-0 sm:py-[3.75vw] flex-grow">
          <Image
            width={10000}
            height={10000}
            src="/icons/medals/platinum.svg"
            className="sm:w-[4.375vw] w-[10vw]"
          />
          <p className="sm:text-[1.4vw] text-[5vw] mt-[0.625vw] platinumMedal font-semibold">
            Platinum
          </p>
          <p
            className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2vw]  "
            style={{
              color: "rgba(255, 255, 255, 0.70)",
            }}
          >
            At the platinum level, problems become extremely challenging. The
            top 24 contestants are invited to the USA National Training Camp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Road2Plat;
