import { api } from "./base";

export interface TimeSlot {
  start_time: string;
  end_time: string;
  id?: number;
  is_booked?: boolean;
}

interface SlotItem {
  day: string;
  timeslots: TimeSlot[];
}

export interface AppointmentDataInterface {
  title: string;
  clinic_id: number;
  doctor_id: number;
  timeslot_id: number;
  date: string;
  hide_details: boolean;
  comment: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: string;
  date_of_birth: string;
}



export default async function getDoctors() {
  try {
    const roles = ["doctor", "dentist", "lab_technician", "counselor", "psychologist", "psychiatrist", "financial_manager", "receptionist"]; 
    api.defaults.baseURL = `https://${process.env.NEXT_PUBLIC_SUBDOMAIN}.${process.env.NEXT_PUBLIC_API_DOMAIN}/api`;
    const res = await api.get(`/users?role=${roles.join(",")}`);
    if (res.status === 200) return res.data;
  } catch (e) {
    return { error: e };
  }
}

export async function fetchExistingSlotsInDate(
  user_data: number,
  date?: Date|null|string
): Promise<Record<string, TimeSlot[]> | undefined> {
  try {
    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_SUBDOMAIN}.${process.env.NEXT_PUBLIC_API_DOMAIN}/api/availabilities?user_id=${user_data}${
        date ? `&date=${date}` : ""
      }`
    );

    if (response.ok) {
      const data: SlotItem[] = await response.json();
      const groupedSlots = data.reduce((acc: Record<string, TimeSlot[]>, item: SlotItem) => {
        if (!acc[item.day]) {
          acc[item.day] = [];
        }
        acc[item.day].push(...item.timeslots);
        return acc;
      }, {});

      return groupedSlots;
    } else {
      console.error("Failed to fetch existing slots");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}


  export async function createAppointment(data: AppointmentDataInterface) {
    const API_URL = `https://${process.env.NEXT_PUBLIC_SUBDOMAIN}.${process.env.NEXT_PUBLIC_API_DOMAIN}/api/appointments`;
    try {
  
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const responseData = await response?.json();
        return responseData;
  
      } else {
        return [];
      }
    } catch (error) {
      return { error };
    }
  }

  
export async function getAllCliniciansFromParticularClinic() {
    try{
    api.defaults.baseURL = `https://${process.env.NEXT_PUBLIC_API_DOMAIN}/api`;
    const res = await api.get(`all_doctors?clinic_id=${process.env.NEXT_PUBLIC_ID}`);
    if (res.status === 200) return res.data;
  } catch (e) {
    return { error: e };
  }
}
