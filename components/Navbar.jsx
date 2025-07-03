import React from 'react';
import {  FaGithub } from "react-icons/fa";
import { FaMoon } from 'react-icons/fa';

const Navbar = ({ theme }) => {
  const iconColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-6 md:py-10 md:px-40">

      <div className="ml-auto flex gap-6 cursor-pointer text-2xl md:text-3xl">
        <FaMoon className='' />
                <a
      href="https://github.com/sivakumar232/BackdropUI"
      target="_blank"
      rel="no"
    >
        <FaGithub  /></a>
      </div>
    </nav>
  );
};

export default Navbar;
