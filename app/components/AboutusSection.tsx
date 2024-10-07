'use client'

const AboutSection = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-10 gap-5 relative px-2 items-center justify-between bg-white max-w-7xl mx-auto py-16 min-h-screen h-fit">
      <div className="md:w-1/2 w-full flex flex-col space-y-4">
      <h1 className="md:text-5xl text-2xl font-bold absolute md:top-24 top-5">About Us</h1>
        <div className="bg-teal-500 rounded-md mt-12">
          <p className="text-white text-base font-bold md:p-4 p-2">Founded in 2018, our dental clinic has dedicated itself to providing essential dental care to the people in Rwanda. With a strong focus on specialized services, particularly in dental prosthetics and orthodontics, we are focussing on addressing critical gaps in local healthcare, making these services more accessible to our community.
            <br /> <br /> With a dedicated team and a strong commitment to promoting oral health, we are eager to embrace new opportunities for growth. We actively seek to enhance our services based on industry standards and valuable patient feedback.
            <br /> <br /> Our unwavering goal is to make a lasting positive impact on the lives of our patients and the community we serve.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex flex-col gap-4">
      <div className="bg-teal-500 rounded-md md:p-4 p-2">
        <h1 className="text-white text-2xl font-bold">Vision</h1>
        <p className="text-white text-base md:p-4 p-2">Our vision is to become a center of excellence in dental care, establishing ourselves as a respected clinic that fosters lifelong relationships built on trust, confidence, and quality. We are committed to delivering exceptional patient care, providing the highest standards of dental services, and continuously advancing our expertise to ensure that every patient experiences the best in oral health. Through our dedication to innovation and excellence, we aim to be the preferred choice for dental care in our community, creating lasting impacts on the lives we touch.</p>
        </div>
      <div className="bg-teal-500 rounded-md md:p-4 p-2">
        <h1 className="text-white text-2xl font-bold">Mission</h1>
        <p className="text-white text-base md:p-4 p-2">Our mission is to provide comprehensive and compassionate dental care that exceeds the expectations of our patients. We are dedicated to offering personalized treatment with a focus on dental prosthetics and orthodontics, ensuring that each patient receives care tailored to their unique needs. By fostering a welcoming and professional environment, we strive to build lifelong relationships based on trust and confidence. We are committed to continuous learning and the adoption of advanced technologies to maintain the highest quality of work, ultimately contributing to the overall well-being of our community and becoming the leading dental clinic in the region.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
