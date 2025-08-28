
'use client'
import React, { useState } from "react"
import World from "@/app/minicomponents/World"
// Custom Button Component
function CustomButton({ onClick, type = "button", children }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="bg-transparent border-none text-white hover:bg-white hover:text-black 
                 transition-colors duration-300 p-0 h-auto font-normal text-base"
        >
            <span className="flex items-center gap-2">
                <span className="text-green-400">→</span>
                {children}
            </span>
        </button>
    )
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left side - Content and Form */}
                    <div className="space-y-8">
                        {/* Header */}
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                                Got a project in mind?
                                <br />
                                Let's talk.
                            </h1>
                            <div className="border-b border-gray-600 pb-4">
                                <p className="text-lg text-gray-500">info@sainturbain.com</p>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 uppercase tracking-wider">CONTACT FORM</label>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 uppercase tracking-wider">FIELDS</label>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="border-b border-gray-600">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="NAME"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent text-white placeholder-gray-500 py-3 
                               focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>

                                <div className="border-b border-gray-600">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="EMAIL"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent text-white placeholder-gray-500 py-3 
                               focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>

                                <div className="border-b border-gray-600">
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="COMPANY"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent text-white placeholder-gray-500 py-3 
                               focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>

                                <div className="border-b border-gray-600">
                                    <textarea
                                        name="project"
                                        placeholder="DESCRIBE YOUR PROJECT"
                                        value={formData.project}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="w-full bg-transparent text-white placeholder-gray-500 py-3 resize-none 
                               focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>

                                <div className="border-b border-gray-600">
                                    <input
                                        type="text"
                                        name="budget"
                                        placeholder="BALLPARK BUDGET"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        className="w-full bg-transparent text-white placeholder-gray-500 py-3 
                               focus:outline-none focus:border-white transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="pt-4  ">
                                <button className=" border px-6 py-2 rounded-xl">SAND</button>
                            </div>
                        </form>
                    </div>

                    {/* Right side - Globe Illustration */}
                    <div className="flex justify-center lg:justify-end">
                        <World />
                    </div>
                </div>
            </div>
        </div>
    )
}
