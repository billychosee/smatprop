/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Settings,
  Cpu,
  Users,
  CheckCircle2,
  Phone,
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

      {/* 1. HERO HEADER SECTION - UPDATED IMAGE */}
      <section className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto z-10">
        <div className="relative overflow-hidden rounded-bl-[100px] md:rounded-bl-[200px] bg-secondary h-100 flex items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="/a_modern_futuristic_real_estate_scene_set.jpeg"
              alt="Black CEO leading a strategy session"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif mb-4"
            >
              About SmatProp
            </motion.h1>
            <p className="text-primary font-semibold tracking-widest uppercase">
              Inside Our Mission & Vision
            </p>
          </div>
        </div>
      </section>

      {/* 2. NARRATIVE & MISSION SECTION - UPDATED IMAGE */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          <div className="lg:w-1/2 relative flex">
            <div className="rounded-[60px] overflow-hidden shadow-2xl border-8 border-accent w-full min-h-full">
              <img
                src="/a_modern_futuristic_real_estate_scene_set.png"
                alt="Professional Black woman using digital tablet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
              Modernizing Real Estate <br /> Across Africa
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                SmatProp is a comprehensive property management solution created
                to modernize real estate operations across Africa. As
                urbanization, diaspora investment, and real estate development
                continue to grow, property stakeholders require tools that
                improve efficiency, transparency, and trust.
              </p>
              <p>
                SmatProp bridges this gap by delivering an integrated digital
                ecosystem that simplifies property management while improving
                tenant–landlord relationships.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-accent p-8 rounded-[30px] flex flex-col justify-between border-l-4 border-primary">
                <div>
                  <Target className="text-primary mb-4" size={32} />
                  <h4 className="font-serif text-xl text-secondary mb-2">
                    Mission
                  </h4>
                  <p className="text-sm opacity-70 italic">
                    To simplify property management by delivering smart,
                    reliable, and scalable digital solutions that empower
                    landlords, property managers, and tenants.
                  </p>
                </div>
              </div>
              <div className="bg-secondary p-8 rounded-[30px] text-white flex flex-col justify-between">
                <div>
                  <Eye className="text-primary mb-4" size={32} />
                  <h4 className="font-serif text-xl mb-2">Vision</h4>
                  <p className="text-sm opacity-60 italic">
                    To become Africa’s leading digital property management
                    ecosystem, enabling smarter properties, sustainable
                    operations, and data-driven decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO PILLARS */}
      <section className="py-24 px-4 bg-accent/50 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary">
              A Holistic Approach
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              SmatProp provides specialized solutions tailored to different
              property types, portfolio sizes, and operational needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Prop-Software",
                desc: "Cloud-based property management software for complete digital automation.",
                icon: <Settings size={28} />,
                img: "/cloud_based_property_management_software_visualized_in_an.png",
              },
              {
                title: "Hardware Integration",
                desc: "Smart property hardware integrations including access control and metering.",
                icon: <Cpu size={28} />,
                img: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Advisory Services",
                desc: "Expert consultancy services to help you optimize and scale your real estate operations.",
                icon: <Users size={28} />,
                img: "/professional_real_estate_advisory_scene_in_an.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[40px] overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{item.icon}</div>
                    <h3 className="text-xl font-serif text-secondary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR DIFFERENCE */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-bold tracking-[0.2em] uppercase mb-4 text-sm">
              The SmatProp Advantage
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-10 leading-tight">
              What Makes Us <br /> Different
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Built with African Markets in Mind",
                  text: "Localized for the specific economic and urban landscapes of Africa.",
                },
                {
                  title: "Designed for Real Challenges",
                  text: "Software features that target actual day-to-day operational friction.",
                },
                {
                  title: "Integrated Smart Hardware",
                  text: "Seamless connectivity with smart access and ultrasonic metering hardware.",
                },
                {
                  title: "Flexible, Modular & Scalable",
                  text: "A system that grows effortlessly with your property portfolio.",
                },
              ].map((diff, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg mb-1 group-hover:text-primary transition-colors">
                      {diff.title}
                    </h4>
                    <p className="text-gray-500 leading-relaxed">{diff.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
              alt="Black tech professionals discussing software architecture"
              className="rounded-tl-[150px] rounded-br-[150px] shadow-2xl h-150 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. CONTACT CTA */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="bg-accent rounded-[50px] py-20 px-8 text-center overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-secondary mb-8 leading-tight">
              Let&apos;s Modernize <br /> Your Property
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Whether you manage a single apartment or a nationwide portfolio,
              SmatProp provides the tools you need to scale efficiently.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
              <Link href="https://erp.smatechgroup.com/appointly/appointments_public/book">
                <button className="bg-secondary text-white px-12 py-6 rounded-2xl flex items-center gap-3 shadow-xl hover:bg-secondary transition-all font-bold uppercase tracking-widest text-sm hover:cursor-pointer">
                  Get a Quote{" "}
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




