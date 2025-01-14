"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const Experience = () => {
    const [darkMode, setDarkMode] = useState(true);

    const bgColor = darkMode ? 'bg-neutral-900' : 'bg-gray-100';
    const cardBg = darkMode ? 'bg-[#1C1C1E]' : 'bg-white';
    const textColor = darkMode ? 'text-white' : 'text-black';
    const mutedText = darkMode ? 'text-neutral-500' : 'text-gray-500';
    const borderColor = darkMode ? 'border-[#2C2C2E]' : 'border-gray-200';

    const experiences = [
        {
            company: "Doc-q",
            role: "Web Development intern",
            duration: "Oct 2024 - Dec 2024",
            description: "Created responsive websites using TypeScript and TailwindCss in NextJs. Collaborated with the design team to implement UI/UX improvements.",
            logo: "docq.png" // Replace with actual logo path
        },
        {
            company: "Omdena VIT Bhopal Chapter",
            role: "Junior ML Engineer",
            duration: "Oct 2024 - Dec 2024",
            description: "Led the development of AI Chatbot for Bhopal BRTS Navigation. Implemented deep learning solutions using PyTorch and TensorFlow.",
            logo: "omdena.png"
        },
        {
            company: "AI Club VIT Bhopal",
            role: "Web Team Member",
            duration: "Apr 2024 - Present",
            description: "As a web team member, I contributed to club's new website and also helps with the technical stuff during the club event.",
            logo: "aiclublogo.png"
        },
        {
            company: "Ecell VIT Bhopal",
            role: "Technical Team Member",
            duration: "Nov 2024 - Present",
            description: "Created club website using JavaScript. Collaborated with the design team to implement UI/UX improvements.",
            logo: "ecell.png"
        },
        {
            company: "IEEE VIT Bhopal Chapter",
            role: "Technical Team Member",
            duration: "May 2024 - Present",
            description: "Organize technical events and learn working as a team.",
            logo: "ieee.png"
        }
    ];

    return (
        <div className={`min-h-screen p-4 md:p-8 ${bgColor} transition-colors duration-200`}>
            <div className="max-w-4xl mx-auto">
                <div className={`border ${borderColor} rounded-3xl p-2 md:p-4 bg-[#141414] transition-all duration-200`}>
                    <div className="grid gap-2 md:gap-3">
                        {/* Back Button */}
                        <Link href="/" className={`${cardBg} p-4 rounded-2xl w-fit transition-colors duration-200 hover:opacity-90`}>
                            <ArrowLeft className={textColor} size={20} />
                        </Link>

                        {/* Title */}
                        <div className={`${cardBg} p-4 rounded-2xl transition-colors duration-200`}>
                            <h1 className={`text-2xl md:text-2xl ${textColor} font-medium`}>Work Experience</h1>
                        </div>

                        {/* Experience Grid */}
                        <div className="grid gap-2 md:gap-3">
                            {experiences.map((exp, index) => (
                                <div 
                                    key={index}
                                    className={`${cardBg} rounded-2xl transition-colors duration-200 hover:opacity-90`}
                                >
                                    <div className="flex flex-col md:flex-row items-start gap-4 p-5">
                                        {/* Company Logo */}
                                        <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        </div>
                                        
                                        {/* Experience Details */}
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                                <h3 className={`text-lg md:text-lg ${textColor} font-medium`}>
                                                    {exp.company}
                                                </h3>
                                                <span className={`${mutedText} text-sm`}>
                                                    {exp.duration}
                                                </span>
                                            </div>
                                            <h4 className={`${textColor} text-base md:text-base mb-2`}>
                                                {exp.role}
                                            </h4>
                                            <p className={`${mutedText} text-sm md:text-sm leading-relaxed`}>
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;