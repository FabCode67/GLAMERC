import React from 'react';
import { HeartPulse } from "lucide-react";

const PartnersSection = () => {
    const insuranceLogos = [
        'rssb.avif',
        'mmi.png',
        'radiant.png',
        'old.png',
        'eden.png',
        'sanlam.jpg',
        'britam.png',
        'prime.png',
        'oxfam.png',
        'urwego.png',
        'rwandabar.png',
        'nets.jpg',
        'msh.jpeg',
        'magerwa.webp',
        'silver.jpg',
        'prive.jpg',
    ];

    return (
        <section id='partners' className="bg-blue-50 py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="text-center mb-12">
                    <HeartPulse className="mx-auto w-16 h-16 text-blue-800 mb-4" />
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">
                        Our Partners
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We work with a wide network of insurance providers to maximize your covarage.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 gap-12">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
                            Accepted Insurance Providers
                        </h3>
                        <div className="grid md:grid-cols-4 grid-cols-3 gap-3">
                            {insuranceLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center p-4 bg-white shadow-black border rounded-xl hover:bg-blue-100 transition-colors"
                                >
                                    <img
                                        src={logo}
                                        alt={`Insurance Provider ${index + 1}`}
                                        className="max-h-28 max-w-full transition-all object-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Not sure about your coverage? Our financial counselors are ready to help you understand
                        your insurance benefits and explore payment options.
                    </p>
                    <div className="mt-8">
                        <a href='#contact'
                            className=" px-8 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;