"use client";
import { BookOpen, GraduationCap, Award } from "lucide-react";

// Education data
const educationData = [
    {
        icon: <GraduationCap className="w-10 h-10" />,
        title: "MCA (Current)",
        desc: "Subjects: Data Structures, DBMS, OS, Web Tech, AI, Discrete Math, Software Engineering",
    },
    {
        icon: <BookOpen className="w-10 h-10" />,
        title: "Graduation (BCA)",
        desc: "Core Programming, Database Systems, Networking, OOP, Web Development",
    },
];

// Certifications
const certifications = [
    "Fullstack Development - Udemy",
    "Generative AI - Oracle",
    "Data Analytics (In Progress)",
];

export default function Edudata() {
    return (
        <div className="backdrop-blur-lg bg-white/10 dark:bg-black/40 p-8 rounded-2xl w-full h-full text-black dark:text-white shadow-lg flex flex-col">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-bold tracking-[0.7rem] mb-8 text-center">
                EDUCATION
            </h2>

            {/* Education Cards */}
            <div className="grid gap-8 max-w-[700px] mx-auto">
                {educationData.map((edu, i) => (
                    <div
                        key={i}
                        className="rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-start gap-6 bg-white text-black dark:bg-black dark:text-white"
                    >
                        <div className="p-4 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                            {edu.icon}
                        </div>
                        <div>
                            <p className="text-3xl font-bold mb-2">{edu.title}</p>
                            <p className="text-lg opacity-90 leading-relaxed">{edu.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Certifications */}
            <div className="mt-12 max-w-[700px] mx-auto">
                <div className="flex items-center gap-3 mb-6">
                    <Award className="w-10 h-10 text-yellow-500" />
                    <h2 className="text-3xl font-semibold">Certifications</h2>
                </div>

                <div className="flex flex-col min-w-[700px] gap-3">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-xl shadow-md text-lg font-medium bg-white text-black dark:bg-black dark:text-white"
                        >
                            {cert}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
