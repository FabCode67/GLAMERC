import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const clinicians = [
  {
    name: 'Dr. Jane Doe',
    title: 'Cardiologist',
    whatsapp: '+250 788 000 001',
    phone: '+250 788 000 001',
    email: 'jane.doe@example.com',
  },
  {
    name: 'Dr. John Smith',
    title: 'Dentist',
    whatsapp: '+250 788 000 002',
    phone: '+250 788 000 002',
    email: 'john.smith@example.com',
  },
  {
    name: 'Dr. Alice Johnson',
    title: 'Neurosurgeon',
    whatsapp: '+250 788 000 003',
    phone: '+250 788 000 003',
    email: 'alice.johnson@example.com',
  },
  {
    name: 'Dr. Alice Johnson',
    title: 'Neurosurgeon',
    whatsapp: '+250 788 000 003',
    phone: '+250 788 000 003',
    email: 'alice.johnson@example.com',
  },
  {
    name: 'Dr. Alice Johnson',
    title: 'Neurosurgeon',
    whatsapp: '+250 788 000 003',
    phone: '+250 788 000 003',
    email: 'alice.johnson@example.com',
  },
 
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-500 mt-2">
          Our dedicated medical professionals are here to help you.
        </p>
      </div>

      {/* Clinic Admin - Main Card */}
      <div className="mb-12 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
        <img
          src="/doctor.png"
          alt="Clinic Admin"
          className="h-28 w-28 mx-auto rounded-full mb-4 object-contain"
        />
        <h3 className="text-2xl font-semibold mb-2">Dr. Sarah Lee</h3>
        <p className="text-gray-500 mb-4">Clinic Administrator</p>
        <div className="flex justify-center space-x-6 text-gray-700 mb-6">
          <a href="https://wa.me/250788000004" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-green-500 text-xl" />
          </a>
          <a href="tel:+250788000004">
            <FaPhoneAlt className="text-blue-500 text-xl" />
          </a>
          <a href="mailto:sarah.lee@example.com">
            <FaEnvelope className="text-red-500 text-xl" />
          </a>
        </div>
        <button className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300">
          Book Appointment
        </button>
      </div>

      {/* Other Clinicians - Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-7xl mx-auto">
        {clinicians.map((clinician, index) => (
          <div key={index} className="bg-white p-2 rounded-lg shadow-lg text-center">
            {/* Clinician Image Placeholder */}
            <img
              src={`/doctor.png`}
              alt={clinician.name}
              className="h-20 w-20 mx-auto rounded-full mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">{clinician.name}</h3>
            <p className="text-gray-500 mb-4">{clinician.title}</p>

            {/* Contact Icons */}
            <div className="flex justify-center space-x-6 text-gray-700 mb-6">
              <a href={`https://wa.me/${clinician.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-green-500 text-xl" />
              </a>
              <a href={`tel:${clinician.phone}`}>
                <FaPhoneAlt className="text-blue-500 text-xl" />
              </a>
              <a href={`mailto:${clinician.email}`}>
                <FaEnvelope className="text-red-500 text-xl" />
              </a>
            </div>

            {/* Book Appointment Button */}
            <button className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-300">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
