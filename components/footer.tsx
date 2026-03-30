"use client";

import Link from "next/link";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "AI Product Photography",
  "Video & Motion Content",
  "Brand Creative",
  "Creative Campaigns",
];

export function Footer() {
  return (
    <footer className="bg-[#F5F4F0] border-t-[3px] border-[#FE7F2D]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 pt-16 pb-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div>
            <Link href="/" className="block mb-5">
              <span className="font-brand text-2xl tracking-[0.1em] text-[#1A1614]">
                RUN <span className="text-[#FE7F2D]">NOT</span> WALK
              </span>
            </Link>
            <p className="text-sm text-[#6B6560] leading-[1.8] max-w-[280px] mb-6">
              The world&apos;s fastest AI creative studio. Brief in. Campaign out. 48 hours.
            </p>
            <a
              href="mailto:hello@runnotwalk.studio"
              className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-[#FE7F2D] hover:text-[#1A1614] transition-colors duration-200"
            >
              hello@runnotwalk.studio
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[0.58rem] tracking-[0.25em] uppercase text-[#6B6560] mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B6560] hover:text-[#1A1614] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-[0.58rem] tracking-[0.25em] uppercase text-[#6B6560] mb-6">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-[#6B6560]">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D5D1CB] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[0.56rem] tracking-[0.18em] uppercase text-[#6B6560]">
            &copy; {new Date().getFullYear()} Run Not Walk Studio. All rights reserved.
          </p>
          <p className="font-mono text-[0.56rem] tracking-[0.18em] uppercase text-[#6B6560]">
            runnotwalk.studio &middot; Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
