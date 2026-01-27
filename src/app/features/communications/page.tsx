/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  Activity,
  Users,
  Fingerprint,
  Trello,
  Award,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sleek Brand CTA - UNTOUCHED STYLE
const BrandCTA = ({
  text,
  href,
  variant = "primary",
}: {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
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

export default function CommunicationNotifications() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#4D5053] relative">
      <Navbar />

      {/* SUBTLE BACKGROUND GRID LINES */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none px-4 max-w-7xl mx-auto border-x border-gray-100/30 z-0">
        <div className="border-r border-gray-100/30"></div>
        <div className="border-r border-gray-100/30"></div>
        <div className="border-r border-gray-100/30"></div>
      </div>

      {/* 1. HERO HEADER SECTION - DESIGN UNTOUCHED */}
      <section className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-125 flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="/communication-notifications-hero.svg"
              alt="Communication System"
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
              Communication &{" "}
              <span className="text-primary">Notifications.</span>
            </motion.h1>
            <p className="text-[#ffffff] font-semibold tracking-widest uppercase mb-8">
              Seamless messaging and alerts
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

      {/* 2. REFINED DESKTOP SECTION - CREATIVE "COMMAND CENTER" CONCEPT */}
      <section
        id="desktop-preview"
        className="py-32 px-6 relative z-10 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />

          {/* ARCHITECTURAL HEADER OVERLAY */}
          <div className="hidden lg:block absolute -top-10 -left-10 z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 shadow-[50px_50px_100px_rgba(0,0,0,0.05)] rounded-3xl border-t border-l border-gray-100 max-w-xs"
            >
              <Award className="text-primary mb-6" size={40} />
              <h3 className="font-serif text-4xl text-secondary mb-4">
                Integrated Service Ecosystem.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Seamless integration of maintenance, security, insurance, and
                legal services for comprehensive provider management.
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-primary text-primary"
                  />
                ))}
                <span className="text-[10px] font-bold ml-2">
                  4.9/5 AVG RATING
                </span>
              </div>
            </motion.div>
          </div>

          {/* THE CENTERED IMAGE */}
          <div className="relative mx-auto max-w-4xl group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-[50px] overflow-hidden shadow-[0_80px_120px_-30px_rgba(13,27,58,0.4)"
            >
              <img
                src="/communication-notifications.svg"
                alt="Communication Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-secondary/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* FLOATING ACTION BADGES */}
            <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-20">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                <Fingerprint size={24} />
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
                    Message History
                  </span>
                </div>
                <p className="text-lg font-serif leading-relaxed mb-6">
                  Keep all communications organized with searchable message
                  history and automated archiving for compliance.
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors">
                  View Messages <ArrowRight size={12} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. CREATIVE ROLE-BASED ECOSYSTEM --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-gray-50/50 rounded-[80px] my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <img
                src="/mobile-communication-notifications.svg"
                alt="Team Mobile App"
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(13,27,58,0.25)] relative z-10"
              />
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 text-primary font-bold tracking-widest text-[10px] uppercase">
              <Activity size={16} />
              Mobile Notifications
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Stay Connected <br />
              On the <span className="text-primary">Go.</span>
            </h2>

            <div className="space-y-8">
              {[
                {
                  icon: <ShieldCheck />,
                  title: "Secure Messaging",
                  desc: "Encrypted tenant-landlord communication with read receipts and delivery confirmation.",
                },
                {
                  icon: <Trello />,
                  title: "Automated Alerts",
                  desc: "Receive instant notifications for rent due, maintenance updates, and policy changes.",
                },
                {
                  icon: <Zap />,
                  title: "Real-Time Updates",
                  desc: "Live alerts for overdue payments and lease expirations to prevent issues.",
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
          </div>
        </div>
      </section>

      {/* 4. FEATURE HIGHLIGHTS */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 text-primary font-bold tracking-widest text-[10px] uppercase">
            <Activity size={16} />
            Communication Features
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
            Seamless <br />
            Messaging <span className="text-primary">Solutions.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Tenant/Landlord Messaging System",
              desc: "A secure, in-app messaging platform that allows tenants and landlords to communicate directly, with message threading and file attachments.",
            },
            {
              title: "Automated Notifications & Reminders",
              desc: "Send automated reminders for rent due dates, maintenance updates, policy changes, and other important events to keep everyone informed.",
            },
            {
              title: "Alerts for Overdue Payments or Lease Expirations",
              desc: "Instant alerts for overdue rent payments, lease renewals, and other time-sensitive issues to prevent disputes and maintain cash flow.",
            },
            {
              title: "Centralized Communication History for Transparency",
              desc: "All communications are logged and searchable, providing a complete history for transparency, compliance, and dispute resolution.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[40px] shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <h4 className="font-bold text-secondary text-lg mb-4 uppercase tracking-wider">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONTACT CTA - DESIGN UNTOUCHED */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-accent rounded-[50px] py-20 px-8 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
              Enhance Your <br /> Communication Flow
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Keep tenants and landlords connected with seamless messaging and
              automated notifications for better property management.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <Link href="#desktop-preview">
                <button className="bg-secondary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-secondary transition-all font-bold uppercase tracking-widest text-sm cursor-pointer">
                  Start Communicating{" "}
                  <ArrowRight size={18} className="text-primary" />
                </button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-md">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                    Expert Support
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
