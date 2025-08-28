"use client";
import React, { useState, useEffect } from "react";
import Edudata from "../../minicomponents/Edudata.jsx";
import Expdata from "../../minicomponents/Expdata.jsx";

const Education = () => {
    const [lineX, setLineX] = useState("50%"); // divider position in %
    const [targetX, setTargetX] = useState(50); // target position (in %)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile view
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        if (!isMobile) {
            // Only run divider animation on desktop
            const handleMouseMove = (e) => {
                const pos = (e.clientX / window.innerWidth) * 100;
                setTargetX(pos);
            };

            window.addEventListener("mousemove", handleMouseMove);

            let animationFrame;
            const smoothMove = () => {
                setLineX((prev) => {
                    const prevNum = parseFloat(prev);
                    const diff = targetX - prevNum;
                    return `${prevNum + diff * 0.08}%`;
                });
                animationFrame = requestAnimationFrame(smoothMove);
            };
            smoothMove();

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                cancelAnimationFrame(animationFrame);
            };
        }
    }, [targetX, isMobile]);

    return (
        <div className="relative w-full h-auto overflow-hidden">
            {/* Desktop Split View */}
            {!isMobile ? (
                <div className="relative w-full h-screen">
                    {/* Left Side */}
                    <div
                        className="min-w-[300px] h-full bg-white dark:bg-black"
                        style={{ width: lineX }}
                    >
                        <Edudata />
                    </div>

                    {/* Right Side */}
                    <div
                        className="absolute top-0 right-0 h-full flex items-center justify-center bg-white dark:bg-black"
                        style={{ width: `calc(100% - ${lineX})` }}
                    >
                        <Expdata />
                    </div>

                    {/* Vertical Divider */}
                    <div
                        className="absolute top-0 h-full w-[3px] bg-gray-600"
                        style={{ left: lineX }}
                    ></div>
                </div>
            ) : (
                // Mobile Stacked Layout
                <div className="flex flex-col w-full">
                    <div className="w-full bg-white dark:bg-black p-4">
                        <Edudata />
                    </div>
                    <div className="w-full bg-white dark:bg-black p-4 border-t border-gray-300 dark:border-gray-700">
                        <Expdata />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Education;
