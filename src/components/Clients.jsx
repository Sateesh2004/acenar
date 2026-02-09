import React from 'react'

const Clients = () => {
  return (
    <section id="client-portfolio" className="py-12 bg-white border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[10px] uppercase font-black tracking-[0.4em] text-slate-400 mb-10">Trusted By Industry Giants</p>
            <div className="flex flex-wrap justify-center items-center gap-20 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {['HERO', 'DELTA', 'NAPINO', 'VNT', 'JNS', 'VVDN', 'NEOLITE', 'WATSOO'].map(client => (
                <span key={client} className="text-2xl font-black text-[#002147] tracking-tighter">{client}</span>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Clients
