/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Compass,
  Zap,
  Maximize2,
  Flame,
  Percent,
  Gem,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sleek Brand CTA
const BrandCTA = ({
  text,
  href,
  variant = "primary",
}: {
  text: string;
  href: string;
  variant?: string;
}) => {
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

export default function MarketingTools() {
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
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-137.5 flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-30 scale-110">
            <img
              src="/marketing-and-listing-hero.svg"
              alt="Marketing & Listing Tools"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Animated Glow behind text */}
          <div className="absolute w-125 h-125 bg-primary/20 blur-[120px] rounded-full -top-20 -right-20 animate-pulse" />

          <div className="relative z-10 text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/10"
            >
              <Flame size={14} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Boost Your Listings
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              Marketing & <span className="text-primary">Listing Tools</span>
            </motion.h1>
            <p className="text-white font-semibold tracking-widest uppercase mb-8">
              Property listings, marketplace & promotional tools.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

      {/* --- 2. THE LISTING PLATFORM (DESKTOP) --- */}
      <section
        id="desktop-preview"
        className="py-32 px-6 relative z-10 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative">
          {/* LEFT-SIDE VALUE PROPOSITION */}
          <div className="hidden lg:block absolute top-1/4 -left-32 z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/95 backdrop-blur-xl p-8 shadow-[40px_40px_80px_rgba(0,0,0,0.08)] rounded-3xl border border-gray-100 max-w-70"
            >
              <Gem className="text-primary mb-4" size={32} />
              <h4 className="text-2xl font-serif text-secondary mb-3">
                Centralized Marketplace.
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Connect landlords and tenants in one unified platform.
                Streamlined listings with advanced search and promotional
                features.
              </p>
            </motion.div>
          </div>

          {/* CENTRAL APP FRAME */}
          <div className="relative mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-[60px] overflow-hidden shadow-[0_100px_150px_-50px_rgba(13,27,58,0.5)]"
            >
              <div className="absolute top-0 left-0 right-0 h-12 bg-secondary flex items-center px-8 gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <img
                src="/marketing-and-listing.svg"
                alt="Listing Platform Interface"
                className="w-full h-full object-cover pt-4 transition-transform duration-1000"
              />
            </motion.div>

            {/* INTERACTIVE FLOATING ELEMENTS */}
            <div className="absolute -right-12 bottom-20 hidden xl:block z-30">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-secondary text-white p-8 rounded-[40px] shadow-3xl border border-white/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Maximize2 className="text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Featured Listing
                  </span>
                </div>
                <p className="text-3xl font-serif mb-2">Luxury Apartment</p>
                <p className="text-sm text-white/50 mb-6 font-mono">
                  $2,500/month
                </p>
                <button className="w-full py-3 bg-primary rounded-xl text-[10px] font-bold uppercase tracking-widest">
                  View Details
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE MOBILE LISTING EXPERIENCE --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto bg-accent/50 rounded-[100px] my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <img
                src="/mobile-marketing-and-listing.svg"
                alt="Mobile Listing App"
                className="w-full h-auto drop-shadow-[0_60px_100px_rgba(13,27,58,0.2)] relative z-10"
              />
              {/* Artistic Circle behind phone */}
              <div className="absolute -top-10 -left-10 w-[120%] h-[120%] border border-primary/20 rounded-full" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 text-primary font-bold tracking-[0.3em] text-[10px] uppercase">
              <Smartphone size={16} />
              Mobile Listings
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary mb-8 leading-[1.1]">
              Listings that <br />
              <span className="text-primary">Attract.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <ShieldCheck />,
                  title: "Online Property Listings",
                  desc: "Create and manage comprehensive property listings online with ease.",
                },
                {
                  icon: <Percent />,
                  title: "Advanced Search Functionality",
                  desc: "Powerful search tools to help tenants find the perfect property.",
                },
                {
                  icon: <Compass />,
                  title: "Centralized Marketplace",
                  desc: "Unified platform connecting landlords and tenants seamlessly.",
                },
                {
                  icon: <Zap />,
                  title: "Featured Listings & Promotions",
                  desc: "Highlight your properties with featured listings and promotional tools.",
                },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-secondary text-xs uppercase tracking-widest mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CLOSING CTA */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-secondary rounded-[80px] py-24 px-8 text-center relative overflow-hidden">
          {/* Abstract background graphics */}
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
              Maximize Your <span className="italic text-primary">Reach.</span>
            </h2>
            <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto">
              Ready to attract more tenants with powerful marketing and listing
              tools?
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <button className="bg-primary text-white px-16 py-7 rounded-2xl font-bold uppercase tracking-widest text-[12px] hover:scale-105 transition-all shadow-2xl">
                Start Listing Now
              </button>

              <div className="flex items-center gap-6 text-left border-l border-white/10 pl-8">
                <div>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-widest">
                    Call Desk
                  </p>
                  <p className="text-white font-bold text-2xl">
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
