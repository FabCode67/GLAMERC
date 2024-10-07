'use client'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MainNav from './components/MainNav';
import AboutSection from './components/AboutusSection';
import TeamSection from './components/TeamSection';
import ServiceSection from './components/ServiceSection';
import PartnerSection from './components/PartenerSection';

const Home = () => {
  return (
    <>
      <Navbar />
      <MainNav />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <TeamSection />
      <PartnerSection />
    </>
  );
};

export default Home;
