import { Award, Factory, TrendingUp } from 'lucide-react'
import React from 'react'

const ValueProps = () => {
  return (
     <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
        {[
          { icon: <Factory />, title: "Precision OEM", desc: "Expert manufacturing customized to exact OEM specifications." },
          { icon: <TrendingUp />, title: "Rapid Scaling", desc: "Fast-track production lines to meet urgent market demands." },
          { icon: <Award />, title: "High Quality Orders", desc: "Strict adherence to our core philosophy of zero-defect production." },
        ].map((item, idx) => (
          <div key={idx} className="group cursor-default">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#002147] mb-8 group-hover:bg-[#dea764] transition-all duration-500 group-hover:-translate-y-2">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black text-[#002147] mb-4">{item.title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ValueProps
