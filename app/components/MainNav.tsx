'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const MainNav = () => {
  const [isFixed, setIsFixed] = useState(false);
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleLogin = () => {
    router.push("https://xanahealth.io/login");
  }

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
      className={`transition-all px-2 duration-300 ${
        isFixed ? 'fixed top-0 w-full z-50 bg-white shadow-md' : 'bg-teal-600'
      }`}
    >
      <div className={`container  mx-auto flex justify-between items-center py-4 max-w-7xl ${isFixed ? 'bg-white': 'bg-teal-600'}`}>
        <div className="flex items-center">
          <img src="/dentallogo.png" alt="Medico Logo" className="h-10 w-16 mr-2" />
          <span className={`text-xl font-semibold ${isFixed ? 'text-black':'text-white'}`}>Glamerc</span>
        </div>
        <div className="hidden lg:flex space-x-6">
          <Link href="#">
            <p className={`${isFixed ? 'text-gray-700 hover:text-teal-600':'text-white hover:text-slate-300'}`}>Home</p>
          </Link>
          <Link href="#about">
            <p className={`${isFixed ? 'text-gray-700 hover:text-teal-600':'text-white hover:text-slate-300'}`}>About</p>
          </Link>
          <Link href="#services">
            <p className={`${isFixed ? 'text-gray-700 hover:text-teal-600':'text-white hover:text-slate-300'}`}>Services</p>
          </Link>
          <Link href="#team">
            <p className={`${isFixed ? 'text-gray-700 hover:text-teal-600':'text-white hover:text-slate-300'}`}>Team</p>
          </Link>
        
          <Link href="#parteners">
            <p className={`${isFixed ? 'text-gray-700 hover:text-teal-600':'text-white hover:text-slate-300'}`}>Parteners</p>
          </Link>
          <Link href="#contact">
            <p className={`${isFixed ? 'text-gray-700 hover:text-teal-600':'text-white hover:text-slate-300'}`}>Contact</p>
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <span className={` ${isFixed ? 'text-black':'text-white'} flex`}><BiPhone className={`flex my-auto justify-center ${isFixed ? 'text-black':'text-white'}`} /> +250 784 012 286</span>
          <Button onClick={handleLogin} type="primary" className="bg-teal-600 hover:bg-teal-700">
            Login
          </Button>
        </div>
        <div className="lg:hidden flex items-center">
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
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <Link href="#">
              <p className={`${isFixed ? 'text-gray-700 hover:text-teal-600':'text-white hover:text-slate-300'}`}>Home</p>
            </Link>
            <Link href="#about">
              <p className={`${isFixed ? 'text-gray-700 hover:text-teal-600':'text-white hover:text-slate-300'}`}>About</p>
            </Link>
            <Link href="#services">
              <p className={`${isFixed ? 'text-gray-700 hover:text-teal-600':'text-white hover:text-slate-300'}`}>Services</p>
            </Link>
            <Link href="#team">
              <p className={`${isFixed ? 'text-gray-700 hover:text-teal-600':'text-white hover:text-slate-300'}`}>Team</p>
            </Link>
            <Link href="#parteners">
              <p className={`${isFixed ? 'text-gray-700 hover:text-teal-600':'text-white hover:text-slate-300'}`}>Parteners</p>
            </Link>
            <Link href="#contact">
              <p className={`${isFixed ? 'text-gray-700 hover:text-teal-600':'text-white hover:text-slate-300'}`}>Contact</p>
            </Link>
            <span className="text-gray-700 flex"><BiPhone className='flex my-auto justify-center' /> +250 784 012 286</span>
            <Button onClick={handleLogin} type="primary" className="bg-teal-600 hover:bg-teal-700">
              Login
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNav;
