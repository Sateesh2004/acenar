import React from 'react'

import hero from "../../public/clients/hero.svg"
import watsoo from "../../public/clients/watsoo.png"
import napino from "../../public/clients/napino.png"
import neolite from "../../public/clients/neolite.png"
import vnt from "../../public/clients/vnt.png"
import vvdn from "../../public/clients/vvdn.svg"
import delta from "../../public/clients/delta.png"
import jns from "../../public/clients/jns.png"
import Image from 'next/image'

const clients = [
  { name: 'Hero', logo: hero },
  { name: 'Watsoo', logo: watsoo },
  { name: 'Napino', logo: napino },
  { name: 'Neolite', logo: neolite },
  { name: 'VNT', logo: vnt },
  { name: 'VVDN', logo: vvdn },
  { name: 'Delta', logo: delta },
  { name: 'JNS', logo: jns },
]

const Clients = () => {
  return (
    <section
      id="client-portfolio"
      className="py-12 bg-white border-y border-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] uppercase font-black tracking-[0.4em] text-slate-400 mb-10">
          Trusted By Industry Giants
        </p>

        <div className="flex flex-wrap justify-center items-center gap-20 md:gap-24">
          {clients.map(client => (
            <Image
              key={client.name}
              src={client.logo}
              alt={client.name}
              className="h-10 md:h-12 w-44 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
