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
            company: "Company One",
            role: "AI Engineer",
            duration: "Jan 2023 - Present",
            description: "Led the development of machine learning models for natural language processing. Implemented deep learning solutions using PyTorch and TensorFlow.",
            logo: "/company1-logo.png" // Replace with actual logo path
        },
        {
            company: "Company Two",
            role: "Full Stack Developer",
            duration: "Jun 2022 - Dec 2022",
            description: "Developed and maintained web applications using React and Node.js. Implemented responsive designs and RESTful APIs.",
            logo: "/company2-logo.png"
        },
        {
            company: "Company Three",
            role: "Software Engineer Intern",
            duration: "Jan 2022 - May 2022",
            description: "Assisted in developing microservices architecture. Worked on backend development using Python and PostgreSQL.",
            logo: "/company3-logo.png"
        },
        {
            company: "Company Four",
            role: "Web Development Intern",
            duration: "Aug 2021 - Dec 2021",
            description: "Created responsive websites using HTML, CSS, and JavaScript. Collaborated with the design team to implement UI/UX improvements.",
            logo: "/company4-logo.png"
        },
        {
            company: "Company Five",
            role: "Research Assistant",
            duration: "May 2021 - Jul 2021",
            description: "Conducted research on AI algorithms and published findings. Implemented prototype solutions using Python.",
            logo: "/company5-logo.png"
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
                            <h1 className={`text-2xl md:text-3xl ${textColor} font-medium`}>My Experience</h1>
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
                                        <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0">
                                            <img
                                                src={exp.logo}
                                                alt={`${exp.company} logo`}
                                                className="w-full h-full object-contain rounded-lg"
                                            />
                                        </div>
                                        
                                        {/* Experience Details */}
                                        <div className="flex-1">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                                <h2 className={`text-lg md:text-xl ${textColor} font-medium`}>
                                                    {exp.company}
                                                </h2>
                                                <span className={`${mutedText} text-sm`}>
                                                    {exp.duration}
                                                </span>
                                            </div>
                                            <h3 className={`${textColor} text-base md:text-lg mb-2`}>
                                                {exp.role}
                                            </h3>
                                            <p className={`${mutedText} text-sm md:text-base leading-relaxed`}>
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