import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      question:
        "What is the process for enrolling my student in your program?",
      answer:
        "Enrolling is simple and smooth. Contact us to schedule an initial consultation, where we’ll assess your student’s needs and match them with a suitable teacher. We’ll then arrange sessions at your convenience to get started.        ",
    },
    {
      question:
        "What kind of feedback can parents expect from teachers?        ",
      answer:
        "Parents receive regular, detailed feedback including progress reports, session summaries, and insights into strengths and areas for growth. We also provide free monthly meetings with teachers to discuss progress and address any concerns.        ",
    },
    {
      question:
        "Do you provide homework help in addition to regular classes?        ",
      answer:
        "Absolutely, we offer homework help alongside regular classes. Our tutors provide targeted support to ensure students excel in their assignments and build a deeper understanding of the material.        ",
    },
    {
      question:
        "Are your tutoring sessions one-on-one or in groups?        ",
      answer:
        "We provide both one-on-one and small group sessions. One-on-one sessions offer personalized attention, while small groups promote collaboration and peer support. Group sizes are kept small for effective support.        ",
    },
    {
      question: "What qualifications do your teachers have for specialized subjects?      ",
      answer:
        "Our teachers are highly qualified with advanced degrees and extensive teaching experience. For example, our USACO teacher has trained students for the International Indian Informatics Olympiad, is an ICPC World Finalist, a Codeforces International Master (99.2nd percentile), and excels at the Indian Institute of Technology. ",
    },
  ];

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mx-auto mt-[10vw] mb-[10vw] bg-white rounded-[2vw] w-[90vw] sm:w-[65vw] p-[5vw] sm:p-[2.5vw] shadow-lg" // Added shadow-lg here
    >
      <h2 className="sm:text-[2.8vw] text-[7.5vw] font-bold text-[#25272C] mb-[3.125vw]">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-[4vw] sm:gap-0">
        {faqData.map((item, index) => (
          <div key={index} className="mb-[3.125vw]">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left font-medium"
            >
              <span className="sm:text-[1.25vw] text-[4vw] font-light text-[#383A42]">
                {item.question}
              </span>
              <div className="w-[6vw] sm:w-5">
                <svg
                  className={`sm:w-5 sm:h-5 w-[6vw] h-[6vw] text-[#3958F2] transform transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </button>
            {open === index && (
              <div className="mt-2 text-[3vw] sm:text-[1.125vw] font-light text-[#8E95A2] w-[90%] leading-[170%]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;
