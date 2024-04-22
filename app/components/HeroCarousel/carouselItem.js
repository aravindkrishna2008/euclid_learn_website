const CarousolItem = ({ image, name, description }) => {
  return (
    <div className="flex flex-row gap-[3vw] z-10">
      <img
        src={image}
        className="w-[32.5vw] h-[32.5vw] object-cover rounded-lg"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-[5vw] font-semibold w-[23vw] leading-[105%] text-white">
          {name}
        </h1>
        <p className="text-[1.25vw] text-white w-[30vw] font-light mt-[1.25vw]">
          {description}
        </p>
        <div className="cursor-pointer text-[1vw] mt-[2vw] rounded-full flex items-center justify-center font-semibold border-white border w-[10vw] py-[1vw] tracking-[0.05vw] text-white">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default CarousolItem;
