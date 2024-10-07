import React from 'react';

const services = [
  { title: "Orthodontic treatments such as braces and clear aligners", description: "", icon: "/im1.png" },
  { title: "Root canal therapy (RCT), ", description: "Root canal therapy is a treatment used to repair and save a tooth that is badly decayed or infected.", icon: "/im2.png" },
  { title: "Pulpotomy for milk teeth, ", description: "Pulpotomy is a procedure to save a tooth that has an inflamed pulp", icon: "/im10.png" },
  { title: "Fillings", description: "Glass ionomer cement fillings, Composite resin fillings, Amalgam fillings", icon: "/im3.png" },
  { title: "Extractions", description: "Simple extractions, Surgical extractions, Wisdom teeth extractions", icon: "/im4.png" },
  { title: "Removable , fixed dentures and implants ", description: "", icon: "/im5.png" },
  { title: "Scaling and root planning", description: "Gum treatment for gum disease", icon: "/im6.png" , highlighted: true},
  { title: "Dental X-rays ", description: "Peri-apical x-rays and orthopantomogram/ Panoramic X-ray (OPG)", icon: "/im7.png" },
  { title: "Teeth whitening", description: "In-office teeth whitening, Home teeth whitening", icon: "/im8.png" },
  { title: "Retainers and night guards.", description: "Get your retainers and night guards", icon: "/im9.png" },
];

const ServicePage = () => {
  return (
    <section className="py-16 bg-teal-500 bg-fixed">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Specialty</h2>
        <p className="text-gray-500 mt-2">
          We provide the world-class services with the best medical team!
        </p>
      </div>

      <div className="grid md:gap-6 gap-2 md:px-0 px-2 sm:grid-cols-2 grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 bg-white rounded-lg shadow-md transition-all duration-300 ${
              service.highlighted ? 'bg-blue-500 text-white' : 'hover:bg-blue-50'
            }`}
          >
            <div
              className={`text-4xl mb-4 ${
                service.highlighted ? 'bg-white text-blue-500 rounded-full px-2' : 'text-blue-500'
              }`}
            >
                <img src={service.icon} alt={service.title} className='h-16 w-16 object-contain' />
            </div>

            <h3 className={`text-lg font-semibold mb-2 ${
              service.highlighted ? 'text-white' : 'text-gray-800'
            }`}>
              {service.title}
            </h3>

            <p className={`${service.highlighted ? 'text-blue-200' : 'text-gray-500'}`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
