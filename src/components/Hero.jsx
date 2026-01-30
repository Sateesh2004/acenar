import React from 'react'
import {ChevronRight, ShieldCheck
} from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#002147] -skew-x-12 translate-x-32 hidden lg:block"></div>
          
          <div className="max-w-7xl mt-16 mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12  relative z-10">
            <div className="py-20 lg:py-0">
              {/* <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#002147] text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#CCFF00] animate-pulse"></span>
                <span>Industry 4.0 Ready</span>
              </div> */}
              <h1 className="text-6xl md:text-8xl font-black text-[#002147] leading-[0.9] mb-8">
                WIRING THE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002147] to-slate-500">DYNAMIC</span><br/>
                <span className="italic">FUTURE.</span>
              </h1>
              <p className="text-lg text-slate-500 mb-10 max-w-lg font-medium leading-relaxed">
                Acenar Global delivers precision-engineered wire harnesses for the most demanding environments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/"
                  className="bg-[#002147] text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#CCFF00] hover:text-[#002147] transition-all flex items-center shadow-2xl shadow-[#002147]/20"
                >
                  Our Solutions <ChevronRight size={16} className="ml-2" />
                </Link>
                <a 
                  href="#about"
                  className="bg-white text-[#002147] border-2 border-[#002147] px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
                >
                  Company Profile
                </a>
              </div>
            </div>

            <div className="relative group">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-3 transition-transform group-hover:rotate-0 duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80&w=800" 
                  className="aspect-[4/5]  object-cover" 
                  alt="Harness Manufacturing"
                />
                <div className="absolute inset-0 bg-[#002147]/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#CCFF00] p-10 rounded-3xl shadow-2xl hidden md:block animate-bounce-slow">
                 <ShieldCheck size={48} className="text-[#002147] mb-4" />
                 <p className="text-[#002147] font-black uppercase text-xs tracking-widest leading-none">ISO 9001:2015</p>
                 <p className="text-[#002147]/70 font-bold text-[10px] mt-1 italic">Certified Quality</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero
