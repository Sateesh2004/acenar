import Clients from '@/components/Clients'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import ValueProps from '@/components/ValueProps'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavBar />
      <main className="overflow-hidden" >
         <Hero/>
         <Clients/>
         <ValueProps/>
         <Footer />

      </main>
    </div>
  )
}

export default page
