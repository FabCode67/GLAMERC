'use client'
import Image from 'next/image';
import ClinicFeatures from './WhyUs';
const AboutSection = () => {
  return (
    <><div id="about" className="relative max-w-7xl lg:flex-row flex flex-col gap-5 my-auto mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 sm:pt-20 sm:pb-20">
      <div className="md:w-1/2 w-full  my-auto flex flex-col space-y-4">
        <h1 className="md:text-3xl text-2xl font-semibold absolute md:top-12 -top-5">About Us</h1>
        <Image src="/images/recept.jpg" alt="About Us" width={500} height={500} className="rounded-md w-full object-fill" />
        <div className="bg-blue-500 rounded-md my-auto mt-auto justify-center flex">
        </div>
      </div>
      <div className="md:w-1/2 mt-6 w-full flex flex-col gap-4">
        <div className="bg-blue-500 rounded-md md:p-4 p-2">
        <h1 className="text-white text-2xl font-bold">Vision</h1>

          <p className="text-white text-base md:p-4 p-2">            To be a centre of excellence in dental care, recognized for fostering lifelong relationships built on trust, confidence, and quality. We aim to be the preferred choice for dental care in our community, creating lasting impacts on the lives we touch. 
          </p>
        </div>
        <div className="bg-blue-500 rounded-md md:p-4 p-2">
          <h1 className="text-white text-2xl font-bold">Mission</h1>
          <p className="text-white text-base md:p-4 p-2">{"Our mission is to provide compassionate and personalized dental care, focusing on prosthetics and orthodontics to improve our patients’ lives."}</p>
        </div>
      </div>
    </div><ClinicFeatures /></>

  );
};

export default AboutSection;
