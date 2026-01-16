/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  Users,
  Wallet,
  ShieldCheck,
  BarChart3,
  Search,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Features() {
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
          <div className="absolute inset-0 z-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Living"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              The Solution
            </motion.h1>
            <p className="text-[#F3764A] font-semibold tracking-widest uppercase">
              Comprehensive Property Ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For - Icon Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-secondary mb-4">
            Who It&apos;s For
          </h2>
          <div className="w-24 h-1 bg-[#F3764A] mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Real Estate Agents",
            "Landlords",
            "Property Managers",
            "Tenants",
            "Vendors",
            "Service Providers",
          ].map((audience, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#F4F0EC] p-6 rounded-2xl text-center border border-transparent hover:border-[#F3764A] transition-all"
            >
              <p className="text-secondary font-bold text-sm md:text-base leading-tight">
                {audience}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#F4F0EC] rounded-[50px] py-20 px-8 md:px-16">
          <h2 className="text-4xl md:text-5xl font-serif text-secondary text-center mb-16">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Property Management",
                icon: <Home />,
                desc: "Database, categorization, and tracking.",
              },
              {
                title: "Tenant & Lease",
                icon: <Users />,
                desc: "Profiles, creation, and auto-reminders.",
              },
              {
                title: "Financials",
                icon: <Wallet />,
                desc: "Invoicing, payments, and reconciliation.",
              },
              {
                title: "Reporting",
                icon: <BarChart3 />,
                desc: "Dashboards, trends, and data exports.",
              },
              {
                title: "Security",
                icon: <ShieldCheck />,
                desc: "Role-based access and audit trails.",
              },
              {
                title: "Marketing",
                icon: <Search />,
                desc: "Verified listings and engagement tools.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-[30px] shadow-sm flex flex-col items-start gap-4"
              >
                <div className="text-[#F3764A]">{feature.icon}</div>
                <h3 className="text-xl font-serif text-secondary">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Star Features Section (Alternate Layout) */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-secondary text-center mb-20">
          Star Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {[
            {
              title: "Payment Gateways",
              desc: "Accept payments instantly through multiple channels.",
            },
            {
              title: "Smart Metering",
              desc: "Real-time energy monitoring and billing transparency.",
            },
            {
              title: "Entrance Checklist",
              desc: "Digital condition reports to reduce tenant disputes.",
            },
            {
              title: "Smart Access",
              desc: "QR code secure entry and instant notifications.",
            },
          ].map((star, index) => (
            <motion.div
              key={index}
              className="flex gap-6 border-b border-gray-100 pb-8"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            >
              <span className="text-4xl font-serif text-[#F4F0EC] text-outline">
                0{index + 1}
              </span>
              <div>
                <h3 className="text-2xl font-serif text-secondary mb-2">
                  {star.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{star.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why SmatProp - Final Impact Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto mb-20">
        <div className="relative overflow-hidden rounded-[50px] bg-secondary p-12 md:p-20 text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              className="object-cover h-full"
              alt=""
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-12">
              Why SmatProp?
            </h2>
            <div className="space-y-6">
              {[
                "Streamlined Operations & Automation",
                "Real-time Data Insights & Dashboards",
                "Enhanced Tenant Experience",
                "Significant Cost & Time Savings",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-[#F3764A]" size={24} />
                  <span className="text-lg opacity-90">{text}</span>
                </div>
              ))}
            </div>
            <button className="mt-12 bg-[#F3764A] text-white px-8 py-4 rounded-2xl flex items-center gap-2 hover:brightness-110 transition-all font-semibold hover:cursor-pointer">
              Get Started Now <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
