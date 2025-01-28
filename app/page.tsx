import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Stats from '@/components/stats'
import Testimonials from '@/components/testimonials'
import Process from '@/components/process'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Testimonials />
        <Process />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

