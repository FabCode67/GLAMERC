import React, { useState, useEffect, useRef } from 'react';
import { fetchExistingSlotsInDate, TimeSlot } from '@/app/server/apis';

interface TimeSlotCalendarProps {
  selectedDate: Date | null;
  onClose: (time: string, id: number) => void;
  clinicianId: number;
  clinicSubdomain?: string;
}

const TimeSlotCalendar: React.FC<TimeSlotCalendarProps> = ({ selectedDate, onClose, clinicianId }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [existingSlots, setExistingSlots] = useState<Record<string, TimeSlot[]> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleSlotClick = (slot: string, status: string, slotId: number) => {
    if (status === 'available') {
      onClose(slot, slotId);
      setIsModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    onClose("", 0);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchExistingSlotsInDate(clinicianId, selectedDate);
      setExistingSlots(res ?? {}); 
      setLoading(false);
    };

    fetchData();
  }, [selectedDate, clinicianId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className='bg-blue-1000'>
      {isModalOpen && (
        <div className=" inset-0 flex items-center bg-blue-200 justify-center fixed opacity-90 ">
          <div
            className="bg-white p-4 rounded-lg shadow-md lg:w-[95%] md:w-[80%] w-[95%]"
            ref={modalRef}
          >
            <div className='flex justify-between w-full mb-8'>
              <h2 className="text-lg font-semibold ">Select Time Slot</h2>
              <button onClick={closeModal} className="text-error">X</button>
            </div>
            <div className="bg-white">
              {loading ? (
                <div className="flex justify-center items-center h-24">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00205A]"></div>
                </div>
              ) : (
                <>
                  {existingSlots && Object.entries(existingSlots).map(([day, slots]: [string, TimeSlot[]]) => (
                    <div key={day} className={`gap-3 w-fit grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 ${slots?.length === 0 ? "md:grid-cols-1 lg:grid-cols-1" : "lg:grid-cols-4 md:grid-cols-4"}`}>
                      {slots?.length === 0 ? (
                        <div className="text-center mb-6 bottom-1">No slots available on {day}</div>
                      ) : (
                        <>
                          {slots.map((slot) => (
                            <button
                              key={slot.id}
                              className={`p-1 text-xs rounded-md text-center ${slot.is_booked ? 'bg-grey-200 text-grey-500 border cursor-not-allowed' : 'border border-[#00205A] text-[#00205A]'}`}
                              onClick={() => {
                                const formattedTime = `${formatTime(slot.start_time)} - ${formatTime(slot.end_time)}`;
                                const status = slot.is_booked ? 'taken' : 'available';
                                handleSlotClick(formattedTime, status, Number(slot.id));
                              }}
                            >
                              {formatTime(slot.start_time)} - {formatTime(slot.end_time)}
                            </button>
                          ))}
                        </>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="mt-4 flex gap-12">
              <div className="flex items-center">
                <div className="w-4 h-4 border border-[#00205A] rounded-full mr-2"></div>
                <span>Available time slots</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-grey-200 rounded-full mr-2"></div>
                <span>Taken slots</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeSlotCalendar;
