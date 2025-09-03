"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation"; // 👈 import hook

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // 👈 current route

  const links = [
    { href: "/", label: "Home" },
    { href: "/About_us", label: "About" },
    { href: "/Course", label: "Courses" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <nav className="">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <img src="/images/Link.svg" alt="Logo" className="w-48 h-10" />
        </div>
        <div className="hidden md:flex text-gray-800 font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-1 px-4 ${
                pathname === link.href
                  ? "text-[#704FE6] rounded-lg border  border-[#704FE6]"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex bg-[#704FE6] text-white rounded-3xl items-center">
          <button className="px-4 py-2">Create Account</button>
          <div className="bg-[#785DD7] flex justify-center items-center w-[45px] h-[45px] rounded-full">
            <GoArrowRight />
          </div>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center  items-center space-y-4 text-gray-800 font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-1 px-4 ${
                  pathname === link.href
                    ? "text-[#704FE6] rounded-lg border border-[#704FE6]"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="bg-[#704FE6] text-white rounded-3xl flex items-center w-fit mt-4">
            <button className="px-4 py-2">Create Account</button>
            <div className="bg-[#785DD7] flex justify-center items-center w-[40px] h-[40px] rounded-full">
              <GoArrowRight />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
