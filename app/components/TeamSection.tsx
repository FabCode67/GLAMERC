import { FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import getDoctors from '@/app/server/apis';
import { useEffect, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { PiPhoneBold } from 'react-icons/pi';
import { LiaLinkedin } from 'react-icons/lia';
import NewAppointment, { Clinician } from './Appointment';

type Doctor = {
    id: number;
    active: boolean;
    profile_picture_url?: string;
    gender?: string;
    first_name?: string;
    last_name?: string;
    role?: string;
    phone?: string;
    email?: string;
} & Clinician;

const TeamPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [selectedClinician, setSelectedClinician] = useState<Clinician | null>(null);
    const [teamData, setTeamData] = useState<Doctor[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    // const sectionRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await getDoctors();
                if (response && Array.isArray(response.data)) {
                    setTeamData(response.data);
                    setLoading(false);
                } else {
                    console.error("Unexpected response structure:", response);
                    setTeamData([]);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching doctors:", error);
                setTeamData([]);
                setLoading(false);
            }
            setLoading(false);
        };
        fetchDoctors();
    }, []);

    const showModal = (doctor: Doctor) => {
        setSelectedClinician(doctor);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    // useEffect(() => {
    //     sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    // }, [currentPage]);

    const doeMember = teamData?.find(member => member.last_name === "OMWETOWAZE");
const otherMembers = teamData?.filter(member => member.role === "dentist" && member.first_name !== 'Dr Gilbert Cham ' && member.last_name !== "OMWETOWAZE")
    .filter(member => member.active)
    .reverse();

let paginatedDoctors = otherMembers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

if (doeMember) {
    paginatedDoctors = paginatedDoctors.filter(member => member.last_name !== "OMWETOWAZE");
    paginatedDoctors.push(doeMember);
}
//display only last doe member



    const totalPages = Math.ceil(paginatedDoctors.filter(member => member.active).length / itemsPerPage);    
    return (
        <section id="team" className="bg-gray-100 py-4">
            <div className="container mx-auto px-4 md:px-8 md:max-w-7xl w-full">
                <h2 className="text-center text-4xl font-bold text-teal-600 mb-8">Meet Our Team</h2>
                <div className='w-full flex flex-col'>
                    <div className="flex md:flex-row flex-col w-full md:space-x-4 space-x-0">
                        {/* Static Team Member */}
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="p-6 shadow rounded-xl flex flex-col items-center md:w-[30%] w-full md:h-[33rem] h-fit space-y-4"
                        >
                            <img src="/gm1.jpg" alt="team" className="object-cover h-[70%]" />
                            <div className="text-center">
                                <h3 className="text-lg font-medium text-gray-800">Godfrey Gafirita</h3>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mt-0 text-gray-800">Managing Director</h3>
                            </div>
                            <div className="flex space-x-4 text-teal-600 mt-4">
                                <a target="_blank" rel="noopener noreferrer" href="in/gafirita-godfrey">
                                    <LiaLinkedin size={20} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="tel:+2500784012286">
                                    <PiPhoneBold size={20} />
                                </a>
                                <a target="_blank" href="mailto:dentalimaging100@gmail.com" rel="noopener noreferrer">
                                    <TfiEmail size={20} />
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+2500784012286">
                                    <BsWhatsapp size={20} />
                                </a>
                            </div>
                        </motion.div>
                        {/* Doctors List with Pagination */}
                        <div className="doctorsDiv grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 md:w-[70%] md:mt-0 mt-5 w-full">
                            {paginatedDoctors.length > 0 ? (
                                paginatedDoctors?.map((member, index) => (
                                    <>
                                        {
                                            loading ? (
                                                <div className="flex mx-auto justify-center items-center h-full w-full">
                                                    <p>Loading...</p>
                                                </div>
                                            ) : (
                                                <motion.div
                                                    key={index}
                                                    className="bg-white md:p-2 p-1 text-sm md:rounded-xl rounded-none shadow-lg flex h-fit flex-col items-center space-y-2"
                                                >
                                                    <img
                                                        src={member.profile_picture_url ? member.profile_picture_url : member.gender === "Female" ? "/womandoc.png" : "mandoc.png"}
                                                        alt={member.first_name}
                                                        className={`w-full object-cover ${member.last_name === "NZABONIMANA" ? "h-[12.8rem]" : "md:h-56 h-48"}`}
                                                    />
                                                    <div className="text-center">
                                                        <h3 className="md:text-sm text-sm font-semibold text-gray-800">{member.first_name} {' '} {member.last_name}</h3>
                                                        <p className="text-teal-600">
                                                            {member?.first_name === "Godfrey" && member?.last_name === "Gafirita" ? "Dentist" : member?.first_name === "Pacifique" && member?.last_name === "OMWETOWAZE" ? "Dentist" : member.first_name === "Vincent" && member.last_name === "MUGAMBIRA" ? "Dentist" : member.last_name === "MUZIMBA" ? " Dental surgeon" : member.last_name === "UWIMANA" ? "Dental surgeon" : member.last_name === "NZABONIMANA" ? "Dentist" : member.first_name === "Valentine" && member.last_name === "KAMPUNGA" ? "Chief accountant" : member.last_name === "KABASINGA" ? "Verification officer" : member.last_name === "KAMATENESI" ? "Receptionist & Cashier" : member.last_name === "MUTAMBARUNGU" ? "Receptionist & Cashier" : member.first_name === "Emmanuel" && member.last_name === "Turikumwe" ? "Dental Assistant" : member.first_name === "Kevine" && member.last_name === "UMUHOZA" ? "Dental Assistant" : member.first_name === "Dinah" && member.last_name === "TUMUKUNDE" ? "Dental Assistant" : member.first_name === "Mukamuhirwa" ? "Housekeeper" : member.first_name === "Mukanyandwi" ? "Housekeeper" : member.last_name === "Uwineza" ? "Dental Assistant" : member.role}
                                                        </p>
                                                    </div>
                                                    {((member.role !== "receptionist") && (member.role !== "nurse") && (member.role !== "finance_manager") && (member.role !== "lab_technician") && (member.role !== "store_keeper") && (member.role !== "customer_care")) ? (
                                                        <motion.button
                                                            whileHover={{ scale: 1.01 }}
                                                            className="bg-teal-600 w-fit text-sm text-white py-1 lg:px-2 md:text-xs lg:text-sm px-1 rounded-md justify-center mx-auto text-center inline-flex items-center space-x-2"
                                                            onClick={() => showModal(member)}
                                                        >
                                                            <FaCalendarAlt />
                                                            <span>Book Appointment</span>
                                                        </motion.button>
                                                    ) : (
                                                        <div className="flex space-x-4 py-1 text-teal-600">
                                                            <a target="_blank" rel="noopener noreferrer" href={`tel:${member.phone}`}>
                                                                <PiPhoneBold size={20} />
                                                            </a>
                                                            <a target="_blank" href={`mailto:dentalimaging100@gmail.com`} rel="noopener noreferrer">
                                                                <TfiEmail size={20} />
                                                            </a>
                                                            <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${member.phone}`}>
                                                                <BsWhatsapp size={20} />
                                                            </a>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                    </>

                                ))
                            ) : (
                                <div className="flex mx-auto justify-center items-center h-full w-full">
                                    {loading ? (
                                        <p className='  mx-auto justify-center'>Loading Clinicians...</p>
                                    ) : (
                                        <p>No active team members available.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end ml-auto space-x-4 mt-8">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-teal-600 text-white' : 'bg-gray-300 text-gray-700'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <NewAppointment
                isModalVisible={isModalVisible}
                selectedClinician={selectedClinician}
                handleCancel={handleCancel}
            />
        </section>
    );
};

export default TeamPage;

