"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Pause, Play } from "lucide-react"

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Product Manager",
        company: "TechCorp",
        text: "This platform has completely transformed how we approach our workflow. The intuitive design and powerful features have increased our team's productivity by 40%.",
        rating: 5,
        avatar: "/professional-woman-avatar.png",
    },
    {
        name: "Michael Rodriguez",
        role: "Senior Developer",
        company: "StartupXYZ",
        text: "I've tried many solutions, but this one stands out. The seamless integration and excellent support team make it a joy to work with every day.",
        rating: 5,
        avatar: "/professional-man-avatar.png",
    },
    {
        name: "Emily Johnson",
        role: "Design Lead",
        company: "Creative Studio",
        text: "The attention to detail and user experience is exceptional. It's rare to find a tool that's both powerful and beautifully designed.",
        rating: 5,
        avatar: "/professional-woman-designer-avatar.png",
    },
    {
        name: "David Kim",
        role: "Founder",
        company: "InnovateLab",
        text: "Game-changing platform that has streamlined our entire operation. The ROI has been incredible, and our team loves using it.",
        rating: 5,
        avatar: "/professional-man-founder-avatar.png",
    },
]

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [isAutoPlaying])

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
        setIsAutoPlaying(false)
    }

    return (
        <section className="w-full py-16 px-4 bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">


                    <h2 className="hidden sm:block text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-[1rem]">
                        WHAT OUR CUSTOMERS SAY
                    </h2>
                    <p className="hidden sm:block mt-2 text-base md:text-lg text-gray-600 dark:text-gray-300 tracking-[0.2rem]">
                        Join thousands of satisfied customers who have transformed their workflow
                    </p>

                    {/* Mobile Heading */}
                    <h2 className="block sm:hidden text-2xl font-bold text-gray-900 dark:text-white tracking-[1rem]">
                        TESTIMONIA
                    </h2>

                    <p className="block sm:hidden mt-2 text-sm text-gray-600 dark:text-gray-300 tracking-widest">
                        Join thousands of satisfied customers who have transformed their workflow
                    </p>
                </div>

                <div className="relative">
                    {/* Prev Button */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 
              w-10 h-10 rounded-full bg-white dark:bg-black
              border border-gray-200 dark:border-gray-700 
              flex items-center justify-center
              hover:bg-gray-50 dark:hover:bg-black 
              transition-colors duration-200
              shadow-sm hover:shadow-md"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 
              w-10 h-10 rounded-full bg-white dark:bg-black 
              border border-gray-200 dark:border-gray-700 
              flex items-center justify-center
              hover:bg-gray-50 dark:hover:bg-black 
              transition-colors duration-200
              shadow-sm hover:shadow-md"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>

                    {/* Testimonial Card */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="bg-white dark:bg-black 
                  border border-gray-200 dark:border-gray-800 
                  rounded-xl p-8 md:p-10
                  shadow-sm hover:shadow-md 
                  transition-shadow duration-200"
                            >
                                {/* Rating */}
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Text */}
                                <blockquote className="text-gray-900 dark:text-gray-100 text-lg md:text-xl leading-relaxed mb-8">
                                    "{testimonials[currentIndex].text}"
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                                        alt={testimonials[currentIndex].name}
                                        className="w-12 h-12 rounded-full object-cover 
                      border-2 border-gray-100 dark:border-gray-800"
                                    />
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {testimonials[currentIndex].name}
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400 text-sm">
                                            {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Dots + Auto-play toggle */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    <div className="flex items-center gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentIndex
                                    ? "bg-gray-900 dark:bg-white w-8"
                                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Play / Pause Icon Button */}
                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-900 
              hover:bg-gray-200 dark:hover:bg-gray-700 
              transition-colors duration-200"
                        aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
                    >
                        {isAutoPlaying ? (
                            <Pause className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        ) : (
                            <Play className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        )}
                    </button>
                </div>
            </div>
        </section>
    )
}
