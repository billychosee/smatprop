/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  HardHat,
  Cpu,
  BellRing,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sleek Brand CTA
const BrandCTA = ({ text, href, variant = "primary" }: { text: string; href: string; variant?: "primary" | "secondary" | "outline" }) => {
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

export default function ContractDocument() {
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
              alt="Predictive Maintenance"
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
              Contract & <span className="text-primary">Document.</span>
            </motion.h1>
            <p className="text-[#ffffff] font-semibold tracking-widest uppercase mb-8">
              Digital Document Management & Compliance
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <BrandCTA
                text="Explore Documents"
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

      {/* --- 2. COMMAND CENTER DESKTOP PREVIEW --- */}
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
              className="bg-white/90 backdrop-blur-md p-10 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] rounded-2xl border-t border-l border-gray-100"
            >
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">
                Operations Engine
              </span>
              <h3 className="font-serif text-5xl text-secondary leading-[1.1]">
                Total <br />
                <span className="text-primary">Resolution.</span>
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
                src="/realistic_property_management_software_interface.jpeg"
                alt="Maintenance Command Center"
                className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* FLOATING STATUS CARDS */}
            <div className="absolute -left-12 bottom-1/4 hidden xl:block z-30">
              <motion.div
                whileInView={{ x: 20 }}
                className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-orange-500/10 text-primary rounded-full flex items-center justify-center">
                  <BellRing size={20} className="animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Active Request
                  </p>
                  <p className="text-sm font-bold text-secondary">
                    Unit 402: HVAC Sensor
                  </p>
                </div>
              </motion.div>
            </div>

            {/* BOTTOM CALLOUT */}
            <div className="hidden lg:block absolute -bottom-12 -right-12 z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-secondary text-white px-8 py-10 rounded-3xl shadow-3xl max-w-85 border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Cpu size={20} className="text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Smart Triage
                  </span>
                </div>
                <p className="text-lg font-serif leading-relaxed mb-6">
                  AI-driven dispatching that connects the right technician to
                  the right task in seconds.
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                  Analyze Workflow <ArrowRight size={12} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. MOBILE TECHNICIAN UI --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-gray-50/50 rounded-[80px] my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <img
                src="/mobile-ui-property-listing.png"
                alt="Field App Interface"
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(13,27,58,0.25)] relative z-10"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 text-primary font-bold tracking-widest text-[10px] uppercase">
              <CheckCircle2 size={16} />
              Document Management
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Secure <br />
              Contract <span className="text-primary">Handling.</span>
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  icon: <CheckCircle2 />,
                  title: "Lease Agreement Storage",
                  desc: "Secure storage and version tracking for all lease agreements.",
                },
                
                {
                  icon: <BellRing />,
                  title: "Compliance Alerts",
                  desc: "Automated alerts for expiring compliance documents.",
                },
                {
                  icon: <HardHat />,
                  title: "Eviction Management",
                  desc: "Efficient handling of eviction processes and documentation.",
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
                text="Get Started"
                href="/contact"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-accent rounded-[50px] py-20 px-8 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
              Manage Documents <br /> Effortlessly
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Streamline contract management, digital signing, and compliance
              with our comprehensive document solutions.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <Link href="#desktop-preview">
                <button className="bg-secondary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-primary transition-all font-bold uppercase tracking-widest text-sm cursor-pointer">
                  Explore Document Tools{" "}
                  <ArrowRight size={18} className="text-primary" />
                </button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-md">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                    24/7 Support
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




