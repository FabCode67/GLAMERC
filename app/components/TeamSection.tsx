// components/TeamSection.tsx
import Image from 'next/image';
import { useState } from 'react';
import AppointmentModal from './AppointmentModel';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Godfrey Gafirita",
    role: "Head of Clinical Activities & Dentist",
    image: "/images/gaf.jpg",
  },
  {
    id: 2,
    name: "Jean Baptiste NZABONIMANA",
    role: "Orthopedic Surgeon",
    image: "/images/bap.jpg",
  },
  {
    id: 3,
    name: "Vincent MUGAMBIRA",
    role: "Dentist",
    image: "/images/vin.jpg",
  },
  {
    id: 4,
    name: "Dr Joseph MUZIMBA",
    role: "Orthopedic Surgeon",
    image: "/images/jos.jpg",
  }, 

  {
    id: 5,
    name: "Pacifique OMWETOWAZE",
    role: "Dentist",
    image: "/images/pac.jpg",
  },


];

const TeamSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Medical Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our highly qualified healthcare professionals are dedicated to providing
            the best medical care with compassion and expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative md:h-64 h-56 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  objectFit='contain'
                  className="object-cover"
                />
              </div>

              <div className="md:p-6 p-2">
                <h3 className="md:text-xl text-sm font-semibold text-gray-900 md:mb-2 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 md:text-base text-sm font-medium md:mb-2 mb-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to schedule an appointment with one of our specialists?
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-900 transition-colors duration-300"
          >
            Book an Appointment
          </button>
        </div>
      </div>
      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

export default TeamSection;