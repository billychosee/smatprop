/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Settings,
  Cpu,
  Users,
  CheckCircle2,
  Phone,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-[#4D5053] relative">
      <Navbar />

      {/* SUBTLE VERTICAL GRID LINES */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none px-4 max-w-7xl mx-auto border-x border-gray-100/50">
        <div className="border-r border-gray-100/50"></div>
        <div className="border-r border-gray-100/50"></div>
        <div className="border-r border-gray-100/50"></div>
      </div>

      {/* 1. HERO HEADER SECTION - UPDATED IMAGE */}
      <section className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-100 flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="/home-hero.png"
              alt="SmatProp Hero Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              About SmatProp
            </motion.h1>
            <p className="text-primary font-semibold tracking-widest uppercase">
              Inside Our Mission & Vision
            </p>
          </div>
        </div>
      </section>

      {/* 2. NARRATIVE & MISSION SECTION - FLOATING IMAGES */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          <div className="lg:w-1/2 relative flex">
            <div className="relative w-full h-full min-h-150 lg:min-h-175 flex flex-col justify-center">
              {/* Float 1 - Top Center (full width/height) */}
              <motion.button
                onClick={() => setPreviewImage("/float1.svg")}
                className="absolute top-8 left-1/2 -translate-x-1/2 w-90 h-60 object-cover rounded-2xl shadow-xl z-10 cursor-pointer touch-manipulation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src="/float1.svg" alt="Float 1" className="w-full h-full object-cover rounded-2xl" />
              </motion.button>
              {/* Float 2 - Middle Left (full width/height) */}
              <motion.button
                onClick={() => setPreviewImage("/float2.svg")}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-74 h-48 object-cover rounded-xl shadow-lg z-10 cursor-pointer touch-manipulation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <img src="/float2.svg" alt="Float 2" className="w-full h-full object-cover rounded-xl" />
              </motion.button>
              {/* Float 3 - Middle Right (full width/height) */}
              <motion.button
                onClick={() => setPreviewImage("/float3.svg")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-78 h-51 object-cover rounded-xl shadow-lg z-10 cursor-pointer touch-manipulation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <img src="/float3.svg" alt="Float 3" className="w-full h-full object-cover rounded-xl" />
              </motion.button>
              {/* Float 4 - Bottom Center (full width/height) */}
              <motion.button
                onClick={() => setPreviewImage("/float4.svg")}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-70 h-45 object-cover rounded-xl shadow-lg z-10 cursor-pointer touch-manipulation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <img src="/float4.svg" alt="Float 4" className="w-full h-full object-cover rounded-xl" />
              </motion.button>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Modernizing Real Estate <br /> Across Africa
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                SmatProp is a comprehensive property management solution created
                to modernize real estate operations across Africa. As
                urbanization, diaspora investment, and real estate development
                continue to grow, property stakeholders require tools that
                improve efficiency, transparency, and trust.
              </p>
              <p>
                SmatProp bridges this gap by delivering an integrated digital
                ecosystem that simplifies property management while improving
                tenant–landlord relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-accent p-8 rounded-[30px] flex flex-col justify-between border-l-4 border-primary">
                <div>
                  <Target className="text-primary mb-4" size={32} />
                  <h4 className="font-serif text-xl text-secondary mb-2">
                    Mission
                  </h4>
                  <p className="text-sm opacity-70 italic">
                    To simplify property management by delivering smart,
                    reliable, and scalable digital solutions that empower
                    landlords, property managers, and tenants.
                  </p>
                </div>
              </div>
              <div className="bg-secondary p-8 rounded-[30px] text-white flex flex-col justify-between">
                <div>
                  <Eye className="text-primary mb-4" size={32} />
                  <h4 className="font-serif text-xl mb-2">Vision</h4>
                  <p className="text-sm opacity-60 italic">
                    To become Africa’s leading digital property management
                    ecosystem, enabling smarter properties, sustainable
                    operations, and data-driven decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO PILLARS */}
      <section className="py-24 px-4 bg-accent/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary">
              A Holistic Approach
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              SmatProp provides specialized solutions tailored to different
              property types, portfolio sizes, and operational needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Prop-Software",
                desc: "Cloud-based property management software for complete digital automation.",
                icon: <Settings size={28} />,
                img: "/realistic_property_management_software_interface.jpeg",
              },
              {
                title: "Hardware Integration",
                desc: "Smart property hardware integrations including access control and metering.",
                icon: <Cpu size={28} />,
                img: "/devices.png",
              },
              {
                title: "Advisory Services",
                desc: "Expert consultancy services to help you optimize and scale your real estate operations.",
                icon: <Users size={28} />,
                img: "/contract-document.svg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[40px] overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{item.icon}</div>
                    <h3 className="text-xl font-serif text-secondary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR DIFFERENCE */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
          {/* LEFT: IMAGE SECTION - Taking 6/10 of the width */}
          <div className="lg:col-span-6 relative flex justify-center items-center p-4">
            <img
              src="/marketing-and-listing.svg"
              alt="SmatProp Property Technology"
              className="w-full h-auto object-contain"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-0 right-0 md:bottom-8 md:right-4 bg-white p-5 rounded-2xl shadow-2xl border-l-4 border-primary z-20">
              <Cpu className="text-secondary mb-2" size={28} />
              <p className="text-secondary font-bold text-sm">Smart Hub v2.0</p>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">
                Proprietary Tech
              </p>
            </div>
          </div>

          {/* RIGHT: TEXT SECTION - Taking 4/10 of the width */}
          <div className="lg:col-span-4 lg:pl-6">
            <p className="text-primary font-bold tracking-[0.2em] uppercase mb-3 text-[10px] md:text-xs">
              The SmatProp Advantage
            </p>
            <h2 className="text-2xl md:text-4xl font-serif text-secondary mb-6 leading-[1.2]">
              Specifically for <br /> the African Market
            </h2>

            <div className="space-y-4">
              {[
                "Built with African Markets in Mind",
                "Designed for Real Challenges",
                "Integrated Smart Hardware",
                "Flexible, Modular & Scalable",
                "Localized for the specific economic and urban landscapes of Africa",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-gray-600 text-sm md:text-base font-medium"
                >
                  <CheckCircle2
                    size={16}
                    className="text-primary shrink-0 mt-1"
                  />
                  <span className="leading-tight">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACT CTA */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-accent rounded-[50px] py-20 px-8 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
              Let&apos;s Modernize <br /> Your Property
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Whether you manage a single apartment or a nationwide portfolio,
              SmatProp provides the tools you need to scale efficiently.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <Link href="https://erp.smatechgroup.com/appointly/appointments_public/book">
                <button className="bg-secondary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-secondary transition-all font-bold uppercase tracking-widest text-sm hover:cursor-pointer">
                  Get a Quote <ArrowRight size={18} className="text-primary" />
                </button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-md">
                  <Phone size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                    Call us
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

      {/* Image Preview Modal */}
      {previewImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setPreviewImage(null)}
          >
            <X size={32} />
          </button>
          <motion.img
            src={previewImage}
            alt="Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
