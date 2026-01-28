/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Phone,
  Activity,
  Maximize2,
  Box,
  Globe,
  Users,
  Building2,
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

export default function IncomeExpense() {
  const features = [
    {
      name: "Property Income Tracking",
      icon: <Box size={24} />,
      desc: "Track income by unit and property for comprehensive financial oversight.",
    },
    {
      name: "Expense Tracking",
      icon: <Building2 size={24} />,
      desc: "Monitor maintenance, utilities, and management expenses efficiently.",
    },
    {
      name: "Budgeting & Forecasting",
      icon: <Globe size={24} />,
      desc: "Advanced tools for budgeting and financial forecasting.",
    },
    {
      name: "Financial Reporting",
      icon: <Users size={24} />,
      desc: "Generate Income, Balance Sheet, and Cash Flow reports.",
    },
    {
      name: "Analytics Dashboards",
      icon: <Activity size={24} />,
      desc: "Performance insights through interactive analytics dashboards.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#4D5053] relative">
      <Navbar />

      {/* SUBTLE BACKGROUND GRID LINES */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none px-4 max-w-7xl mx-auto border-x border-gray-100/30 z-0">
        <div className="border-r border-gray-100/30"></div>
        <div className="border-r border-gray-100/30"></div>
        <div className="border-r border-gray-100/30"></div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-100 flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="/income-and-expense-hero.svg"
              alt="Income & Expense Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-0 opacity-40" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              Income & <span className="text-primary">Expense.</span>
            </motion.h1>
            <p className="text-white font-semibold tracking-widest uppercase mb-8">
              Comprehensive Financial Tracking & Analytics
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

      {/* 2. FEATURE CARDS */}
      <motion.section
        id="feature-cards"
        className="py-24 px-6 relative z-10 max-w-7xl mx-auto -mt-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* CENTERED ARCHITECTURAL IMAGE */}
        <div className="max-w-7xl mx-auto mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-[50px] overflow-hidden shadow-3xl border-16 border-white bg-white"
          >
            <img
              src="/income-and-expense.svg"
              alt="System Overview"
              className="w-full h-4/5 object-cover rounded-[35px]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-secondary/80 to-transparent flex items-end p-12">
              <div className="text-white">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                  Enterprise Framework
                </span>
                <h2 className="text-3xl font-serif">
                  Modular System Architecture
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Floating Badges */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white p-4 text-center leading-tight font-bold text-[10px] uppercase tracking-tighter shadow-2xl rotate-12 border-4 border-white">
            Secure & Scalable
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[45px] shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-gray-100"
            >
              <div className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gray-50 text-secondary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-secondary mb-3">
                {feature.name}
              </h3>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                {feature.desc}
              </p>

              <BrandCTA text="Learn More" href="/contact" variant="primary" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 3. SCALABILITY FEATURES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-gray-50 rounded-[80px] p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">
              Financial Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Track Every <br /> <span className="text-primary">Dollar.</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: <Activity size={20} />,
                  title: "Real-Time Tracking",
                  desc: "Monitor income and expenses in real-time across all properties.",
                },
                {
                  icon: <Users size={20} />,
                  title: "Detailed Reporting",
                  desc: "Generate comprehensive financial reports with ease.",
                },
                {
                  icon: <Maximize2 size={20} />,
                  title: "Predictive Analytics",
                  desc: "Use forecasting tools to plan for future financial needs.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-12 h-12 shrink-0 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-sm uppercase tracking-wider mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="/mobile-income-and-expense.svg"
              alt="Mobile Scale"
              className="w-full h-auto drop-shadow-3xl"
            />
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL TO ACTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-secondary rounded-[60px] py-24 px-8 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
              Master Your <span className="text-primary">Finances.</span>
            </h2>
            <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto">
              Gain complete control over your property income and expenses with
              our advanced tracking and reporting tools.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link href="https://erp.smatechgroup.com/appointly/appointments_public/book">
                <button className="bg-primary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-primary/80 transition-all font-bold uppercase tracking-widest text-sm cursor-pointer border-none">
                  Explore Income Tools <Zap size={18} />
                </button>
              </Link>
              <div className="flex items-center gap-4 text-white">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-primary backdrop-blur-md">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/40 uppercase font-bold tracking-widest">
                    Call our team
                  </p>
                  <p className="font-bold text-xl">(+263) 86 880 08361</p>
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
