"use client";
import React from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Zap,
  Car,
  Cpu,
  Activity,
  Home,
  Globe,
  ShieldCheck,
  TrendingUp,
  Award,
  Users,
  Factory,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import linkedin from "../../public/linkedin.svg";
import x from "../../public/Twitter.svg";
import Image from "next/image";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/acenar-global/",
    icon: linkedin,
  },
  {
    name: "X",
    href: "https://x.com/Acenarglobal",
    icon: x,
  },
];
const Footer = () => {
  return (
    <footer className="bg-[#002147] text-white pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#dea764"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-3xl font-black mb-6">
            ACENAR <span className="text-[#dea764]">GLOBAL</span>
          </h3>
          <p className="max-w-md text-slate-400 leading-relaxed mb-8">
            A leading name in high-precision wire harness and cable assembly
            solutions. ISO certified and proudly contributing to the "Make in
            India" initiative.
          </p>

          <div className="flex gap-3">
            {socials.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#dea764] hover:text-[#002147] transition-all"
              >
                <Image src={Icon} alt={`${name} icon`} className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[#dea764] font-black uppercase text-xs tracking-[0.2em] mb-8">
            Corporate
          </h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li className="hover:text-white cursor-pointer transition-colors">
              <Link href="/about">Our History</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              <Link href="/#client-portfolio">Client Portfolio</Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              <Link
                href="/Quality Policies.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quality Standards
          </Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              <Link
                href="/company-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Company Brochure
          </Link>
            </li>
            
          </ul>
        </div>
        <div>
          <h4 className="text-[#dea764] font-black uppercase text-xs tracking-[0.2em] mb-8">
            Contact
          </h4>
          <div className="space-y-6 text-sm text-slate-400">
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-[#dea764] shrink-0" />
              <span>
                Plot No.-389, Pace City-II, Sector-37, Gurugram (Haryana) - 122001
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} className="text-[#dea764] shrink-0" />
              <span>+91-8930123111</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={18} className="text-[#dea764] shrink-0" />
              <span>info@acenarglobal.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-slate-500 font-bold">
        <p>© {new Date().getFullYear()} Acenar Global Pvt. Ltd.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link
            href="/Quality Policies.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quality Policy
          </Link>
          <Link
            href="/Technology Policies.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Technology Policy
          </Link>
          <Link
            href="/Enviroment and Health Policies.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviroment and Health Safety Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
