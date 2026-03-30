"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F4F0] border-b border-[#D5D1CB]">
        <nav className="px-6 lg:px-12 max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none gap-0.5">
              <span className="font-brand text-lg tracking-[0.15em] text-[#1A1614]">
                RUN <span className="text-[#FE7F2D]">NOT</span> WALK
              </span>
              <span className="font-mono text-[0.48rem] tracking-[0.22em] uppercase text-[#6B6560]">
                AI Creative Studio
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-[#6B6560] hover:text-[#1A1614] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#FE7F2D] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] tracking-[0.18em] uppercase bg-[#FE7F2D] text-[#080808] px-5 py-2.5 hover:bg-[#1A1614] hover:text-[#F5F4F0] transition-colors duration-300"
              >
                Start a Project
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#1A1614] hover:text-[#FE7F2D] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#F5F4F0] flex flex-col pt-20 px-6"
          >
            <nav className="flex flex-col mt-6">
              {[...navLinks, { href: "/contact", label: "Contact" }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-brand text-[3.2rem] leading-none tracking-[0.04em] text-[#1A1614] hover:text-[#FE7F2D] transition-colors py-4 border-b border-[#D5D1CB]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.4 }}
              className="mt-auto pb-12"
            >
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase bg-[#FE7F2D] text-[#080808] px-7 py-4"
              >
                Start a Project
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
