/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Phone,
  Activity,
  Maximize2,
  Clock,
  ShieldCheck,
  Search,
  FileSearch,
  History,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sleek Brand CTA
const BrandCTA = ({ text, href, variant = "primary" }: any) => {
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

export default function ActivityLogs() {
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
              src="/secure_digital_real_estate_marketplace_in_an.jpg"
              alt="Activity Logs Overview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              System <span className="text-primary">Transparency.</span>
            </motion.h1>
            <p className="text-[#ffffff] font-semibold tracking-widest uppercase mb-8">
              Complete Audit Trails & Real-Time Event Tracking
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <BrandCTA
                text="Analyze Logs"
                href="#log-preview"
                variant="primary"
              />
              <Link
                href="https://erp.smatechgroup.com/appointly/appointments_public/book"
                className="px-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg bg-white text-secondary hover:bg-primary hover:text-white border-none"
              >
                Request Audit Demo <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BIG IMAGE SECTION - THE LOG ENGINE */}
      <section
        id="log-preview"
        className="py-32 px-6 relative z-10 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />

          {/* CREATIVE OVERLAP HEADING */}
          <div className="hidden lg:block absolute top-10 -left-20 z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-md p-10 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] rounded-2xl border-t border-l border-gray-100"
            >
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">
                Institutional Auditing
              </span>
              <h3 className="font-serif text-5xl text-secondary leading-[1.1]">
                Immutable <br />
                Event <br />
                <span className="text-primary">Intelligence.</span>
              </h3>
            </motion.div>
          </div>

          {/* THE CENTERED BIG IMAGE (Desktop UI) */}
          <div className="relative mx-auto max-w-4xl group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-[50px] overflow-hidden shadow-[0_80px_120px_-30px_rgba(13,27,58,0.4)] border-[16px] border-secondary bg-secondary"
            >
              <img
                src="/realistic_property_management_software_interface.jpeg"
                alt="Log Management Interface"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* FLOATING ACTIVITY BADGES (Creative Add-on) */}
            <div className="absolute top-1/4 -right-16 hidden xl:flex flex-col gap-4 z-20">
              <motion.div
                whileHover={{ x: -10 }}
                className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 w-64"
              >
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-[10px] font-bold text-secondary uppercase tracking-tight">
                  Login: Admin User #04
                </p>
                <span className="text-[9px] text-gray-400 ml-auto">2m ago</span>
              </motion.div>
              <motion.div
                whileHover={{ x: -10 }}
                className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 w-64"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-[10px] font-bold text-secondary uppercase tracking-tight">
                  Payment: $1,200 Verified
                </p>
                <span className="text-[9px] text-gray-400 ml-auto">5m ago</span>
              </motion.div>
            </div>

            {/* CREATIVE BOTTOM CALLOUT */}
            <div className="hidden lg:block absolute -bottom-12 -right-12 z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-secondary text-white px-8 py-10 rounded-3xl shadow-3xl max-w-[340px] border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Data Integrity
                  </span>
                </div>
                <p className="text-lg font-serif leading-relaxed mb-6">
                  Every interaction is cryptographically timestamped, ensuring a
                  tamper-proof history.
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                  View Security Protocols <ArrowRight size={12} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MOBILE APP SECTION (Context: Mobile Alerts) */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-gray-50/50 rounded-[80px] my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <img
                src="/mobile-ui-property-listing.png"
                alt="Mobile Alerts"
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(13,27,58,0.25)] relative z-10"
              />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 text-primary font-bold tracking-widest text-[10px] uppercase">
              <Activity size={16} />
              Mobile Monitoring
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Real-Time <br />
              System <span className="text-primary">Pulse.</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: <Clock />,
                  title: "Instant Push Alerts",
                  desc: "Get notified the second a high-priority event occurs on your property.",
                },
                {
                  icon: <Search />,
                  title: "Remote Log Search",
                  desc: "Filter through months of data in seconds directly from your phone.",
                },
                {
                  icon: <AlertCircle />,
                  title: "Anomalous Detection",
                  desc: "AI-driven logs that highlight unusual activity for immediate review.",
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
                text="Access Mobile Logs"
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
              Secure Your <br /> Audit History
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Never lose track of a single event. Upgrade to SmatProp's advanced
              activity logging for ultimate accountability.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <Link href="#log-preview">
                <button className="bg-secondary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-secondary transition-all font-bold uppercase tracking-widest text-sm cursor-pointer">
                  Explore Log Engine{" "}
                  <ArrowRight size={18} className="text-primary" />
                </button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-md">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                    Support
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




