import React from 'react';
import Link from 'next/link';
import { PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import SubFooter from './SubFooter';

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-12 text-gray-400">
      <div className="container max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8 md:px-2 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Visit Us Today</h4>
          <p className="text-gray-400 text-base">
            We invite you to experience the difference at Glamerc Dental Clinic. Whether you need a routine check-up, advanced dental prosthetics, or orthodontic solutions, we are here to provide you with the care and attention you deserve. </p>        </div>
        <div className='md:block hidden'>
          <h4 className="text-lg text-gray-400 font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="#"><p className="hover:text-blue-400 text-gray-400">Home</p></Link></li>
            <li><Link href="#about"><p className="hover:text-blue-400 text-gray-400">About Us</p></Link></li>
            <li><Link href="#services"><p className="hover:text-blue-400 text-gray-400">Services</p></Link></li>
            <li><Link href="#team"><p className="hover:text-blue-400 text-gray-400">Team</p></Link></li>
            <li><Link href="#partners"><p className="hover:text-blue-400 text-gray-400">Partners</p></Link></li>
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
            <li><Link href="#"><p className="hover:text-blue-400 text-gray-400">Home</p></Link></li>
            <li><Link href="#about"><p className="hover:text-blue-400 text-gray-400">About Us</p></Link></li>
            <li><Link href="#services"><p className="hover:text-blue-400 text-gray-400">Services</p></Link></li>
            <li><Link href="#team"><p className="hover:text-blue-400 text-gray-400">Team</p></Link></li>
            <li><Link href="#partners"><p className="hover:text-blue-400 text-gray-400">Partners</p></Link></li>
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
