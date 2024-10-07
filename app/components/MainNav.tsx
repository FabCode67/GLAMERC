'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const MainNav = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const navTop = navRef.current?.offsetTop || 0;
      if (window.scrollY > navTop) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={`transition-all duration-300 ${
        isFixed ? 'fixed top-0 w-full z-50 bg-white shadow-md' : ''
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 max-w-7xl">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Medico Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-semibold">Glamerc</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="#">
            <p className="text-gray-700 hover:text-teal-600">Home</p>
          </Link>
          <Link href="#about">
            <p className="text-gray-700 hover:text-teal-600">About</p>
          </Link>
          <Link href="#services">
            <p className="text-gray-700 hover:text-teal-600">Services</p>
          </Link>
          <Link href="#team">
            <p className="text-gray-700 hover:text-teal-600">Team</p>
          </Link>
        </div>

        {/* Contact and Login */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-gray-700">📞 +250 788 888 888</span>
          <Button type="primary" className="bg-teal-600 hover:bg-teal-700">
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-3xl text-teal-600" />
            ) : (
              <AiOutlineMenu className="text-3xl text-teal-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <Link href="#">
              <p className="text-gray-700 hover:text-teal-600">Home</p>
            </Link>
            <Link href="#about">
              <p className="text-gray-700 hover:text-teal-600">About</p>
            </Link>
            <Link href="#services">
              <p className="text-gray-700 hover:text-teal-600">Services</p>
            </Link>
            <Link href="#team">
              <p className="text-gray-700 hover:text-teal-600">Team</p>
            </Link>
            <span className="text-gray-700">📞 +250 788 888 888</span>
            <Button type="primary" className="bg-teal-600 hover:bg-teal-700">
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNav;
