"use client";
import React, { useState, useEffect } from "react";
import rightimg from "../../../assets/my1.jpg";
import leftimg from "../../../assets/my2.jpg";
import Edudata from '../../minicomponents/Edudata.jsx'
import Expdata from '../../minicomponents/Expdata.jsx'


const Education = () => {
    const [lineX, setLineX] = useState("50%"); // divider position in %
    const [targetX, setTargetX] = useState(50); // target position (in %)

    useEffect(() => {
        const handleMouseMove = (e) => {
            const pos = (e.clientX / window.innerWidth) * 100;
            setTargetX(pos);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Smooth animation using requestAnimationFrame
        let animationFrame;
        const smoothMove = () => {
            setLineX((prev) => {
                const prevNum = parseFloat(prev);
                const diff = targetX - prevNum;
                return `${prevNum + diff * 0.08}%`; // 0.08 = smoothness
            });
            animationFrame = requestAnimationFrame(smoothMove);
        };
        smoothMove();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, [targetX]);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Left Side with Background Image */}
            <div
                className=" min-w-[500px]  h-full bg-cover bg-center"
                style={{
                    width: lineX,
                    backgroundImage: `url(${leftimg.src})`,
                }}
            >
                {/* Glassmorphic Box for Education Content */}
                <Edudata />
            </div>


            {/* Right Side with Background Image */}
            <div
                className="absolute top-0 right-0 h-full flex items-center justify-center bg-cover bg-center"
                style={{
                    width: `calc(100% - ${lineX})`,
                    backgroundImage: `url(${rightimg.src})`,
                }}
            >
                <Expdata />
            </div>

            {/* Vertical Line */}
            <div
                className="absolute top-0 h-full w-[3px] bg-white"
                style={{ left: lineX }}
            ></div>
        </div>
    );
};

export default Education;
