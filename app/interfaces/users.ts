export interface User{
    name:string,
    email:string,
    phone:string,
    password:string,
    specialist:string,
    dateOfBirth:string,
    insurance:string,
    gender:string,
}

export interface SignupFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    password: string;
    confirmPassword: string;
    insurance: string;
    specialist:string;
    termsAccepted: boolean;
  }