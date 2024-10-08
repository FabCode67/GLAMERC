import React from 'react';
// import 'swiper/css';
// import 'swiper/css/autoplay';

const PartenersSection = () => {
    return (
        <section id='parteners' className="text-medBlue flex flex-col w-full  p-8 mx-auto text-gray-500 max-w-7xl min-h-screen items-center my-auto justify-center bg-white">
            <div className=" w-full mx-auto text-center space-y-8 my-auto">
                <h2 className="text-3xl md:text-4xl font-bold">PARTNERS</h2>
                <p className="text-lg md:text-3xl">
                    We work with the best companies in the country to provide you with the best care.
                </p>
                <p className="max-w-2xl mx-auto text-lg mb-12">
                At our dental clinic, we strive to make quality dental care accessible to all our patients. We are proud to partner with a variety of insurance providers to offer comprehensive coverage options. Our list of accepted insurances ensures that you can receive the treatment you need without financial stress. Your oral health is our priority, and we are here to help you every step of the way!
                </p>
                <div className="w-full overflow-hidden mt-20">
                    <div className="moving-logos w-full flex items-center space-x-12 mt-20 animate-scroll">
                        {[
                            'eden.png',
                            'xana.webp',
                            'old.png',
                            'moh.png',
                            'karisimbi.png',
                            'eden.png',
                            'xana.webp',
                            'old.png',
                            'sante.png',
                            'moh.png',
                            'karisimbi.png',
                        ].map((logo, index) => (
                            <img
                                key={index}
                                src={`/${logo}`}
                                alt={`Partner Logo ${index + 1}`}
                                className="h-24 md:h-32"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartenersSection;
