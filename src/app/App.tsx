import { Header } from '../components/layout/Header'
import { Hero } from '../components/sections/Hero'
import { TrustStrip } from '../components/sections/TrustStrip'
import { About } from '../components/sections/About'
import { Services } from '../components/sections/Services'
import { Projects } from '../components/sections/Projects'
import { WhyUs } from '../components/sections/WhyUs'
import { Process } from '../components/sections/Process'
import { Testimonials } from '../components/sections/Testimonials'
import { Planning } from '../components/sections/Planning'
import { FAQ } from '../components/sections/FAQ'
import { Contact } from '../components/sections/Contact'
import { Footer } from '../components/layout/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ivory text-ink selection:bg-olive selection:text-white">
      {/* Persistent Navigation */}
      <Header />

      {/* Main Single Page Content */}
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <Process />
        <Testimonials />
        <Planning />
        <FAQ />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  )
}
