import Image from "next/image";


const Grid = () => {
  return (
    <div className="relative bg-[#F5F7FA]">
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-2 pb-[20vh]">
        {/* Row 1: Image and Text */}
        <div className="flex justify-center  rounded-[1.25vw]  ">

        <Image
        width={10000}
        height={10000}
        src="/stock_image/sat/sat1.jpeg"
        alt="ap1"
        className="rounded-[1.25vw] h-[40vh] w-[100vh] object-cover mt-[10vh]"
      />
        </div>
        <div className="flex flex-col justify-center items-center pb-[0.5vh]">
          <p className="text-center sm:text-[48px] text-[10vw] font-semibold leading-[120%] ">We'll Meet You</p>
          <p className="text-center sm:text-[48px] text-[10vw] font-semibold leading-[120%]">Where You Are</p>
          <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] pl-[18vh]  pt-[1vh]">
          We match each student to the right tutor for them. Online tools like animated whiteboards and digital notes make it simple to learn.          </p>

        </div>
        
        {/* Row 2: Text and Image */}
        <div className="flex flex-col justify-center  pt-[0.5vh]">
          <p className="text-left sm:text-[48px] text-[10vw] font-semibold leading-[120%] tl-[30vh]">Stay Engaged and</p>
          <p className="text-left sm:text-[48px] text-[10vw] font-semibold leading-[120%]tl-[30vh] ">Accountable</p>
          <p className="font-light text-[#383A42] text-[4vw] sm:text-[1vw] leading-[170%] tracking-[0.28px] pr-[18vh] pt-[1vh] ">
          We match each student to the right tutor for them. Online tools like animated whiteboards and digital notes make it simple to learn.          </p>
        </div>
        <div className="flex justify-center items-center mt-[5vh]">
        <Image
        width={10000}
        height={10000}
        src="/stock_image/sat/sat2.jpeg"
        alt="ap1"
        className="rounded-[1.25vw] h-[50vh] w-[130vh] object-cover mt-[5vh]"
      />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Grid;