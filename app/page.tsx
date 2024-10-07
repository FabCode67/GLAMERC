'use client'
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MainNav from './components/MainNav';
import AboutSection from './components/AboutusSection';

const Home = () => {
  return (
    <>
      <Navbar />
      <MainNav />
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default Home;
