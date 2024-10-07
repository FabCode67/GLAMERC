import React from 'react';

const PartnerSection = () => {
  const partners = [
    { name: 'Insurance A', logo: '/insurance-a-logo.png' },
    { name: 'Insurance B', logo: '/insurance-b-logo.png' },
    { name: 'Insurance C', logo: '/insurance-c-logo.png' },
    { name: 'Insurance D', logo: '/insurance-d-logo.png' },
    { name: 'Insurance E', logo: '/insurance-e-logo.png' },
    { name: 'Insurance F', logo: '/insurance-f-logo.png' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      {/* Intro Text */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Insurance Partners</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At our dental clinic, we strive to make quality dental care accessible to all our patients. 
          We are proud to partner with a variety of insurance providers to offer comprehensive coverage options. 
          Our list of accepted insurances ensures that you can receive the treatment you need without financial stress. 
          Your oral health is our priority, and we are here to help you every step of the way!
        </p>
      </div>

      {/* Partner Logos */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="h-20 w-40 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerSection;
