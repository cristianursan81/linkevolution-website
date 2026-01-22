import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import UseCaseSection from '@/components/sections/UseCaseSection'
import SocialProofSection from '@/components/sections/SocialProofSection'
import PricingSection from '@/components/sections/PricingSection'
import EarlyAccessSection from '@/components/sections/EarlyAccessSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <UseCaseSection />
        <SocialProofSection />
        <PricingSection />
        <EarlyAccessSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
