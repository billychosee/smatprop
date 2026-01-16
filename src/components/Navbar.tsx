"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show navbar if scrolling up or at the top
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Hardware", href: "/hardware" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/smatprop_logo.svg"
            alt="SmatProp Logo"
            width={140}
            height={45}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[15px] font-medium tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-[#F3764A]"
                    : "text-secondary hover:text-[#F3764A]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#F3764A]"
                  />
                )}
              </Link>
            );
          })}

          {/* CTA Button */}
          <Link
            href="tel:+2638688008361"
            className="group flex items-center gap-2 bg-secondary hover:bg-[#F3764A] text-white px-7 py-3 rounded-2xl transition-all duration-500 shadow-md hover:shadow-lg text-sm font-bold uppercase tracking-widest"
          >
            Call Us
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 text-secondary p-2 hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-white z-40 md:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif text-secondary hover:text-[#F3764A] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="tel:+2638688008361"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 bg-[#F3764A] text-white px-10 py-5 rounded-3xl font-bold uppercase tracking-widest text-sm shadow-xl"
              >
                <Phone size={18} fill="currentColor" />
                Call Us Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
