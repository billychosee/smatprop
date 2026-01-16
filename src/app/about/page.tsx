/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Clock,
  Wallet,
  ShieldCheck,
  Search,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
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
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-100 flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              alt="Modern Office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              The Facts
            </motion.h1>
            <p className="text-[#F3764A] font-semibold tracking-widest uppercase">
              Inside SmatProp&apos;s Mission
            </p>
          </div>
        </div>
      </section>

      {/* Stats/Facts Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Understanding the <br /> African Market
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: <BarChart3 className="text-[#F3764A]" />,
                  title: "Manual Processes",
                  text: "80% of property managers in Africa struggle with manual processes and lack of automation.",
                },
                {
                  icon: <Clock className="text-[#F3764A]" />,
                  title: "Administrative Time",
                  text: "Managers spend an average of 20 hours per month on routine administrative tasks.",
                },
                {
                  icon: <Wallet className="text-[#F3764A]" />,
                  title: "Late Payments",
                  text: "60% of property managers report late rent payments due to inefficient collection.",
                },
              ].map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-12 h-12 bg-[#F4F0EC] rounded-full flex items-center justify-center">
                    {fact.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary">
                      {fact.title}
                    </h4>
                    <p className="text-gray-600">{fact.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-tr-[150px] rounded-bl-[150px] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop"
                alt="Architecture"
                className="w-full h-150 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Dilemma Section (The Beige Block) */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-[#F4F0EC] rounded-[50px] py-20 px-8 md:px-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-6">
              The Property Management Dilemma
            </h2>
            <p className="text-lg text-gray-600">
              Africa&apos;s property sector is undergoing rapid growth, yet
              persistent challenges limit efficiency. We are here to bridge
              those gaps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Security Gaps",
                desc: "Vulnerabilities in property security and delayed repairs.",
                icon: <ShieldCheck size={30} className="text-[#F3764A]" />,
              },
              {
                title: "Operational Slumps",
                desc: "Overall slowdown in property management operations.",
                icon: <BarChart3 size={30} className="text-[#F3764A]" />,
              },
              {
                title: "Tenant Challenges",
                desc: "70% of seekers face difficulties finding reliable property listings.",
                icon: <Search size={30} className="text-[#F3764A]" />,
              },
            ].map((issue, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[30px] shadow-sm text-center flex flex-col items-center"
              >
                <div className="mb-6">{issue.icon}</div>
                <h3 className="text-xl font-serif text-secondary mb-4">
                  {issue.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{issue.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-secondary text-white px-10 py-5 rounded-2xl flex items-center gap-2 mx-auto shadow-lg hover:bg-[#013d57] transition-all hover:cursor-pointer">
              Learn About Our Solution{" "}
              <ArrowRight size={20} className="text-[#F3764A]" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
