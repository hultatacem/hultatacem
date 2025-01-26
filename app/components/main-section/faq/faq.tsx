"use client";
import { ArrowDown01Icon } from "hugeicons-react";
import React, { useState } from "react";
import clx from "clsx";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Who can participate?",
      answer:
        "Any current university student can participate. Teams must consist of 3-4 members from the any university.",
    },
    {
      question: "What is the timeline for the competition?",
      answer:
        "The OnCampus program final will be at mid febuary, with the global finals taking place the following summer.",
    },
    {
      question: "What kind of support is provided?",
      answer:
        "Participants receive mentorship, workshops, and resources to help develop their ideas and pitch their solutions.",
    },
  ];
  return (
    // <div className="flex max-w-screen-xl mx-auto px-4 mt-10 py-8">
    //   <p className="text-3xl font-medium text-dark text-center mx-auto ">
    //     Frequently Asked Questions
    //   </p>
    // </div>\

    <section className="py-16 px-4 mt-36" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-dark">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 mt-20">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-pink-100 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 flex justify-between items-center bg-white hover:bg-pink-50 transition-colors duration-300"
              >
                <span className="text-dark font-medium">{faq.question}</span>
                <ArrowDown01Icon
                  className={clx(
                    "w-5 h-5 text-muted-600 transition-transform duration-300",
                    { "transform rotate-180": openFaq === index }
                  )}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
