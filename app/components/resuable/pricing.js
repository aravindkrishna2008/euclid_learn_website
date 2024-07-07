import { motion } from "framer-motion";
import Image from "next/image";

const Pricing = () => {
  return (
    <div className="bg-[#3958F2] px-[6.25vw] py-[9.3vw] flex flex-col items-center justify-center">
      <div className="text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-[10vw] sm:text-[5vw] font-semibold leading-[120%] tracking-[-0.28px] text-center"
        >
          Pricing Plans
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="sm:text-[1.25vw] text-[4vw] font-light leading-[140%] mt-[4vw] sm:mt-0 sm:leading-[160%] text-white tracking-[0.0125vw] w-[80vw] sm:w-[51vw]"
        >
          Get personalized lessons on Zoom with mentors. Customized test prep,
          lectures, problem-solving, and study strategies based on your goals.
          After each session, mentors set action items, assign homework, and
          share lecture resources for review.
        </motion.p>
      </div>
      <div className="flex flex-col sm:flex-row mt-[5vw] gap-[4vw] sm:gap-[1.25vw]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background: "linear-gradient(90deg, #FEF5E5 0%, #C8A703 100%)",
          }}
          className="rounded-[1.875vw] h-[45vw] sm:h-[23vw] sm:w-[43vw] w-[80vw] flex flex-col justify-between p-[5vw] sm:p-[2.5vw] text-[#332B00]"
        >
          <p className="sm:text-[1.1vw] text-[4vw] font-semibold">Gold</p>
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-[4.5vw]">
              <h1 className="sm:text-[4.5vw] text-[10vw] font-semibold leading-[105%]">
                $70
              </h1>
              <p className="sm:text-[2.25vw] text-[4vw] font-semibold tracking-[-0.255px] leading-[120%]">
                per hour
              </p>
            </div>
            <div
              style={{
                background: "rgba(51, 43, 0, 0.20)",
              }}
              className="bg-black h-[5vh] w-[1px] mr-[4.5vw]"
            />
            <div className="flex flex-col text-[3vw] sm:text-[1.15vw]">
              <div className="flex flex-row items-center">
                <Image
                  width={10000}
                  height={10000}
                  src="/icons/general_icons/check-circle.svg"
                  className="sm:w-[1.15vw] w-[3vw] h-[3vw] sm:h-[1.15vw]"
                />
                <p className=" ml-[1.15vw] font-light">1 Student</p>
              </div>
              <div className="flex flex-row items-center">
                <Image
                  width={10000}
                  height={10000}
                  src="/icons/general_icons/check-circle.svg"
                  className="sm:w-[1.15vw] w-[3vw] h-[3vw] sm:h-[1.15vw]"
                />
                <p className=" ml-[1.15vw] font-light">Gold Mentor</p>
              </div>
              <div className="flex flex-row items-center">
                <Image
                  width={10000}
                  height={10000}
                  src="/icons/general_icons/check-circle.svg"
                  className="sm:w-[1.15vw] w-[3vw] h-[3vw] sm:h-[1.15vw]"
                />
                <p className=" ml-[1.15vw] font-light">1 officer hour/week</p>
              </div>
            </div>
          </div>
          <div className="w-[100%] rounded-full cursor-pointer hover:-translate-y-1 duration-200 hover:scale-105 hover:bg-[#514501] transition-all bg-[#332B00] p-[1vw] font-semibold text-white text-[3vw] sm:text-[1vw] flex items-center justify-center">
            Claim 1-Hour Free Tutoring
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background: "linear-gradient(90deg, #F0F0F0 0%, #A0A0A0 100%)",
          }}
          className="rounded-[1.875vw] h-[45vw] sm:h-[23vw] sm:w-[43vw] w-[80vw] flex flex-col justify-between p-[5vw] sm:p-[2.5vw] text-[#332B00]"
        >
          <p className="sm:text-[1.1vw] text-[4vw] font-semibold">Platinum</p>
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-[4.5vw]">
              <h1 className="sm:text-[4.5vw] text-[10vw] font-semibold leading-[105%]">
                $90
              </h1>
              <p className="sm:text-[2.25vw] text-[4vw] font-semibold tracking-[-0.255px] leading-[120%]">
                per hour
              </p>
            </div>
            <div
              style={{
                background: "rgba(37, 39, 44, 0.20)",
              }}
              className="bg-black h-[5vh] w-[1px] mr-[4.5vw]"
            />
            <div className="flex flex-col text-[3vw] sm:text-[1.15vw]">
              <div className="flex flex-row  items-center">
                <Image
                  width={10000}
                  height={10000}
                  src="/icons/general_icons/check-circle.svg"
                  className="sm:w-[1.15vw] w-[3vw] h-[3vw] sm:h-[1.15vw]"
                />
                <p className=" ml-[1.15vw] font-light">1 Student</p>
              </div>
              <div className="flex flex-row items-center">
                <Image
                  width={10000}
                  height={10000}
                  src="/icons/general_icons/check-circle.svg"
                  className="sm:w-[1.15vw] w-[3vw] h-[3vw] sm:h-[1.15vw]"
                />
                <p className=" ml-[1.15vw] font-light">Platinum Mentor</p>
              </div>
              <div className="flex flex-row items-center">
                <Image
                  width={10000}
                  height={10000}
                  src="/icons/general_icons/check-circle.svg"
                  className="sm:w-[1.15vw] w-[3vw] h-[3vw] sm:h-[1.15vw]"
                />
                <p className=" ml-[1.15vw] font-light">1 officer hour/week</p>
              </div>
            </div>
          </div>
          <div className="w-[100%] cursor-pointer hover:-translate-y-1 duration-200 hover:scale-105 hover:bg-[#3c404a] transition-all rounded-full bg-[#25272C] p-[1vw] font-semibold text-white text-[3vw] sm:text-[1vw] flex items-center justify-center">
            Claim 1-Hour Free Tutoring
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;