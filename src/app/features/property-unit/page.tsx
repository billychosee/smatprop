/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Phone,
  Maximize2,
  Building2,
  Boxes,
  BarChart3,
  Globe,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BrandCTAProps {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
}

// Sleek Brand CTA
const BrandCTA = ({ text, href, variant = "primary" }: BrandCTAProps) => {
  const base =
    "px-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg active:scale-95";
  const styles = {
    primary: "bg-primary text-white hover:bg-primary/80 border-none",
    secondary: "bg-secondary text-white hover:opacity-90",
    outline:
      "bg-transparent text-secondary border-2 border-secondary/10 hover:border-primary hover:text-primary",
  };
  return (
    <Link
      href={href}
      className={`${base} ${styles[variant as keyof typeof styles]}`}
    >
      {text} <ArrowRight size={14} />
    </Link>
  );
};

export default function PropertyUnit() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#4D5053] relative">
      <Navbar />

      {/* SUBTLE BACKGROUND GRID LINES */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none px-4 max-w-7xl mx-auto border-x border-gray-100/30 z-0">
        <div className="border-r border-gray-100/30"></div>
        <div className="border-r border-gray-100/30"></div>
        <div className="border-r border-gray-100/30"></div>
      </div>

      {/* 1. HERO HEADER SECTION */}
      <section className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-125 flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="/property-and-units-hero.svg"
              alt="Asset Oversight"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              Property <span className="text-primary">& Unit.</span>
            </motion.h1>
            <p className="text-[#ffffff] font-semibold tracking-widest uppercase mb-8">
              Comprehensive Property Management
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <BrandCTA
                text="Explore"
                href="#desktop-preview"
                variant="primary"
              />
              <Link
                href="https://erp.smatechgroup.com/appointly/appointments_public/book"
                className="px-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg bg-white text-secondary hover:bg-primary hover:text-white border-none"
              >
                Book a Demo <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 2. THE DIGITAL TWIN DESKTOP PREVIEW --- */}
      <section
        id="desktop-preview"
        className="py-32 px-6 relative z-10 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />

          {/* OVERLAP HEADING */}
          <div className="hidden lg:block absolute top-10 -left-20 z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/95 backdrop-blur-xl p-10 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] rounded-2xl border-t border-l border-gray-100"
            >
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">
                Global Operations
              </span>
              <h3 className="font-serif text-5xl text-secondary leading-[1.1]">
                Unified <br />
                <span className="text-primary">Portfolio.</span>
              </h3>
            </motion.div>
          </div>

          {/* MAIN PREVIEW IMAGE */}
          <div className="relative mx-auto max-w-4xl group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-[50px] overflow-hidden shadow-[0_80px_120px_-30px_rgba(13,27,58,0.4)] border-16 border-secondary bg-secondary"
            >
              <img
                src="/property-and-units.svg"
                alt="Portfolio Analytics Dashboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>

            {/* FLOATING DATA CHIPS */}
            <div className="absolute -right-6 top-1/4 hidden xl:block z-30">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="bg-secondary text-white p-6 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">
                    Occupancy Rate
                  </p>
                  <p className="text-xl font-serif">98.4%</p>
                </div>
              </motion.div>
            </div>

            {/* BOTTOM CALLOUT */}
            <div className="hidden lg:block absolute -bottom-12 -left-12 z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white px-8 py-10 rounded-3xl shadow-3xl max-w-85 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={20} className="text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Multi-Region Sync
                  </span>
                </div>
                <p className="text-lg font-serif leading-relaxed mb-6 text-secondary">
                  Manage distributed assets across borders with localized tax
                  and compliance engines.
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-primary hover:opacity-70 transition-all">
                  Global Overview <ArrowRight size={12} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. MOBILE ECOSYSTEM --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-gray-50/50 rounded-[80px] my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <img
                src="/mobile-unit-management.svg"
                alt="Asset Manager Mobile"
                className="w-full h-auto relative z-10"
              />
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 text-primary font-bold tracking-widest text-[10px] uppercase">
              <Building2 size={16} />
              Full-Spectrum Control
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Your Assets <br />
              In High <span className="text-primary">Definition.</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: <Boxes />,
                  title: "Property Database",
                  desc: "Categorize properties by Residential, Commercial, etc.",
                },
                {
                  icon: <ShieldCheck />,
                  title: "Unit Details",
                  desc: "Manage size, type, amenities, and occupancy status.",
                },

                {
                  icon: <TrendingUp />,
                  title: "Unit Management",
                  desc: "Handle assignments and transfers efficiently.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-12 h-12 shrink-0 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-gray-100">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-sm uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <BrandCTA
                text="Open Mobile Dashboard"
                href="/download"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-primary rounded-[50px] py-20 px-8 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Ready to Scale <br /> Your Portfolio?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Join the institutional investors using Smatech to manage over $2B
              in real estate assets globally.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <Link href="#desktop-preview">
                <button className="bg-secondary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-2xl hover:bg-secondary transition-all font-bold uppercase tracking-widest text-sm cursor-pointer">
                  Launch Property Engine <ArrowRight size={18} />
                </button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                  <Phone size={24} />
                </div>
                <div className="text-left text-white">
                  <p className="text-xs opacity-60 uppercase font-bold tracking-widest">
                    Expert Advice
                  </p>
                  <p className="font-bold text-xl tracking-tighter">
                    (+263) 86 880 08361
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
