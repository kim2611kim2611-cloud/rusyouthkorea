"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "О нас" },
  { href: "/schedule", label: "Встречи" },
  { href: "/media", label: "Медиа" },
  { href: "/groups", label: "Группы" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-blue-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0.5 font-black text-xl tracking-tight">
            <span className="text-gray-900">RUS</span>
            <span className="text-accent">YOUTH</span>
            <span className="text-gray-900">KOREA</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/new"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-opacity shadow-purple-sm"
            >
              Прийти впервые
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-blue-100">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-accent transition-colors py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/new"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-opacity mt-2"
              onClick={() => setIsOpen(false)}
            >
              Прийти впервые
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
