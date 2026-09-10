import React from 'react'
import Navbar from '@/components/tem-five/Navbar'
import Hero from '@/components/tem-five/Hero'
import About from '@/components/tem-five/About'
import Services from '@/components/tem-five/Services'
import WhyChooseUs from '@/components/tem-five/WhyChooseUs'
import Contact from '@/components/tem-five/Contact'
import Footer from '@/components/tem-five/Footer'
import ScrollToTop from '@/components/tem-five/ScrollToTop'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

