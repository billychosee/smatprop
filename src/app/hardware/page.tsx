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
  ScanFace,
  Activity,
  Phone,
  BarChart3,
  MousePointerClick,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

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

      {/* 1. HERO HEADER */}
      <section className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-112.5 flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="/cloud_based_property_management_software_visualized_in_an.jpeg"
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
            <p className="text-primary font-semibold tracking-widest uppercase">
              Precision Engineering for Smart Spaces
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE HARDWARE GRID */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap justify-center gap-12">
          {[
            {
              title: "Smart Water Meters",
              desc: "Real-time usage, remote top-ups, and anomaly detection to reduce waste.",
              icon: <Droplets size={32} />,
              image: "/smart-water-meters.png",
            },
            {
              title: "Smart Electricity Meters",
              desc: "Transparent billing with automated triggers and remote top-up capabilities.",
              icon: <Zap size={32} />,
              image: "/smart-electricity-meters.png",
            },
            {
              title: "SmatAccess Systems",
              desc: "Time-bound visitor codes, QR access, and license plate recognition.",
              icon: <ShieldCheck size={32} />,
              image: "/access-control.png",
            },
            {
              title: "CCTV & AI Surveillance",
              desc: "High-definition monitoring with motion detection and real-time alerts.",
              icon: <Video size={32} />,
              image: "/cctv-systems.png",
            },
            {
              title: "Biometric Devices",
              desc: "Secure zone management via fingerprint and facial recognition tech.",
              icon: <Fingerprint size={32} />,
              image: "/biometric-devices.png",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-[40px] hover:shadow-xl transition-all bg-white group w-full md:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)]"
            >
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-primary mb-8 group-hover:bg-secondary group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif text-secondary mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {item.desc}
              </p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CREATIVE: THE HARDWARE ADVANTAGE (Bento Grid) */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">
            Elevating Management
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-secondary">
            The Hardware Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Big Card - Billing */}
          <div className="md:col-span-2 lg:col-span-3 bg-secondary p-10 rounded-[40px] text-white flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-3xl font-serif mb-4">Billing Transparency</h3>
              <p className="text-white/60 leading-relaxed">
                Automated, verifiable data that eliminates resident disputes.
                Every cent is accounted for with real-time digital paper trails.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <BarChart3 size={240} />
            </div>
          </div>

          {/* Small Card - Maintenance */}
          <div className="md:col-span-2 lg:col-span-3 bg-accent p-10 rounded-[40px] flex flex-col justify-center border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-secondary">
                <Activity size={32} />
              </div>
              <h3 className="text-2xl font-serif text-secondary">
                Proactive Maintenance
              </h3>
            </div>
            <p className="text-gray-600">
              Detect leaks or electrical surges before they become costly
              catastrophes. Our hardware talks to you before the tenant does.
            </p>
          </div>

          {/* Medium Card - Security */}
          <div className="md:col-span-2 lg:col-span-2 bg-primary p-10 rounded-[40px] text-white">
            <ShieldCheck size={40} className="mb-6" />
            <h3 className="text-2xl font-serif mb-4 text-secondary">
              Total Security
            </h3>
            <p className="text-white/80 text-sm">
              Real-time alerts and biometric verification for all residents and
              visitors.
            </p>
          </div>

          {/* Small Card - Automation */}
          <div className="md:col-span-2 lg:col-span-2 border border-gray-100 p-10 rounded-[40px] flex flex-col justify-between hover:bg-gray-50 transition-colors">
            <MousePointerClick className="text-primary mb-4" />
            <div>
              <h4 className="font-bold text-secondary mb-2">
                Zero Manual Errors
              </h4>
              <p className="text-sm text-gray-500">
                Eliminates manual processes in utility reading and data entry
                entirely.
              </p>
            </div>
          </div>

          {/* Medium Card - Satisfaction */}
          <div className="md:col-span-4 lg:col-span-2 bg-secondary p-10 rounded-[40px] text-white flex items-end">
            <div>
              <Users size={32} className="text-primary mb-4" />
              <h4 className="text-xl font-serif mb-2">Tenant Satisfaction</h4>
              <p className="text-white/50 text-xs">
                Transparent usage data and easy remote top-ups via the mobile
                app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STAR HARDWARE FEATURES */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-accent rounded-[50px] py-20 px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-12">
                Star Hardware <br /> Features
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Smart Metering Ecosystem",
                    desc: "Real-time electricity and water tracking with remote top-ups and improved sustainability.",
                    icon: <Activity className="text-primary" />,
                  },
                  {
                    title: "SmatAccess Control",
                    desc: "Secure logs, QR codes, biometric auth, and license plate recognition for total peace of mind.",
                    icon: <ScanFace className="text-primary" />,
                  },
                  {
                    title: "Digital Inspection Sync",
                    desc: "Sync hardware data with entrance and exit checklists for absolute billing transparency.",
                    icon: <ClipboardCheck className="text-primary" />,
                  },
                ].map((star, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex gap-6"
                  >
                    <div className="shrink-0 bg-white p-3 rounded-xl shadow-sm h-fit">
                      {star.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary mb-2">
                        {star.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{star.desc}</p>
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
                  className="w-full h-125 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-primary font-bold text-4xl font-serif">
                  99.9%
                </p>
                <p className="text-sm text-gray-500 uppercase tracking-widest">
                  Hardware Uptime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-secondary rounded-[50px] py-20 px-8 text-center text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Ready to Upgrade Your <br /> Infrastructure?
            </h2>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
              Our hardware specialists are ready to help you design a custom
              smart ecosystem for your property.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link href="https://erp.smatechgroup.com/appointly/appointments_public/book">
                <button className="bg-white text-secondary px-10 py-5 rounded-2xl flex items-center gap-2 shadow-lg hover:bg-gray-100 transition-all font-bold uppercase tracking-widest text-sm hover:cursor-pointer">
                  Request a Demo{" "}
                  <ArrowRight size={20} className="text-primary" />
                </button>
              </Link>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">
                    Talk to Sales
                  </p>
                  <p className="font-bold text-white tracking-tighter">
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




