"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Twitter, Instagram, Linkedin, Github, Slack, ArrowUpRight, Moon, Sun, Copy, Check } from 'lucide-react';
import { FaDiscord as Discord } from "react-icons/fa";

const BentoGrid = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [copied, setCopied] = useState(false);
    const email = "dadhichraghav896@gmail.com";

    const bgColor = darkMode ? 'bg-neutral-900' : 'bg-gray-100';
    const cardBg = darkMode ? 'bg-[#1C1C1E]' : 'bg-white';
    const textColor = darkMode ? 'text-white' : 'text-black';
    const mutedText = darkMode ? 'text-neutral-500' : 'text-gray-500';
    const inputBg = darkMode ? 'bg-[#2C2C2E]' : 'bg-gray-100';
    const borderColor = darkMode ? 'border-[#2C2C2E]' : 'border-gray-200';

    const projects = [
        {
          id: 1,
          name: "Dark Interface",
          url: "https://screen-recorder-navy.vercel.app/",
          image: "screen recording.png",
        },
        {
          id: 2,
          name: "Mobile Interface",
          url: "https://nextjs-animation-website.vercel.app/",
          image: "landingpage.jpg",
        },
    ];
      
    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    const techStack = [
        {
          name: 'TypeScript',
          icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path fill="#3178C6" d="M1.125 0h21.75C23.4978 0 24 .502156 24 1.125v21.75C24 23.4978 23.4978 24 22.875 24H1.125C.502156 24 0 23.4978 0 22.875V1.125C0 .502156.502156 0 1.125 0z"/>
              <path fill="#fff" d="M13.2627 11.6322h-3.7158v8.8615H7.2178v-8.8615H3.5v-2.0713h9.7627v2.0713zm2.218-2.0713h6.3672v2.0713h-4.0381v6.7902h2.3584v2.0713h-6.3672v-2.0713h2.3584v-6.7902h-2.3584v-2.0713z"/>
            </svg>
          )
        },
        {
          name: 'JavaScript',
          icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
            </svg>
          )
        },
        {
          name: 'Python',
          icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path fill="#306998" d="M11.95 1.4c-.96 0-1.88.09-2.69.26-2.38.5-2.81 1.54-2.81 3.47v2.54h5.63v.71H4.13c-1.94 0-3.63 1.16-4.16 3.36-.61 2.52-.64 4.09 0 6.72.47 1.96 1.6 3.36 3.54 3.36h2.29v-3.03c0-2.19 1.89-4.12 4.16-4.12h5.62c1.85 0 3.33-1.52 3.33-3.37V5.13c0-1.8-1.52-3.15-3.33-3.45-1.15-.19-2.34-.28-3.33-.28z"/>
              <path fill="#FFD43B" d="M12.05 22.6c.96 0 1.88-.09 2.69-.26 2.38-.5 2.81-1.54 2.81-3.47v-2.54h-5.63v-.71h8.32c1.94 0 3.63-1.16 4.16-3.36.61-2.52.64-4.09 0-6.72-.47-1.96-1.6-3.36-3.54-3.36h-2.29v3.03c0 2.19-1.89 4.12-4.16 4.12H8.79c-1.85 0-3.33 1.52-3.33 3.37v6.31c0 1.8 1.52 3.15 3.33 3.45 1.15.19 2.34.28 3.33.28z"/>
            </svg>
          )
        },
        {
          name: 'Node.js',
          icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path fill="#539E43" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
            </svg>
          )
        }
    ];

    return (
        <div className={`min-h-screen p-4 md:p-8 ${bgColor} transition-colors duration-200`}>
            <div className="max-w-4xl mx-auto">
                <div className={`border ${borderColor} rounded-3xl p-2 md:p-4 bg-[#141414] transition-all duration-200`}>
                    <div className="grid grid-cols-4 md:grid-cols-12 gap-2 md:gap-3">
                        {/* Intro Card */}
                        <div className={`${cardBg} p-4 md:p-6 rounded-2xl col-span-4 md:col-span-6 transition-colors duration-200`}>
                            <div className="flex items-center gap-4">
                                {/* Profile Image */}
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
                                    <img
                                        src="dp1.jpg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                
                                {/* Intro Text */}
                                <div>
                                    <h1 className={`text-lg md:text-xl ${textColor} font-normal mb-2`}>Hi, I'm Raghav —</h1>
                                    <p className={`${mutedText} text-sm md:text-base`}>
                                        Web Developer & AI engineer, pursuing CSE undergrad from{' '}
                                        <a href="#" className="underline">VIT Bhopal</a>{' '}
                                        based in India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Project Previews - Stack on mobile */}
                        {projects.map((project) => (
                            <div 
                                key={project.id}
                                className={`${cardBg} rounded-2xl col-span-2 md:col-span-3 overflow-hidden relative transition-colors duration-200 group cursor-pointer aspect-square`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <a 
                                    href={project.url}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                                >
                                    <p className={`${textColor} text-sm md:text-lg font-medium text-center px-2`}>Check out project</p>
                                </a>
                            </div>
                        ))}

                        

                        {/* About Section */}
                        <Link href="/about" className="col-span-4 md:col-span-5">
                            <div className={`${cardBg} p-4 md:p-5 rounded-2xl h-full flex flex-col justify-between transition-colors duration-200 cursor-pointer hover:opacity-90`}>
                                <div>
                                    <p className={`${mutedText} text-xs uppercase tracking-wider mb-3`}>ABOUT ME</p>
                                    <p className={`${textColor} text-sm`}>Passionate about AI and enjoy solving problems. I specialize in building modern web applications using technologies like React, Next.js, and Node.js.</p>
                                </div>
                                <div className="flex justify-end">
                                    <ArrowUpRight className={mutedText} size={16} />
                                </div>
                            </div>
                        </Link>

                        {/* Laptop Preview */}
                        <Link href="/Experience" className={`${cardBg} rounded-2xl col-span-4 md:col-span-5 overflow-hidden relative transition-colors duration-200 group cursor-pointer aspect-video md:aspect-auto`}>
                            <img
                                src="project.png"
                                alt="Laptop interface"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className={`${textColor} text-sm md:text-lg font-medium mb-2`}>Work Experience</p>
                                <ArrowUpRight className={textColor} size={24} />
                            </div>
                        </Link>

                        {/* Social Links Grid */}
                        <div className="col-span-4 md:col-span-2 grid grid-cols-2 gap-2 md:gap-3">
                            {[
                                { icon: Twitter, link: "https://x.com/raghav_dadhich" },
                                { icon: Github, link: "https://github.com/raghav3615" },
                                { icon: Instagram, link: "https://www.instagram.com/itzraghavgod/" },
                                { icon: Linkedin, link: "https://www.linkedin.com/in/raghavhere/" },
                                { icon: Discord, link: "https://discord.com/users/ragzuss" },
                                { icon: Mail, link: "mailto:dadhichraghav896@gmail.com" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    className={`${cardBg} rounded-lg p-2 flex items-center justify-center transition-colors duration-200 hover:opacity-80`}
                                >
                                    <social.icon size={20} className={mutedText} />
                                </a>
                            ))}
                        </div>

                        {/* Newsletter */}
                        <div className={`${cardBg} p-4 md:p-5 rounded-2xl col-span-4 md:col-span-6 transition-colors duration-200`}>
                            <p className={`${textColor} text-sm mb-3`}>Get design tips & guides straight to your inbox for free!</p>
                            <div className="flex flex-col md:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className={`flex-1 ${inputBg} text-sm rounded-lg px-4 py-2 ${textColor} border-0`}
                                />
                                <button className="bg-white text-black px-4 py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className={`${cardBg} p-4 md:p-5 rounded-2xl col-span-4 md:col-span-3 transition-colors duration-200`}>
                            <p className={`${mutedText} text-xs uppercase tracking-wider mb-3`}>Stack I use</p>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech) => (
                                    <div 
                                        key={tech.name} 
                                        className={`w-8 h-8 ${inputBg} rounded-lg flex items-center justify-center transition-all hover:scale-105`}
                                        title={tech.name}
                                    >
                                        {tech.icon}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Theme Toggle */}
                        <div className={`${cardBg} rounded-2xl col-span-2 md:col-span-1 flex items-center justify-center transition-colors duration-200`}>
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="w-full h-full flex items-center justify-center p-4"
                            >
                                <Moon size={16} className={textColor} />
                            </button>
                        </div>

                        {/* Contact */}
                        <div className={`${cardBg} p-4 md:p-5 rounded-2xl col-span-2 md:col-span-2 transition-colors duration-200`}>
                            <p className={`${textColor} text-sm mb-2`}>Have a project in mind?</p>
                            <button 
                                onClick={handleCopyEmail}
                                className={`flex items-center gap-2 ${mutedText} text-sm hover:${textColor} transition-colors group`}
                            >
                                <span>{copied ? 'Copied!' : 'Copy email'}</span>
                                {copied ? (
                                    <Check size={14} className="text-green-500" />
                                ) : (
                                    <Copy size={14} className={`${mutedText} group-hover:${textColor}`} />
                                )}
                            </button>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default BentoGrid;