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
  FileText,
  UserCheck,
  MousePointer2,
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

export default function Applications() {
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
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-[500px] flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="/tenants-and-lease-hero.svg"
              alt="Streamlined Applications"
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
              Tenant & <span className="text-primary">Lease.</span>
            </motion.h1>
            <p className="text-[#ffffff] font-semibold tracking-widest uppercase mb-8">
              Comprehensive Tenant Management & Lease Administration
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <BrandCTA
                text="Start Application"
                href="#desktop-preview"
                variant="primary"
              />
              <Link
                href="https://erp.smatechgroup.com/appointly/appointments_public/book"
                className="px-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg bg-white text-secondary hover:bg-primary hover:text-white border-none"
              >
                System Demo <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 2. REFINED CENTERED DESKTOP SECTION (BIG IMAGE FOCUS) --- */}
      <section
        id="desktop-preview"
        className="py-32 px-6 relative z-10 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />

          {/* CREATIVE OVERLAP HEADING */}
          <div className="hidden lg:block absolute top-10 -left-20 z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/90 backdrop-blur-xl p-12 shadow-[40px_40px_80px_rgba(0,0,0,0.08)] rounded-3xl border border-gray-100"
            >
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">
                Workflow Automation
              </span>
              <h3 className="font-serif text-5xl text-secondary leading-[1.1]">
                Zero-Paper <br />
                <span className="text-primary">Management.</span>
              </h3>
            </motion.div>
          </div>

          {/* THE BIGGEST IMAGE (The Software Interface) */}
          <div className="relative mx-auto max-w-5xl group">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-[60px] overflow-hidden shadow-[0_80px_150px_-30px_rgba(13,27,58,0.4)] border-[20px] border-secondary bg-secondary"
            >
              <img
                src="/tenants-and-lease.svg"
                alt="Application Management UI"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* CREATIVE FLOATING ELEMENTS */}
            <div className="absolute -left-12 bottom-20 hidden xl:block z-30">
              <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <UserCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Verification
                  </p>
                  <p className="text-sm font-bold text-secondary">
                    Applicant Approved
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM RIGHT ACTION CARD */}
            <div className="hidden lg:block absolute -bottom-12 -right-12 z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-primary text-white px-10 py-12 rounded-[40px] shadow-3xl max-w-[360px]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FileText size={24} />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                    Smart Forms
                  </span>
                </div>
                <p className="text-xl font-serif leading-relaxed mb-8">
                  Intelligent fields that adapt to applicant data, reducing
                  drop-off rates by 40%.
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 bg-secondary py-3 px-6 rounded-full hover:bg-white hover:text-secondary transition-all">
                  Try Demo Form <ArrowRight size={12} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. MOBILE UI FEATURE SECTION --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-secondary rounded-[100px] my-20 relative">
        {/* Abstract Background Shape */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 translate-x-20" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <motion.img
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src="/mobile-lease.svg"
                alt="Mobile Application Interface"
                className="w-full h-auto drop-shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative z-10"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary rounded-full blur-[120px] opacity-20" />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-white">
            <div className="flex items-center gap-3 mb-8 text-primary font-bold tracking-widest text-[10px] uppercase">
              <MousePointer2 size={16} />
              Tenant Management
            </div>
            <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">
              Streamlined <br />
              Tenant <span className="text-primary">Operations.</span>
            </h2>
            <div className="grid grid-cols-1 gap-10">
              {[
                {
                  icon: <ShieldCheck />,
                  title: "Tenant Profiles & Contact Details",
                  desc: "Comprehensive tenant information and contact management.",
                },
                {
                  icon: <Zap />,
                  title: "Lease Creation & Tracking",
                  desc: "Create, track, and manage lease agreements with renewal reminders.",
                },
                
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 shrink-0 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-md uppercase tracking-wider mb-2">
                      {item.title}
                    </h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-14">
              <BrandCTA
                text="Download Application App"
                href="/download"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. RE-IMAGINED CONTACT CTA */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-accent rounded-[60px] py-24 px-12 text-center overflow-hidden relative">
          {/* Subtle Decorative Icon */}
          <div className="absolute -bottom-20 -left-20 text-secondary/5 rotate-12">
            <FileText size={400} />
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-serif text-secondary mb-10 leading-none">
              Manage Tenants <br />{" "}
              <span className="text-primary">Efficiently.</span>
            </h2>
            <p className="text-xl text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed">
              Streamline tenant onboarding, lease management, and communication
              with our comprehensive tenant and lease management tools.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <Link href="#desktop-preview">
                <button className="bg-secondary text-white px-14 py-7 rounded-2xl flex items-center gap-4 shadow-2xl hover:bg-primary transition-all font-bold uppercase tracking-[0.2em] text-xs cursor-pointer">
                  Explore Features{" "}
                  <ArrowRight size={20} className="text-primary" />
                </button>
              </Link>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl border border-gray-100">
                  <Phone size={28} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.3em] mb-1">
                    Direct Assistance
                  </p>
                  <p className="font-bold text-secondary text-2xl tracking-tighter">
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




