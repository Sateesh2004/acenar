import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'
import { 
  Menu, X, Phone, Mail, MapPin, ChevronRight, 
  Zap, Car, Cpu, Activity, Home, Globe, ShieldCheck, 
  TrendingUp, Award, Users, Factory, CheckCircle2
} from 'lucide-react';
const page = () => {
     const categories = [
    {
      title: "Automotive Harness",
      items: ["2-Wheeler Complete Wiring", "EV Charging Harnesses", "Mobility Scooter Systems", "Battery Cable Assemblies", "Custom Modification Kits"],
      icon: <Car size={32} />
    },
    {
      title: "Solar Solutions",
      items: ["Combiner Box Harnessing", "Control Panel Wiring", "Power Processing Units", "High-Temperature Sensors", "Signal Transmission"],
      icon: <Zap size={32} />
    },
    {
      title: "Telecom & LAN",
      items: ["Ribbon Cable Assemblies", "D-Sub Flat/Round Cable", "Rainbow IDC Wiring", "LAN Network Cabling", "Base Station Power Sets"],
      icon: <Cpu size={32} />
    },
    {
      title: "Home Appliances",
      items: ["Refrigerator Display Panels", "Washing Machine Control", "HVAC Wiring Systems", "Oven & Chimney Harness", "Custom PVC Connectors"],
      icon: <Home size={32} />
    }
  ];

  return (
    <div>
        <NavBar/>
    <section id="products" className="pt-40 pb-32 px-6 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <h4 className="text-[#CCFF00] font-black uppercase text-xs tracking-[0.3em] mb-4">The Catalog</h4>
                <h2 className="text-5xl md:text-7xl font-black text-[#002147] tracking-tighter">PRODUCT <br/><span className="text-[#CCFF00] underline decoration-8 underline-offset-8">RANGE.</span></h2>
              </div>
              <p className="text-slate-500 font-bold uppercase text-[11px] tracking-[0.4em] md:mb-4">Standardized & Custom Solutions</p>
            </header>

            <div className="grid md:grid-cols-2 gap-12">
              {categories.map((cat, idx) => (
                <div key={idx} className="group bg-[#002147] rounded-[3rem] p-12 transition-all duration-500 hover:bg-[#CCFF00] hover:translate-y-[-10px]">
                  <div className="flex items-center space-x-6 mb-12">
                    <div className="p-4 bg-white/10 rounded-2xl text-white group-hover:bg-[#002147] transition-colors">
                      {cat.icon}
                    </div>
                    <h3 className="text-3xl font-black text-white group-hover:text-[#002147]">{cat.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {cat.items.map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 text-slate-400 group-hover:text-[#002147]/70 font-bold text-sm">
                        <div className="h-[2px] w-4 bg-[#CCFF00] group-hover:bg-[#002147]"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Footer/>
        </div>

  )
}

export default page
