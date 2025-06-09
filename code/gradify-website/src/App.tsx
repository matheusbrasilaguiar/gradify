
import './App.css'
import Footer from './components/layout/Footer/Footer'
import Header from './components/layout/Header/Header'
import AboutSection from './components/sections/AboutSection/AboutSection'
import CTASection from './components/sections/CTASection/CTASection'
import FeaturesSection from './components/sections/FeaturesSection/FeaturesSection'
import HeroSection from './components/sections/HeroSection/HeroSection'
import WhySection from './components/sections/WhySection/WhySection'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <WhySection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default App
