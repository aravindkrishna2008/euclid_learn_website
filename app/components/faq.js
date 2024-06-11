import { useState } from "react";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const faqData = [
    {
      question:
        "Are there any additional resources or materials provided for students?",
      answer:
        "Yes, we offer a range of supplementary resources including PowerPoint slides, high-quality worksheets, answer keys with step-by-step solutions, and professional lecture videos from expert private teachers.",
    },
    {
      question:
        "Do you provide homework help in addition to regular coaching sessions?",
      answer:
        "Yes, we provide homework help alongside our regular coaching sessions to ensure that students fully grasp the material.",
    },
    {
      question:
        "How do you keep parents/guardians informed about their child's progress?",
      answer:
        "We keep parents/guardians informed through regular progress reports, parent-teacher meetings, and an online portal where they can track their child's performance.",
    },
    {
      question:
        "Can lessons be customized to focus on specific topics or areas of difficulty?",
      answer:
        "Yes, lessons can be customized to focus on specific topics or areas of difficulty to cater to the individual needs of each student.",
    },
    {
      question: "What sets you apart from others in the area?",
      answer:
        "Our personalized approach, highly qualified tutors, and comprehensive resources set us apart from others in the area.",
    },
  ];

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="mx-auto mt-[5vw] mb-[5vw]  bg-white rounded-[2vw] w-[65vw] p-[2.5vw]">
      <h2 className="text-[2.8vw] font-bold mb-6 text-[#25272C] mb-[3.125vw]">
        Frequently Asked Questions
      </h2>

      {faqData.map((item, index) => (
        <div key={index} className="mb-[3.125vw]">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full text-left font-medium"
          >
            <span className="text-[1.25vw] font-light text-[#383A42]">
              {item.question}
            </span>
            <svg
              className={`w-5 h-5 text-[#3958F2] transform transition-transform ${
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
          </button>
          {open === index && (
            <div className="mt-2 font-light text-[#8E95A2] w-[90%] leading-[170%]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
