/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Monitor,
  Shield,
  Zap,
  Users,
  BarChart3,
  FileText,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Applications() {
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
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-100 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/devices.png"
              alt="Mobile and Web Access"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              Mobile & Web Access
            </motion.h1>
            <p className="text-primary font-semibold tracking-widest uppercase">
              Stay Connected Anytime, Anywhere
            </p>
          </div>
        </div>
      </section>

      {/* 2. MULTI-PLATFORM OVERVIEW */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">
              Cross-Platform Solution
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Access SmatProp <br /> On Any Device
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Whether you&apos;re a tenant, landlord, property manager, or
              administrator, our mobile and web platforms ensure you&apos;re
              always in control of your properties.
            </p>
          </div>
          <div className="relative">
            <img
              src="/devices.png"
              alt="Multi-device access"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* 3. MOBILE APP FEATURES */}
      <section className="py-24 px-4 bg-accent/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary">
              Mobile App Features
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              Everything you need to manage your properties on the go.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Notifications",
                desc: "Get instant alerts for rent payments, maintenance updates, and important announcements.",
                icon: Bell,
              },
              {
                title: "Secure Authentication",
                desc: "Biometric login and two-factor authentication keep your data safe.",
                icon: Shield,
              },
              {
                title: "Quick Payments",
                desc: "Pay rent and fees instantly via mobile money, card, or bank transfer.",
                icon: Zap,
              },
              {
                title: "Tenant Portal",
                desc: "Submit maintenance requests, view lease documents, and communicate with landlords.",
                icon: Users,
              },
              {
                title: "Property Dashboard",
                desc: "View occupancy status, financial reports, and property performance metrics.",
                icon: Monitor,
              },
              {
                title: "Offline Mode",
                desc: "Access critical information even without an internet connection.",
                icon: Globe,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[30px] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-serif text-secondary mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WEB PORTAL FEATURES */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
              <Monitor size={16} /> Full-Scale Control
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Administrator Web Portal
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              The web portal provides comprehensive ERP capabilities for
              administrators and agents, ensuring 100% synchronization across
              all platforms.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-secondary text-sm">
                <Shield size={18} className="text-primary" /> COMPLETE PROPERTY
                MANAGEMENT DASHBOARD
              </div>
              <div className="flex items-center gap-3 font-bold text-secondary text-sm">
                <BarChart3 size={18} className="text-primary" /> FINANCIAL
                REPORTING & ANALYTICS
              </div>
              <div className="flex items-center gap-3 font-bold text-secondary text-sm">
                <Users size={18} className="text-primary" /> TENANT & LEASE
                MANAGEMENT
              </div>
              <div className="flex items-center gap-3 font-bold text-secondary text-sm">
                <FileText size={18} className="text-primary" /> DOCUMENT STORAGE
                & E-SIGNING
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/tenant-screening.svg"
              alt="Web portal dashboard - Full Scale Control"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-accent rounded-[50px] py-20 px-8 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
              Ready to Go Mobile?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Download our mobile apps or access the web portal to start
              managing your properties smarter.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <Link href="https://erp.smatechgroup.com/appointly/appointments_public/book">
                <button className="bg-secondary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-secondary transition-all font-bold uppercase tracking-widest text-sm hover:cursor-pointer">
                  Get Started <ArrowRight size={18} className="text-primary" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
