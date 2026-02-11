import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import { CheckCircle2, Users } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
        <NavBar/>
      <section id="about" className="pt-40 pb-32 px-6 bg-white">
             <div className="max-w-7xl mx-auto">
               <div className="grid lg:grid-cols-12 gap-20 mb-32">
                 <div className="lg:col-span-7">
                   <h4 className="text-[#dea764] font-black uppercase text-xs tracking-[0.3em] mb-6">Our Legacy</h4>
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
                     <p className="text-[#dea764] font-bold uppercase tracking-widest text-xs">Skilled Workforce</p>
                   </div>
                   <div className="mt-20">
                     <p className="text-slate-300 text-sm italic mb-6">"Commitment to precision, durability, and performance designed to meet regulatory standards."</p>
                     <div className="h-1 w-20 bg-[#dea764]"></div>
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
                       <div className="text-6xl font-black text-[#002147]/5 absolute -top-8 -left-4 transition-all group-hover:text-[#dea764]/20">{step.year}</div>
                       <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-[#dea764] transition-colors">
                         <span className="text-[10px] font-black uppercase tracking-widest text-[#dea764] mb-4 block">{step.year}</span>
                         <h4 className="text-xl font-black text-[#002147] mb-6">{step.label}</h4>
                         <div className="space-y-3">
                            {(step.details || [step.tasks]).map((d, i) => (
                              <div key={i} className="flex items-center space-x-2 text-xs text-slate-500 font-bold">
                                <CheckCircle2 size={12} className="text-[#dea764]" />
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
           <Footer/>
           </div>
  )
}

export default page
