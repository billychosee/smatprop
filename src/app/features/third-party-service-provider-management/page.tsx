/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Zap,
  Phone,
  Activity,
  Users,
  Award,
  CheckCircle2,
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

export default function ThirdPartyServiceProviderManagement() {
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
          <div className="absolute inset-0 z-0 opacity-20 grayscale">
            <img
              src="/third-party-service-provider-management-hero.svg"
              alt="Service Providers Network"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-3 mb-6 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-sm"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-secondary bg-gray-400"
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                Over 500+ Vetted Professionals
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              Third-Party{" "}
              <span className="text-primary">Service Provider Management</span>
            </motion.h1>
            <p className="text-white font-semibold tracking-widest uppercase mb-8">
              Contractor profiles, scheduling, payments & tenant services.
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

      {/* --- 2. VETTING & QUALITY ENGINE (DESKTOP) --- */}
      <section
        id="desktop-preview"
        className="py-32 px-6 relative z-10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative">
          {/* ARCHITECTURAL HEADER OVERLAY */}
          <div className="hidden lg:block absolute -top-40 -left-10 z-20">
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
            </motion.div>
          </div>

          {/* MAIN SOFTWARE MOCKUP */}
          <div className="relative mx-auto max-w-4xl pt-20 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative rounded-[60px] overflow-hidden shadow-[0_100px_150px_-50px_rgba(13,27,58,0.4)] "
            >
              <img
                src="/third-party-service-provider-management.svg"
                alt="Provider Management Dashboard"
                className="w-full h-full object-cover opacity-90 transition-transform duration-1000"
              />

              {/* Overlay Interactive Badge */}
              <div className="absolute top-10 right-10 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-gray-100">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Integration Status
                  </p>
                  <p className="text-secondary font-bold">
                    Services Integrated
                  </p>
                </div>
              </div>
            </motion.div>

            {/* PERFORMANCE FLOATERS */}
            <div className="absolute -bottom-10 -right-10 hidden xl:flex flex-col gap-4 z-20">
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white shadow-2xl hover:rotate-12 transition-transform">
                <Activity size={32} />
              </div>
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-secondary shadow-2xl border border-gray-100 hover:-rotate-12 transition-transform">
                <Users size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. MOBILE DISPATCH SYSTEM --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-secondary rounded-[100px] my-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="/mobile-third-party-service-provider-management.svg"
                alt="Mobile Dispatch UI"
                className="w-full h-auto drop-shadow-[0_80px_100px_rgba(0,0,0,0.5)] relative z-10"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/5 rounded-full blur-[120px]" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6 text-primary font-bold tracking-widest text-[10px] uppercase">
              <Smartphone size={16} />
              Real-Time Dispatch
            </div>
            <h2 className="text-5xl font-serif mb-8 leading-tight">
              Provider Management <br />
              on <span className="text-primary">Autopilot.</span>
            </h2>
            <div className="space-y-10">
              {[
                {
                  icon: <Users />,
                  title: "Contractor Profiles & Management",
                  desc: "Comprehensive profiles and streamlined management of all contractors.",
                },
                {
                  icon: <Activity />,
                  title: "Scheduling & Workflow Tracking",
                  desc: "Efficient scheduling and real-time workflow tracking for providers.",
                },
                {
                  icon: <Zap />,
                  title: "Payment Tracking for External Services",
                  desc: "Automated payment tracking and processing for all external services.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 border-b border-white/5 pb-8"
                >
                  <div className="w-14 h-14 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-primary border border-white/10">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider mb-2">
                      {item.title}
                    </h4>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10 text-center">
        <div className="bg-accent rounded-[60px] py-24 px-8 relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-serif text-secondary mb-10 leading-[1.1]">
              Streamline Your <br /> Provider Management
            </h2>
            <p className="text-xl text-gray-500 mb-12">
              Comprehensive third-party service provider management with
              seamless integration and tenant experiences.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <BrandCTA text="Browse Experts" href="/contact" />
              <div className="flex items-center gap-5 text-left bg-white px-8 py-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Support Line
                  </p>
                  <p className="font-bold text-secondary text-lg">
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
