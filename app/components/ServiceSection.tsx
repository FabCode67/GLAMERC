import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface Service {
  title: string;
  description?: string;
  icon: string;
  highlighted?: boolean;
}

const ServiceCard = ({ service }: { service: Service }) => (
  <Card
    hoverable
    bodyStyle={{padding: "3px"}}
    className={`h-full p-0 ${
      service.highlighted ? 'bg-teal-500 text-white' : 'bg-white'
    }`}
    cover={
      <div className="p-4">
        <img
          alt={service.title}
          src={service.icon}
          className="w-full aspect-square object-contain rounded-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    }
  >
    <Title level={4} className={`mb-2 ${service.highlighted ? 'text-white' : 'text-gray-800'}`}>
      {service.title}
    </Title>
    {service.description && (
      <Paragraph className={service.highlighted ? 'text-blue-50' : 'text-gray-600'}>
        {service.description}
      </Paragraph>
    )}
  </Card>
);

const ServiceSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Title level={2} className="mb-4">
            Our Specialty
          </Title>
          <Paragraph className="text-xl text-gray-600">
            We provide world-class services with the best medical team!
          </Paragraph>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 p-0 lg:grid-cols-4 md:gap-8 gap-2">
          {services.map((service, index) => (
            <div 
              key={index}
             
              className="flex"
            >
              <div className="w-full animate-fadeIn" style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}>
                <ServiceCard service={service} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

const services = [
  {
    title: "Orthodontic Treatments",
    description: "Professional braces and clear aligners for perfect smile alignment",
    icon: "/services/clear_align.jpg"
  },
  {
    title: "Root Canal Therapy (RCT)",
    description: "Root canal therapy is a treatment used to repair and save a tooth that is badly decayed or infected.",
    icon: "/services/root_canal.jpg"
  },
  {
    title: "Pulpotomy for Milk Teeth",
    description: "Pulpotomy is a procedure to save a tooth that has an inflamed pulp",
    icon: "/services/pulOptomy.jpg"
  },
  {
    title: "Fillings",
    description: "Glass ionomer cement fillings, Composite resin fillings, Amalgam fillings",
    icon: "/services/tooth_filling.jpg"
  },
  {
    title: "Extractions",
    description: "Simple extractions, Surgical extractions, Wisdom teeth extractions",
    icon: "/im4.png"
  },
  {
    title: "Dentures & Implants",
    description: "Removable and fixed dentures plus dental implant solutions",
    icon: "/im5.png"
  },
  {
    title: "Scaling & Root Planning",
    description: "Gum treatment for gum disease",
    icon: "/im6.png",
    highlighted: false
  },
  {
    title: "Dental X-rays",
    description: "Peri-apical x-rays and orthopantomogram/ Panoramic X-ray (OPG)",
    icon: "/im7.png"
  },
  {
    title: "Teeth Whitening",
    description: "In-office teeth whitening, Home teeth whitening",
    icon: "/im8.png"
  },
  {
    title: "Retainers & Night Guards",
    description: "Get your retainers and night guards",
    icon: "/im9.png"
  }
];

export default ServiceSection;