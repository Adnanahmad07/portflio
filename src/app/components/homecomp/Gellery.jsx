import React from 'react'
import Background from '../../components/Background.jsx'
import Corve from './Corve.jsx'

const Gellery = () => {
    return (
        <div className="relative border-b-2 dark:border-gray-800 min-h-screen flex flex-col items-center justify-center text-center">
            {/* Background */}
            <Background />

            {/* Center Text */}
            <div className="z-10 flex flex-wrap justify-center items-center text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
                <Corve marqueeText="-- Creative Portfolio of Adnan Year 2025"
                    speed={3}
                    curveAmount={200}
                    className="tracking-widest" />
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-10 text-lg font-medium text-gray-700 dark:text-gray-300  hover:text-gray-900 dark:hover:text-white transition border  p-5 px-16 border-gray-400 rounded-3xl">
                Dive In
            </div>
        </div>
    )
}

export default Gellery
