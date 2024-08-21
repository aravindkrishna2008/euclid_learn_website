import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const CarouselItem = ({
  image,
  name,
  description,
  background,
  items,
  handleDotClick,
  currentSlide,
  link, // New prop for the link destination
  freeTutoringRefClick,
}) => {
  return (
    <article
      className="flex flex-col rounded-[1.875vw] relative items-center justify-center py-[10vh] sm:flex-row gap-[3vw] z-10 p-5 px-[12vw] w-full sm:rounded-[1.875vw] overflow-hidden"
      style={{ background }}
    >
      <Image
        width={10000}
        height={10000}
        src={image}
        alt={`${name} featured image`}
        className="sm:w-[32.5vw] sm:h-[32.5vw] w-[80vw] h-[80vw] object-cover rounded-lg"
      />
      <div className="flex flex-col justify-center">
        <h2 className="sm:text-[5vw] text-[10vw] font-semibold w-[80vw] sm:w-[23vw] leading-[105%] text-white">
          {name}
        </h2>
        <p className="sm:text-[1.25vw] text-[4vw] text-white w-[80vw] sm:w-[30vw] font-light mt-[1.25vw]">
          {description}
        </p>
        {/* Conditionally render a Link component */}
        {link ? (
          <Link legacyBehavior href={link}>
            <a className="cursor-pointer hover:opacity-70 transition-all duration-200 text-[4vw] sm:text-[1vw] mt-[5vw] sm:mt-[2vw] rounded-full flex items-center justify-center font-semibold border-white border w-[80vw] sm:w-[10vw] py-[1vw] tracking-[0.05vw] text-white">
              Learn More
            </a>
          </Link>
        ) : (
          <button
            className="cursor-pointer hover:opacity-70 transition-all duration-200 text-[4vw] sm:text-[1vw] mt-[5vw] sm:mt-[2vw] rounded-full flex items-center justify-center font-semibold border-white border w-[80vw] sm:w-[10vw] py-[1vw] tracking-[0.05vw] text-white"
            onClick={freeTutoringRefClick}
          >
            Learn More
          </button>
        )}
      </div>
      <nav className="absolute -bottom-[2vw] flex space-x-2 z-10 mb-[8vh]" aria-label="Carousel navigation dots">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </nav>
    </article>
  );
};

export default CarouselItem;
