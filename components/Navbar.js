"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 relative flex items-center justify-between bg-[#010101] border-b border-gray-800 px-6 md:px-10 py-2">
      {/* Logo */}
      <Link href="/" onClick={closeMenu}>
        <Image
          src="/log.png"
          alt="Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </Link>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={toggleMenu}
        className="md:hidden z-50 flex flex-col justify-center items-center w-10 h-10"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span
          className={`block h-1 w-6 bg-gray-400 mb-1 rounded transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />

        <span
          className={`block h-1 w-6 bg-gray-400 mb-1 rounded transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />

        <span
          className={`block h-1 w-6 bg-gray-400 rounded transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Navigation */}
      <ul
        className={`
          absolute left-0 top-full w-full
          flex flex-col items-center
          bg-[#010101] border-b border-gray-800
          py-4
          text-gray-500 font-semibold
          transition-all duration-300 ease-in-out
          
          md:static md:w-auto md:flex-row md:items-center
          md:border-0 md:py-0 md:bg-transparent
          md:gap-12
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
          md:opacity-100 md:visible md:translate-y-0
        `}
      >
        <li className="p-2 hover:text-[#1d75a4]  hover:rounded-2xl hover:scale-105 transition-all">
          <Link href="#home" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li className="p-2 hover:text-[#1d75a4]  hover:rounded-xl hover:scale-105 transition-all">
          <Link href="#skill" onClick={closeMenu}>
            Skills
          </Link>
        </li>

        <li className="p-2 hover:text-[#1d75a4]  hover:rounded hover:scale-105 transition-all">
          <Link href="#projects" onClick={closeMenu}>
            Projects
          </Link>
        </li>

        <li className="p-2 hover:text-[#1d75a4]  hover:rounded-xl hover:scale-105 transition-all">
          <Link href="#about" onClick={closeMenu}>
            About
          </Link>
        </li>

        <li className="p-2 hover:text-[#1d75a4]  hover:rounded-xl hover:scale-105 transition-all">
          <Link href="#contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;