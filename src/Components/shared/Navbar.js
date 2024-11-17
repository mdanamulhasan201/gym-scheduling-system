"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav className="bg-[#F1F6FF] text-black">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }} className="text-xl font-bold">
         <Link href="/">GymLogo</Link>
     
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <motion.div whileHover={{ scale: 1.1 }} className="hover:text-gray-400 cursor-pointer">
            <Link href="/about">About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="hover:text-gray-400 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="hover:text-gray-400 cursor-pointer">
            <Link href="/login">Login</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="hover:text-gray-400 cursor-pointer">
            <Link
              href="#signup"
              className="bg-[#F20531] px-3 py-1 rounded text-white"
            >
              Sign Up
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#F1F6FF] space-y-2"
        >
          <div className="block px-4 py-2 hover:bg-gray-600">
            <Link href="/about">About</Link>
          </div>
          <div className="block px-4 py-2 hover:bg-gray-600">
            <Link href="/contact">Contact</Link>
          </div>
          <div className="block px-4 py-2 hover:bg-gray-600">
            <Link href="/login">Login</Link>
          </div>
          <div className="block px-4 py-2 hover:bg-gray-600">
            <Link href="/signup">Sign Up</Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
