"use client";
import React, { useState } from 'react';
import { Button, Form, Input, Typography, Checkbox, Divider, message } from 'antd';
import { LockOutlined, UserOutlined, MedicineBoxOutlined } from '@ant-design/icons';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { Title, Text } = Typography;

  const onFinish = async (values: LoginFormValues) => {
    try {
      setLoading(true);
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Here you would typically authenticate with your backend
      console.log('Login submitted:', values);
      
      message.success('Login successful!');
      router.push('/dashboard');
    } catch (error) {
      message.error('Login failed. Please check your credentials.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Login | HealthCare Clinic</title>
        <meta name="description" content="Login to access your healthcare portal" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 py-6 px-6 flex justify-center items-center">
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <MedicineBoxOutlined className="text-white text-4xl" />
              </div>
              <Title level={3} className="!text-white !m-0">Glamerc clinic</Title>
              <Text className="text-blue-100">Login Page</Text>
            </div>
          </div>
          
          <div className="p-8">
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              layout="vertical"
              size="large"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input 
                  prefix={<UserOutlined className="text-gray-400" />} 
                  placeholder="Email address"
                  className="rounded-lg py-2"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please enter your password' }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="text-gray-400" />}
                  placeholder="Password"
                  className="rounded-lg py-2"
                />
              </Form.Item>

              <div className="flex justify-between items-center mb-4">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="text-blue-600 hover:text-blue-800 transition-colors text-sm">
                  Forgot password?
                </a>
              </div>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  loading={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 border-blue-600 rounded-lg h-12 !text-base"
                >
                  Sign In
                </Button>
              </Form.Item>
              
              <Divider plain>
                <span className="text-gray-400 text-sm">New patient?</span>
              </Divider>
              
              <Button 
                block 
                className="border-blue-600 text-blue-600 hover:text-blue-700 hover:border-blue-700 rounded-lg h-12"
              >
                Create an Account
              </Button>
            </Form>
          </div>
          
          <div className="px-8 pb-6 text-center">
            <Text className="text-gray-500 text-sm">
              By logging in, you agree to our <a className="text-blue-600">Terms of Service</a> and <a className="text-blue-600">Privacy Policy</a>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;