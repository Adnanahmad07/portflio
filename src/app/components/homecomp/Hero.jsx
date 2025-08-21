import React from "react";
import Image from "next/image";
import Profile from "../../../assets/my1.jpg";
import { SiNextdotjs, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiFramer, SiSocketdotio } from "react-icons/si";


const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden 
             text-black dark:text-white 
             bg-gradient-to-br 
             from-[#ffffff] via-[#f0f0f0] to-[#e4e4e4] 
             dark:from-[#0f0c29] dark:via-[#000000] dark:to-[#24243e]">

            {/* Moving Gradient Animation Background */}
            <div className="absolute inset-0 z-0 animate-backgroundBlur bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300/20 via-transparent to-transparent blur-3xl" />

            {/* Content Wrapper */}
            <div className="z-10 text-center px-4 max-w-4xl">
                {/* Role Badge */}
                <span className="inline-block px-4 py-1 mb-4 rounded-full 
                    bg-black/10 dark:bg-white/10 
                    text-sm backdrop-blur-md 
                    border border-black/20 dark:border-white/20 
                    text-black dark:text-white">
                    ⚡ Frontend Engineer specializing in React & Next.js
                </span>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black dark:text-white">
                    Hi, I'm <span className="text-purple-600 dark:text-purple-400">Adnan Ahmad</span>
                    <br />
                    I Build <span className="text-gray-800 dark:text-gray-300">Scalable Web Apps</span>
                </h1>

                {/* Tagline */}
                <p className="mt-6 text-lg text-gray-800 dark:text-gray-300">
                    Building fast, scalable, and user-friendly web apps.
                </p>

                {/* Location/Availability */}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Available for freelance & full-time roles · Based in India · Working remotely worldwide
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                    <a
                        href="/resume.pdf"
                        className="px-6 py-3 
                            bg-black text-white 
                            dark:bg-white dark:text-black 
                            rounded-xl font-medium 
                            hover:bg-gray-800 dark:hover:bg-gray-200 
                            transition"
                        download
                    >
                        📄 Download Resume
                    </a>
                    <a
                        href="#projects"
                        className="px-6 py-3 
                            border border-black dark:border-white 
                            text-black dark:text-white 
                            rounded-xl 
                            hover:bg-black hover:text-white 
                            dark:hover:bg-white dark:hover:text-black 
                            transition"
                    >
                        🔍 View Projects
                    </a>
                </div>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <div className="flex flex-col items-center">
                        <SiReact className="text-4xl text-black dark:text-white" />

                    </div>
                    <div className="flex flex-col items-center">
                        <SiNextdotjs className="text-4xl text-black dark:text-white" />

                    </div>
                    <div className="flex flex-col items-center">
                        <SiTailwindcss className="text-4xl text-black dark:text-white" />

                    </div>
                    <div className="flex flex-col items-center">
                        <SiNodedotjs className="text-4xl text-black dark:text-white" />

                    </div>
                    <div className="flex flex-col items-center">
                        <SiJavascript className="text-4xl text-black dark:text-white" />

                    </div>
                </div>
            </div>

            {/* Profile Image */}
            <div className="absolute bottom-8 right-8 z-10 hidden md:block">
                <Image
                    src={Profile}
                    alt="Adnan Ahmad"
                    width={140}
                    height={140}
                    className="rounded-full border-4 border-white shadow-lg"
                />
            </div>
        </section>
    );
};

export default Hero;
