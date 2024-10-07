import { CgLoadbarAlt } from "react-icons/cg";
import { motion } from "framer-motion";

const HeroSection = () => {
    const containerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                when: "beforeChildren",
                staggerChildren: 0.3
            } 
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
    };

    return (
        <section className="relative bg-gradient-to-r from-black/60 to-transparent w-full h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/dent.avif')" }}
            ></div>

            <div className="h-full w-full bg-gradient-to-r px-2 from-black to-transparent relative inset-0">
                <div className="absolute md:max-w-7xl w-full mx-auto inset-0">
                    {/* Content with Motion */}
                    <motion.div 
                        className="relative md:w-[60%] w-full z-10 flex flex-col justify-center items-start h-full"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Heading */}
                        <motion.h2 className="md:text-2xl text-lg  px-2 text-white" variants={textVariants}>
                            Welcome to <br />  
                            <b className="md:text-3xl text-2xl mt-2">GLAMERC SPECIALIST CLINIC - DENTAL CLINIC</b>
                        </motion.h2>
                       
                        <motion.p className="text-white mt-4 md:font-bold font-medium  px-2 md:text-xl text-base" variants={textVariants}>Our unwavering goal is to make a lasting positive impact on the lives of our patients and the community we serve.
                        </motion.p>
                        <motion.div className="flex space-x-4 md:px-0 px-2 mt-4" variants={textVariants}>
                            <button className="border border-teal-500 bg-teal-500 hover:bg-white hover:text-teal-500 text-white px-6 py-2 rounded">
                                Discover More
                            </button>
                            <button className="border border-teal-500 hover:bg-teal-500 bg-white hover:text-white text-teal-500 px-6 py-2 rounded">
                                Book Appointment
                            </button>
                        </motion.div>
                        <motion.div className="flex flex-col space-y-8 shadow backdrop-blur-md bg-black/60 mt-12 rounded-md p-2 space-x-4" variants={textVariants}>
                            <h1 className="text-white font-bold text-xs px-1">Core Values</h1>
                            <ul className="text-white italic flex flex-col font-bold mt-4 gap-2 text-xs">
                                <li>Compassion and Care</li>
                                <li>Integrity and Honesty</li>
                                <li>Respect and Dignity</li>
                                <li>Continuous Improvement</li>
                                <li>Teamwork and Collaboration</li>
                            </ul>
                        </motion.div>
                        <motion.div className="flex md:space-x-4 space-x-2 md:mt-20 mt-10" variants={textVariants}>
                            <CgLoadbarAlt className="text-white md:text-5xl text-3xl" />
                            <h1 className="md:text-3xl text-base font-bold text-white">
                                Your Journey to Better Health Starts Here
                            </h1>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
