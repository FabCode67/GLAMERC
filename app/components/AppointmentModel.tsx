// components/AppointmentModal.tsx
import { useState } from 'react';
import { FiX } from 'react-icons/fi';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  reason: string;
  contactMethod: string;
}

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
    contactMethod: 'whatsapp'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.contactMethod === 'whatsapp') {
      const message: string = `New Appointment Request:\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nReason: ${formData.reason}`;
      const phoneNumber: string = '+250784012286';
      const whatsappUrl: string = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      const subject: string = 'New Appointment Request';
      const body: string = `Name: ${formData.name}%0D%0ADate: ${formData.date}%0D%0ATime: ${formData.time}%0D%0AReason: ${formData.reason}`;
      window.location.href = `mailto:dentalimaging100@gmail.com?subject=${subject}&body=${body}`;
    }
    
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white flex flex-col self-center my-auto justify-center rounded-lg p-6 w-full max-w-md">
        {/* Rest of your modal JSX remains exactly the same */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Book Appointment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                value={formData.name}
                placeholder='e.g., John Doe'
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contact Method</label>
              <select
                name="contactMethod"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                value={formData.contactMethod}
                onChange={handleChange}
              >
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
              </select>
            </div>

            {formData.contactMethod === 'whatsapp' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g., +250789123456"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                name="time"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                value={formData.time}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Reason for Appointment</label>
              <textarea
                name="reason"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                value={formData.reason}
                onChange={handleChange}
                placeholder='e.g., Routine check-up'
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 px-4 rounded-full hover:bg-blue-900 transition-colors"
            >
              Submit Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;