"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  Activity,
  FileText,
  ChevronDown,
  Wallet,
  Wrench,
  ClipboardCheck,
  Bell,
  Zap,
  Megaphone,
  Globe,
  Users,
  ArrowRight,
  Smartphone,
  ChevronRight,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const defaultPreview = {
    title: "SmatProp Platform",
    desc: "A unified ecosystem for modern property management and security.",
    img: "/property-and-units-nav.png",
  };

  const [activePreview, setActivePreview] = useState(defaultPreview);

  // All 15 features in order
  const allFeatures = [
    {
      title: "Management",
      features: [
        {
          name: "Property & Unit",
          icon: Home,
          href: "/features/property-unit",
          desc: "Property database & categorization",
          img: "/property-and-units-nav.png",
        },
        {
          name: "Tenant & Lease",
          icon: Users,
          href: "/features/tenant-lease",
          desc: "Tenant profiles & contact details",
          img: "/tenants-and-lease-nav.png",
        },
        {
          name: "Financial Management",
          icon: Wallet,
          href: "/features/financial-management",
          desc: "Invoicing & billing",
          img: "/financial-management-nav.png",
        },
        {
          name: "Income & Expense",
          icon: Wallet,
          href: "/features/income-expense",
          desc: "Property income tracking",
          img: "/income-and-expense-nav.png",
        },
        {
          name: "Analytics Hub",
          icon: Activity,
          href: "/features/analytics-hub",
          desc: "Occupancy and revenue reports",
          img: "/analytics-hub-nav.png",
        },
      ],
    },
    {
      title: "Ecosystem",
      features: [
        {
          name: "Marketing & Listing Tools",
          icon: Megaphone,
          href: "/features/marketing-tools",
          desc: "Online property listings & search functionality",
          img: "/marketing-and-listing-nav.png",
        },
        {
          name: "Third-Party Service Provider Management",
          icon: Globe,
          href: "/features/third-party-service-provider-management",
          desc: "Contractor profiles & management",
          img: "/third-party-service-provider-management-nav.png",
        },
        {
          name: "Integration & API Access",
          icon: Zap,
          href: "/features/api-integration",
          desc: "Smatpay Payment gateway integration",
          img: "/integration-nav.png",
        },
        {
          name: "Mobile & Web Access",
          icon: Smartphone,
          href: "/features/applications",
          desc: "Mobile apps for tenants, landlords, and managers",
          img: "/devices.png",
        },
        {
          name: "Contract & Document",
          icon: FileText,
          href: "/features/contract-document",
          desc: "Lease agreement storage",
          img: "/contract-document-nav.png",
        },
      ],
    },
    {
      title: "Operations",
      features: [
        {
          name: "Maintenance Control",
          icon: Wrench,
          href: "/features/maintenance-control",
          desc: "Request submission & tracking",
          img: "/maintenance-control-nav.png",
        },
        {
          name: "Tenant Screening",
          icon: ClipboardCheck,
          href: "/features/tenant-screening",
          desc: "Credit checks & verification",
          img: "/tenant-screening-nav.png",
        },
        {
          name: "Communications",
          icon: Bell,
          href: "/features/communications",
          desc: "Tenant/landlord messaging",
          img: "/communication-notifications-nav.png",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <motion.header
        animate={{ y: isVisible ? 0 : -100 }}
        className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <Image
              src="/smatprop_logo.svg"
              alt="SmatProp Logo"
              width={130}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {["Home", "About", "Hardware"].map((name) => (
              <Link
                key={name}
                href={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                className="text-[15px] font-semibold text-secondary hover:text-primary transition-colors"
              >
                {name}
              </Link>
            ))}

            {/* CENTERED FLAT GRID DROPDOWN */}
            <div
              className="static"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => {
                setIsDropdownOpen(false);
                setActivePreview(defaultPreview);
              }}
            >
              <Link
                href="/features"
                className="flex items-center gap-1 text-[15px] font-semibold py-8 text-secondary hover:text-primary transition-colors"
              >
                Features{" "}
                <ChevronDown
                  size={14}
                  className={isDropdownOpen ? "rotate-180" : ""}
                />
              </Link>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 15, x: "-50%" }}
                    className="absolute top-[85%] left-1/2 w-275 bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden flex z-50"
                  >
                    {/* GROUPED FEATURE COLUMNS */}
                    <div className="flex-[2.5] p-12 flex gap-8">
                      {allFeatures.map((category, catIndex) => (
                        <div key={catIndex} className="flex-1">
                          <h4 className="text-lg font-bold mb-4 text-secondary">
                            {category.title}
                          </h4>
                          <div className="space-y-2">
                            {category.features.map((item, i) => (
                              <Link
                                key={i}
                                href={item.href}
                                onMouseEnter={() =>
                                  setActivePreview({
                                    title: `${category.title}: ${item.name}`,
                                    desc: item.desc,
                                    img: item.img,
                                  })
                                }
                                className="group flex items-center gap-3 pt-3 px-0 rounded-2xl transition-all hover:bg-gray-50"
                              >
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors bg-gray-100 text-secondary group-hover:bg-primary/10 group-hover:text-primary">
                                  <item.icon size={16} />
                                </div>
                                <span className="text-[13px] font-bold tracking-tight text-secondary">
                                  {item.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* DYNAMIC 4:3 PREVIEW PANEL */}
                    <div className="flex-1 bg-gray-50/50 p-10 border-l border-gray-100 flex flex-col justify-center min-w-85">
                      <div className="aspect-4/3 rounded-3xl overflow-hidden mb-6 shadow-2xl relative bg-gray-200">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={activePreview.img}
                            src={activePreview.img}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            className="w-full h-full object-cover"
                          />
                        </AnimatePresence>
                      </div>
                      <motion.div
                        key={activePreview.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <h3 className="font-serif text-2xl text-secondary mb-3 leading-tight">
                          {activePreview.title}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed mb-8 font-medium">
                          {activePreview.desc}
                        </p>
                        <div className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                          Explore Module <ArrowRight size={14} />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className="text-[15px] font-semibold text-secondary"
            >
              Contact
            </Link>

            <div className="flex items-center gap-4 ml-4">
              <Link
                href="#"
                className="bg-secondary text-white px-7 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all hover:bg-black"
              >
                Log In
              </Link>
              <Link
                href="#"
                className="bg-primary text-white px-7 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all hover:bg-primary/80"
              >
                Sign In
              </Link>
            </div>
          </nav>

          <button
            className="md:hidden text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Image
                      src="/smatprop_logo.svg"
                      alt="SmatProp Logo"
                      width={130}
                      height={40}
                      priority
                    />
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <X size={24} className="text-secondary" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-2">
                    {["Home", "About", "Hardware"].map((name) => (
                      <Link
                        key={name}
                        href={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                        className="flex items-center justify-between py-3 px-4 rounded-xl text-secondary hover:bg-gray-50 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-medium">{name}</span>
                        <ChevronRight size={18} className="text-gray-400" />
                      </Link>
                    ))}

                    {/* Mobile Features Dropdown */}
                    <div>
                      <button
                        onClick={() =>
                          setIsMobileDropdownOpen(!isMobileDropdownOpen)
                        }
                        className="flex items-center justify-between w-full py-3 px-4 rounded-xl text-secondary hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-medium">Features</span>
                        <ChevronDown
                          size={18}
                          className={`text-gray-400 transition-transform ${
                            isMobileDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isMobileDropdownOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-2 ml-4 space-y-1">
                              {allFeatures.map((category, catIndex) => (
                                <div key={catIndex} className="mb-4">
                                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 px-4">
                                    {category.title}
                                  </h4>
                                  {category.features.map((item, i) => (
                                    <Link
                                      key={i}
                                      href={item.href}
                                      className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100 text-secondary">
                                        <item.icon size={16} />
                                      </div>
                                      <div>
                                        <p className="text-sm font-medium text-secondary">
                                          {item.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                          {item.desc}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link
                      href="/contact"
                      className="flex items-center justify-between py-3 px-4 rounded-xl text-secondary hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium">Contact</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </Link>
                  </div>
                </div>

                {/* Footer with CTA buttons */}
                <div className="p-6 border-t border-gray-100 space-y-3">
                  <Link
                    href="#"
                    className="block w-full bg-secondary text-white py-3 rounded-2xl text-xs font-bold uppercase tracking-widest text-center transition-all hover:bg-black"
                    onClick={() => setIsOpen(false)}
                  >
                    Log In
                  </Link>
                  <Link
                    href="#"
                    className="block w-full bg-primary text-white py-3 rounded-2xl text-xs font-bold uppercase tracking-widest text-center transition-all hover:bg-primary/80"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
