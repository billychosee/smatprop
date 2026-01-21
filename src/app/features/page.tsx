/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  Users,
  Wallet,
  BarChart3,
  Search,
  Wrench,
  ClipboardCheck,
  CreditCard,
  Phone,
  LayoutDashboard,
  ShieldAlert,
  Zap,
  Briefcase,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Features() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#4D5053] relative">
      <Navbar />

      {/* SUBTLE VERTICAL GRID LINES */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none px-4 max-w-7xl mx-auto border-x border-gray-100/50">
        <div className="border-r border-gray-100/50"></div>
        <div className="border-r border-gray-100/50"></div>
        <div className="border-r border-gray-100/50"></div>
      </div>

      {/* 1. HERO HEADER - IMAGE FIX APPLIED */}
      <section className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-112.5 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              alt="Modern Architecture Background"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              The Solution
            </motion.h1>
            <p className="text-[#F3764A] font-semibold tracking-widest uppercase">
              Comprehensive Property Ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* 2. CREATIVE FEATURE SUITES (THE 6 ITEMS) */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Property & Unit",
              icon: <Home size={24} />,
              img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
              features: [
                "Property database & categorization",
                "Unit-level details (size, amenities)",
                "Floor plans & virtual tours",
                "Availability & unit assignment",
              ],
            },
            {
              title: "Tenant & Lease",
              icon: <Users size={24} />,
              img: "/tenant-and-lease.png",
              features: [
                "Digital agreement signing",
                "Automated rent reminders",
                "Onboarding & Check-in/out",
                "Lease creation & tracking",
              ],
            },
            {
              title: "Financials",
              icon: <Wallet size={24} />,
              img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
              features: [
                "Mobile money & card processing",
                "Security deposit management",
                "Automated late fee calculation",
                "Tax compliance fiscalization",
              ],
            },
            {
              title: "Reporting",
              icon: <BarChart3 size={24} />,
              img: "/realistic_property_management_software_interface.jpeg",
              features: [
                "Income & expense tracking",
                "Budgeting & forecasting",
                "Exportable cash flow reports",
                "Real-time analytics dashboard",
              ],
            },
            {
              title: "Maintenance",
              icon: <Wrench size={24} />,
              img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
              features: [
                "Request submission portal",
                "Automated contractor assignment",
                "Preventive scheduling",
                "Work order status tracking",
              ],
            },
            {
              title: "Market & Security",
              icon: <Search size={24} />,
              img: "/secure_digital_real_estate_marketplace_in_an.jpg",
              features: [
                "Centralized verified listings",
                "Multi-factor authentication",
                "Role-based access & audits",
                "Listing performance analytics",
              ],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-[40px] overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-2xl text-[#F3764A] shadow-lg">
                  {item.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-secondary mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-500"
                    >
                      <Zap size={14} className="mt-1 text-[#F3764A] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STAR FEATURES (DEDICATED SECTION) */}
      <section className="py-24 px-4 bg-secondary relative z-10 text-white rounded-[50px] mx-4 max-w-7xl lg:mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3764A] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-xl">
              <p className="text-[#F3764A] font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                Exclusive Capabilities
              </p>
              <h2 className="text-4xl md:text-5xl font-serif">Star Features</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                title: "Integrated payment gateway",
                desc: "Secure, native processing for mobile money, cards, and bank transfers.",
                icon: <CreditCard size={32} />,
                num: "01",
              },
              {
                title: "Rental credit vetting and profiling",
                desc: "Advanced tenant background checks and financial risk assessment.",
                icon: <LayoutDashboard size={32} />,
                num: "02",
              },
              {
                title: "Eviction support and compliance tracking",
                desc: "Digital legal workflows and automated compliance documentation.",
                icon: <ShieldAlert size={32} />,
                num: "03",
              },
              {
                title: "Entrance and exit inspection checklists",
                desc: "High-fidelity digital reports to eliminate property damage disputes.",
                icon: <ClipboardCheck size={32} />,
                num: "04",
              },
              {
                title: "Vendor management system",
                desc: "Centralized database and assignment tool for property service providers.",
                icon: <Briefcase size={32} />,
                num: "05",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="text-5xl font-serif text-white/10 group-hover:text-[#F3764A]/20 transition-colors duration-500">
                  {item.num}
                </span>
                <div>
                  <div className="text-[#F3764A] mb-4">{item.icon}</div>
                  <h4 className="text-2xl font-serif mb-3">{item.title}</h4>
                  <p className="text-white/60 leading-relaxed text-sm max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MULTI-DEVICE SECTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Accessible on <br /> All Your Devices
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether you are on the field with a smartphone, in the office on a
              PC, or conducting inspections on a tablet, SmatProp remains
              synchronized in real-time.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-xs text-[#F3764A] uppercase font-bold tracking-widest">
                  Cloud Sync
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">Offline</div>
                <div className="text-xs text-[#F3764A] uppercase font-bold tracking-widest">
                  Support
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/devices.png"
              alt="Device Dashboard"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* 5. CONTACT CTA */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#F4F0EC] rounded-[50px] py-20 px-8 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
              Ready for Smarter <br /> Management?
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <Link href="https://erp.smatechgroup.com/appointly/appointments_public/book">
                <button className="bg-secondary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-[#0D1B3A] transition-all font-bold uppercase tracking-widest text-sm hover:cursor-pointer">
                  Get Started{" "}
                  <ArrowRight size={18} className="text-[#F3764A]" />
                </button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#F3764A] shadow-md">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                    Call us
                  </p>
                  <p className="font-bold text-secondary text-xl tracking-tighter">
                    (+263) 86 8800
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
