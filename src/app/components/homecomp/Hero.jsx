import React from "react";
import Image from "next/image";
import Profile from "../../../assets/my1.jpg";
import { SiNextdotjs, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript } from "react-icons/si";

const Hero = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden
        text-black dark:text-white dark:bg-none px-4"
        >
            {/* Moving Gradient Animation Background */}
            <div className="absolute inset-0 z-0 animate-backgroundBlur bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-300/20 via-transparent to-transparent blur-3xl" />

            {/* Content Wrapper */}
            <div className="z-10 text-center max-w-4xl w-full">
                {/* Announcement / Role Badge */}
                <span
                    className="inline-block px-4 py-2 mb-6 rounded-full
          bg-white/20 dark:bg-black/20
          text-xs sm:text-sm md:text-base
          font-medium backdrop-blur-md shadow-md
          border border-white/30 dark:border-black/30
          text-black dark:text-white
          transition"
                >
                    ⚡ Frontend Engineer specializing in React & Next.js
                </span>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-black dark:text-white">
                    Hi, I'm{" "}
                    <span className="text-purple-600 dark:text-purple-400">Adnan Ahmad</span>
                    <br />
                    I Build{" "}
                    <span className="text-gray-800 dark:text-gray-300">Scalable Web Apps</span>
                </h1>

                {/* Tagline */}
                <p className="mt-6 text-base sm:text-lg text-gray-800 dark:text-gray-300 px-2">
                    Building fast, scalable, and user-friendly web apps.
                </p>

                {/* Location / Availability */}
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    Available for freelance & full-time roles · Based in India · Working remotely worldwide
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                    <a
                        href="/resume.pdf"
                        className="px-4 sm:px-6 py-2 sm:py-3 
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
                        className="px-4 sm:px-6 py-2 sm:py-3 
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
                <div className="mt-8 flex flex-wrap justify-center gap-5">
                    <SiReact className="text-3xl sm:text-4xl text-black dark:text-white" />
                    <SiNextdotjs className="text-3xl sm:text-4xl text-black dark:text-white" />
                    <SiTailwindcss className="text-3xl sm:text-4xl text-black dark:text-white" />
                    <SiNodedotjs className="text-3xl sm:text-4xl text-black dark:text-white" />
                    <SiJavascript className="text-3xl sm:text-4xl text-black dark:text-white" />
                </div>
            </div>

            {/* Profile Image */}
            <div className="absolute bottom-6 right-6 z-10 hidden md:block">
                <Image
                    src={Profile}
                    alt="Adnan Ahmad"
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-white shadow-lg"
                />
            </div>
        </section>
    );
};

export default Hero;
