"use client";
import React, { useState } from "react";
import { Form, Input, DatePicker, Select, Button, Card, message } from "antd";
import moment from "moment";
import { registerUser } from "@/app/httpservices/user";
import { SignupFormValues } from "@/app/interfaces/users";
import { useRouter } from "next/navigation";

const { Option } = Select;

const DoctorForm = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: SignupFormValues) => {
    try {
      setLoading(true);
      const signupData = {
        name: values.firstName +" "+ values.lastName,
        email: values.email,
        phone: values.phone,
        dateOfBirth: values.dateOfBirth ? values.dateOfBirth.toISOString() : "",
        gender: values.gender,
        role: "CLINICIAN",
        password: values.password,
        insurance: values.insurance,
        specialist: values.specialist,
      };
      const response = await registerUser(signupData);
      if (response?.status == 201) {
        message.success(response.message);
        router.back();
      } else {
        message.error(response?.message);
      }
    } catch (error) {
      message.error(
        error instanceof Error
          ? error.message
          : "Registration failed. Please try again."
      );
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title="Add New Doctor"
      className="w-full container px-[10vw] [py-5vh]"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          specialist: "",
          insurance: "",
          gender: "",
        }}
      >
        <Form.Item
          name="firstName"
          label="First name"
          rules={[
            { required: true, message: "Please enter the first name" },
          ]}
        >
          <Input placeholder="Enter full name" />
        </Form.Item>
        
        <Form.Item
          name="lastName"
          label="Last name"
          rules={[
            { required: true, message: "Please enter the last name" },
          ]}
        >
          <Input placeholder="Enter full name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter email address" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="example@domain.com" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Please enter phone number" }]}
        >
          <Input placeholder="555-123-4567" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please enter password" },
            { min: 8, message: "Password must be at least 8 characters" },
          ]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>
        <Form.Item
          name="cpassword"
          label="Confirm password"
          rules={[
            { required: true, message: "Please enter password" },
            { min: 8, message: "Password must be at least 8 characters" },
          ]}
        >
          <Input.Password placeholder="Confirm password" />
        </Form.Item>
        <Form.Item name="specialist" label="Specialist">
          <Select placeholder="Select specialization">
            <Option value="">None</Option>
            <Option value="Cardiology">Cardiology</Option>
            <Option value="Dermatology">Dermatology</Option>
            <Option value="Neurology">Neurology</Option>
            <Option value="Ophthalmology">Ophthalmology</Option>
            <Option value="Psychiatry">Psychiatry</Option>
            <Option value="Pediatrics">Pediatrics</Option>
            <Option value="Orthopedics">Orthopedics</Option>
            <Option value="Gynecology">Gynecology</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="dateOfBirth"
          label="Date of Birth"
          rules={[{ required: true, message: "Please select date of birth" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Select placeholder="Select gender">
            <Option value="">Not specified</Option>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item className="flex flex-row gap-4">
          <Button type="default" className="bg-red-500 text-white mr-4">
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default DoctorForm;
