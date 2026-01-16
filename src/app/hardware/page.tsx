/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Zap,
  ShieldCheck,
  Video,
  Fingerprint,
  ClipboardCheck,
  Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Hardware() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#4D5053] relative">
      <Navbar />

      {/* SUBTLE VERTICAL GRID LINES */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none px-4 max-w-7xl mx-auto border-x border-gray-100/50">
        <div className="border-r border-gray-100/50"></div>
        <div className="border-r border-gray-100/50"></div>
        <div className="border-r border-gray-100/50"></div>
      </div>

      {/* Hero Header Section */}
      <section className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-112.5 flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
              alt="Smart Building Technology"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              Hardware Solutions
            </motion.h1>
            <p className="text-[#F3764A] font-semibold tracking-widest uppercase">
              Precision Engineering for Smart Spaces
            </p>
          </div>
        </div>
      </section>

      {/* Core Hardware Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Smart Water Meters",
              desc: "Monitor water usage efficiently with remote ultrasonic sensing.",
              icon: <Droplets size={32} />,
            },
            {
              title: "Smart Electricity Meters",
              desc: "Track consumption in real-time with automated billing triggers.",
              icon: <Zap size={32} />,
            },
            {
              title: "Access Control Systems",
              desc: "Cloud-based entry management for residential and commercial hubs.",
              icon: <ShieldCheck size={32} />,
            },
            {
              title: "CCTV Systems",
              desc: "High-definition AI surveillance with motion detection alerts.",
              icon: <Video size={32} />,
            },
            {
              title: "Biometric Devices",
              desc: "Next-gen fingerprint and facial recognition for secure zones.",
              icon: <Fingerprint size={32} />,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-[40px] hover:shadow-xl transition-all bg-white group"
            >
              <div className="w-20 h-20 bg-[#F4F0EC] rounded-full flex items-center justify-center text-[#F3764A] mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif text-secondary mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Star Hardware Features (Beige Feature Block) */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#F4F0EC] rounded-[50px] py-20 px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-12">
                Star Hardware <br /> Features
              </h2>
              <div className="space-y-12">
                {[
                  {
                    title: "Integrated Smart Metering",
                    desc: "Full transparency with real-time insights into energy patterns.",
                    icon: <Zap className="text-[#F3764A]" />,
                  },
                  {
                    title: "Digital Entrance Checklist",
                    desc: "Sync hardware with software to document property conditions instantly.",
                    icon: <ClipboardCheck className="text-[#F3764A]" />,
                  },
                  {
                    title: "Smart Access Control",
                    desc: "QR codes and time-bound entry for guest and vendor management.",
                    icon: <Users className="text-[#F3764A]" />,
                  },
                ].map((star, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex gap-6"
                  >
                    <div className="shrink-0">{star.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary mb-2">
                        {star.title}
                      </h4>
                      <p className="text-gray-600">{star.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-tr-[150px] rounded-bl-[150px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2030&auto=format&fit=crop"
                  alt="Security Tech"
                  className="w-full h-137.5 object-cover"
                />
              </div>
              {/* Floating Accent */}
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-[#F3764A] font-bold text-4xl font-serif">
                  99.9%
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">
                  System Uptime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8">
          Ready to Secure Your Property?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Our hardware solutions integrate seamlessly with the SmatProp
          dashboard for a unified management experience.
        </p>
        <button className="bg-secondary text-white px-10 py-5 rounded-2xl flex items-center gap-2 mx-auto shadow-lg hover:bg-[#013d57] transition-all hover:cursor-pointer">
          Request a Hardware Demo{" "}
          <ArrowRight size={20} className="text-[#F3764A]" />
        </button>
      </section>

      <Footer />
    </div>
  );
}
