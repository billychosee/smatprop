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

// Custom X (Twitter) Icon since Lucide's default is often just a bird
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
      {/* DECORATIVE BACKGROUND ELEMENT */}
      <div className="absolute top-0 right-0 w-75 h-75 bg-[#F4F0EC] rounded-full -mr-20 -mt-20 opacity-50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {/* 1. Brand Identity & Specific Project Socials */}
          <div className="space-y-8">
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
              <Link href="https://facebook.com" target="_blank">
                <SocialIcon icon={<Facebook size={18} />} />
              </Link>
              <Link href="https://x.com" target="_blank">
                <SocialIcon icon={<XIcon size={18} />} />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <SocialIcon icon={<Instagram size={18} />} />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <SocialIcon icon={<Linkedin size={18} />} />
              </Link>
            </div>
          </div>

          {/* 2. Navigation Pages */}
          <div>
            <h3 className="text-2xl font-serif text-secondary mb-8">
              Navigation
            </h3>
            <ul className="space-y-5 text-gray-500">
              {["About", "Features", "Hardware", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-[#F3764A] transition-colors flex items-center gap-2 group"
                  >
                    {item}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Solutions */}
          <div>
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

          {/* 4. Contact & Support */}
          <div>
            <h3 className="text-2xl font-serif text-secondary mb-8">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-[#F3764A] mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                    Email us
                  </p>
                  <p className="text-secondary font-medium">
                    info@smatprop.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[#F3764A] mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                    Call us
                  </p>
                  <p className="text-secondary font-medium">(+263) 86 8800</p>
                </div>
              </div>
              <div className="bg-[#F4F0EC] p-6 rounded-2xl">
                <div className="flex items-center gap-3 text-secondary mb-2">
                  <Clock size={16} />
                  <span className="font-bold text-sm">Working Hours</span>
                </div>
                <p className="text-sm text-gray-500">Mon - Fri: 7 AM - 4 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-[15px]">
            © {new Date().getFullYear()}{" "}
            <span className="text-secondary font-semibold">SmatProp</span> • All
            Rights Reserved
          </p>
          <div className="flex gap-8 text-[15px] text-gray-400">
            <Link href="#" className="hover:text-[#F3764A] transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#F3764A] transition">
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
    <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-100 rounded-full text-secondary hover:bg-[#F3764A] hover:text-white hover:border-[#F3764A] transition-all cursor-pointer shadow-sm">
      {icon}
    </div>
  );
}
