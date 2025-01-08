"use client"

import React from 'react';
import { Mail, Twitter, Instagram, Linkedin, Dribbble, ArrowUpRight, Moon, Sun, Copy } from 'lucide-react';

const BentoGrid = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  const bgColor = darkMode ? 'bg-neutral-900' : 'bg-gray-100';
  const cardBg = darkMode ? 'bg-neutral-800' : 'bg-white';
  const textColor = darkMode ? 'text-white' : 'text-black';
  const mutedText = darkMode ? 'text-neutral-400' : 'text-gray-500';
  const inputBg = darkMode ? 'bg-neutral-700' : 'bg-gray-100';

  return (
    <div className={`min-h-screen p-8 ${bgColor} transition-colors duration-200`}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-4 gap-4">
          {/* Intro Card */}
          <div className={`${cardBg} p-6 rounded-3xl col-span-2 transition-colors duration-200`}>
            <h1 className={`text-2xl ${textColor} font-medium mb-2`}>Hi, I'm Raghav —</h1>
            <p className={mutedText}>
              Lead product designer, currently working at{' '}
              <a href="#" className={`${textColor} hover:underline`}>
                mano
              </a>{' '}
              based in Cairo
            </p>
          </div>

          {/* Project Preview 1 */}
          <div className={`${cardBg} rounded-3xl overflow-hidden aspect-square transition-colors duration-200`}>
            <img
              src="/api/placeholder/400/400"
              alt="Dark mode interface"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Preview 2 */}
          <div className={`${cardBg} rounded-3xl overflow-hidden aspect-square transition-colors duration-200`}>
            <img
              src="/api/placeholder/400/400"
              alt="Mobile interface"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Image */}
          <div className={`${cardBg} rounded-3xl overflow-hidden transition-colors duration-200`}>
            <img
              src="dp 2.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Section */}
          <div className={`${cardBg} p-6 rounded-3xl flex flex-col justify-between transition-colors duration-200`}>
            <div>
              <p className={`${mutedText} text-sm mb-2`}>ABOUT</p>
              <p className={textColor}>Passionate about design and enjoy solving problems.</p>
            </div>
            <ArrowUpRight className={mutedText} size={20} />
          </div>

          {/* Project Preview 3 */}
          <div className={`${cardBg} rounded-3xl overflow-hidden col-span-2 transition-colors duration-200`}>
            <img
              src="/api/placeholder/800/400"
              alt="Laptop interface"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Newsletter */}
          <div className={`${cardBg} p-6 rounded-3xl col-span-2 transition-colors duration-200`}>
            <p className={`${textColor} mb-4`}>Get design tips & guides straight to your inbox for free!</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className={`flex-1 ${inputBg} rounded-lg px-4 py-2 ${textColor} border-0`}
              />
              <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Tech Stack */}
          <div className={`${cardBg} p-6 rounded-3xl transition-colors duration-200`}>
            <p className={`${mutedText} mb-4`}>Stack I use</p>
            <div className="flex gap-2">
              {['figma', 'sketch', 'framer'].map((tool, index) => (
                <div key={tool} className={`w-8 h-8 ${inputBg} rounded-lg flex items-center justify-center`}>
                  <span className={textColor}>{tool[0].toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className={`${cardBg} rounded-3xl flex items-center justify-center cursor-pointer transition-colors duration-200`}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-4 hover:opacity-80 transition-opacity"
            >
              {darkMode ? (
                <Sun size={20} className={textColor} />
              ) : (
                <Moon size={20} className={textColor} />
              )}
            </button>
          </div>

          {/* Contact */}
          <div className={`${cardBg} p-6 rounded-3xl transition-colors duration-200`}>
            <p className={`${textColor} mb-2`}>Have a project in mind?</p>
            <button className={`flex items-center gap-2 ${mutedText} hover:${textColor} transition-colors`}>
              <span>Copy email</span>
              <Copy size={16} />
            </button>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-4 flex justify-end">
          <div className="flex flex-col items-end">
            <p className={`${mutedText} text-sm uppercase mb-2`}>Resources</p>
            <p className={`${textColor}`}>Resources to speed your workflow</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-end gap-4 mt-6">
          <Twitter size={20} className={`${mutedText} hover:${textColor} cursor-pointer transition-colors`} />
          <Dribbble size={20} className={`${mutedText} hover:${textColor} cursor-pointer transition-colors`} />
          <Instagram size={20} className={`${mutedText} hover:${textColor} cursor-pointer transition-colors`} />
          <Linkedin size={20} className={`${mutedText} hover:${textColor} cursor-pointer transition-colors`} />
          <Mail size={20} className={`${mutedText} hover:${textColor} cursor-pointer transition-colors`} />
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;