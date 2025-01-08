    "use client"

    import React, { useState } from 'react';
    import { Mail, Twitter, Instagram, Linkedin, Dribbble, ArrowUpRight, Moon, Sun, Copy, Check } from 'lucide-react';

    const BentoGrid = () => {
        const [darkMode, setDarkMode] = React.useState(true);
        const [copied, setCopied] = useState(false);
        const email = "dadhichraghav896@gmail.com";

    const bgColor = darkMode ? 'bg-neutral-900' : 'bg-gray-100';
    const cardBg = darkMode ? 'bg-[#1C1C1E]' : 'bg-white';
    const textColor = darkMode ? 'text-white' : 'text-black';
    const mutedText = darkMode ? 'text-neutral-500' : 'text-gray-500';
    const inputBg = darkMode ? 'bg-[#2C2C2E]' : 'bg-gray-100';
    const borderColor = darkMode ? 'border-[#2C2C2E]' : 'border-gray-200';

    const handleCopyEmail = async () => {
        try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        } catch (err) {
        console.error('Failed to copy email:', err);
        }
    };

    // Tech stack data with SVG icons
    const techStack = [
        {
        name: 'Figma',
        icon: (
            <svg viewBox="0 0 38 57" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" fill="#1ABCFE"/>
            <path d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" fill="#0ACF83"/>
            <path d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" fill="#FF7262"/>
            <path d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" fill="#F24E1E"/>
            <path d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" fill="#A259FF"/>
            </svg>
        )
        },
        {
        name: 'Sketch',
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1.5L22.5 9L12 22.5L1.5 9L12 1.5Z" fill="#FDB300"/>
            <path d="M12 22.5L1.5 9H7.5L12 22.5Z" fill="#EA6C00"/>
            <path d="M12 22.5L16.5 9H22.5L12 22.5Z" fill="#EA6C00"/>
            <path d="M12 22.5L7.5 9H16.5L12 22.5Z" fill="#FDAD00"/>
            <path d="M12 1.5L7.5 9H16.5L12 1.5Z" fill="#FDD231"/>
            <path d="M1.5 9L7.5 9L4.5 3L1.5 9Z" fill="#FDD231"/>
            <path d="M22.5 9L16.5 9L19.5 3L22.5 9Z" fill="#FDD231"/>
            </svg>
        )
        },
        {
        name: 'Framer',
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21L12 12L3 12L3 16.5C3 17.6935 3.47411 18.8381 4.31802 19.682C5.16193 20.5259 6.30653 21 7.5 21L12 21Z" fill="#0055FF"/>
            <path d="M12 12V3H7.5C6.30653 3 5.16193 3.47411 4.31802 4.31802C3.47411 5.16193 3 6.30653 3 7.5V12H12Z" fill="#00AAFF"/>
            <path d="M21 7.5V12H12V3H16.5C17.6935 3 18.8381 3.47411 19.682 4.31802C20.5259 5.16193 21 6.30653 21 7.5Z" fill="#88DDFF"/>
            </svg>
        )
        }
    ];

    return (
        <div className={`min-h-screen p-8 ${bgColor} transition-colors duration-200`}>
        <div className="max-w-4xl mx-auto">
            {/* Main Container with Border */}
            <div className={`border ${borderColor} rounded-3xl p-4 bg-[#141414] transition-all duration-200`}>
            <div className="grid grid-cols-12 gap-3">
                {/* Intro Card */}
                <div className={`${cardBg} p-6 rounded-2xl col-span-6 transition-colors duration-200`}>
                <h1 className={`text-xl ${textColor} font-normal mb-2`}>Hi, I'm Raghav —</h1>
                <p className={mutedText}>
                    Web Developer & AI enthusiast, studing as a 2nd year CSE undergrad student at{' '}
                    <a href="#" className="underline">
                    VIT Bhopal
                    </a>{' '}
                    based in India
                </p>
                </div>

                {/* Project Previews */}
                <div className={`${cardBg} rounded-2xl col-span-3 overflow-hidden transition-colors duration-200`}>
                <img
                    src="/api/placeholder/300/300"
                    alt="Dark interface"
                    className="w-full h-full object-cover"
                />
                </div>

                <div className={`${cardBg} rounded-2xl col-span-3 overflow-hidden transition-colors duration-200`}>
                <img
                    src="/api/placeholder/300/300"
                    alt="Mobile interface"
                    className="w-full h-full object-cover"
                />
                </div>

                {/* Profile Image */}
                <div className={`${cardBg} rounded-2xl col-span-3 overflow-hidden transition-colors duration-200`}>
                <img
                    src="dp 2.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
                </div>

                {/* About Section */}
                <div className={`${cardBg} p-5 rounded-2xl col-span-4 flex flex-col justify-between transition-colors duration-200`}>
                <div>
                    <p className={`${mutedText} text-xs uppercase tracking-wider mb-3`}>ABOUT</p>
                    <p className={`${textColor} text-sm`}>Passionate about AI and enjoy solving problems.</p>
                </div>
                <div className="flex justify-end">
                    <ArrowUpRight className={mutedText} size={16} />
                </div>
                </div>

                {/* Laptop Preview */}
                <div className={`${cardBg} rounded-2xl col-span-5 overflow-hidden transition-colors duration-200`}>
                <img
                    src="/api/placeholder/500/300"
                    alt="Laptop interface"
                    className="w-full h-full object-cover"
                />
                </div>

                {/* Newsletter */}
                <div className={`${cardBg} p-5 rounded-2xl col-span-6 transition-colors duration-200`}>
                <p className={`${textColor} text-sm mb-3`}>Get design tips & guides straight to your inbox for free!</p>
                <div className="flex gap-2">
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
                <div className={`${cardBg} p-5 rounded-2xl col-span-3 transition-colors duration-200`}>
            <p className={`${mutedText} text-xs uppercase tracking-wider mb-3`}>Stack I use</p>
            <div className="flex gap-2">
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
                <div className={`${cardBg} rounded-2xl col-span-1 flex items-center justify-center transition-colors duration-200`}>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-full h-full flex items-center justify-center"
                >
                    <Moon size={16} className={textColor} />
                </button>
                </div>

                {/* Contact */}
                <div className={`${cardBg} p-5 rounded-2xl col-span-2 transition-colors duration-200`}>
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

            {/* Social Links Grid */}
            <div className="grid grid-cols-6 gap-3 mt-3">
                <div className={`${cardBg} rounded-lg p-2 flex items-center justify-center transition-colors duration-200`}>
                <Twitter size={16} className={mutedText} />
                </div>
                <div className={`${cardBg} rounded-lg p-2 flex items-center justify-center transition-colors duration-200`}>
                <Dribbble size={16} className={mutedText} />
                </div>
                <div className={`${cardBg} rounded-lg p-2 flex items-center justify-center transition-colors duration-200`}>
                <Instagram size={16} className={mutedText} />
                </div>
                <div className={`${cardBg} rounded-lg p-2 flex items-center justify-center transition-colors duration-200`}>
                <Linkedin size={16} className={mutedText} />
                </div>
                <div className={`${cardBg} rounded-lg p-2 flex items-center justify-center transition-colors duration-200`}>
                <Dribbble size={16} className={mutedText} />
                </div>
                <div className={`${cardBg} rounded-lg p-2 flex items-center justify-center transition-colors duration-200`}>
                <Mail size={16} className={mutedText} />
                </div>
            </div>

            </div>
        </div>
        </div>
    );
    };

    export default BentoGrid;