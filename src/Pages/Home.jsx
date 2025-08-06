import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import FeaturesSection from '../Components/FeaturesSection.jsx'
import AboutTeaser from '../Components/AboutTeaser.jsx'
import TorsoSection from '../Components/TorsoSection.jsx'
import ServicesSection from '../Components/ServicesSection.jsx'
import ArtSection from '../Components/ArtSection.jsx'
import ContactSection from '../Components/ContactSection.jsx'
import FooterSection from '../Components/FooterSection.jsx'

function Home() {
  return (
    <div>
        <Navbar />
      <Hero />
      <FeaturesSection />
      <AboutTeaser />
      <TorsoSection />
      <ServicesSection />
      <ArtSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default Home
