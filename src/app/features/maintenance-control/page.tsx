/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Activity,
  Clock,
  Search,
  AlertCircle,
  Wrench,
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

export default function MaintenanceControl() {
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
              src="/maintenance-control-hero.svg"
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
              Maintenance <span className="text-primary">Control.</span>
            </motion.h1>
            <p className="text-[#ffffff] font-semibold tracking-widest uppercase mb-8">
              Request Submission & Tracking
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col sm:flex-row justify-center gap-6"
            >
              <BrandCTA
                text="View Requests"
                href="#maintenance-preview"
                variant="primary"
              />
              <Link
                href="https://erp.smatechgroup.com/appointly/appointments_public/book"
                className="px-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg bg-white text-secondary hover:bg-primary hover:text-white border-none"
              >
                Book Maintenance Demo <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BIG IMAGE SECTION - MAINTENANCE DASHBOARD */}
      <section
        id="maintenance-preview"
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
                Maintenance Management
              </span>
              <h3 className="font-serif text-5xl text-secondary leading-[1.1]">
                Streamlined <br />
                Request <br />
                <span className="text-primary">Tracking.</span>
              </h3>
            </motion.div>
          </div>

          {/* THE CENTERED BIG IMAGE (Desktop UI) */}
          <div className="relative mx-auto max-w-4xl group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-[50px] overflow-hidden shadow-[0_80px_120px_-30px_rgba(13,27,58,0.4)]"
            >
              <img
                src="/maintenance-control.svg"
                alt="Maintenance Control Interface"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-secondary/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* FLOATING ACTIVITY BADGES (Creative Add-on) */}
            <div className="absolute top-1/4 -right-16 hidden xl:flex flex-col gap-4 z-20">
              <motion.div
                whileHover={{ x: -10 }}
                className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 w-64"
              >
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-[10px] font-bold text-secondary uppercase tracking-tight">
                  Request: Plumbing Issue
                </p>
                <span className="text-[9px] text-gray-400 ml-auto">2m ago</span>
              </motion.div>
              <motion.div
                whileHover={{ x: -10 }}
                className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 w-64"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <p className="text-[10px] font-bold text-secondary uppercase tracking-tight">
                  Assigned: Contractor #12
                </p>
                <span className="text-[9px] text-gray-400 ml-auto">5m ago</span>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MOBILE APP SECTION (Context: Mobile Maintenance) */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-gray-50/50 rounded-[80px] my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <img
                src="/mobile-maintenance-control.svg"
                alt="Mobile Maintenance"
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(13,27,58,0.25)] relative z-10"
              />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 text-primary font-bold tracking-widest text-[10px] uppercase">
              <Activity size={16} />
              Mobile Maintenance
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              On-the-Go <br />
              Request <span className="text-primary">Management.</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: <Clock />,
                  title: "Instant Notifications",
                  desc: "Receive alerts for new maintenance requests and status updates.",
                },
                {
                  icon: <Search />,
                  title: "Quick Access",
                  desc: "View and manage all maintenance requests from your mobile device.",
                },
                {
                  icon: <AlertCircle />,
                  title: "Priority Alerts",
                  desc: "Urgent issues are highlighted for immediate attention.",
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
                text="Download Mobile App"
                href="/download"
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURE HIGHLIGHTS */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 text-primary font-bold tracking-widest text-[10px] uppercase">
            <Wrench size={16} />
            Maintenance Features
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
            Comprehensive <br />
            Work Order <span className="text-primary">Management.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Maintenance Request Submission & Tracking",
              desc: "Tenants and property managers can easily submit maintenance requests through the platform, with real-time tracking of request status and updates.",
            },
            {
              title: "Automated Assignment to Contractors/Service Providers",
              desc: "Automatically assign work orders to qualified contractors based on availability, location, and expertise, streamlining the maintenance process.",
            },
            {
              title: "Work Order Status Tracking & Completion Logging",
              desc: "Monitor the progress of maintenance tasks from initiation to completion, with detailed logs of all actions and communications.",
            },
            {
              title: "Preventive Maintenance Scheduling",
              desc: "Schedule regular maintenance tasks to prevent issues before they arise, ensuring property longevity and tenant satisfaction.",
            },
            {
              title: "Notifications for Upcoming Maintenance Tasks",
              desc: "Receive automated reminders and notifications for scheduled maintenance, inspections, and preventive care activities.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[40px] shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <h4 className="font-bold text-secondary text-lg mb-4 uppercase tracking-wider">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT CTA */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-accent rounded-[50px] py-20 px-8 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
              Streamline Your <br /> Maintenance Workflow
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Keep your properties in top condition. Automate maintenance
              requests and ensure timely resolutions with SmatProp.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <Link href="#maintenance-preview">
                <button className="bg-secondary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-secondary transition-all font-bold uppercase tracking-widest text-sm cursor-pointer">
                  Explore Maintenance Control{" "}
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
