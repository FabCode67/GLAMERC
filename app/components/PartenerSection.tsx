import React, { useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

const PartenersSection = () => {
    // Define the number of logos per page
    const logosPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    // Array of logos
    const logos = [
        'rssb.avif',
        'britam.png',
        'radiant.png',
        'old.png',
        'eden.png',
        'oxfam.png',
        'urwego.png',
        'urwego.png',
        'mmi.png',
        'notis.png',
        'msh.jpeg',
        'sanlam.jpg',
        'magerwa.webp',
        'slver.png',
        'prive-logo.webp',
    ];
    const totalPages = Math.ceil(logos.length / logosPerPage);
    const handlePageChange = (newPage:number) => {
        setCurrentPage(newPage);
    };

    const startIndex = (currentPage - 1) * logosPerPage;
    const currentLogos = logos.slice(startIndex, startIndex + logosPerPage);

    return (
        <section
            id="parteners"
            className="text-medBlue flex flex-col w-full md:p-8 p-2 mx-auto text-gray-500 max-w-7xl min-h-screen items-center my-auto justify-center bg-white"
        >
            <div className="w-full mx-auto text-center space-y-8 my-auto">
                <h2 className="text-3xl md:text-4xl font-bold">PARTNERS</h2>
                <p className="text-lg md:text-3xl">
                    We work with the best companies in the country to provide you with the best care.
                </p>
                <p className="max-w-2xl mx-auto text-lg mb-20">
                    At our dental clinic, we strive to make quality dental care accessible to all our patients. We are
                    proud to partner with a variety of insurance providers to offer comprehensive coverage options. Our
                    list of accepted insurances ensures that you can receive the treatment you need without financial
                    stress. Your oral health is our priority, and we are here to help you every step of the way!
                </p>
                <div className="w-full overflow-hidden mt-28">
                    <div className="w-full grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-4 mx-auto shadow flex-wrap">
                        {currentLogos.map((logo, index) => (
                            <img
                                key={index}
                                src={`/${logo}`}
                                alt={`Partner Logo ${index + 1}`}
                                className="h-20 p-2 w-40 shadow"
                            />
                        ))}
                    </div>
                    <div className="flex justify-center items-end mt-12 space-x-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 bg-gray-200 rounded ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
                        >
                            <GrPrevious />
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`h-7 w-7 bg-gray-200 rounded-full ${
                                    currentPage === i + 1 && 'bg-medBlue text-white border border-teal-600'
                                }`}
                            >
                                
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 bg-gray-200 rounded ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
                        >
                            <GrNext />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartenersSection;
