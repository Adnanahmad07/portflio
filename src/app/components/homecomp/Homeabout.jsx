import React from "react";
import Image from "next/image";
import { SiNextdotjs, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiFramer, SiSocketdotio } from "react-icons/si";
import my1 from "../../../assets/my1.jpg";

const Homeabout = () => {
    return (
        <section className="  w-full py-16 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white">
            <div className="max-w-6xl md:h-[869px] mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* Profile Image */}
                <div className="relative flex-shrink-0">
                    <Image
                        src={my1}
                        alt="Adnan Ahmad"
                        width={300}
                        height={300}
                        className="rounded-[75%_23%] border-4 border-white dark:border-gray-200 shadow-xl object-cover"
                    />
                </div>

                {/* About Me Content */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                        Hi, I'm <span className="font-semibold">Adnan Ahmad</span>, a passionate
                        <span className="text-blue-600 dark:text-blue-400"> Full Stack Developer</span>.
                        I specialize in building modern, responsive, and scalable applications using
                        Next.js, React.js, Node.js, and Tailwind CSS.
                        I enjoy crafting smooth UI/UX with Framer Motion and connecting real-time systems
                        through WebSockets. My focus is on clean code, performance, and seamless user experiences.
                    </p>

                    {/* Tech Icons */}
                    <div className="flex flex-wrap gap-6 text-4xl">
                        <SiNextdotjs className="text-black dark:text-white" title="Next.js" />
                        <SiReact className="text-black dark:text-white" title="React.js" />
                        <SiNodedotjs className="text-black dark:text-white" title="Node.js" />
                        <SiTailwindcss className="text-black dark:text-white" title="Tailwind CSS" />
                        <SiJavascript className="text-black dark:text-white" title="JavaScript" />
                        <SiFramer className="text-black dark:text-white" title="Framer Motion" />
                        <SiSocketdotio className="text-black dark:text-white" title="WebSockets" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Homeabout;
