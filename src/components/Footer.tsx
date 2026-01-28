"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Clock,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const XIcon = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-white text-[#4D5053] pt-24 pb-12 px-6 border-t border-gray-100 overflow-hidden">
      {/* BACKGROUND DECORATION - Only visible on mobile for that "creative" touch */}
      <div className="lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent rounded-full blur-3xl opacity-50 z-0" />

      {/* DESKTOP DECORATION - Keeps your original desktop look */}
      <div className="hidden lg:block absolute top-0 right-0 w-75 h-75 bg-accent rounded-full -mr-20 -mt-20 opacity-50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 items-center lg:items-start text-center lg:text-left">
          {/* 1. BRAND & SOCIALS */}
          <div className="space-y-8 flex flex-col items-center lg:items-start">
            <Link href="/" className="inline-block">
              <Image
                src="/smatprop_logo.svg"
                alt="SmatProp Logo"
                width={160}
                height={50}
                className="brightness-90"
              />
            </Link>
            <p className="text-gray-500 text-[17px] leading-relaxed max-w-xs">
              Revolutionizing property management with smart,
              architectural-grade solutions for modern living in Zimbabwe.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/p/Smat-Prop-100086626465712/" target="_blank">
                <SocialIcon icon={<Facebook size={18} />} />
              </Link>
              <Link href="#" target="_blank">
                <SocialIcon icon={<XIcon size={18} />} />
              </Link>
              <Link href="https://www.instagram.com/smatprop/" target="_blank">
                <SocialIcon icon={<Instagram size={18} />} />
              </Link>
              <Link href="#" target="_blank">
                <SocialIcon icon={<Linkedin size={18} />} />
              </Link>
            </div>
          </div>

          {/* 2. NAVIGATION */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-serif text-secondary mb-8">
              Quick Links
            </h3>
            <ul className="space-y-5 text-gray-500">
              {["About", "Features", "Hardware", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-primary transition-colors flex items-center justify-center lg:justify-start gap-2 group"
                  >
                    {item}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 lg:group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. SOLUTIONS */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-serif text-secondary mb-8">
              Solutions
            </h3>
            <ul className="space-y-5 text-gray-500">
              <li className="cursor-default">Smart Metering</li>
              <li className="cursor-default">Access Control</li>
              <li className="cursor-default">Tenant Management</li>
              <li className="cursor-default">Security Systems</li>
            </ul>
          </div>

          {/* 4. CONTACT - Creative Card on Mobile, Standard on Desktop */}
          <div className="w-full lg:w-auto">
            <h3 className="text-2xl font-serif text-secondary mb-8">Contact</h3>
            <div className="bg-accent lg:bg-transparent p-8 lg:p-0 rounded-[40px] lg:rounded-none space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="hidden lg:block text-xs uppercase tracking-widest text-gray-400 mb-1">
                    Email us
                  </p>
                  <p className="text-secondary font-medium">
                    info@smatprop.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="hidden lg:block text-xs uppercase tracking-widest text-gray-400 mb-1">
                    Call us
                  </p>
                  <p className="text-secondary font-medium">(+263) 86 880 08361</p>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200 lg:hidden my-2" />
              <div className="flex items-center gap-3 text-secondary">
                <Clock size={16} className="text-primary" />
                <span className="font-bold text-sm">
                  Mon - Fri: 7:30 AM - 4:30 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-20 pt-10 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
          <p className="text-gray-400 text-[15px]">
            © {new Date().getFullYear()}{" "}
            <span className="text-secondary font-semibold">SmatProp</span> • All
            Rights Reserved
          </p>
          <div className="flex gap-8 text-[15px] text-gray-400 font-bold lg:font-normal">
            <Link href="#" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactElement }) {
  return (
    <div className="w-12 h-12 lg:w-10 lg:h-10 flex items-center justify-center bg-white border border-gray-100 rounded-full text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer shadow-sm active:scale-95">
      {icon}
    </div>
  );
}




