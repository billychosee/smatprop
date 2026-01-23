/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Phone,
  Check,
  Layers,
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
const BrandCTA = ({ text, href, variant = "primary" }: any) => {
  const base =
    "px-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg active:scale-95 w-full";
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

export default function Subscriptions() {
  const tiers = [
    {
      name: "Starter Tier",
      icon: <Box size={24} />,
      desc: "Ideal for boutique portfolios requiring essential automation and security.",
      features: [
        "Single User License",
        "Core Property Database",
        "Digital Document Vault",
        "Standard Support",
      ],
      variant: "outline",
    },
    {
      name: "Growth Tier",
      icon: <Building2 size={24} />,
      desc: "Advanced toolsets for expanding agencies and multi-location management.",
      features: [
        "Unlimited Properties",
        "Financial Intelligence Engine",
        "Tenant Experience App",
        "Automated Workflows",
      ],
      variant: "primary",
      popular: true,
    },
    {
      name: "Elite Tier",
      icon: <Globe size={24} />,
      desc: "Customized institutional infrastructure for global real estate enterprises.",
      features: [
        "Dedicated Server Instance",
        "API & ERP Integration",
        "White-label Customization",
        "Concierge Technical Lead",
      ],
      variant: "secondary",
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
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="/secure_digital_real_estate_marketplace_in_an.jpg"
              alt="Subscription Background"
              className="w-full h-full object-cover grayscale blur-sm"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-serif mb-4"
            >
              Tailored <span className="text-primary">Capacity.</span>
            </motion.h1>
            <p className="text-white/70 font-semibold tracking-[0.4em] uppercase mb-8 text-[10px]">
              Select the engine that powers your portfolio
            </p>
          </div>
        </div>
      </section>

      {/* 2. CREATIVE TIER VISUALIZATION (Replacing Prices) */}
      <section className="py-24 px-6 relative z-10 max-w-7xl mx-auto -mt-24">
        {/* CENTERED ARCHITECTURAL IMAGE */}
        <div className="max-w-4xl mx-auto mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative rounded-[50px] overflow-hidden shadow-3xl border-[16px] border-white bg-white"
          >
            <img
              src="/realistic_property_management_software_interface.jpeg"
              alt="System Overview"
              className="w-full h-[400px] object-cover rounded-[35px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-12">
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

        {/* TIER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white p-10 rounded-[45px] shadow-[0_40px_80px_rgba(0,0,0,0.06)] border ${
                tier.popular
                  ? "border-primary lg:-translate-y-4"
                  : "border-gray-100"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${
                  tier.popular
                    ? "bg-primary text-white"
                    : "bg-gray-50 text-secondary"
                }`}
              >
                {tier.icon}
              </div>
              <h3 className="text-xl font-serif text-secondary mb-3">
                {tier.name}
              </h3>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed h-12">
                {tier.desc}
              </p>

              <div className="space-y-4 mb-10">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check
                      size={14}
                      className="text-primary"
                      strokeWidth={3}
                    />
                    <span className="text-sm text-secondary font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <BrandCTA
                text="Inquire for Details"
                href="https://erp.smatechgroup.com/appointly/appointments_public/book"
                variant={tier.variant as any}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SCALABILITY FEATURES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-gray-50 rounded-[80px] p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase block mb-4">
              Infrastructure
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Designed to grow <br /> with your{" "}
              <span className="text-primary">Ambition.</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: <Activity size={20} />,
                  title: "Zero Latency Data",
                  desc: "Our engine processes thousands of transactions per second.",
                },
                {
                  icon: <Users size={20} />,
                  title: "Multi-Admin Control",
                  desc: "Scale your team with granular permission settings.",
                },
                {
                  icon: <Maximize2 size={20} />,
                  title: "Elastic Storage",
                  desc: "Never worry about data limits as your portfolio expands.",
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
              src="/mobile-ui-property-listing.png"
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
              Experience the <span className="text-primary">SMA Engine.</span>
            </h2>
            <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto">
              Skip the guesswork. Book a session with our consultants to build a
              subscription plan that fits your exact operational needs.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link href="https://erp.smatechgroup.com/appointly/appointments_public/book">
                <button className="bg-primary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-primary/80 transition-all font-bold uppercase tracking-widest text-sm cursor-pointer border-none">
                  Request Custom Demo <Zap size={18} />
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




