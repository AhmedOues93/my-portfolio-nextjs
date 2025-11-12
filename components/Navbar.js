// components/Navbar.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Links for the one-page scroll
  const links = [
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Animation variants for the mobile menu
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    // NEW: "Petrol Blue" background (bg-cyan-900)
    <nav className="bg-cyan-900 fixed w-full z-50 top-0 start-0 border-b border-cyan-800 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Home Link (White text) */}
        <a href="#home" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white hover:text-cyan-300 transition-colors">
            Home
          </span>
        </a>

        {/* --- Hamburger Button (Light icon) --- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 p-2 rounded-lg hover:bg-cyan-800"
            aria-label="Open/Close Menu"
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>

        {/* --- Desktop Links (Light text with nice hover) --- */}
        <div className="hidden md:flex md:w-auto" id="navbar-desktop">
          <ul className="flex flex-row space-x-8 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-200 hover:text-cyan-300 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* --- Mobile Menu (Animated, dark background) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden w-full bg-cyan-900 border-t border-cyan-800"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ul className="flex flex-col p-4 pt-0">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Closes menu on click
                    className="block py-3 px-3 text-lg text-gray-200 rounded hover:bg-cyan-800"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
