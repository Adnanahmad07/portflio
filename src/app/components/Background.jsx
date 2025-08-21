"use client";
import { motion } from "framer-motion";

export default function Background({ className }) {
    return (
        <div
            className={`fixed inset-0 -z-10 bg-white dark:bg-black overflow-hidden ${className}`}
        >
            {/* Top Right Orb */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full 
                   bg-gradient-to-br from-purple-300/40 via-blue-300/30 to-cyan-500/20 
                   dark:from-indigo-700/40 dark:via-purple-600/30 dark:to-pink-500/20 
                   blur-3xl"
                animate={{
                    x: [0, 40, -40, 0],
                    y: [0, 30, -30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ top: "-200px", right: "-200px" }}
            />

            {/* Bottom Left Orb */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full 
                   bg-gradient-to-tr from-green-200/40 via-emerald-100/30 to-lime-400/20 
                   dark:from-teal-600/40 dark:via-green-200/30 dark:to-yellow-500/20 
                   blur-3xl"
                animate={{
                    x: [0, -40, 40, 0],
                    y: [0, -30, 30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ bottom: "-200px", left: "-200px" }}
            />
        </div>
    );
}
