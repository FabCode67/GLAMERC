import { guestappointment } from "../interfaces/appointment";
import { glamercApi } from "./axios";
const guestappointmentEndpoint = "guest-appointments";
export const createApplicationAsGuest = async (data: guestappointment) => {
  try {
    const response = await glamercApi.post(guestappointmentEndpoint, data);
    return { message: response.data.message, status: response.data.status };
  } catch (err) {
    console.error(err);
  }
};
export const getAllAppopintment = async () => {
  try {
    const response = await glamercApi.get(guestappointmentEndpoint);
    return response.data.appointments;
  } catch (err) {
    console.log(err);
  }
};

export const markAppointmentAsResponded = async (id: string) => {
  try {
    const response = await glamercApi.put(
      guestappointmentEndpoint + `/respond/${id}`
    );
    return { message: response.data.message, status: response.data.status };
  } catch (err) {
    console.log(err);
  }
};
