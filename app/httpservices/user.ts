import { User } from "../interfaces/users";
import { glamercApi } from "./axios";
export const userEndpoint = "/users";
export const registerUser = async (data: User) => {
  try {
    const response = await glamercApi.post(userEndpoint, data);
    return { message: response.data.message, status: response.data.status };
  } catch (err) {
    console.error(err);
  }
};

export const getAllClinicians = async (
) => {
  try {
    const response = await glamercApi.get(userEndpoint+`/clinicians`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const getAllpatients = async (
) => {
  try {
    const response = await glamercApi.get(userEndpoint);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
