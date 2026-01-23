/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Home,
  Users,
  Wallet,
  BarChart3,
  Search,
  Wrench,
  ClipboardCheck,
  CreditCard,
  Phone,
  LayoutDashboard,
  ShieldAlert,
  Zap,
  Briefcase,
  FileText,
  Bell,
  Fingerprint,
  Megaphone,
  Globe,
  Smartphone,
  Activity,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Features() {
  const featureCategories = [
    {
      title: "1. Property & Unit",
      icon: <Home size={24} />,
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      features: [
        "Property database & categorization (Residential, Commercial, etc.)",
        "Unit-level details (size, type, amenities, occupancy status)",
        "Property photos, floor plans, and virtual tours",
        "Property availability tracking",
        "Unit assignment & transfer management",
      ],
    },
    {
      title: "2. Tenant & Lease",
      icon: <Users size={24} />,
      img: "/tenant-and-lease.png",
      features: [
        "Tenant profiles & contact details",
        "Lease creation, tracking, and renewal reminders",
        "Lease terms and conditions management",
        "Rental agreements storage & digital signing",
        "Tenant onboarding & check-in/out management",
        "Automated rent reminders & notifications",
      ],
    },
    {
      title: "3. Financial Management",
      icon: <Wallet size={24} />,
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop",
      features: [
        "Invoicing & billing",
        "Payment processing (cards, mobile money, bank transfers)",
        "Payment reconciliation & tracking",
        "Security deposit tracking",
        "Late fee calculation & automated notifications",
        "Optional Fiscalization (tax & regulatory compliance)",
      ],
    },
    {
      title: "4. Income & Expense",
      icon: <BarChart3 size={24} />,
      img: "/realistic_property_management_software_interface.jpeg",
      features: [
        "Property income tracking by unit & property",
        "Expense tracking (maintenance, utilities, management)",
        "Budgeting & forecasting tools",
        "Financial reporting (Income, Balance Sheet, Cash Flow)",
        "Analytics dashboards for performance insights",
      ],
    },
    {
      title: "5. Contract & Document",
      icon: <FileText size={24} />,
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Lease agreement storage & version tracking",
        "Digital signing & approval workflows",
        "Document library for contracts and permits",
        "Alerts for expiring compliance documents",
        "Eviction Management",
      ],
    },
    {
      title: "6. Tenant Screening",
      icon: <ClipboardCheck size={24} />,
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
      features: [
        "Tenant credit checks & verification",
        "Rental history tracking",
        "Rental credit profiling (Tenants & Landlords)",
        "Risk assessment scoring for potential tenants",
      ],
    },
    {
      title: "7. Maintenance Control",
      icon: <Wrench size={24} />,
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Maintenance request submission & tracking",
        "Automated assignment to contractors",
        "Work order status tracking & logging",
        "Preventive maintenance scheduling",
        "Notifications for upcoming tasks",
      ],
    },
    {
      title: "8. Communications",
      icon: <Bell size={24} />,
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      features: [
        "Tenant/landlord messaging system",
        "Automated notifications (Rent, Maintenance, Policy)",
        "Alerts for overdue payments or expirations",
        "Centralized communication history",
      ],
    },
    {
      title: "9. Analytics Hub",
      icon: <Activity size={24} />,
      img: "/realistic_property_management_software_interface.jpeg",
      features: [
        "Customizable occupancy and revenue reports",
        "Dashboard views for property performance",
        "Trend analysis & predictive insights",
        "Export options (Excel, PDF, CSV)",
      ],
    },
    {
      title: "10. Security & Access",
      icon: <Fingerprint size={24} />,
      img: "/secure_digital_real_estate_marketplace_in_an.jpg",
      features: [
        "Role-based access (Admins, Agents, Tenants)",
        "Biometric access control & QR-based visitor management",
        "Audit trails for all actions",
        "Secure cloud storage & Multi-factor authentication",
      ],
    },
    {
      title: "11. Marketing Tools",
      icon: <Megaphone size={24} />,
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      features: [
        "Online property listings & search functionality",
        "Centralized property marketplace",
        "Featured listings & promotional tools",
      ],
    },
    {
      title: "12. Service Ecosystem",
      icon: <Globe size={24} />,
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
      features: [
        "Contractor profiles & management",
        "Electricity/Airtime purchases in-app",
        "DStv, Netflix & subscription management",
        "Integration with security & legal providers",
      ],
    },
    {
      title: "13. API & Integration",
      icon: <Zap size={24} />,
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2074&auto=format&fit=crop",
      features: [
        "Smatpay Payment gateway integration",
        "Smart Meter & Smataccess integration",
        "ERP integration (e.g., Zerp263)",
        "API access for third-party software",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#4D5053] relative">
      <Navbar />

      {/* SUBTLE VERTICAL GRID LINES */}
      <div className="absolute inset-0 grid grid-cols-4 pointer-events-none px-4 max-w-7xl mx-auto border-x border-gray-100/50">
        <div className="border-r border-gray-100/50"></div>
        <div className="border-r border-gray-100/50"></div>
        <div className="border-r border-gray-100/50"></div>
      </div>

      {/* 1. HERO HEADER - STYLE PRESERVED */}
      <section className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-112.5 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              alt="Modern Architecture Background"
              className="w-full h-full object-cover opacity-40"
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
            <p className="text-primary font-semibold tracking-widest uppercase">
              Comprehensive Property Ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC FEATURE GRID (ALL 13 MODULES) */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCategories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white border border-gray-100 rounded-[40px] overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-2xl text-primary shadow-lg">
                  {item.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif text-secondary mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-[13px] text-gray-500 leading-tight"
                    >
                      <Zap
                        size={14}
                        className="mt-0.5 text-primary shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. MULTI-DEVICE SECTION - CONTENT UPDATED */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-4">
              <Smartphone size={16} /> Mobility & Accessibility
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Real-Time Control <br /> On Any Device
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Stay connected with mobile apps for tenants, landlords, and
              managers. Our web portal provides administrators with full-scale
              ERP capabilities, ensuring 100% synchronization across all
              platforms.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-secondary text-sm">
                <ShieldAlert size={18} className="text-primary" /> PUSH
                NOTIFICATIONS & IN-APP CHAT
              </div>
              <div className="flex items-center gap-3 font-bold text-secondary text-sm">
                <LayoutDashboard size={18} className="text-primary" />{" "}
                REAL-TIME UPDATES & DASHBOARDS
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/devices.png"
              alt="Device Dashboard"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* 4. CONTACT CTA - STYLE PRESERVED */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-accent rounded-[50px] py-20 px-8 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
              Ready for Smarter <br /> Management?
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <Link href="https://erp.smatechgroup.com/appointly/appointments_public/book">
                <button className="bg-secondary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-secondary transition-all font-bold uppercase tracking-widest text-sm hover:cursor-pointer border-none">
                  Get Started{" "}
                  <ArrowRight size={18} className="text-primary" />
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
                    (+263) 86 8800
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




