'use client'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MainNav from './components/MainNav';
import AboutSection from './components/AboutusSection';
import TeamSection from './components/TeamSection';
import ServiceSection from './components/ServiceSection';
import PartenersSection from './components/PartenerSection';
import Footer from './components/Footer';
import LocationSection from './components/Location';

const Home = () => {
  return (
    <>
      <Navbar />
      <MainNav />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <TeamSection />
      <PartenersSection />
      <LocationSection />
      <Footer />

    </>
  );
};

export default Home;
