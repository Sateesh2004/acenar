"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from "next/navigation";
import logo from '../../public/logo2 (1).png'
// import Link from 'next/link';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronRight, 
  Zap, Car, Cpu, Activity, Home, Globe, ShieldCheck, 
  TrendingUp, Award, Users, Factory, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
const COLORS = {
  navy: 'bg-[#002147]',
  lime: 'text-[#dea764]',
  limeBg: 'bg-[#dea764]',
  limeBorder: 'border-[#dea764]',
};
const NavBar = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const pathname = usePathname();
      const isHome = pathname === "/";
    
      useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Contact', href: '/contact' },
      ];
  return (
     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#002147] py-3 shadow-xl' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center group cursor-pointer">
                {/* <div className="flex flex-col">
                  <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-white' : 'text-[#002147]'}`}>
                    ACENAR <span className="text-[#dea764]">GLOBAL</span>
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className="h-[2px] w-4 bg-[#dea764]"></div>
                    <span className={`text-[9px] uppercase tracking-[0.3em] font-bold ${scrolled ? 'text-slate-300' : 'text-slate-500'}`}>We connect as wave</span>
                  </div>
                </div> */}
                <Image
      
                className='scale-110'
                src={logo}
                alt="Picture of the author"
                priority
                width={180}
    />
    
              </Link>
              
              <div className="hidden md:flex items-center space-x-10">
                {navItems.map((item) => (
                 <Link
  key={item.href}
  href={item.href}
  className={`text-xs uppercase tracking-widest font-bold transition-all 
  ${
    scrolled
      ? 'text-white hover:text-[#dea764]'
      : isHome && ["Solutions", "Contact"].includes(item.name)
        ? 'text-[#dea764]'
        : 'text-[#002147]'
  }`}
>
  {item.name}
</Link>
                ))}
                <Link 
                  href="/contact"
                  className={`${COLORS.limeBg} text-[#002147] px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-[#dea764]/20`}
                >
                  Get a Quote
                </Link>
              </div>
    
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-white' : 'text-[#002147]'}>
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-[#002147] absolute w-full left-0 p-8 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left text-white text-xl font-bold border-b border-white/10 pb-4"
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-[#dea764] text-xl font-bold"
              >
                Get a Quote
              </Link>
            </div>
          )}
        </nav>
  )
}

export default NavBar
