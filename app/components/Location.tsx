import React from 'react';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';

const LocationSection = () => {
  return (
    <section id='contact' className=" min-h-screen py-10 md:px-0 px-3 pl-8 my-auto h-fit w-full bg-teal-500">
     <div className="h-screen flex items-center max-w-7xl mx-auto my-auto mt-2 justify-center relative">
      <div className="relative bg-white shadow-2xl rounded-[40px_10px_40px_10px] p-8 md:p-16 md:max-w-xl max-w-full text-center transform md:rotate-1 rotate-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
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
        <div className="absolute inset-0 -z-10 transform -rotate-1 bg-gray-100 rounded-[40px_10px_40px_10px] shadow-xl -translate-x-2 -translate-y-2"></div>
        <div className="absolute inset-0 -z-20 transform -rotate-2 bg-gray-300 rounded-[40px_10px_40px_10px] shadow-lg -translate-x-4 -translate-y-4"></div>
      </div>
      <div className="absolute md:top-40 -top-2 left-12 md:w-16 md:h-16 w-10 h-10 bg-white opacity-50 rounded-full -mt-8 -ml-8"></div>
      <div className="absolute md:bottom-32 bottom-0 right-12 md:w-20 md:h-20 w-16 h-16 bg-white opacity-50 rounded-full -mb-12 -mr-12"></div>
    </div> 
    </section>
  );
};

export default LocationSection;
