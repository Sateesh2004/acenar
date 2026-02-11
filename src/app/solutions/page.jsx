"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Zap, Car, Cpu, Home, ArrowUpRight, Plus } from 'lucide-react'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

// --- Image Imports ---
import po1 from "../../../public/products/1.webp"
import po2 from "../../../public/products/2.webp"
import po3 from "../../../public/products/3.webp"
import po4 from "../../../public/products/4.webp"
import po5 from "../../../public/products/5.webp"
import po6 from "../../../public/products/6.webp"
import po7 from "../../../public/products/7.webp"
import po8 from "../../../public/products/8.webp"
import po9 from "../../../public/products/9.webp"
import po10 from "../../../public/products/10.webp"
import po11 from "../../../public/products/11.webp"
import po12 from "../../../public/products/12.webp"
import po13 from "../../../public/products/13.webp"
import po14 from "../../../public/products/14.webp"
import po15 from "../../../public/products/15.webp"
import po16 from "../../../public/products/16.webp"
import po17 from "../../../public/products/17.webp"

const PRODUCT_DATA = [
  { img: po1, name: "Power Cable", tag: "Telecom" },
  { img: po2, name: "Panic Switch", tag: "Energy" },
  { img: po3, name: "Solar Harness", tag: "Telecom" },
  { img: po4, name: "RJ Lan Cable", tag: "Appliances" },
  { img: po5, name: "Auto Motive Switch Harness", tag: "EV Mobility" },
  { img: po6, name: "RJ Lan cable", tag: "Industrial" },
  { img: po7, name: "Solar Panel Assy Harness", tag: "Automotive" },
  { img: po8, name: "Solar Harness", tag: "Telecom" },
  { img: po9, name: "Complete Harness for Two Wheeler", tag: "Appliances" },
  { img: po10, name: "Data Center Link", tag: "Network" },
  { img: po11, name: "Marine Grade Wire", tag: "Specialty" },
  { img: po12, name: "Micro-Fit Connector", tag: "Electronics" },
  { img: po13, name: "Heavy Duty Grounding", tag: "Energy" },
  { img: po14, name: "Logic Board Ribbon", tag: "Telecom" },
  { img: po15, name: "Fuse Holder Wire Assy", tag: "Appliances" },
  { img: po16, name: "Braided Shield Cable", tag: "Industrial" },
  { img: po17, name: "Telecom Harness", tag: "Energy" },
];

const Page = () => {
  const [displayCount, setDisplayCount] = useState(8);

  const categories = [
    { title: "Automotive Harness", items: ["2-Wheeler Wiring", "EV Charging", "Battery Cables"], icon: <Car size={32} /> },
    { title: "Solar Solutions", items: ["Combiner Box", "Control Panels", "Sensors"], icon: <Zap size={32} /> },
    { title: "Telecom & LAN", items: ["Ribbon Cables", "IDC Wiring", "Network Cabling"], icon: <Cpu size={32} /> },
    { title: "Home Appliances", items: ["HVAC Wiring", "Oven Harness", "PVC Connectors"], icon: <Home size={32} /> }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <NavBar />
      
      {/* 1. Catalog Section */}
      <section id="products" className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h4 className="text-[#dea764] font-black uppercase text-xs tracking-[0.3em] mb-4 bg-[#002147] w-fit px-3 py-1">The Catalog</h4>
              <h2 className="text-5xl md:text-7xl font-black text-[#002147] tracking-tighter">
                PRODUCT <br/><span className="text-[#dea764] underline decoration-8 underline-offset-8">RANGE.</span>
              </h2>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[11px] tracking-[0.4em] md:mb-4">Standardized & Custom Solutions</p>
          </header>

          <div className="grid md:grid-cols-2 gap-12">
            {categories.map((cat, idx) => (
              <div key={idx} className="group bg-[#002147] rounded-[3rem] p-12 transition-all duration-500 hover:bg-[#dea764] hover:translate-y-[-10px] relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="p-4 bg-white/10 rounded-2xl text-white group-hover:bg-[#002147] transition-colors">
                      {cat.icon}
                    </div>
                    <h3 className="text-3xl font-black text-white group-hover:text-[#002147]">{cat.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 text-slate-400 group-hover:text-[#002147]/70 font-bold text-sm">
                        <div className="h-[2px] w-4 bg-[#dea764] group-hover:bg-[#002147]"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="absolute top-8 right-8 text-white/10 group-hover:text-[#002147] transition-colors" size={48} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Masonry Gallery */}
      <section className="py-32 px-6 bg-[#002147] rounded-t-[4rem] md:rounded-t-[8rem]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              PRODUCT <span className="text-[#dea764]">SHOWCASE.</span>
            </h2>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em] mt-4">
              Viewing {Math.min(displayCount, 17)} of 17 Specialized Assemblies
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {PRODUCT_DATA.slice(0, displayCount).map((product, index) => (
              <div 
                key={index} 
                className="relative group break-inside-avoid rounded-[2rem] overflow-hidden bg-slate-900 border border-white/5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(204,255,0,0.2)]"
              >
                <Image 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[#dea764] text-[10px] font-black tracking-[0.2em] uppercase mb-1">
                    {product.tag}
                  </span>
                  <h4 className="text-white text-xl font-black italic uppercase">
                    {product.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {displayCount < 17 && (
            <div className="mt-20 flex justify-center">
              <button 
                onClick={() => setDisplayCount(prev => Math.min(prev + 4, 17))}
                className="group flex items-center gap-4 bg-transparent border-2 border-[#dea764] text-[#dea764] px-12 py-4 rounded-full font-black uppercase text-sm hover:bg-[#dea764] hover:text-[#002147] transition-all duration-300 shadow-lg"
              >
                <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                View More Products
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Page