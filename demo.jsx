import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronRight, 
  Zap, Car, Cpu, Activity, Home, Globe, ShieldCheck, 
  TrendingUp, Award, Users, Factory, CheckCircle2
} from 'lucide-react';

// --- Theme Constants ---
const COLORS = {
  navy: 'bg-[#002147]',
  lime: 'text-[#CCFF00]',
  limeBg: 'bg-[#CCFF00]',
  limeBorder: 'border-[#CCFF00]',
};

// --- Navbar Component (Scrolling Version) ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Solutions', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#002147] py-3 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center group cursor-pointer">
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-white' : 'text-[#002147]'}`}>
                ACENAR <span className="text-[#CCFF00]">GLOBAL</span>
              </span>
              <div className="flex items-center space-x-1">
                <div className="h-[2px] w-4 bg-[#CCFF00]"></div>
                <span className={`text-[9px] uppercase tracking-[0.3em] font-bold ${scrolled ? 'text-slate-300' : 'text-slate-500'}`}>We connect as wave</span>
              </div>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs uppercase tracking-widest font-bold transition-all hover:text-[#CCFF00] ${
                  scrolled ? 'text-white' : 'text-[#002147]'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact"
              className={`${COLORS.limeBg} text-[#002147] px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-[#CCFF00]/20`}
            >
              Get a Quote
            </a>
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
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block w-full text-left text-white text-xl font-bold border-b border-white/10 pb-4"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-[#CCFF00] text-xl font-bold"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#002147] text-white pt-24 pb-12 px-6 overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full opacity-5 pointer-events-none">
      <svg viewBox="0 0 1440 320" className="w-full h-auto">
        <path fill="#CCFF00" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-3xl font-black mb-6">ACENAR <span className="text-[#CCFF00]">GLOBAL</span></h3>
        <p className="max-w-md text-slate-400 leading-relaxed mb-8">
          A leading name in high-precision wire harness and cable assembly solutions. ISO certified and proudly contributing to the "Make in India" initiative.
        </p>
        <div className="flex space-x-4">
          {['LinkedIn', 'Twitter', 'Facebook'].map(social => (
            <div key={social} className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#CCFF00] hover:text-[#002147] transition-all cursor-pointer">
              <Globe size={18} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-[#CCFF00] font-black uppercase text-xs tracking-[0.2em] mb-8">Corporate</h4>
        <ul className="space-y-4 text-sm font-medium text-slate-400">
          <li className="hover:text-white cursor-pointer transition-colors"><a href="#about">Our History</a></li>
          <li className="hover:text-white cursor-pointer transition-colors"><a href="#home">Client Portfolio</a></li>
          <li className="hover:text-white cursor-pointer transition-colors">Quality Standards</li>
          <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
        </ul>
      </div>
      <div>
        <h4 className="text-[#CCFF00] font-black uppercase text-xs tracking-[0.2em] mb-8">Contact</h4>
        <div className="space-y-6 text-sm text-slate-400">
          <div className="flex items-start space-x-3">
            <MapPin size={18} className="text-[#CCFF00] shrink-0" />
            <span>Plot No.-543 N, Pace City-II, Sector-37, Gurugram (Haryana)</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone size={18} className="text-[#CCFF00] shrink-0" />
            <span>+91-8930123111</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail size={18} className="text-[#CCFF00] shrink-0" />
            <span>info@acenarglobal.com</span>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-slate-500 font-bold">
      <p>© {new Date().getFullYear()} Acenar Global Pvt. Ltd.</p>
      <div className="flex space-x-8 mt-4 md:mt-0">
        <span>Privacy Policy</span>
        <span>Quality Policy</span>
        <span>India Focus</span>
      </div>
    </div>
  </footer>
);

// --- App Component (Single Page) ---

export default function App() {
  const [submitted, setSubmitted] = useState(false);

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
    <div className="min-h-screen bg-white font-sans selection:bg-[#CCFF00] selection:text-[#002147] scroll-smooth">
      <Navbar />
      
      <main className="overflow-hidden">
        {/* HERO SECTION */}
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#002147] -skew-x-12 translate-x-32 hidden lg:block"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="py-20 lg:py-0">
              <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#002147] text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#CCFF00] animate-pulse"></span>
                <span>Industry 4.0 Ready</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-[#002147] leading-[0.9] mb-8">
                WIRING THE <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002147] to-slate-500">DYNAMIC</span><br/>
                <span className="italic">FUTURE.</span>
              </h1>
              <p className="text-lg text-slate-500 mb-10 max-w-lg font-medium leading-relaxed">
                Acenar Global delivers precision-engineered wire harnesses for the most demanding environments: Automotive, Renewable Energy, and Smart Appliances.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#products"
                  className="bg-[#002147] text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#CCFF00] hover:text-[#002147] transition-all flex items-center shadow-2xl shadow-[#002147]/20"
                >
                  Our Solutions <ChevronRight size={16} className="ml-2" />
                </a>
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
                  className="w-full aspect-[4/5] object-cover" 
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

        {/* CLIENTS BAR */}
        <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] uppercase font-black tracking-[0.4em] text-slate-400 mb-10">Trusted By Industry Giants</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {['HERO', 'DELTA', 'NAPINO', 'VNT', 'JNS', 'VVDN', 'NEOLITE'].map(client => (
                <span key={client} className="text-2xl font-black text-[#002147] tracking-tighter">{client}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="pt-40 pb-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-20 mb-32">
              <div className="lg:col-span-7">
                <h4 className="text-[#CCFF00] font-black uppercase text-xs tracking-[0.3em] mb-6">Our Legacy</h4>
                <h2 className="text-5xl md:text-7xl font-black text-[#002147] leading-tight mb-10">Specializing in Precision Harnesses.</h2>
                <div className="space-y-8 text-xl text-slate-500 font-medium leading-relaxed">
                  <p>
                    At ACENAR GLOBAL, we specialize in delivering high-quality, custom wire harness and cable assembly solutions for a wide range of industries including automotive, industrial equipment, medical devices, and consumer electronics.
                  </p>
                  <p className="text-[#002147]">
                    Whether your project requires complex, multi-branch harnesses or simple assemblies, we are here to help power your success.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 bg-[#002147] rounded-[3rem] p-12 text-white relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Users size={120} />
                </div>
                <div>
                  <h3 className="text-4xl font-black mb-4">60+</h3>
                  <p className="text-[#CCFF00] font-bold uppercase tracking-widest text-xs">Skilled Workforce</p>
                </div>
                <div className="mt-20">
                  <p className="text-slate-300 text-sm italic mb-6">"Commitment to precision, durability, and performance designed to meet regulatory standards."</p>
                  <div className="h-1 w-20 bg-[#CCFF00]"></div>
                </div>
              </div>
            </div>

            {/* ROADMAP */}
            <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20">
              <h2 className="text-4xl font-black text-[#002147] text-center mb-20 uppercase tracking-tight">Milestones 2023 - 2026+</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { year: '2023', label: 'Foundation', details: ['Legal registration', 'MVP Build', '10-20 Hires'] },
                  { year: '2024', label: 'Growth', details: ['Market fit', '60+ Employees', 'SOP creation'] },
                  { year: '2025', label: 'Innovation', tasks: 'R&D & New Market Entrance' },
                  { year: '2026+', label: 'Maturity', tasks: 'Global expansion & IPO Prep' }
                ].map((step, idx) => (
                  <div key={idx} className="relative group">
                    <div className="text-6xl font-black text-[#002147]/5 absolute -top-8 -left-4 transition-all group-hover:text-[#CCFF00]/20">{step.year}</div>
                    <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-[#CCFF00] transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00] mb-4 block">{step.year}</span>
                      <h4 className="text-xl font-black text-[#002147] mb-6">{step.label}</h4>
                      <div className="space-y-3">
                         {(step.details || [step.tasks]).map((d, i) => (
                           <div key={i} className="flex items-center space-x-2 text-xs text-slate-500 font-bold">
                             <CheckCircle2 size={12} className="text-[#CCFF00]" />
                             <span>{d}</span>
                           </div>
                         ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
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

        {/* CONTACT SECTION */}
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
      </main>

      <Footer />
    </div>
  );
}