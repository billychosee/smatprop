/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  Settings as SettingsIcon,
  Bell,
  Fingerprint,
  Eye,
  Sliders,
  Database,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sleek Brand CTA
const BrandCTA = ({ text, href, variant = "primary" }: any) => {
  const base =
    "px-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg active:scale-95";
  const styles = {
    primary: "bg-[#F3764A] text-white hover:bg-[#E26539] border-none",
    secondary: "bg-[#0D1B3A] text-white hover:opacity-90",
    outline:
      "bg-transparent text-[#0D1B3A] border-2 border-[#0D1B3A]/10 hover:border-[#F3764A] hover:text-[#F3764A]",
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

export default function Settings() {
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
          <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-secondary via-transparent to-secondary z-10" />
            <img
              src="/secure_digital_real_estate_marketplace_in_an.jpg"
              alt="System Configuration"
              className="w-full h-full object-cover scale-110 blur-sm"
            />
          </div>
          <div className="relative z-20 text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl mx-auto mb-8 flex items-center justify-center border border-white/20"
            >
              <SettingsIcon className="text-[#F3764A]" size={40} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-serif mb-6"
            >
              Control <span className="text-[#F3764A]">Center.</span>
            </motion.h1>
            <p className="text-white/60 font-medium tracking-[0.3em] uppercase mb-10 text-[12px]">
              Institutional Grade Permissions & Security
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

      {/* --- 2. COMMAND INTERFACE (DESKTOP) --- */}
      <section
        id="desktop-preview"
        className="py-32 px-6 relative z-10 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3764A]/5 blur-[150px] -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Card */}
            <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.05)] border-t border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-50 rounded-2xl text-green-600">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="font-bold text-secondary uppercase tracking-widest text-xs">
                    Security Health
                  </h4>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div className="h-full w-[94%] bg-green-500" />
                </div>
                <p className="text-sm text-gray-400">
                  Your system is operating at 94% security efficiency.
                  Two-factor authentication is active.
                </p>
              </motion.div>

              <div className="space-y-6 px-4">
                <div className="flex gap-4">
                  <Fingerprint className="text-[#F3764A]" />
                  <div>
                    <h5 className="font-bold text-secondary text-sm">
                      Biometric Access
                    </h5>
                    <p className="text-xs text-gray-400">
                      Encrypted hardware-level security.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Eye className="text-[#F3764A]" />
                  <div>
                    <h5 className="font-bold text-secondary text-sm">
                      Audit Logging
                    </h5>
                    <p className="text-xs text-gray-400">
                      Real-time tracking of all configuration changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Software Mockup */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative rounded-[50px] overflow-hidden shadow-[0_80px_120px_-30px_rgba(13,27,58,0.3)] border-12 border-secondary bg-secondary"
              >
                <img
                  src="/realistic_property_management_software_interface.jpeg"
                  alt="Settings Interface"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. MOBILE CONFIGURATION ECOSYSTEM --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-gray-50 rounded-[80px] my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <img
                src="/mobile-ui-property-listing.png"
                alt="Mobile Settings"
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(13,27,58,0.2)] relative z-10"
              />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#0D1B3A]/5 rounded-full blur-[100px]" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 text-[#F3764A] font-bold tracking-widest text-[10px] uppercase">
              <Sliders size={16} />
              Granular Control
            </div>
            <h2 className="text-5xl font-serif text-secondary mb-8 leading-tight">
              Settings That <br />
              Follow <span className="text-[#F3764A]">You.</span>
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Bell />,
                  title: "Smart Notifications",
                  desc: "Configure precise alert triggers for property events.",
                },
                {
                  icon: <Database />,
                  title: "Data Sovereignty",
                  desc: "Manage where and how your property data is stored.",
                },
                {
                  icon: <Zap />,
                  title: "API Integrations",
                  desc: "Connect your existing tools to our high-fidelity engine.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 p-6 rounded-3xl hover:bg-white transition-colors border border-transparent hover:border-gray-100 group"
                >
                  <div className="w-14 h-14 shrink-0 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm group-hover:text-[#F3764A] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto z-10">
        <div className="bg-secondary rounded-[60px] py-24 px-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
              Ready to <span className="text-[#F3764A]">Optimize?</span>
            </h2>
            <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto">
              Your system architecture should be as unique as your portfolio.
              Start configuring your workspace today.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <BrandCTA text="Open Settings" href="#" variant="primary" />
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#F3764A]">
                    Concierge Help
                  </p>
                  <p className="font-bold text-lg">(+263) 86 880 08361</p>
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
