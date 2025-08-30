"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { PiWaveformBold } from "react-icons/pi";

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/api/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div className="p-8 pt-[9rem] bg-white dark:bg-black min-h-screen">
            <h1 className="max-w-7xl mx-auto text-3xl font-bold text-left mb-10 dark:text-white text-black">
                Projects
            </h1>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 place-items-center">
                {projects.map((p) => (
                    <Link
                        key={p.id}
                        href={`/projects/${p.id}`}
                        className="w-full flex justify-center"
                    >
                        <div className="bg-white dark:bg-[#0A0A0A] border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 rounded-md md:w-[420px] w-96 p-4 text-black dark:text-white relative transition hover:shadow-md">
                            {/* Top row: name + live link + menu */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={p.icon}
                                            alt="no preview"
                                            className="w-6 h-6 object-contain"
                                        />
                                        <h2 className="text-lg font-semibold flex items-center gap-2">
                                            <span>{p.name}</span>
                                        </h2>
                                    </div>

                                    <a
                                        href={p.live_link}
                                        target="_blank"
                                        onClick={(e) => e.stopPropagation()} // prevent card click override
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                                    >
                                        {p.live_link
                                            ?.replace("https://", "")
                                            .replace("http://", "")}
                                    </a>
                                </div>
                                <PiWaveformBold className="text-gray-600 dark:text-gray-400 text-xl" />
                            </div>

                            {/* GitHub link */}
                            <div className="mt-3 flex items-center gap-2 bg-[#E6E6E6] dark:bg-gray-800 w-fit rounded-2xl px-2">
                                <FaGithub className="text-gray-700 dark:text-gray-300" />
                                <a
                                    href={p.github_link}
                                    target="_blank"
                                    onClick={(e) => e.stopPropagation()} // prevent navigation override
                                    className="text-[12px] text-gray-700 dark:text-gray-300 hover:underline"
                                >
                                    {p.github_link?.replace("https://github.com/", "")}
                                </a>
                            </div>

                            {/* Description */}
                            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                {p.description || "No description provided."}
                            </p>

                            {/* Footer info */}
                            <div className="mt-4 text-xs text-gray-500 flex items-center gap-2">
                                <span>7/29/24</span>
                                <span>on</span>
                                <GoRepoForked className="text-gray-600 dark:text-gray-400" />
                                <span>main</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
