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

      {/* --- COMPACT HERO SECTION --- */}
      <section className="relative pt-24 md:pt-28 pb-4 px-4 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[40px] bg-secondary lg:h-130 xl:h-145 shadow-2xl">
          {/* LEFT CONTENT: Minimized padding for laptop fit */}
          <div className="lg:col-span-7 flex flex-col justify-center p-6 md:p-10 xl:p-24 relative z-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl xl:text-6xl font-serif text-white leading-[1.1] mb-3"
            >
              Intelligence <br />
              <span className="text-primary">Behind Every Asset.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-xs md:text-sm xl:text-base mb-5 xl:mb-7 max-w-md leading-relaxed"
            >
              SmatProp bridges the gap between manual operations and digital
              excellence, offering African property owners a unified platform
              for finances, security, and tenant relations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <Link href="https://erp.smatechgroup.com/appointly/appointments_public/book">
                <button className="bg-primary text-white px-6 py-3 xl:px-8 xl:py-4 rounded-xl flex items-center w-fit gap-2 font-bold shadow-lg hover:bg-primary/80 transition-all text-sm xl:text-base">
                  Request Live Demo <ArrowRight size={18} />
                </button>
              </Link>

              {/* Tightened Stats Row */}
              <div className="flex gap-8 pt-4 mt-2 border-t border-white/10 w-full max-w-xs">
                <div>
                  <p className="text-primary text-lg xl:text-2xl font-bold">
                    15%
                  </p>
                  <p className="text-gray-400 text-[8px] xl:text-[9px] uppercase tracking-widest font-semibold">
                    Revenue Recovery
                  </p>
                </div>
                <div>
                  <p className="text-primary text-lg xl:text-2xl font-bold">
                    24/7
                  </p>
                  <p className="text-gray-400 text-[8px] xl:text-[9px] uppercase tracking-widest font-semibold">
                    Digital Security
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 relative min-h-75 lg:min-h-full">
            <img
              src="/home-hero.png"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Hero Image"
            />
            <div className="absolute inset-0 bg-linear-to-r from-secondary/40 lg:from-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM STATEMENT */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">
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
                    className="text-primary mt-1 shrink-0"
                  />
                  <span className="text-secondary font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="/the-challenge.jpg"
              alt="Reviewing data"
              className="rounded-[60px] shadow-2xl w-full h-125 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl border-l-8 border-primary">
              <TrendingUp className="text-primary mb-2" size={40} />
              <p className="text-3xl font-serif text-secondary">15% Loss</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold text-center">
                Rental Income Gap
              </p>
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

      {/* 4. THE SOLUTION */}
      <section className="py-24 px-4 bg-white relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">
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
                className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-md transition-all group border border-gray-50"
              >
                <div className="w-16 h-16 bg-accent group-hover:bg-primary group-hover:text-white rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 transition-all">
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

      {/* 5. WHO IT'S FOR */}
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
              className="border border-gray-100 p-8 rounded-3xl text-center hover:border-primary transition-colors group"
            >
              <div className="text-gray-400 group-hover:text-primary mb-4 flex justify-center">
                {type.icon}
              </div>
              <p className="font-serif text-secondary font-medium">
                {type.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HARDWARE PREVIEW */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
          {/* LEFT: SVG IMAGE SECTION - Taking 6/10 of the width */}
          <div className="lg:col-span-6 relative flex justify-center items-center p-4">
            <img
              src="/devices-home.svg"
              alt="Hardware Ecosystem"
              /* Removed max-height restrictions to let the SVG expand */
              className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
            />

            {/* Floating Badge - Adjusted for SVG scale */}
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
              Why SmatProp
            </p>
            <h2 className="text-2xl md:text-4xl font-serif text-secondary mb-6 leading-[1.2]">
              Specifically for <br /> the African Market
            </h2>

            <div className="space-y-4">
              {[
                "Designed for African real estate environments",
                "Supports local payment systems & regulations",
                "Unified software, hardware, and consultancy",
                "Scalable for any portfolio size",
                "Built for transparency and automation",
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

            <Link href="/hardware">
              <button className="mt-8 bg-secondary text-white px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg hover:bg-secondary/90 transition-all cursor-pointer group text-xs font-bold uppercase tracking-wider">
                Explore Hardware{" "}
                <ArrowRight
                  size={16}
                  className="text-primary group-hover:translate-x-1 transition-transform"
                />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CONTACT CTA */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-accent rounded-[50px] py-20 px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
            Let&apos;s Modernize <br /> Your Property
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="https://erp.smatechgroup.com/appointly/appointments_public/book">
              <button className="bg-secondary text-white px-10 py-5 rounded-2xl flex items-center gap-3 shadow-lg hover:bg-secondary transition-all font-bold uppercase tracking-widest text-sm hover:cursor-pointer">
                Get a Quote <ArrowRight size={18} className="text-primary" />
              </button>
            </Link>
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">
                  Call us
                </p>
                <p className="font-bold text-xl tracking-tight">
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
