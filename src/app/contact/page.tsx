/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   setSubmitted(true);
 };
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
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-87.5 flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
              alt="Property Management Office"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              Contact Us
            </motion.h1>
            <p className="text-[#F3764A] font-semibold tracking-widest uppercase">
              Let&apos;s start a conversation
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT COLUMN: INFORMATION & FORM */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              We Love To Hear <br /> From You
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <ContactItem
                icon={<Mail size={24} />}
                label="info@smatprop.com"
                sub="Email us anytime"
              />
              <ContactItem
                icon={<Phone size={24} />}
                label="(+263) 86 8800"
                sub="Call our support"
              />
            </div>

            {/* CONTACT FORM */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-serif text-secondary mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full border-b border-gray-300 py-4 focus:border-[#F3764A] outline-none transition-colors bg-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full border-b border-gray-300 py-4 focus:border-[#F3764A] outline-none transition-colors bg-transparent"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Hello, I am interested in..."
                  rows={4}
                  required
                  className="w-full border-b border-gray-300 py-4 focus:border-[#F3764A] outline-none transition-colors bg-transparent resize-none"
                ></textarea>

                <button className="bg-secondary text-white px-10 py-5 rounded-2xl flex items-center gap-3 shadow-lg hover:bg-[#0D1B3A] transition-all font-semibold hover:cursor-pointer">
                  Send Now <Send size={18} className="text-[#F3764A]" />
                </button>
              </motion.form>
            )}
          </div>

          {/* RIGHT COLUMN: THE ARCH IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Signature Arch Shape */}
            <div className="w-full aspect-4/5 rounded-t-full overflow-hidden border-15 border-[#F4F0EC] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
                alt="Residential Property"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Location Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-50 flex items-start gap-4 max-w-xs">
              <div className="bg-[#F3764A] p-3 rounded-xl text-white">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-serif text-xl text-secondary">
                  Our Office
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  13 Brentwood Avenue, Mount Pleasant, Harare, Zimbabwe
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  sub: string;
}

function ContactItem({ icon, label, sub }: ContactItemProps) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-14 h-14 bg-[#F4F0EC] rounded-full flex items-center justify-center text-[#F3764A]">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400 uppercase tracking-widest">{sub}</p>
        <h4 className="text-lg font-bold text-secondary">{label}</h4>
      </div>
    </div>
  );
}
