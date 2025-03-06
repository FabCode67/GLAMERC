import React from 'react';
import { CheckCircleOutlined, TeamOutlined, BulbOutlined, GlobalOutlined } from '@ant-design/icons';

const ClinicFeatures = () => {
  const features = [
    {
      icon: <CheckCircleOutlined className="text-4xl text-green-400" />,
      title: 'Patient-Centred Care',
      description: 'We listen to your concerns and tailor treatments to meet your individual needs.'
    },
    {
      icon: <TeamOutlined className="text-4xl text-green-600" />,
      title: 'Expert Team',
      description: 'Our highly skilled professionals are dedicated to advancing their expertise and delivering exceptional care.'
    },
    {
      icon: <BulbOutlined className="text-4xl text-green-800" />,
      title: 'Focus on Innovation',
      description: 'We continually adopt new techniques and technologies to enhance our dental services.'
    },
    {
      icon: <GlobalOutlined className="text-4xl text-green-400" />,
      title: 'Commitment to Accessibility',
      description: 'Breaking barriers by making specialized oral healthcare affordable and available to all.'
    }
  ];

  return (
    <section className="bg-white py-16 max-w-7xl px-4 flex flex-col items-center mx-auto">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="lg:text-4xl md:text-3xl text-xl font-bold text-gray-800 mb-4">Why Choose Glamerc Dental Clinic?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with compassionate care to ensure optimal outcomes for every patient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-4 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Visit Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClinicFeatures;