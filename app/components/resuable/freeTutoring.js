import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const FreeTutoring = ({ handleClick, freeTutoringRefClick }) => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentEmail: "",
    parentName: "",
    parentEmail: "",
    grade: "",
    subject: "",
    concerns: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.target;

    try {
      const response = await fetch("https://formspree.io/f/xldrgbwp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your form has been submitted successfully!");
        form.reset(); // Reset the form fields
      } else {
        alert("There was a problem with your submission. Please try again.");
      }
    } catch (error) {
      alert("There was a problem with your submission. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#3958F2] py-[10vw] px-[6.25vw]"
    >
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between">
        <div className="w-[80vw] flex flex-col gap-[2vw] sm:gap-0">
          <h1
            onClick={freeTutoringRefClick}
            className="sm:text-[5vw] text-[10vw] text-white leading-[105%] font-semibold"
          >
            Claim 1-Hour Free Tutoring
          </h1>
          <p className="mt-[3.125vw] w-[65%] text-[4vw] sm:text-[1.4vw] text-white font-semibold leading-[130%]">
            Fill the form or contact us to claim your 1-Hour Free Tutoring.
          </p>

          <div className="flex flex-row mt-[1.25vw] items-center">
            <Image
              width={10000}
              height={10000}
              className="sm:w-[1.875vw] w-[5vw]"
              src="/icons/general_icons/mail.svg"
            />
            <p className="text-white font-light ml-[1.25vw] text-[3vw] sm:text-[1.25vw] ">
              euclidlearn@gmail.com
            </p>
          </div>
          <div className="flex flex-row mt-[0.3vw] items-center">
            <Image
              width={10000}
              height={10000}
              className="sm:w-[1.875vw] w-[5vw]"
              src="/icons/general_icons/phone.svg"
            />
            <p className="text-white font-light ml-[1.25vw] text-[3vw] sm:text-[1.25vw] ">
              +1 408-706-6234
            </p>
          </div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#4766FF] mt-[5vw] sm:mt-0 sm:w-[80vw] p-[5vw] sm:p-[2.5vw] flex flex-col gap-[2vw] rounded-[1.875vw]"
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="studentName"
              placeholder="Student Name"
              value={formData.studentName}
              onChange={handleChange}
              className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
            />
            <input
              type="email"
              name="studentEmail"
              placeholder="Student Email"
              value={formData.studentEmail}
              onChange={handleChange}
              className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
            />
            <input
              type="text"
              name="parentName"
              placeholder="Parent Name"
              value={formData.parentName}
              onChange={handleChange}
              className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
            />
            <input
              type="email"
              name="parentEmail"
              placeholder="Parent Email"
              value={formData.parentEmail}
              onChange={handleChange}
              className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
            />
            <input
              type="text"
              name="grade"
              placeholder="Grade"
              value={formData.grade}
              onChange={handleChange}
              className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject you need help with"
              value={formData.subject}
              onChange={handleChange}
              className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
            />
            <textarea
              name="concerns"
              placeholder="Write any concerns here"
              value={formData.concerns}
              onChange={handleChange}
              className="bg-transparent text-white opacity-60 font-light placeholder-white outline-none w-full border-b-[1px] border-white py-[0.8vw] text-[4vw] sm:text-[1.25vw] mt-[1.25vw]"
            />
            <button
              type="submit"
              className="bg-[#F3B71D] cursor-pointer hover:-translate-y-1 duration-200 hover:scale-105 hover:bg-[#e7b841] transition-all mt-[4vw] sm:mt-0 sm:w-[70%] text-[#181953] rounded-full sm:py-[1vw] py-[3vw] px-[1.875vw] fomt-semibold text-[3vw] sm:text-[1vw] font-semibold"
            >
              Claim 1-Hour Free Tutoring
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FreeTutoring;