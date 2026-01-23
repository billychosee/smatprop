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
  Phone,
  Activity,
  Maximize2,
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

export default function Listings() {
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
              src="/secure_digital_real_estate_marketplace_in_an.jpg"
              alt="Exclusive Real Estate Portfolios"
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
              Exclusive <span className="text-primary">Portfolios.</span>
            </motion.h1>
            <p className="text-[#ffffff] font-semibold tracking-widest uppercase mb-8">
              A refined selection of premium properties
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <BrandCTA
                text="View Collection"
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

      {/* --- 2. REFINED CENTERED DESKTOP SECTION --- */}
      <section
        id="desktop-preview"
        className="py-32 px-6 relative z-10 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative">
          {/* BACKGROUND BLUR DECOR (Adds depth) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />

          {/* CREATIVE OVERLAP HEADING */}
          <div className="hidden lg:block absolute top-10 -left-20 z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-md p-10 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] rounded-2xl border-t border-l border-gray-100"
            >
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">
                Architecture of Efficiency
              </span>
              <h3 className="font-serif text-5xl text-secondary leading-[1.1]">
                The Vision <br />
                Behind{" "}
                <span className="italic text-gray-300 font-light">
                  the
                </span>{" "}
                <br />
                <span className="text-primary">Intelligence.</span>
              </h3>
            </motion.div>
          </div>

          {/* THE CENTERED IMAGE (Reduced scale, thick architectural frame) */}
          <div className="relative mx-auto max-w-4xl group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-[50px] overflow-hidden shadow-[0_80px_120px_-30px_rgba(13,27,58,0.4)] border-16 border-secondary bg-secondary"
            >
              <img
                src="/realistic_property_management_software_interface.jpeg"
                alt="Desktop Experience"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Sleek Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-tr from-secondary/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* FLOATING ACTION BADGE (Unique Placement) */}
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-20">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                <Maximize2 size={24} />
              </div>
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                <Activity size={24} />
              </div>
            </div>

            {/* CREATIVE BOTTOM CALLOUT */}
            <div className="hidden lg:block absolute -bottom-12 -right-12 z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-secondary text-white px-8 py-10 rounded-3xl shadow-3xl max-w-85 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Performance Metrics
                  </span>
                </div>
                <p className="text-lg font-serif leading-relaxed mb-6">
                  Experience zero-latency property management with a
                  high-fidelity data engine.
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                  Explore Engine <ArrowRight size={12} />
                </button>
              </motion.div>
            </div>
          </div>

          {/* MOBILE FALLBACK (Simple centered text) */}
          <div className="lg:hidden mt-16 text-center px-4">
            <h3 className="font-serif text-4xl text-secondary mb-4">
              The Intelligence Behind the UI.
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Institutional grade portfolio management in a sleek, intuitive
              desktop experience.
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. MOBILE UI FEATURE SECTION --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-gray-50/50 rounded-[80px] my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <img
                src="/mobile-ui-property-listing.png"
                alt="Mobile Interface"
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(13,27,58,0.25)] relative z-10"
              />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 text-primary font-bold tracking-widest text-[10px] uppercase">
              <Smartphone size={16} />
              Mobile Ecosystem
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Real Estate at <br />
              Your <span className="text-primary">Fingertips.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck />,
                  title: "Verified Listings",
                  desc: "Every unit is physically inspected and authenticated.",
                },
                {
                  icon: <Compass />,
                  title: "Virtual Walkthroughs",
                  desc: "Experience your next home without leaving your office.",
                },
                {
                  icon: <Zap />,
                  title: "Instant Booking",
                  desc: "Secure properties and manage payments instantly.",
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
                text="Get the App"
                href="/download"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT CTA */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-accent rounded-[50px] py-20 px-8 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
              Discover Your <br /> Dream Property
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Explore our curated collection of premium real estate listings and
              find the perfect investment for your future.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <Link href="#desktop-preview">
                <button className="bg-secondary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-secondary transition-all font-bold uppercase tracking-widest text-sm cursor-pointer">
                  Browse Listings{" "}
                  <ArrowRight size={18} className="text-primary" />
                </button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-md">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                    Call us
                  </p>
                  <p className="font-bold text-secondary text-xl tracking-tighter">
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





