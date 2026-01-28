/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Phone,
  Activity,
  Bell,
  Sliders,
  Database,
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

export default function AnalyticsHub() {
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
              src="/analytics-hub.png"
              alt="System Configuration"
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <div className="relative z-20 text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl mx-auto mb-8 flex items-center justify-center border border-white/20"
            >
              <Activity className="text-primary" size={40} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              Analytics <span className="text-primary">Hub.</span>
            </motion.h1>
            <p className="text-white font-semibold tracking-widest uppercase mb-8">
              Occupancy and Revenue Reports
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <BrandCTA
                text="Explore"
                href="/contact"
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Card */}
            <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.05)] border-t border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                    <Activity size={24} />
                  </div>
                  <h4 className="font-bold text-secondary uppercase tracking-widest text-xs">
                    Occupancy Rate
                  </h4>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div className="h-full w-[87%] bg-blue-500" />
                </div>
                <p className="text-sm text-gray-400">
                  Current occupancy stands at 87% across all properties. Revenue
                  projections are on track.
                </p>
              </motion.div>

              <div className="space-y-6 px-4">
                <div className="flex gap-4">
                  <Database className="text-primary" />
                  <div>
                    <h5 className="font-bold text-secondary text-sm">
                      Revenue Analytics
                    </h5>
                    <p className="text-xs text-gray-400">
                      Real-time income and expense tracking.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Sliders className="text-primary" />
                  <div>
                    <h5 className="font-bold text-secondary text-sm">
                      Custom Reports
                    </h5>
                    <p className="text-xs text-gray-400">
                      Generate detailed insights on demand.
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
                className="relative rounded-[50px] overflow-hidden shadow-[0_80px_120px_-30px_rgba(13,27,58,0.3)]"
              >
                <img
                  src="/analytics-hub.svg"
                  alt="Analytics Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. MOBILE ANALYTICS ECOSYSTEM --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-gray-50 rounded-[80px] my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <img
                src="/mobile-analytics-hub.svg"
                alt="Mobile Analytics"
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(13,27,58,0.2)] relative z-10"
              />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 text-primary font-bold tracking-widest text-[10px] uppercase">
              <Activity size={16} />
              Real-Time Insights
            </div>
            <h2 className="text-5xl font-serif text-secondary mb-8 leading-tight">
              Analytics That <br />
              Follow <span className="text-primary">You.</span>
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Bell />,
                  title: "Performance Alerts",
                  desc: "Get notified of key metrics and occupancy changes.",
                },
                {
                  icon: <Database />,
                  title: "Revenue Tracking",
                  desc: "Monitor income streams and financial health on the go.",
                },
                {
                  icon: <Zap />,
                  title: "Quick Reports",
                  desc: "Generate instant reports from your mobile device.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-6 p-6 rounded-3xl hover:bg-white transition-colors border border-transparent hover:border-gray-100 group"
                >
                  <div className="w-14 h-14 shrink-0 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm group-hover:text-primary transition-colors">
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
              Ready to <span className="text-primary">Analyze?</span>
            </h2>
            <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto">
              Unlock deep insights into your property performance. Start
              exploring your analytics dashboard today.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <BrandCTA
                text="Book a Demo"
                href="https://erp.smatechgroup.com/appointly/appointments_public/book"
                variant="primary"
              />
              <div className="flex items-center gap-4 text-white/80">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-primary">
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
