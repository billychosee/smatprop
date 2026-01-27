/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Phone,
  Activity,
  Globe,
  TrendingUp,
  Settings,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const INTEGRATIONS = [
  { name: "Ecocash", src: "/Ecocash.svg" },
  { name: "Omari", src: "/omari.svg" },
  { name: "Mastercard", src: "/mastercard.svg" },
  { name: "Zimswitch", src: "/zimswitch.svg" },
  { name: "Visa", src: "/visa.svg" },
  { name: "Innbucks", src: "/innbucks.svg" },
  {
    name: "Robert Root",
    src: "/clients-logos/robertroot_logo.png",
  },
  {
    name: "Sharetek",
    src: "/clients-logos/sharetek_logo.svg",
  },
  {
    name: "Smat Tech",
    src: "/clients-logos/smatech_logo.svg",
  },
  {
    name: "Smat Pay",
    src: "/clients-logos/smatpay_logo.svg",
  },
  {
    name: "Ntiyiso",
    src: "/clients-logos/ntiyiso_logo.svg",
  },
  {
    name: "QuickBooks",
    src: "/clients-logos/quickbooks-logo.png",
  },
  {
    name: "Sage",
    src: "/clients-logos/sage-logo.jpg",
  },
  {
    name: "Sasseta",
    src: "/clients-logos/sasseta_logo.svg",
  },

  {
    name: "Xero",
    src: "/clients-logos/xero-logo.svg",
  },
  {
    name: "Zimra",
    src: "/clients-logos/zimra-logo.jpeg",
  },
];

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

export default function ApiIntegration() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#4D5053] relative">
      <Navbar />

      {/* SUBTLE BACKGROUND GRID LINES */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none px-4 max-w-7xl mx-auto border-x border-gray-100/30 z-0">
        <div className="border-r border-gray-100/30"></div>
        <div className="border-r border-gray-100/30"></div>
        <div className="border-r border-gray-100/30"></div>
      </div>

      {/* FLOATING SETTINGS ICONS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-20 left-10 text-primary"
        >
          <Settings size={40} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute top-40 right-20 text-primary"
        >
          <Settings size={30} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-40 left-1/4 text-primary"
        >
          <Settings size={35} />
        </motion.div>
      </div>

      {/* 1. HERO HEADER SECTION */}
      <section className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-125 flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="/integration-hero.svg"
              alt="API Integration"
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
              Integration & <span className="text-primary">API Access</span>
            </motion.h1>
            <p className="text-[#ffffff] font-semibold tracking-widest uppercase mb-8">
              Connect, Automate, Scale
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

      {/* --- 2. THE DIGITAL TWIN DESKTOP PREVIEW --- */}
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
              className="bg-white/95 backdrop-blur-xl p-10 shadow-[20px_20px_60px_rgba(0,0,0,0.05)] rounded-2xl border-t border-l border-gray-100"
            >
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">
                API Ecosystem
              </span>
              <h3 className="font-serif text-5xl text-secondary leading-[1.1]">
                Unified <br />
                <span className="text-primary">Connectivity.</span>
              </h3>
            </motion.div>
          </div>

          {/* MAIN PREVIEW IMAGE */}
          <div className="relative mx-auto max-w-4xl group">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-[50px] overflow-hidden shadow-[0_80px_120px_-30px_rgba(13,27,58,0.4)]"
            >
              <img
                src="/integration.svg"
                alt="API Integration Dashboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>

            {/* FLOATING DATA CHIPS */}
            <div className="absolute -right-6 top-1/4 hidden xl:block z-30">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="bg-secondary text-white p-6 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">
                    Integration Rate
                  </p>
                  <p className="text-xl font-serif">99.9%</p>
                </div>
              </motion.div>
            </div>

            {/* BOTTOM CALLOUT */}
            {/* <div className="hidden lg:block absolute -bottom-12 -left-12 z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white px-8 py-10 rounded-3xl shadow-3xl max-w-85 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={20} className="text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Global APIs
                  </span>
                </div>
                <p className="text-lg font-serif leading-relaxed mb-6 text-secondary">
                  Connect with third-party services and ERPs for enhanced
                  functionality.
                </p>
                <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-primary hover:opacity-70 transition-all">
                  API Docs <ArrowRight size={12} />
                </button>
              </motion.div>
            </div> */}

          </div>
        </div>
      </section>

      {/* --- 3. INTEGRATION FEATURES --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden bg-gray-50/50 rounded-[80px] my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md">
              <img
                src="/mobile-integration.svg"
                alt="API Integration Mobile"
                className="w-full h-auto drop-shadow-[0_40px_80px_rgba(13,27,58,0.25)] relative z-10"
              />
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6 text-primary font-bold tracking-widest text-[10px] uppercase">
              <Zap size={16} />
              Integration & API Access
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Connect Everything <br />
              <span className="text-primary">Seamlessly.</span>
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: <Zap />,
                  title: "Smatpay Payment gateway integration",
                  desc: "Secure payment processing with Smatpay integration.",
                },
                {
                  icon: <Activity />,
                  title: "Smart Meter integration & Smataccess integration",
                  desc: "Real-time data from smart meters and Smataccess.",
                },
                {
                  icon: <Globe />,
                  title:
                    "ERP integration (if using other platforms like Zerp263)",
                  desc: "Seamless connection with ERPs like Zerp263.",
                },
                {
                  icon: <ArrowRight />,
                  title: "API access for third-party software integration",
                  desc: "Open APIs for custom software integrations.",
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
              <BrandCTA text="View API Docs" href="/docs" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE INTEGRATIONS ECOSYSTEM - HEXAGON GRID */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#F8F9FA] rounded-[40px] md:rounded-[60px] p-12 md:p-20 text-center border border-gray-100 shadow-sm overflow-hidden relative"
        >
          {/* FLOATING SETTINGS ICONS IN INTEGRATIONS SECTION */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 0.1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute top-10 left-10 text-primary"
            >
              <Settings size={50} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 10 }}
              whileInView={{ opacity: 0.1, rotate: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="absolute bottom-10 right-10 text-primary"
            >
              <Settings size={40} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary"
            >
              <Settings size={60} />
            </motion.div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-6 tracking-tight">
              Our Intergration
            </h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
              Seamlessly integrated with 18+ industry leaders to provide a
              unified property management experience.
            </p>

            {/* THE 3-ROW HEXAGON GRID */}
            <div className="flex flex-col gap-6 md:gap-8 items-center">
              {[
                INTEGRATIONS.slice(0, 6), // Row 1
                INTEGRATIONS.slice(6, 12), // Row 2
                INTEGRATIONS.slice(12, 18), // Row 3
              ].map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex flex-wrap justify-center gap-4 md:gap-6"
                >
                  {row.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="relative w-24 h-24 md:w-32 md:h-28 bg-white flex items-center justify-center p-4 shadow-md transition-all cursor-pointer"
                      style={{
                        clipPath:
                          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                      }}
                    >
                      {/* Subtle Hexagon Border Inner */}
                      <div
                        className="absolute inset-0.5 bg-white"
                        style={{
                          clipPath:
                            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                        }}
                      />

                      <img
                        src={item.src}
                        alt={item.name}
                        className="relative z-10 w-full h-full object-contain p-2"
                      />
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-primary rounded-[50px] py-20 px-8 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Ready to Integrate <br /> Your Systems?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Unlock the power of connected ecosystems with SmatProp&apos;s API
              suite.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <Link href="#desktop-preview">
                <button className="bg-secondary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-2xl hover:bg-secondary transition-all font-bold uppercase tracking-widest text-sm cursor-pointer">
                  Start Integrating <ArrowRight size={18} />
                </button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20">
                  <Phone size={24} />
                </div>
                <div className="text-left text-white">
                  <p className="text-xs opacity-60 uppercase font-bold tracking-widest">
                    Developer Support
                  </p>
                  <p className="font-bold text-xl tracking-tighter">
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
