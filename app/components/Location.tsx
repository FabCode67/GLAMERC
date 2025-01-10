'use client'
import React from 'react';
import Image from 'next/image';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';

const LocationSection = () => {
  return (
    <section id='contact' className="min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full flex flex-col-reverse lg:flex-row gap-8 items-center justify-between">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full relative aspect-[4/3] rounded-[40px_10px_40px_10px] overflow-hidden shadow-2xl">
            <Image
              src="/contact.jpg" 
              alt="Location Image"
              fill
              className="object-fill"
              // sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-[40%]  w-[95%] relative">
            <div className="relative bg-white shadow-2xl rounded-[40px_10px_40px_10px] p-8 md:py-10 px-4 text-center transform hover:scale-[1.02] transition-transform">
              <h2 className="text-3xl font-bold text-gray-600 mb-6">
                Our Location
              </h2>
              
              <div className="space-y-6 text-gray-600">
                <p className="flex items-center justify-center space-x-2 text-lg">
                  <EnvironmentOutlined className="text-teal-500" />
                  <span>KG 180 St (intersection of KG 180 St and KG 107 St)</span>
                </p>
                <p>Remera – Gasabo</p>
                <p>City of Kigali</p>
                
                <p className="flex items-center justify-center space-x-2 text-lg">
                  <PhoneOutlined className="text-teal-500" />
                  <span>Phone: 0784012286</span>
                </p>
                
                <p className="flex items-center justify-center space-x-2 text-lg">
                  <MailOutlined className="text-teal-500" />
                  <span>Email: <a href="mailto:dentalimaging100@gmail.com" className="hover:text-teal-400 underline">dentalimaging100@gmail.com</a></span>
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Working Hours</h3>
                <div className="text-gray-600 space-y-2">
                  <p className="flex items-center justify-center space-x-2 text-lg">
                    <ClockCircleOutlined className="text-teal-500" />
                    <span>Monday - Sunday: 8 AM - 8 PM</span>
                  </p>
                  <p className="flex items-center justify-center space-x-2 text-lg">
                    <ClockCircleOutlined className="text-teal-500" />
                    <span>Public Holidays: 8 AM - 8 PM</span>
                  </p>
                </div>
              </div>

              {/* Decorative background layers */}
              <div className="absolute inset-0 -z-10 transform -rotate-1 bg-gray-100 rounded-[40px_10px_40px_10px] shadow-xl -translate-x-2 -translate-y-2"></div>
              <div className="absolute inset-0 -z-20 transform -rotate-2 bg-gray-300 rounded-[40px_10px_40px_10px] shadow-lg -translate-x-4 -translate-y-4"></div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-12 left-12 w-16 h-16 bg-white opacity-50 rounded-full"></div>
          <div className="absolute bottom-12 right-12 w-20 h-20 bg-white opacity-50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;