import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = ({ theme }) => {
  const iconColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-6 md:py-10 md:px-40">

      <div className="ml-auto flex gap-6 text-2xl md:text-3xl">
        <FaLinkedin  />
        <FaGithub  />
      </div>
    </nav>
  );
};

export default Navbar;
