'use client'

import Link from 'next/link';
import { BiCalendar } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';
import { PiPhone } from 'react-icons/pi';
import { SiTarget } from 'react-icons/si';
import { useState } from 'react';

const HeroSection = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleCancel = () => {
        setIsModalVisible(!isModalVisible)
    }
    return (
        <div className="relative min-h-screen bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0" />
    

            {/* Top Banner */}
            <div className="bg-blue-600 text-white py-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm sm:text-base">
                        New Patient Special: Free Consultation & X-Ray | Call Now: (555) 123-4567
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-blue-600">
                                <SiTarget className="w-5 h-5 fill-current" />
                                <span className="font-semibold">Top-Rated Dental Clinic in the City</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900">
                                Transform Your Smile at{' '}
                                <span className="text-blue-600 lg:text-5xl">GLAMERC DENTAL CLINIC</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl">
                                Experience the perfect blend of comfort and advanced dentistry. Our state-of-the-art facility offers comprehensive care from routine cleanings to complete smile makeovers. Located in the heart of Kigali, Rwanda, we are proud to provide exceptional dental care that transforms lives. Our specialized services in dental prosthetics and orthodontics address critical gaps in local healthcare, making world-class oral health accessible to our community.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleCancel}
                                className="bg-blue-600   justify-between hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg flex items-center gap-2">
                                Book Appointmet
                                <BiCalendar className="w-5 h-5" />
                            </button>
                            <Link className="border-2 justify-between border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg flex items-center gap-2" href={'/#contact'}>
                                Contact Us
                                <PiPhone className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Key Features */}
                        <div className="grid sm:grid-cols-2 gap-6 pt-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-lg">
                                    <CgLock className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Flexible Hours</h3>
                                    <p className="text-gray-600">Mon-Sun: 8AM-8PM<br />Public Holidays: 8AM-8PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Images */}
                    <div className="space-y-4">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                // src="/images/house.jpg"
                                alt="Modern dental clinic interior"
                                src="/images/dent1.jpg"
                                height={100}
                                width={100}
                                className="object-cover h-full w-full"

                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                                <img
                                    // src="/images/dent1.jpg"
                                    src="/images/dent3.jpg"
                                    alt="Dental treatment"
                                    height={100}
                                    width={100}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                                <img
                                    // src="/images/dent3.jpg"
                                    src="/images/contact.jpg" 
                                    alt="Happy patient smiling"
                                    height={100}
                                    width={100}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;