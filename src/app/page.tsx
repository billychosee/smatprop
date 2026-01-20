/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Zap,
  Cpu,
  CheckCircle2,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PAYMENT_METHODS = [
  { name: "Ecocash", src: "/Ecocash.svg" },
  { name: "Omari", src: "/omari.svg" },
  { name: "Mastercard", src: "/mastercard.svg" },
  { name: "Zimswitch", src: "/zimswitch.svg" },
  { name: "Visa", src: "/visa.svg" },
  { name: "Innbucks", src: "/innbucks.svg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#4D5053] relative">
      <Navbar />

      {/* SUBTLE VERTICAL GRID LINES */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none px-4 max-w-7xl mx-auto border-x border-gray-100/50">
        <div className="border-r border-gray-100/50"></div>
        <div className="border-r border-gray-100/50"></div>
        <div className="border-r border-gray-100/50"></div>
      </div>

      {/* 1. HERO: MISSION SUMMARY (Linked to /about) */}
      <section className="relative pt-6 pb-20 px-4 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Modern Office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 py-32 px-8 md:px-20 max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif leading-tight mb-6"
            >
              Smart Solutions for Modern Properties
            </motion.h1>
            <p className="text-lg mb-8 max-w-md opacity-90">
              We bridge the gap between physical hardware and digital
              management, creating a seamless experience for property owners and
              tenants.
            </p>
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#F3764A] text-white px-8 py-4 rounded-2xl flex items-center gap-2 font-semibold shadow-lg hover:cursor-pointer"
              >
                Our Story <ArrowRight size={20} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURES PREVIEW: SOFTWARE (Linked to /features) */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-4">
          Intelligent Software
        </h2>
        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
          Automate your operations with our cloud-based management dashboard.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Tenant Portals",
              icon: <Users />,
              desc: "Self-service management for modern residents.",
            },
            {
              title: "Real-time Billing",
              icon: <Zap />,
              desc: "Automated utility tracking and invoice generation.",
            },
            {
              title: "Smart Security",
              icon: <ShieldCheck />,
              desc: "Integrated surveillance and access logging.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-[40px] hover:bg-[#F4F0EC] transition-all duration-500"
            >
              <div className="w-16 h-16 bg-[#F4F0EC] group-hover:bg-white rounded-2xl flex items-center justify-center text-[#F3764A] mx-auto mb-6 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif text-secondary mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <Link
                href="/features"
                className="text-[#F3764A] font-bold inline-flex items-center gap-2"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HARDWARE PREVIEW: THE TECH (Linked to /hardware) */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="rounded-tl-[150px] rounded-br-[150px] overflow-hidden shadow-2xl relative">
            <img
              src="/biometric-devices.png"
              alt="Biometric Devices"
              className="w-full h-125 object-cover"
            />
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-[#F3764A]">
              <Cpu className="text-secondary mb-2" size={32} />
              <p className="text-secondary font-bold">Smart Hub v2.0</p>
              <p className="text-xs text-gray-400 tracking-widest uppercase">
                Proprietary Tech
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#F3764A] font-bold tracking-[0.2em] uppercase mb-4 text-sm">
              Hardware Integration
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Precision Devices <br /> For Every Entry
            </h2>
            <ul className="space-y-4 mb-10">
              {[
                "Ultrasonic Water Meters",
                "Biometric Access Control",
                "AI CCTV Surveillance",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-600 font-medium"
                >
                  <CheckCircle2 size={20} className="text-[#F3764A]" /> {text}
                </li>
              ))}
            </ul>
            <Link href="/hardware">
              <button className="bg-secondary text-white px-10 py-5 rounded-2xl flex items-center gap-2 shadow-lg hover:bg-[#0D1B3A] transition-all hover:cursor-pointer">
                Explore Hardware{" "}
                <ArrowRight size={20} className="text-[#F3764A]" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 ">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Available Payment Methods
            </h2>
            <p className="mb-16 text-lg text-slate-400">
              We support all major payment methods in Zimbabwe, making it easy
              for your audience to support your creativity.
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {PAYMENT_METHODS.map((method) => (
                <motion.div
                  key={method.name}
                  className="flex items-center justify-center transition-all group"
                >
                  <img
                    src={method.src}
                    alt={method.name}
                    className="w-full h-full max-w-37.5 md:max-w-50 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT PREVIEW: CALL TO ACTION (Linked to /contact) */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#F4F0EC] rounded-[50px] py-20 px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8">
            Let&apos;s Modernize <br /> Your Property
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you manage a single apartment or a nationwide portfolio,
            SmatProp provides the tools you need to scale efficiently.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <button className="bg-secondary text-white px-10 py-5 rounded-2xl flex items-center gap-3 shadow-lg hover:bg-[#0D1B3A] transition-all font-bold uppercase tracking-widest text-sm hover:cursor-pointer">
                Get a Quote <ArrowRight size={18} className="text-[#F3764A]" />
              </button>
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#F3764A] shadow-sm">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400 uppercase tracking-widest">
                  Call us
                </p>
                <p className="font-bold text-secondary">(+263) 86 8800</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
