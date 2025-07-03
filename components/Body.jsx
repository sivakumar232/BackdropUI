import React, { useState, useEffect } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from './Navbar';

const Backgrounds = () => {
  const [selectedBackground, setSelectedBackground] = useState('');
  const [currentTheme, setCurrentTheme] = useState('light');
  const [copiedText, setCopiedText] = useState('');

  const backgrounds = [
    { component: "bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]", theme: "light" },
    { component: "bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]", theme: "dark" },
    { component: "bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]", theme: "dark" },
    { component: "bg-[radial-gradient(circle_800px_at_top,#a1c4fd_0%,#c2e9fb_100%)]", theme: "light" },
    { component: "bg-[linear-gradient(135deg,#2c2c2c_0%,#101010_100%)]", theme: "dark" },
    { component: "bg-[radial-gradient(100%_190%_at_50%_20%,#000_10%,#410445_100%)]", theme: "dark" },

  ];

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
      .then(() => setCopiedText(bgClass))
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

          <button className={`px-5 py-2 rounded flex items-center gap-2 transition-all duration-300 
            ${currentTheme === "dark" ? "bg-white text-black hover:bg-gray-300" : "bg-black text-white hover:bg-gray-700"}`}>
            Go to GitHub
            <AiOutlineArrowRight className="text-xl" />
          </button>
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
      className={`p-4 text-center rounded-md h-[300px] w-full  shadow ${bg.component} ${bg.theme === "dark" ? "text-white" : "text-black"}`}
    >
      <div className="flex justify-between mb-4">
        <button 
          className={`rounded px-3 py-1 text-sm transition-all duration-300 ${bg.theme === "dark" ? "bg-neutral-900 text-white hover:bg-gray-700" : "bg-black text-white hover:bg-gray-700"}`}
          onClick={() => handlePreview(bg.component, bg.theme)}
        >
          Preview
        </button>
        <button
          className={`rounded px-3 py-1 text-sm transition-all duration-300 ${bg.theme === "dark" ? "bg-neutral-900 text-white hover:bg-gray-700" : "bg-black text-white hover:bg-gray-700"}`}
          onClick={() => handleCopy(bg.component)}
        >
          Copy
        </button>
      </div>
      {copiedText === bg.component && (
        <div className="fixed bottom-5 right-5 bg-white text-black px-6 py-4 rounded shadow-lg animate-fadeIn">
          Copied to clipboard!
        </div>
      )}
    </div>
  ))}
</div>

    </div>
  );
};

export default Backgrounds;
