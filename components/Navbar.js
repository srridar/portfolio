"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ModeToggle } from "./themebutton";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between  bg-[#010101] items-center py-2 px-10  sticky top-0 border-b backdrop:blur">
      <div className="text-3xl  font-bold">
        <Link href="/" className='text-[#e87827]'>
          <Image src="/logo.png" alt="Logo" width={70} height={60} className="rounded-full" />
        </Link>
      </div>
      <div className="md:hidden flex flex-col cursor-pointer text-gray-500" onClick={toggleMenu}>
        <span className={`block h-1 w-6 bg-gray-400 mb-1 transition-transform ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
        <span className={`block h-1 w-6 bg-gray-400 mb-1 transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block h-1 w-6 bg-gray-400  mb-1 transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
      </div>

      <ul className={`md:flex md:items-center md:justify-end md:pr-24 md:static absolute w-full text-gray-500 font-semibold   gap-12 transition-transform duration-300 ease-in-out ${isOpen ? 'top-16' : 'top-[-200px]'}`}>
        <li className="p-2 hover:text-[#e87827] hover:bg-[#2b2928] hover:rounded-2xl hover:scale-105">
          <Link href="#home">Home</Link>
        </li>
        <li className="p-2  hover:text-[#e87827] hover:bg-[#2b2928] hover:rounded-xl hover:scale-105">
          <Link href="#skill">Skills</Link>
        </li>
         <li className="p-2  hover:text-[#e87827] hover:bg-[#2b2928] hover:rounded-xl hover:scale-105">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="p-2  hover:text-[#e87827] hover:bg-[#2b2928] hover:rounded-xl hover:scale-105">
          <Link href="#about">About</Link>
        </li>

        <li className="p-2  hover:text-[#e87827] hover:bg-[#2b2928] hover:rounded-xl hover:scale-105">
          <Link href="#contact">Contact</Link>
        </li>
     

      </ul>
    </nav>
  );
};

export default Navbar;


