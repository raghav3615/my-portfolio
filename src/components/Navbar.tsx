"use client"

import React from 'react';
import Link from 'next/link';
import { Home, User, Briefcase, Code, Send } from 'lucide-react';

interface NavbarProps {
    darkMode: boolean;
    setDarkMode: (dark: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
    const bgColor = darkMode ? 'bg-[#1C1C1E]' : 'bg-white';
    const textColor = darkMode ? 'text-white' : 'text-black';
    const mutedText = darkMode ? 'text-neutral-500' : 'text-gray-500';
    const borderColor = darkMode ? 'border-[#2C2C2E]' : 'border-gray-200';

    const navLinks = [
        { href: '/', icon: Home, label: 'Home' },
        { href: '/about', icon: User, label: 'About' },
        { href: 'https://docs.google.com/spreadsheets/d/1ZE_633UFH0D7slNLdZEoEmgscjv3UfzG7A0rdjqp-pU/edit?gid=0#gid=0', icon: Code, label: 'Projects' },
        { href: '/Experience', icon: Briefcase, label: 'Experience' },
        { href: 'mailto:dadhichraghav896@gmail.com', icon: Send, label: 'Contact' }
    ];

    return (
        <div className={`fixed left-1/2 transform -translate-x-1/2 top-4 z-50 w-[90%] max-w-xl`}>
            <div className={`${bgColor} ${borderColor} border rounded-full p-2 shadow-lg transition-all duration-200`}>
                <div className="flex justify-between items-center px-2">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href} 
                            href={link.href}
                            className={`
                                flex flex-col items-center justify-center 
                                p-1 rounded-full 
                                hover:bg-opacity-10 
                                transition-colors 
                                group
                            `}
                        >
                            <link.icon 
                                size={16} 
                                className={`${mutedText} group-hover:${textColor} transition-colors`} 
                            />
                            <span 
                                className={`
                                    text-[10px] 
                                    mt-0.5 
                                    opacity-0 
                                    group-hover:opacity-100 
                                    transition-opacity 
                                    ${mutedText}
                                `}
                            >
                                {link.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;