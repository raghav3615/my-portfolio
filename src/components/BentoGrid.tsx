"use client"

import React from 'react';
import { Mail, Twitter, Instagram, Linkedin, Dribbble, ArrowUpRight, Moon, Sun, Copy } from 'lucide-react';

const BentoGrid = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  const bgColor = darkMode ? 'bg-neutral-900' : 'bg-gray-100';
  const cardBg = darkMode ? 'bg-[#1C1C1E]' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-black';
  const mutedText = darkMode ? 'text-neutral-500' : 'text-gray-500';
  const inputBg = darkMode ? 'bg-[#2C2C2E]' : 'bg-gray-100';
  const borderColor = darkMode ? 'border-[#2C2C2E]' : 'border-gray-200';

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
                <p className={`${textColor} text-sm`}>Passionate about design and enjoy solving problems.</p>
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
                {['F', 'S', 'Fr'].map((tool, index) => (
                  <div key={tool} className={`w-8 h-8 ${inputBg} rounded-lg flex items-center justify-center`}>
                    <span className={`${textColor} text-sm`}>{tool}</span>
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
              <button className={`flex items-center gap-2 ${mutedText} text-sm hover:${textColor} transition-colors`}>
                <span>Copy email</span>
                <Copy size={14} />
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