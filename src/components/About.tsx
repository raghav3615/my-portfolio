"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const About = () => {
    const [darkMode, setDarkMode] = useState(true);

    const bgColor = darkMode ? 'bg-neutral-900' : 'bg-gray-100';
    const cardBg = darkMode ? 'bg-[#1C1C1E]' : 'bg-white';
    const textColor = darkMode ? 'text-white' : 'text-black';
    const mutedText = darkMode ? 'text-neutral-500' : 'text-gray-500';
    const borderColor = darkMode ? 'border-[#2C2C2E]' : 'border-gray-200';

    return (
        <div className={`min-h-screen p-4 md:p-8 ${bgColor} transition-colors duration-200`}>
            <div className="max-w-4xl mx-auto">
                <div className={`border ${borderColor} rounded-3xl p-2 md:p-4 bg-[#141414] transition-all duration-200`}>
                    <div className="grid gap-2 md:gap-3">
                        {/* Back Button */}
                        <Link href="/" className={`${cardBg} p-4 rounded-2xl w-fit transition-colors duration-200 hover:opacity-90`}>
                            <ArrowLeft className={textColor} size={20} />
                        </Link>

                        {/* About Content */}
                        <div className={`${cardBg} p-6 md:p-8 rounded-2xl transition-colors duration-200`}>
                            <h1 className={`text-2xl md:text-3xl ${textColor} font-medium mb-6`}>About Me</h1>
                            
                            <div className="space-y-4">
                                <p className={`${textColor} text-base md:text-lg leading-relaxed`}>
                                    Hi, I'm Raghav, a passionate Web Developer and AI Engineer currently pursuing my Computer Science Engineering degree at VIT Bhopal.
                                </p>

                                <p className={`${mutedText} text-base md:text-lg leading-relaxed`}>
                                    I specialize in building modern web applications using technologies like React, Next.js, and Node.js. My journey in tech has been driven by a deep curiosity for artificial intelligence and its potential to solve real-world problems.
                                </p>

                                <div className="pt-4">
                                    <h2 className={`${textColor} text-xl font-medium mb-3`}>What I Do</h2>
                                    <ul className={`${mutedText} space-y-2`}>
                                        <li>🚀 Full-stack web development</li>
                                        <li>🤖 AI/ML model development</li>
                                        <li>💻 Open source contributions</li>
                                        <li>📱 Responsive and interactive UI design</li>
                                    </ul>
                                </div>

                                <div className="pt-4">
                                    <h2 className={`${textColor} text-xl font-medium mb-3`}>Current Focus</h2>
                                    <p className={`${mutedText} text-base md:text-lg leading-relaxed`}>
                                        Currently, I'm focused on exploring the intersection of web development and artificial intelligence, creating projects that combine beautiful interfaces with intelligent functionality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;