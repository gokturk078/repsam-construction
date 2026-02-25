import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import TrustStrip from '@/components/home/TrustStrip'
import AboutSnapshot from '@/components/home/AboutSnapshot'
import ServicesGrid from '@/components/home/ServicesGrid'
import ProjectsGallery from '@/components/home/ProjectsGallery'
import ProcessSection from '@/components/home/ProcessSection'
import WhyUs from '@/components/home/WhyUs'
import CertificationsSection from '@/components/home/CertificationsSection'
import Testimonials from '@/components/home/Testimonials'
import FAQSection from '@/components/home/FAQSection'
import CTAStrip from '@/components/home/CTAStrip'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <TrustStrip />
      <AboutSnapshot />
      <ServicesGrid />
      <ProjectsGallery />
      <ProcessSection />
      <WhyUs />
      <CertificationsSection />
      <Testimonials />
      <FAQSection />
      <CTAStrip />
      <Footer />
    </main>
  )
}
