"use client";
import { Briefcase, ArrowDown } from "lucide-react";

// Experience Data
const experienceData = [
    {
        role: "Full Stack Developer Intern",
        company: "TechSoft Pvt. Ltd.",
        duration: "Jan 2024 – Jun 2024",
        desc: "Worked on MERN stack applications, implemented REST APIs, and optimized UI with Tailwind + React.",
    },
    {
        role: "Freelance Developer",
        company: "Remote Projects",
        duration: "2022 – Present",
        desc: "Built responsive websites, dashboards, and real-time apps using Next.js, Node.js, and WebSockets.",
    },
    {
        role: "Open Source Contributor",
        company: "GitHub Projects",
        duration: "2021 – Present",
        desc: "Contributed to UI components, bug fixes, and documentation for community-driven repositories.",
    },
];

export default function Expdata() {
    return (
        <div className=" backdrop-blur-lg bg-white/10 dark:bg-black/40 p-8 rounded-2xl w-full h-full text-black dark:text-white shadow-lg flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-[0.7rem] mb-12 text-center">
                EXPERIENCE
            </h2>

            {/* Timeline Flow Diagram Style */}
            <div className="relative flex flex-col items-center">
                {experienceData.map((exp, i) => (
                    <div key={i} className="flex flex-col items-center w-full overflow-hidden">
                        {/* Experience Card */}
                        <div
                            className="rounded-2xl p-8 shadow-lg w-full max-w-[750px] flex flex-col md:flex-row items-start gap-6 relative bg-white dark:bg-black border border-gray-300 dark:border-gray-700"
                        >
                            <div className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                                <Briefcase className="w-10 h-10 text-black dark:text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold mb-1 text-black dark:text-white">
                                    {exp.role}
                                </p>
                                <p className="text-lg font-semibold mb-2 text-black dark:text-white">
                                    {exp.company}{" "}
                                    <span className="opacity-80">({exp.duration})</span>
                                </p>
                                <p className="text-base opacity-90 leading-relaxed text-black dark:text-white">
                                    {exp.desc}
                                </p>
                            </div>
                        </div>

                        {/* Arrow between cards (except last one) */}
                        {i < experienceData.length - 1 && (
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
