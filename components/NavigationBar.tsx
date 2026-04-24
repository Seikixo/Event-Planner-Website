"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fbf9f5]/70 backdrop-blur-2xl no-border shadow-none ease-in-out duration-300">
      <div className="flex justify-between items-center px-12 py-6 w-full max-w-[1920px] mx-auto">
        <Link
          className="font-serif text-2xl italic tracking-tighter text-on-surface drop-shadow-sm"
          href="/"
        >
          Beyoutiful Life Events
        </Link>
        <div className="hidden md:flex items-center space-x-8 font-serif text-sm tracking-widest uppercase">
          {navLinks.map((link) => (
            <Link
              className={`font-normal hover:text-primary-container transition-colors duration-500 text-on-surface ${pathname === link.href ? "text-primary" : "text-on-surface"}`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-on-surface"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm bg-black ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"}`}
          ></span>
          <span
            className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm bg-black my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm bg-black ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"}`}
          ></span>
        </button>
      </div>
      {isOpen && (
        <div className="flex md:hidden flex-col w-full mt-4 gap-4 pt-4 p-8 items-center animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");

            return (
              <Link
                className={`font-normal hover:text-primary-container transition-colors duration-500 text-on-surface ${pathname === link.href ? "text-primary" : "text-on-surface"}`}
                href={link.href}
                key={link.label}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
