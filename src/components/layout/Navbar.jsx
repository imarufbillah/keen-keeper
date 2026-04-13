"use client";

import { ChartLine, Clock3, House, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", icon: <House size={18} /> },
    { href: "/timeline", label: "Timeline", icon: <Clock3 size={18} /> },
    { href: "/stats", label: "Stats", icon: <ChartLine size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="px-4 sm:px-8 lg:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl text-heading font-extrabold shrink-0"
          >
            Keen<span className="text-primary font-semibold">Keeper</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 flex gap-1.5 justify-center items-center rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === href
                    ? "text-white bg-primary hover:bg-hover-primary"
                    : "text-muted hover:text-primary hover:bg-gray-50"
                }`}
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-heading hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
            menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1 pb-3 border-t border-gray-100 pt-3">
            {navLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 text-sm flex gap-2 items-center rounded-md font-medium transition-colors duration-200 ${
                  pathname === href
                    ? "text-white bg-primary"
                    : "text-muted hover:bg-gray-50 hover:text-primary"
                }`}
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
