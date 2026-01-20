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
  AlertCircle,
  BarChart3,
  Building2,
  UserCheck,
  Wrench,
  Globe,
  TrendingUp,
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

      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-20 px-4 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Modern Office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 py-32 px-8 md:px-20 max-w-4xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif leading-tight mb-6"
            >
              Smart Property Management Software Built for Africa
            </motion.h1>
            <p className="text-lg mb-8 max-w-2xl opacity-90 leading-relaxed">
              SmatProp is a smart, digital-first property management platform
              designed to simplify property operations, automate financial
              processes, enhance security, and improve communication between
              landlords, property managers, tenants, and service providers.
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

      {/* 2. THE PROBLEM STATEMENT */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F3764A] font-bold tracking-[0.2em] uppercase mb-4 text-sm">
              The Challenge
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-6">
              Overcoming Manual Fragmented Systems
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Many property managers and landlords across Africa continue to
              rely on manual processes. These outdated methods lead to excessive
              administrative workload and cash flow instability.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Excessive Admin Workload",
                "Late Rent Payments",
                "Poor Maintenance Tracking",
                "Limited Performance Visibility",
                "Inconsistent Communication",
                "Increased Operational Risk",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <AlertCircle
                    size={20}
                    className="text-[#F3764A] mt-1 shrink-0"
                  />
                  <span className="text-secondary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
              alt="Management Solutions"
              className="rounded-[60px] shadow-2xl w-full h-125 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-[#F3764A]">
              <TrendingUp className="text-[#F3764A] mb-2" size={40} />
              <p className="text-3xl font-serif text-secondary">15% Loss</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold text-center">
                Rental Income Gap
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION (EXPANDED FEATURES) */}
      <section className="py-24 px-4 bg-[#F4F0EC]/30 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#F3764A] font-bold tracking-[0.2em] uppercase mb-4 text-sm">
            Our Solution
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-4">
            The SmatProp Ecosystem
          </h2>
          <p className="text-gray-500 mb-16 max-w-2xl mx-auto text-lg">
            We replace manual chaos with an integrated digital ecosystem that
            streamlines management from end to end.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Automate Finances",

                desc: "Automate rent collection and invoicing to ensure healthy cash flow.",

                icon: <Zap />,
              },

              {
                title: "Real-time Tracking",

                desc: "Track property performance and financial metrics in real-time.",

                icon: <BarChart3 />,
              },

              {
                title: "Digital Operations",

                desc: "Manage tenants, leases, and maintenance digitally with ease.",

                icon: <Building2 />,
              },

              {
                title: "Accountability",

                desc: "Improve transparency and accountability between all stakeholders.",

                icon: <ShieldCheck />,
              },

              {
                title: "Tenant Satisfaction",

                desc: "Enhance tenant satisfaction and retention through better service.",

                icon: <Users />,
              },

              {
                title: "Expert Consultancy",

                desc: "Built specifically for African markets with expert-led hardware support.",

                icon: <Globe />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-16 h-16 bg-[#F4F0EC] group-hover:bg-[#F3764A] group-hover:text-white rounded-2xl flex items-center justify-center text-[#F3764A] mx-auto mb-6 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-secondary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO IT'S FOR (NEW SECTION) */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-4">
            Who SmatProp Is For
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Tailored solutions for every stakeholder in the property ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { label: "Property Managers", icon: <Building2 size={24} /> },
            { label: "Landlords", icon: <ShieldCheck size={24} /> },
            { label: "Real Estate Agents", icon: <UserCheck size={24} /> },
            { label: "Tenants", icon: <Users size={24} /> },
            { label: "Service Providers", icon: <Wrench size={24} /> },
          ].map((type, i) => (
            <div
              key={i}
              className="border border-gray-100 p-8 rounded-3xl text-center hover:border-[#F3764A] transition-colors group"
            >
              <div className="text-gray-400 group-hover:text-[#F3764A] mb-4 flex justify-center">
                {type.icon}
              </div>
              <p className="font-serif text-secondary font-medium">
                {type.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HARDWARE PREVIEW & WHY SMATPROP */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="rounded-tl-[150px] rounded-br-[150px] overflow-hidden shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
              alt="Hardware"
              className="w-full h-125 object-cover"
            />
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-[#F3764A]">
              <Cpu className="text-secondary mb-2" size={32} />
              <p className="text-secondary font-bold">Smart Hub v2.0</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest">
                Proprietary Tech
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#F3764A] font-bold tracking-[0.2em] uppercase mb-4 text-sm">
              Why SmatProp
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Specifically for Africa
            </h2>
            <div className="space-y-6">
              {[
                "Designed specifically for African real estate environments",
                "Supports local payment systems and regulations",
                "Combines software, hardware, and consultancy",
                "Scalable for portfolios of any size",
                "Focused on transparency, automation, and efficiency",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-gray-600 font-medium"
                >
                  <CheckCircle2 size={20} className="text-[#F3764A]" /> {text}
                </div>
              ))}
            </div>
            <Link href="/hardware">
              <button className="mt-10 bg-secondary text-white px-10 py-5 rounded-2xl flex items-center gap-2 shadow-lg hover:bg-[#0D1B3A] transition-all">
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

      {/* 7. CONTACT CTA (RESTORED) */}
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
                <p className="text-sm text-gray-400 uppercase tracking-widest text-left">
                  Call us
                </p>
                <p className="font-bold text-secondary text-xl tracking-tight">
                  (+263) 86 8800
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
