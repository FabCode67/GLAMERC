'use client'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MainNav from './components/MainNav';
import AboutSection from './components/AboutusSection';
import TeamSection from './components/TeamSection';
import ServiceSection from './components/ServiceSection';
import PartnersSection from './components/PartnerSection';
import Footer from './components/Footer';
import LocationSection from './components/Location';
import NavLogo from './components/NavLogo';
import Map from './components/Map';

const Home = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <NavLogo />
      <MainNav />
      <HeroSection />
      <PartnersSection />
      <ServiceSection />
      <AboutSection />
      <TeamSection />
      <LocationSection />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
