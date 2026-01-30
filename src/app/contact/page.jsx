
"use client"
import React, { useState } from 'react'
import { 
  Menu, X, Phone, Mail, MapPin, ChevronRight, 
  Zap, Car, Cpu, Activity, Home, Globe, ShieldCheck, 
  TrendingUp, Award, Users, Factory, CheckCircle2
} from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
const page = () => {
    const [submitted, setSubmitted] = useState(false);
  return (
    <div>
        <NavBar/>
     <section id="contact" className="pt-40 pb-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div>
                <h2 className="text-6xl font-black text-[#002147] mb-10 tracking-tighter">READY TO <br/>START?</h2>
                <p className="text-xl text-slate-500 mb-16 leading-relaxed">Let's discuss how Acenar Global's precision engineering can power your next generation of products.</p>
                
                <div className="grid gap-12">
                  <div className="flex items-center space-x-8">
                    <div className="text-5xl font-black text-[#CCFF00]/40">01</div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Gurugram HQ</p>
                      <p className="text-lg font-black text-[#002147]">Pace City-II, Sector-37, Haryana</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-5xl font-black text-[#CCFF00]/40">02</div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Technical Support</p>
                      <p className="text-lg font-black text-[#002147]">+91-8930123111</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#002147] p-12 md:p-16 rounded-[4rem] shadow-2xl relative">
                {submitted ? (
                  <div className="py-20 text-center animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-[#CCFF00] rounded-full flex items-center justify-center mx-auto mb-10 text-[#002147]">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4">Inquiry Received.</h3>
                    <p className="text-slate-400 mb-10 font-medium">Our engineering team will review your specifications and reach out within 24 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="text-[#CCFF00] font-black uppercase text-xs tracking-widest border-b-2 border-[#CCFF00] pb-1">New Request</button>
                  </div>
                ) : (
                  <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div className="space-y-10">
                      <div className="group border-b border-white/20 focus-within:border-[#CCFF00] transition-colors">
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Your Name</label>
                        <input type="text" className="w-full bg-transparent text-white pb-4 outline-none text-xl font-bold" placeholder="e.g. John Doe" required />
                      </div>
                      <div className="group border-b border-white/20 focus-within:border-[#CCFF00] transition-colors">
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Email Address</label>
                        <input type="email" className="w-full bg-transparent text-white pb-4 outline-none text-xl font-bold" placeholder="name@company.com" required />
                      </div>
                      <div className="group border-b border-white/20 focus-within:border-[#CCFF00] transition-colors">
                        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4">Interested Industry</label>
                        <select className="w-full bg-transparent text-white pb-4 outline-none text-xl font-bold appearance-none cursor-pointer">
                          <option className="text-black">Automotive</option>
                          <option className="text-black">Solar / Renewable</option>
                          <option className="text-black">Medical Devices</option>
                          <option className="text-black">Home Appliances</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-[#CCFF00] text-[#002147] py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-[#CCFF00]/10">
                      Initiate Project Discussion
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        <Footer/>
        </div>
  )
}

export default page
