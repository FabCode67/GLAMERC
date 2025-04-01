import React, { useEffect, useState } from "react";
import {
  Modal,
  Form,
  Input as AntdInput,
  Select,
  DatePicker,
  Button,
  TimePicker,
} from "antd";
import {
  getAllCliniciansFromParticularClinic,
} from "../server/apis";
import dayjs from "dayjs";
import { notification } from "antd";
import type { NotificationArgsProps, TimePickerProps } from "antd";
import useSWR from "swr";
import { getAllClinicians } from "../httpservices/user";
import { createApplicationAsGuest } from "../httpservices/appointment";
import { useSession } from "next-auth/react";
type NotificationPlacement = NotificationArgsProps["placement"];
export type Clinician = {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  active: boolean;
  name: string;
  value: number;
};
type AppointmentFormValues = {
  title: string;
  patient_id: string;
  doctor_id: number;
  client: string;
  date: string;
  timeslot_id: string | number;
  comment: string;
  hide_details: boolean;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  date_of_birth: string;
  gender: string;
};
type ClinicianInfo = {
  id: number;
  name: string;
  role: string;
  specialist: string;
};
const { Option } = Select;

interface NewAppointmentProps {
  isModalVisible: boolean;
  selectedClinician?: Clinician | null;
  handleCancel: () => void;
}

const NewAppointment: React.FC<NewAppointmentProps> = ({
  isModalVisible,
  selectedClinician,
  handleCancel,
}) => {
  const session:any =useSession();
  const { data, error, isLoading } = useSWR(["clinicians"], getAllClinicians);
  const [clinicians, setClinicians] = useState<Clinician[]>([]);
  const [clinician, setClinician] = useState<Clinician | null>(null);
  const [selectedTime, setselectedTime] = useState<string | null>("00:00:00");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [isTimeSlotCalendarOpen, setIsTimeSlotCalendarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [slotID, setSlotID] = useState<number>(0);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const currentUserinfo =session?.data;
  const [appointment, setAppointment] = useState<AppointmentFormValues>({
    title: "",
    patient_id: "",
    doctor_id: 0,
    client: "",
    date: "",
    timeslot_id: "",
    comment: "",
    hide_details: false,
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    gender: "",
  });

  useEffect(() => {
    // if (selectedClinician?.id) {
    const fetchClinicians = async () => {
      try {
        const clinicians = await getAllCliniciansFromParticularClinic();
        const activeClinicians = clinicians?.filter(
          (clinician: Clinician) => clinician?.active
        );
        setClinicians(activeClinicians);
      } catch (error) {
        console.error(error);
      }
    };
    fetchClinicians();
    // }
  }, []);
  const handleFormSubmit = () => {};
  const clinicId: number = Number(process.env.NEXT_PUBLIC_ID);
  const openTimeSlotCalendar = () => {
    setIsTimeSlotCalendarOpen(true);
  };

  const handleTimeSlotClose = (time: string, slotID: number) => {
    setIsTimeSlotCalendarOpen(false);
    if (time) {
      setSelectedTimeSlot(time);
      setSlotID(slotID);
    }
  };
  const formattedLabel = selectedClinician?.name
    ?.toLowerCase()
    .replace(/\s/g, "_");
  // useEffect(() => {
  //   const getExistingSlots = async () => {
  //     const response = await fetchExistingSlotsInDate(
  //       typeof statusClinisan?.value === "number"
  //         ? statusClinisan.value
  //         : selectedClinician?.id ?? 0,
  //       formattedLabel
  //     );
  //     const keyDates = response && Object.keys(response);
  //     setAvailableDates(keyDates);
  //   };
  //   getExistingSlots();
  // }, [statusClinisan, selectedClinician]);
  const handleAppointmentChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };
  const onChange: TimePickerProps["onChange"] = (time, timeString) => {
    setselectedTime(timeString as string);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const {
      first_name,
      last_name,
      email,
      phone_number,
      gender,
      comment,
    } = appointment;
    const appointmentData={
        name:currentUserinfo?.user?.name||first_name+" "+last_name,
        email:currentUserinfo?.user?.email||email,
        phone:currentUserinfo?.user?.phone||phone_number,
        appoint_date:selectedStartDate as unknown as string,
        appoint_time:selectedTime as unknown as string,
        reason :comment,
        gender:currentUserinfo?.user?.gender||gender,
        clinicianId:clinician?.value as unknown as string
    }
    if (!selectedTime) {
      notification.error({
        message: "Error",
        description: "Please select a time slot",
        placement: "topRight" as NotificationPlacement,
      });
      setLoading(false);
      return;
    }
    try {
      const response = await createApplicationAsGuest(appointmentData);
      if (response?.status != 201) {
        notification.error({
          message: "Error",
          description: response?.message,
        });
        setLoading(false);
      } else {
        notification.success({
          message: "success",
          description: response?.message,
        });
      }

      // else if (response?.token) {
      //     notification.success({
      //         message: 'Success',
      //         description: 'Appointment created successfully',
      //         placement: 'topRight' as NotificationPlacement,
      //     });
      //     setIsSuccessModalVisible(true);
      //     handleReset();
      //     handleCancel();
      //     setLoading(false);
      // } else {
      //     notification.error({
      //         message: 'Error',
      //         description: "Some Error Occured",
      //         placement: 'topRight' as NotificationPlacement,
      //     });
      //     setLoading(false)
      // }
    } catch (error) {
      notification.error({
        message: "Error",
        description: "Some Error Occured",
        placement: "topRight" as NotificationPlacement,
      });
      setLoading(false);
      console.error(error);
    }
    setLoading(false);
  };

  if (data) {
    return (
      <>
        <Modal
          title={`Book Appointment with ${
            selectedClinician
              ? selectedClinician?.first_name +
                " " +
                selectedClinician?.last_name
              : "Glamerc-Dental clinic"
          }`}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          
          <Form onFinish={handleFormSubmit}>
            <div className={currentUserinfo?"hidden":"flex w-full md:gap-2 gap-0 md:flex-row flex-col justify-between"}>
              <Form.Item
                name="first_name"
                rules={[{ required: true, message: "Please input your name!" }]}
                className="md:w-1/2 w-full"
              >
                <AntdInput
                  placeholder="Enter your first name"
                  value={appointment.first_name}
                  onChange={handleAppointmentChange}
                  name="first_name"
                />
              </Form.Item>
              <Form.Item
                name="last_name"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
                className="md:w-1/2 w-full"
              >
                <AntdInput
                  placeholder="Enter your last name"
                  value={appointment.last_name}
                  onChange={handleAppointmentChange}
                  name="last_name"
                />
              </Form.Item>
            </div>
            <div className={currentUserinfo?"hidden":"flex w-full md:gap-2 gap-0 md:flex-row flex-col justify-between"}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
                className="md:w-1/2 w-full"
              >
                <AntdInput
                  placeholder="Email"
                  value={appointment.email}
                  onChange={handleAppointmentChange}
                  name="email"
                />
              </Form.Item>
              <Form.Item
                name="phone_number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone_number number!",
                  },
                ]}
                className="md:w-1/2 w-full"
              >
                <AntdInput
                  placeholder="phone_number (+250786684390)"
                  value={appointment.phone_number}
                  onChange={handleAppointmentChange}
                  name="phone_number"
                />
              </Form.Item>
            </div>
            <div className={currentUserinfo?"hidden":"flex w-full md:gap-2 gap-0 md:flex-row flex-col justify-between"}>
              <Form.Item
                name="gender"
                rules={[
                  { required: true, message: "Please select your gender!" },
                ]}
                className="md:w-1/2 w-full"
              >
                <Select
                  placeholder="Select your gender"
                  value={appointment.gender}
                  onChange={(value) =>
                    setAppointment({ ...appointment, gender: value })
                  }
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </Form.Item>
            </div>
            {!selectedClinician && (
              <Form.Item
                name="clinician"
                rules={[
                  { required: true, message: "Please select a clinician!" },
                ]}
              >
                <Select
                  labelInValue
                  showSearch
                  placeholder="Select Clinician"
                  optionFilterProp="children"
                  onChange={(value) => setClinician(value)}
                  filterOption={(input, option) =>
                    String(option?.children)
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  style={{
                    height: "30px",
                    borderRadius: "8px",
                    border: "1px",
                    outline: "none",
                    backgroundColor: "#F3F4F6",
                    width: "100%",
                  }}
                >
                  {data.map((clinician: ClinicianInfo) => (
                    <Select.Option key={clinician.id} value={clinician.id}>
                      {clinician.name}{" "}
                      <span className="text-green-600">
                        ({clinician.specialist})
                      </span>
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            )}
            <Form.Item
              name="date"
              rules={[{ required: true, message: "Please select a date!" }]}
            >
              <DatePicker
                className="w-full mt-0 rounded-lg bg-grey-200 p-4 border-none outline-none"
                placeholder="Select Date"
                onChange={(value) => setSelectedStartDate(value?.toDate())}
                disabledDate={(currentDate) => {
                  const isBeforeToday =
                    currentDate && currentDate < dayjs().startOf("day");
                  return isBeforeToday;
                }}
              />
            </Form.Item>
            {/* {selectedStartDate && (
                        <Form.Item name="time" rules={[{ required: true, message: 'Please select a time!' }]}>
                            <div
                                onClick={openTimeSlotCalendar}
                                className=" w-full p-4 py-2 bg-grey-200 border border-grey-300 rounded-md shadow-sm cursor-pointer"
                            >
                                {selectedTimeSlot || "Select a time slot"}
                            </div>
                        </Form.Item>
                    )} */}
            <TimePicker
              onChange={onChange}
              defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
            />
            <Form.Item
              name="comment"
              rules={[
                {
                  required: true,
                  message: "Please input your reason for appointment!",
                },
              ]}
            >
              <AntdInput.TextArea
                placeholder="Reason for appointment"
                onChange={handleAppointmentChange}
                name="comment"
                value={appointment.comment}
              />
            </Form.Item>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`mt-4 hover:bg-green-600 bg-white px-12 flex self-end mx-auto justify-end text-green-600 hover:text-white p-1 rounded-md border-green-600 border
                        ${loading ? " cursor-not-allowed opacity-50" : ""}
                        `}
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </Form>
          {/* {isTimeSlotCalendarOpen && (
            <TimeSlotCalendar
              selectedDate={selectedStartDate}
              onClose={handleTimeSlotClose}
              clinicianId={Number(
                statusClinisan?.value ?? selectedClinician?.id
              )}
            />
          )} */}
        </Modal>
        {isSuccessModalVisible && (
          <Modal
            title="Appointment Created Successfully"
            visible={isSuccessModalVisible}
            onCancel={() => setIsSuccessModalVisible(false)}
            footer={[
              <Button
                key="close"
                onClick={() => setIsSuccessModalVisible(false)}
              >
                Close
              </Button>,
            ]}
          >
            <h1 className="font-bold text-xl text-blue-500">
              Your appointment with Glamerc Dental clinic created successfully
            </h1>
          </Modal>
        )}
      </>
    );
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
};

export default NewAppointment;
