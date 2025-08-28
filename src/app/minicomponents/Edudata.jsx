"use client";
import { BookOpen, GraduationCap, Award, ArrowDown } from "lucide-react";

// Education data
const educationData = [
    {
        role: "MCA (Current)",
        company: "Post Graduation",
        duration: "2024 – Present",
        desc: "Subjects: Data Structures, DBMS, OS, Web Tech, AI, Discrete Math, Software Engineering",
        icon: <GraduationCap className="w-10 h-10 text-black dark:text-white" />,
    },
    {
        role: "Graduation (BCA)",
        company: "Under Graduation",
        duration: "2020 – 2023",
        desc: "Core Programming, Database Systems, Networking, OOP, Web Development",
        icon: <BookOpen className="w-10 h-10 text-black dark:text-white" />,
    },
    {
        role: "Certifications",
        company: "Professional Skills",
        duration: "2021 – Present",
        desc: "Fullstack Development (Udemy), Generative AI (Oracle), Data Analytics (In Progress)",
        icon: <Award className="w-10 h-10 text-yellow-500" />,
    },
];

export default function Edudata() {
    return (
        <div className="backdrop-blur-lg bg-white/10 dark:bg-black/40 p-8 rounded-2xl w-full h-full text-black dark:text-white shadow-lg flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-[0.7rem] mb-12 text-center">
                EDUCATION
            </h2>

            {/* Timeline Style like Experience */}
            <div className="relative flex flex-col items-center">
                {educationData.map((edu, i) => (
                    <div key={i} className="flex flex-col items-center w-full overflow-hidden">
                        {/* Card */}
                        <div className="rounded-2xl p-8 shadow-lg w-full max-w-[750px] flex flex-col md:flex-row items-start gap-6 relative bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
                            <div className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                {edu.icon}
                            </div>
                            <div>
                                <p className="text-2xl font-bold mb-1">{edu.role}</p>
                                <p className="text-lg font-semibold mb-2 opacity-80">
                                    {edu.company} <span>({edu.duration})</span>
                                </p>
                                <p className="text-base opacity-90 leading-relaxed">{edu.desc}</p>
                            </div>
                        </div>

                        {/* Arrow between cards */}
                        {i < educationData.length - 1 && (
                            <div className="my-6">
                                <ArrowDown className="w-8 h-8 text-gray-600 dark:text-gray-300 animate-bounce" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
