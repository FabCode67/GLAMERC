'use client'

import Link from 'next/link';
import { BiArrowBack, BiCalendar } from 'react-icons/bi';
import { BsShieldFill } from 'react-icons/bs';
import { CgLock } from 'react-icons/cg';
import { PiPhone } from 'react-icons/pi';
import { SiTarget } from 'react-icons/si';
import NewAppointment from './Appointment';
import { useState } from 'react';

import { Clinician } from './Appointment';
const HeroSection = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedClinician, ] = useState<Clinician>(null as unknown as Clinician);
    const handleCancel =()=>{
        setIsModalVisible(!isModalVisible)
    }
    return (
        <div className="relative min-h-screen bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white z-0" />
            <NewAppointment 
                    isModalVisible={isModalVisible}
                    selectedClinician={selectedClinician}
                    handleCancel={handleCancel}
            />

            {/* Top Banner */}
            <div className="bg-teal-600 text-white py-2">
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
                            <div className="flex items-center gap-2 text-teal-600">
                                <SiTarget className="w-5 h-5 fill-current" />
                                <span className="font-semibold">Top-Rated Dental Clinic in the City</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                                Transform Your Smile at{' '}
                                <span className="text-teal-600">Glameric Dental Clinic</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl">
                                Experience the perfect blend of comfort and advanced dentistry. Our state-of-the-art
                                facility offers comprehensive care from routine cleanings to complete smile makeovers.
                            </p>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex gap-4 flex-wrap">
                            {/* <div className="flex items-center gap-2">
                                <SiTarget className="w-5 h-5 text-yellow-400" />
                                <span className="font-semibold">4.9/5 (500+ Reviews)</span>
                            </div> */}
                            <div className="flex items-center gap-2">
                                <BsShieldFill className="w-5 h-5 text-teal-600" />
                                <span className="font-semibold">Certified Specialists</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                            onClick={handleCancel}  
                            className="bg-teal-600   justify-between hover:bg-teal-700 text-white px-8 py-6 rounded-lg text-lg flex items-center gap-2">
                                Book Appointmet
                                <BiCalendar className="w-5 h-5" />
                            </button>
                            <Link className="border-2 justify-between border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-6 rounded-lg text-lg flex items-center gap-2" href={'/#contact'}>
                                Contact Us
                                <PiPhone className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Key Features */}
                        <div className="grid sm:grid-cols-2 gap-6 pt-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-teal-100 p-3 rounded-lg">
                                    <CgLock className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Flexible Hours</h3>
                                    <p className="text-gray-600">Mon-Sun: 8AM-8PM<br />Public Holydays: 9AM-4PM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-teal-100 p-3 rounded-lg">
                                    <BiArrowBack className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Emergency Care</h3>
                                    <p className="text-gray-600">24/7 emergency dental<br />services available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Images */}
                    <div className="space-y-4">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800"
                                alt="Modern dental clinic interior"

                                height={100}
                                width={100}
                                className="object-cover h-full w-full"

                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400"
                                    alt="Dental treatment"

                                    height={100}
                                    width={100}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400"
                                    alt="Happy patient smiling"

                                    height={100}
                                    width={100}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Bar */}
                {/* <div className="mt-16 pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-teal-600">15+</div>
                            <div className="text-gray-600">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-teal-600">10k+</div>
                            <div className="text-gray-600">Happy Patients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-teal-600">15+</div>
                            <div className="text-gray-600">Expert Staff</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-teal-600">100%</div>
                            <div className="text-gray-600">Satisfaction Rate</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default HeroSection;