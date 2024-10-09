import React from 'react';
import Link from 'next/link';
import {  PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import SubFooter from './SubFooter';

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-12  text-gray-400">
      <div className="container mx-auto max-w-7xl md:px-0 px-2 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400 text-xs">
            Our vision is to become a center of excellence in dental care, establishing ourselves as a respected clinic that fosters lifelong relationships built on trust, confidence, and quality. We are committed to delivering exceptional patient care, providing the highest standards of dental services, and continuously advancing our expertise to ensure that every patient experiences the best in oral health. Through our dedication to innovation and excellence, we aim to be the preferred choice for dental care in our community, creating lasting impacts on the lives we touch.
            </p>
        </div>
        <div className='md:block hidden'>
          <h4 className="text-lg text-gray-400 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#"><p className="hover:text-teal-400 text-gray-400">Home</p></Link></li>
            <li><Link href="#about"><p className="hover:text-teal-400 text-gray-400">About Us</p></Link></li>
            <li><Link href="#services"><p className="hover:text-teal-400 text-gray-400">Services</p></Link></li>
            <li><Link href="#team"><p className="hover:text-teal-400 text-gray-400">Team</p></Link></li>
            <li><Link href="#parteners"><p className="hover:text-teal-400 text-gray-400">Parteners</p></Link></li>
            <li><Link href="#contact"><p className="hover:text-teal-400 text-gray-400">Contact</p></Link></li>
          </ul>
        </div>
        <div className='text-gray-400 md:block hidden'>
          <h4 className="text-lg font-semibold mb-4">Location</h4>
          <div className="space-y-2">
            <p><EnvironmentOutlined /> KG 180 St (Intersection of KG 180 St and KG 107 St)</p>
            <p>Remera – Gasabo</p>
            <p>City of Kigali</p>
            <p><PhoneOutlined /> Phone: 0784012286</p>
          </div>
        </div>
      </div>
      <div className='w-full md:hidden flex mt-3 px-2 py-12 '>
      <div className='w-1/2'>
          <h4 className="text-lg text-gray-400 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#"><p className="hover:text-teal-400 text-gray-400">Home</p></Link></li>
            <li><Link href="#about"><p className="hover:text-teal-400 text-gray-400">About Us</p></Link></li>
            <li><Link href="#services"><p className="hover:text-teal-400 text-gray-400">Services</p></Link></li>
            <li><Link href="#team"><p className="hover:text-teal-400 text-gray-400">Team</p></Link></li>
            <li><Link href="#parteners"><p className="hover:text-teal-400 text-gray-400">Parteners</p></Link></li>
            <li><Link href="#contact"><p className="hover:text-teal-400 text-gray-400">Contact</p></Link></li>
          </ul>
        </div>
        <div className='text-gray-400 w-1/2'>
          <h4 className="text-lg font-semibold mb-4">Location</h4>
          <div className="space-y-2">
            <p><EnvironmentOutlined /> KG 180 St (Intersection of KG 180 St and KG 107 St)</p>
            <p>Remera – Gasabo</p>
            <p>City of Kigali</p>
            <p><PhoneOutlined /> Phone: 0784012286</p>
          </div>
        </div>
        </div>
      <SubFooter />
    </footer>
  );
};

export default Footer;
