import Image from "next/image";

const CarouselItem = ({ image, name, description, background }) => {
  return (
    <div
      className="flex flex-col py-[10vh] sm:flex-row gap-[3vw] z-10 mb-10 p-5 rounded-lg px-[10vh] w-full  sm:rounded-3xl relative overflow-hidden"
      style={{ background }}
    >
      <Image
        width={10000}
        height={10000}
        src={image}
        className="sm:w-[32.5vw] sm:h-[32.5vw] w-[80vw] h-[80vw] object-cover rounded-lg"
      />
      <div className="flex flex-col justify-center">
        <h1 className="sm:text-[5vw] text-[10vw] font-semibold w-[80vw] sm:w-[23vw] leading-[105%] text-white">
          {name}
        </h1>
        <p className="sm:text-[1.25vw] text-[4vw] text-white w-[80vw] sm:w-[30vw] font-light mt-[1.25vw]">
          {description}
        </p>
        <div className="cursor-pointer hover:opacity-70 transition-all duration-200 text-[4vw] sm:text-[1vw] mt-[5vw] sm:mt-[2vw] rounded-full flex items-center justify-center font-semibold border-white border w-[80vw] sm:w-[10vw] py-[1vw] tracking-[0.05vw] text-white">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;