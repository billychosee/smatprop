"use client";

import Image from "next/image";
import Footer from "@/components/Footer"; // Fixed path to match your structure
import Navbar from "@/components/Navbar";
import {
  FaShieldAlt,
  FaArrowRight,
  FaUserCheck,
  FaRocket,
  FaCheckCircle,
  FaRocketchat,
  FaEnvelope,
  FaQrcode,
  FaTimes,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { deviceData, Device } from "./Device";

import CTAButton from "./CTAButton";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


// Simplified Stat Item to match main site stats
function StatItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      className="flex flex-col items-center p-6 border-l border-gray-100 first:border-l-0"
    >
      <p className="text-4xl font-serif font-bold text-primary">
        {inView ? <CountUp end={value} duration={2.5} separator="," /> : 0}
        {suffix}
      </p>
      <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mt-2">
        {label}
      </p>
    </motion.div>
  );
}

// Device Card overhaul to match main site imagery
const DeviceCard: React.FC<{
  device: Device;
  onLearnMore: (device: Device) => void;
}> = ({ device, onLearnMore }) => (
  <div className="group relative bg-secondary rounded-[40px] overflow-hidden p-8 xl:p-12 shadow-2xl transition-all hover:-translate-y-2">
    <div className="relative z-10">
      <h3 className="text-3xl font-serif text-white leading-tight">
        Smat<span className="text-primary">{device.title}</span>
      </h3>
      <div className="relative w-full h-64 my-8">
        <Image
          src={device.imageSrc}
          alt={device.title}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <button
        onClick={() => onLearnMore(device)}
        className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition-all"
      >
        Learn More <FaArrowRight size={14} />
      </button>
    </div>
  </div>
);

export default function SmatAccess() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<Device | null>(null);
  const [] = useState<Set<number>>(
    new Set(),
  );

  const closeModal = () => setShowModal(false);

  const handleLearnMore = (device: Device) => {
    setModalContent(device);
    setShowModal(true);
  };



  const propertyManagementFeatures = [
    {
      icon: <FaQrcode />,
      title: "Visitor Code Creation",
      description:
        "Generate secure, time-bound QR codes for visitors and contractors.",
    },
    {
      icon: <FaUserCheck />,
      title: "Premium Experience",
      description: "A tech-driven property environment that enhances safety.",
    },
    {
      icon: <FaRocket />,
      title: "Scalable & Future-Ready",
      description: "Built to grow with your property portfolio seamlessly.",
    },
    {
      icon: <FaShieldAlt />,
      title: "End-to-End Security",
      description: "Facial and plate recognition eliminate security loopholes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#4D5053]">
      <Navbar />

      {/* --- HERO SECTION: MATCHING FEATURES HERO --- */}
      <section className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[40px] bg-secondary lg:h-145 shadow-2xl relative">
          <div className="lg:col-span-7 flex flex-col justify-center p-8 md:p-14 xl:p-20 relative z-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex items-center gap-3 mb-6"
            >
              <FaShieldAlt className="text-primary" size={20} />
              <span className="text-white uppercase tracking-[0.3em] text-xs font-bold">
                SmatAccess
              </span>
            </motion.div>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl md:text-6xl font-serif text-white leading-tight mb-6"
            >
              Secure Your World <br />
              <span className="text-primary">Without Limits.</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-gray-300 text-lg mb-8 max-w-md"
            >
              Integrated software and hardware for physical access control
              across Africa&apos;s most secure properties.
            </motion.p>
            <div className="flex gap-4">
              <CTAButton
                text="Request a Demo"
                href="/contact"
                variant="primary"
                className="bg-primary!"
              />
              <CTAButton
                text="Explore Devices"
                href="#our-devices"
                variant="secondary"
              />
            </div>
          </div>
          <div className="lg:col-span-5 relative min-h-100">
            <Image
              src="/smat_access_hero_bg.png"
              alt="SmatAccess"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-secondary via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section id="why-choose" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/smataccess_hero_image.png"
              alt="System"
              width={600}
              height={500}
              className="rounded-[40px] shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-2xl border-r-8 border-primary">
              <p className="text-3xl font-serif text-secondary">100%</p>
              <p className="text-[9px] uppercase tracking-widest font-bold text-gray-400">
                Security Coverage
              </p>
            </div>
          </div>
          <div>
            <p className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">
              The Solution
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-6">
              Why SmatAccess?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A robust, scalable, and intelligent system protecting what matters
              most. From corporate offices to campuses, we ensure only
              authorized access.
            </p>
            <div className="space-y-4">
              {[
                "Scalable for any size organization",
                "Real-time monitoring and alerts",
                "Centralized management",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 font-medium text-secondary"
                >
                  <FaCheckCircle className="text-primary" /> {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROPERTY FOCUS SECTION --- */}
      <section className="py-24 bg-accent/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-4">
              Modern Property Management
            </h2>
            <p className="text-gray-500 text-lg">
              Optimized security and convenience for residential and commercial
              complexes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {propertyManagementFeatures.map((f, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all border border-gray-50"
              >
                <div className="text-primary text-3xl mb-6">{f.icon}</div>
                <h3 className="text-xl font-serif text-secondary mb-4">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DEVICES SECTION --- */}
      <section id="our-devices" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">
            Hardware
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-secondary">
            Discover Our Devices
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {deviceData.map((device) => (
            <DeviceCard
              key={device.title}
              device={device}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatItem value={110} suffix="+" label="Support Given" />
          <StatItem value={170} suffix="+" label="Client Rating" />
          <StatItem value={3098} suffix="+" label="Money Saved" />
          <StatItem value={97} suffix="%" label="Happy Clients" />
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-[50px] py-20 px-8 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
              Ready to Transform <br /> Your Access Control?
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <CTAButton
                text="Request a Demo"
                icon={<FaRocketchat />}
                href="/contact"
                variant="primary"
              />
              <CTAButton
                text="Contact Us"
                icon={<FaEnvelope />}
                href="/contact"
                variant="secondary"
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        </div>
      </section>

      <Footer />

      {/* --- MODAL RE-STYLED --- */}
      <AnimatePresence>
        {showModal && modalContent && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-secondary/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[40px] max-w-4xl w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-primary transition-colors z-20"
              >
                <FaTimes size={24} />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-50 flex items-center justify-center p-12">
                  <Image
                    src={modalContent.modalImageSrc || modalContent.imageSrc}
                    alt={modalContent.title}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
                <div className="p-10 md:p-14">
                  <h3 className="text-3xl font-serif text-secondary mb-4">
                    {modalContent.title}
                  </h3>
                  <p className="text-gray-600 mb-8">
                    {modalContent.modalDescription}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {modalContent.details.map((d, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-[#4D5053]"
                      >
                        <FaCheckCircle className="text-primary mt-1 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <CTAButton
                    text="Contact Sales"
                    href="/contact"
                    variant="primary"
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}




