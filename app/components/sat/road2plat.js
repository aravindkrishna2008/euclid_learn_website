import Image from "next/image";

const Road2Plat = () => {
  return (
    <section className="bg-[#C0CEFD] text-[#0F0F0F] py-[20vw] sm:py-[10vw] px-[6.25vw] flex flex-col items-center justify-center">
      <h1 className="sm:text-[5vw] text-[10vw] text-[#0F0F0F] w-[80vw] sm:w-[40vw] text-center leading-[105%] font-semibold tracking-[-1.92px]">
        The Road to USACO Platinum
      </h1>
      <p className="sm:w-[30vw] w-[80vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw] text-center font-light">
        Explore what you&apos;ll learn on this journey. Knowing the path helps
        you navigate it.
      </p>
      <div className="flex w-[100%] justify-between flex-col sm:flex-row gap-[1.25vw] mt-[5vw]">
        {[
          {
            level: "Bronze",
            description:
              "At the bronze level, students build on their programming fundamentals, designing relatively simple algorithms to solve various problems.",
            image: "/icons/medals/bronze.svg",
            alt: "Bronze Medal",
            style: "bronzeMedal",
          },
          {
            level: "Silver",
            description:
              "At the silver level, students learn how to process data using sets, efficiently find items via binary search, and traverse graphs via Depth First Search.",
            image: "/icons/medals/silver.svg",
            alt: "Silver Medal",
            style: "silverMedal",
          },
          {
            level: "Gold",
            description:
              "At the gold level, students learn data structures like Fenwick Trees, Disjoint Set Unions, and more, along with famous algorithms like Dijkstra's Algo.",
            image: "/icons/medals/gold.svg",
            alt: "Gold Medal",
            style: "goldMedal",
          },
          {
            level: "Platinum",
            description:
              "At the platinum level, problems become extremely challenging. The top 24 contestants are invited to the USA National Training Camp.",
            image: "/icons/medals/platinum.svg",
            alt: "Platinum Medal",
            style: "platinumMedal",
          },
        ].map((item, index) => (
          <article
            key={index}
            className="bg-[#0F0F0F] rounded-[1.25vw] flex flex-col justify-center items-center text-center p-[10vw] sm:p-0 sm:py-[3.75vw] flex-grow"
          >
            <Image
              width={10000}
              height={10000}
              src={item.image}
              className="sm:w-[4.375vw] w-[10vw]"
              alt={item.alt}
            />
            <h2 className={`sm:text-[1.4vw] text-[5vw] mt-[0.625vw] font-semibold ${item.style}`}>
              {item.level}
            </h2>
            <p
              className="sm:w-[17vw] w-[60vw] font-light text-[3vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] mt-[2vw]"
              style={{
                color: "rgba(255, 255, 255, 0.70)",
              }}
            >
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Road2Plat;
