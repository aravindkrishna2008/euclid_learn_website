import { motion } from "framer-motion";
import Image from "next/image";

const CarousolItem = ({ image, name, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col sm:flex-row gap-[3vw] z-10"
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
        <motion.div
          whileHover={{ scale: 1.05, translateY: -5 }}
          className="cursor-pointer hover:opacity-70 transition-all duration-200 text-[4vw] sm:text-[1vw] mt-[5vw] sm:mt-[2vw] rounded-full flex items-center justify-center font-semibold border-white border w-[80vw] sm:w-[10vw] py-[1vw] tracking-[0.05vw] text-white"
        >
          Learn More
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CarousolItem;