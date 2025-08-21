"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqsData = [
    {
        question: "How do I create an account?",
        answer: "Click the 'Sign Up' button in the top right corner and follow the registration process."
    },
    {
        question: "How do I reset my password?",
        answer: "Go  to the login page, click 'Forgot Password?', and follow the steps."
    },
    {
        question: "Where can I update my profile?",
        answer: "Navigate to the 'Profile' section from the dashboard to update your details."
    },
    {
        question: "How do I delete my account?",
        answer: "PleaseLorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt animi dolorum quisquam minima magni veritatis, accusantium, nam fuga id nostrum quas, doloremque tenetur ad iusto molestiae saepe odit doloribus placeat totam nobis illo ratione autem quos cum. Vel delectus sint, assumenda tempora itaque tenetur soluta! contact support to request permanent account deletion."
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we use encryption and best security practices to keep your data safe."
    },
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full min-h-screen flex justify-center items-center px-4">

            <div className="mx-auto max-w-[800px] w-full p-6 h-full">
                {faqsData.map((faq, index) => (
                    <div
                        key={index}
                        className="border-[1px] border-gray-300 dark:border-gray-800 p-3 mb-6 cursor-pointer rounded-lg"
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-gray-800 dark:text-gray-300">{faq.question}</h3>
                            <span className="text-xl text-gray-800 dark:text-gray-300">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </div>

                        {/* Smooth animation */}
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.p
                                    className="text-sm text-gray-500 mt-2"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.1, ease: "easeInOut" }}
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqs;
