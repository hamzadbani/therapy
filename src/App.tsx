import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SupportSection from './components/SupportSection';
import ExpectationsSection from './components/ExpectationsSection';
import AboutMeSection from './components/AboutMeSection';
import TestimonialsSection from './components/TestimonialsSection';
import ServicesGrid from './components/ServicesGrid';
import AppointmentSection from './components/AppointmentSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <TopBanner />
      <Navbar />
      <Hero />
      <SupportSection />
      <ExpectationsSection />
      <AboutMeSection />
      <TestimonialsSection />
      <ServicesGrid />
      <AppointmentSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
