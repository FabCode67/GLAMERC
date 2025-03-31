"use client";
import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Typography,
  Select,
  Checkbox,
  Divider,
  message,
  DatePicker,
} from "antd";
import {
  LockOutlined,
  UserOutlined,
  MedicineBoxOutlined,
  PhoneOutlined,
  IdcardOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import Head from "next/head";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { registerUser } from "@/app/httpservices/user";
import { SignupFormValues } from "@/app/interfaces/users";



const { Option } = Select;

const SignupPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { Title, Text, Paragraph } = Typography;
  const [form] = Form.useForm();

  const onFinish = async (values: SignupFormValues) => {
    try {
      setLoading(true);

      const signupData = {
        name: values.firstName +" "+ values.lastName,
        email: values.email,
        phone: values.phone,
        dateOfBirth: values.dateOfBirth ? values.dateOfBirth.toISOString() : "",
        gender: values.gender,
        password: values.password,
        insurance: values.insurance,
        specialist: "",
      };
      const response = await registerUser(signupData);
      if (response?.status == 201) {
        message.success(response.message);
        router.push("/auth/login");
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
    <>
      <Head>
        <title>Sign Up | HealthCare Clinic</title>
        <meta
          name="description"
          content="Create a new patient account at HealthCare Clinic"
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden my-8">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 py-6 px-6 flex justify-center items-center">
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <MedicineBoxOutlined className="text-white text-4xl" />
              </div>
              <Title level={3} className="!text-white !m-0">
                HealthCare Clinic
              </Title>
              <Text className="text-blue-100">New Patient Registration</Text>
            </div>
          </div>

          <div className="p-8">
            <Form
              form={form}
              name="signup"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
              requiredMark="optional"
              scrollToFirstError
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[
                    { required: true, message: "Please enter your first name" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="text-gray-400" />}
                    placeholder="First Name"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[
                    { required: true, message: "Please enter your last name" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="text-gray-400" />}
                    placeholder="Last Name"
                    className="rounded-lg"
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="Email address"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                  {
                    pattern: /^[0-9\-\+\(\)\s]+$/,
                    message: "Please enter a valid phone number",
                  },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined className="text-gray-400" />}
                  placeholder="Phone Number"
                  className="rounded-lg"
                />
              </Form.Item>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item
                  name="dateOfBirth"
                  label="Date of Birth"
                  rules={[
                    {
                      required: true,
                      message: "Please select your date of birth",
                    },
                  ]}
                >
                  <DatePicker
                    className="w-full rounded-lg"
                    format="MM/DD/YYYY"
                    placeholder="MM/DD/YYYY"
                    suffixIcon={<CalendarOutlined className="text-gray-400" />}
                  />
                </Form.Item>

                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    { required: true, message: "Please select your gender" },
                  ]}
                >
                  <Select placeholder="Select gender" className="rounded-lg">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="non-binary">Non-binary</Option>
                    <Option value="other">Other</Option>
                    <Option value="prefer-not-to-say">Prefer not to say</Option>
                  </Select>
                </Form.Item>
              </div>

              <Form.Item name="insurance" label="Insurance Provider (Optional)">
                <Input
                  prefix={<IdcardOutlined className="text-gray-400" />}
                  placeholder="Insurance Provider"
                  className="rounded-lg"
                />
              </Form.Item>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: "Please enter your password" },
                    {
                      min: 8,
                      message: "Password must be at least 8 characters",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    prefix={<LockOutlined className="text-gray-400" />}
                    placeholder="Password"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  name="confirmPassword"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    { required: true, message: "Please confirm your password" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("The two passwords do not match")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="text-gray-400" />}
                    placeholder="Confirm password"
                    className="rounded-lg"
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="termsAccepted"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            new Error(
                              "You must accept the terms and conditions"
                            )
                          ),
                  },
                ]}
              >
                <Checkbox>
                  I agree to the{" "}
                  <a className="text-blue-600">Terms of Service</a> and{" "}
                  <a className="text-blue-600">Privacy Policy</a>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 border-blue-600 rounded-lg h-12 !text-base"
                >
                  Create Account
                </Button>
              </Form.Item>

              <Divider plain>
                <span className="text-gray-400 text-sm">
                  Already have an account?
                </span>
              </Divider>

              <Link href="/login" passHref>
                <Button
                  block
                  className="border-blue-600 text-blue-600 hover:text-blue-700 hover:border-blue-700 rounded-lg h-12"
                >
                  Sign In
                </Button>
              </Link>
            </Form>
          </div>

          <div className="px-8 pb-6 text-center">
            <Paragraph className="text-gray-500 text-sm">
              By creating an account, you agree to receive appointment reminders
              and notifications via email and SMS.
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
