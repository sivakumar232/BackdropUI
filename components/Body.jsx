import React, { useState, useEffect } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import Navbar from './Navbar';
import { backgrounds } from '../src/config/backgrounds';

const Backgrounds = () => {
  const [selectedBackground, setSelectedBackground] = useState('');
  const [currentTheme, setCurrentTheme] = useState('light');
  const [copiedText, setCopiedText] = useState('');

  useEffect(() => {
    document.body.className = selectedBackground;
    return () => { document.body.className = ''; };
  }, [selectedBackground]);

  const handlePreview = (bgClass, theme) => {
    setSelectedBackground(bgClass);
    setCurrentTheme(theme);
  };

  const handleCopy = (bgClass) => {
    navigator.clipboard.writeText(bgClass)
      .then(() => {
        setCopiedText(bgClass);
        setTimeout(() => setCopiedText(''), 2000);
      })
      .catch(() => setCopiedText('Copy failed!'));
  };

  const handleReset = () => {
    setSelectedBackground('');
    setCurrentTheme('light');
    setCopiedText('');
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${selectedBackground}`}>

      <Navbar />

      <div className="pb-4 lg:mb-16 text-center">
        <h1 className={`text-4xl md:text-7xl pb-8 font-semibold tracking-tight ${currentTheme === "dark" ? "text-white" : "text-black"}`}>
          Collection of modern, <br />
          Background snippets
        </h1>
        <p className={`text-xl md:text-2xl font-thin ${currentTheme === "dark" ? "text-gray-300" : "text-neutral-900"}`}>
          Effortlessly add stunning backgrounds to your website or app with these <br />pre-built Tailwind CSS snippets. Clean, responsive, and aesthetically pleasing.
        </p>

        <div className="flex justify-center items-center mt-8 gap-4">

          <a
            href="https://github.com/sivakumar232/BackdropUI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={`px-5 py-2 rounded flex items-center gap-2 transition-all duration-300 
              ${currentTheme === "dark" ? "bg-white text-black hover:bg-gray-300" : "bg-black text-white hover:bg-gray-700"}`}>
              Go to GitHub
              <AiOutlineArrowRight className="text-xl" />
            </button>
          </a>
          <button className={`px-5 py-2 rounded flex items-center gap-2 transition-all duration-300 
            ${currentTheme === "dark" ? "bg-black text-white hover:bg-neutral-900 " : "bg-neutral-100 text-black hover:bg-neutral-300"}`} onClick={handleReset}>
            Reset Background
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 py-12">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`relative p-4 rounded-lg h-[300px] w-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${bg.component} ${selectedBackground === bg.component ? 'ring-4 ring-blue-500' : ''
              }`}
          >
            <div className="flex flex-col h-full justify-between">
              {/* Background Name & Category */}
              <div className={`mb-2 ${bg.theme === "dark" ? "text-white" : "text-black"}`}>
                <h3 className="font-bold text-lg mb-1">{bg.name}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${bg.theme === "dark"
                    ? "bg-white/20 text-white"
                    : "bg-black/10 text-black"
                  }`}>
                  {bg.category}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between gap-2">
                <button
                  className={`flex-1 rounded px-3 py-2 text-sm font-medium transition-all duration-300 ${bg.theme === "dark"
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                    }`}
                  onClick={() => handlePreview(bg.component, bg.theme)}
                >
                  {selectedBackground === bg.component ? '✓ Active' : 'Preview'}
                </button>
                <button
                  className={`flex-1 rounded px-3 py-2 text-sm font-medium transition-all duration-300 ${bg.theme === "dark"
                      ? "bg-white/90 text-black hover:bg-white"
                      : "bg-black/90 text-white hover:bg-black"
                    }`}
                  onClick={() => handleCopy(bg.component)}
                >
                  {copiedText === bg.component ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toast Notification */}
      {copiedText && (
        <div className="fixed bottom-5 right-5 bg-white text-black px-6 py-4 rounded-lg shadow-2xl animate-fadeIn z-50 border-2 border-gray-200">
          ✓ Copied to clipboard!
        </div>
      )}

    </div>
  );
};

export default Backgrounds;
