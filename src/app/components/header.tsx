"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../../../public/logo.png";
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black  to-orange-700  h-[70px] w-full flex shadow sticky top-0 z-10 justify-between items-center pr-5 md:px-1">
      <div className="flex items-center">

        <Image
          className=" w-20 h-16" 
          src={logo}
          alt="Logo"
          width={112} 
          height={56} 
        />
        
        <h1 className="text-red-500 text-2xl md:text-4xl ml-2"><label>SmartPhone Reviews</label></h1>
      </div>
      <div className="relative md:flex hidden justify-evenly items-center w-1/2">
        <Link href="/">
          <button className="text-white outline-none focus:text-orange-400  active:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex">
            Home
          </button>
        </Link>
        <Link href="../about">
          <button className="text-white outline-none focus:text-orange-400  active:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex">
            About
          </button>
        </Link>
        <button className="text-white outline-none focus:text-orange-400  active:text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex">
          <FiPhoneCall />&nbsp; Contact-Us: +92-309-023-542
        </button>
      </div>
     
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? '✖' : '☰'}
      </button>
      
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10">
          <Link href="/">
            <button className="w-full text-gray-600 text-left px-5 py-2.5">
              Home
            </button>
          </Link>
          <Link href="../about">
            <button className="w-full text-gray-600 text-left px-5 py-2.5">
              About Us
            </button>
          </Link>
          <button className="w-full text-gray-600 text-left px-5 py-2.5">
            <FiPhoneCall />&nbsp; Contact: +92-309-023-542
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
