
'use client'
import React, { useEffect, useState } from 'react';
import { 
    Layout, 
    Menu, 
    Typography, 
    Button, 
    Avatar, 
    Dropdown, 
    Space, 
    Breadcrumb,
  } from 'antd';
import { 
  UserOutlined, 
  TeamOutlined, 
  CalendarOutlined, 
  DashboardOutlined, 
  SettingOutlined, 
  MedicineBoxOutlined, 
  FileTextOutlined,
  LineChartOutlined,
  DownOutlined,
  BellOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import Head from 'next/head';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

interface AppointmentData {
  key: string;
  patient: string;
  doctor: string;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  type: string;
}

interface DoctorData {
  key: string;
  name: string;
  specialty: string;
  appointments: number;
  availability: string;
}

export default function AdminDashboard ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");
  const pathname = usePathname();
  const path = pathname;
  useEffect(() => {
    if (path === '/admin') {
      setSelectedKey('dashboard');
    } else if (path.includes('/admin/appointment')) {
      setSelectedKey('appointments');
    } else if (path.includes('/admin/doctors')) {
      setSelectedKey('doctors');
    } else if (path.includes('/admin/patients')) {
      setSelectedKey('patients');
    } else if (path.includes('/admin/reports')) {
      setSelectedKey('reports');
    } else if (path.includes('/admin/analytics')) {
      setSelectedKey('analytics');
    } else if (path.includes('/admin/settings')) {
      setSelectedKey('settings');
    }
  }, [path]);
  const userMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>Profile</Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>Logout</Menu.Item>
    </Menu>
  );
  return (
    <>
      <Head>
        <title>Admin Dashboard | GLAMERC Clinic</title>
      </Head>
      
      <Layout style={{ minHeight: '100vh' }}>
        <Sider 
          width={230} 
          collapsible 
          collapsed={collapsed} 
          onCollapse={setCollapsed}
          className="shadow-md"
          style={{ background: '#fff' }}
        >
          <div className={`p-4 flex ${collapsed ? 'justify-center' : 'justify-start'} items-center`}>
            <MedicineBoxOutlined className="text-blue-600 text-2xl" />
            {!collapsed && <span className="ml-2 text-lg font-semibold text-blue-700">GLAMERC Clinic</span>}
          </div>
          
          <Menu
            mode="inline"
            defaultSelectedKeys={[selectedKey]}
            style={{ borderRight: 0 }}
          >
            <Menu.Item key="dashboard" icon={<DashboardOutlined />}><Link href={"/admin"}>Dashboard</Link></Menu.Item>
            <Menu.Item key="appointments" icon={<CalendarOutlined />}><Link href={"/admin/appointments"}>Appointments</Link></Menu.Item>
            <Menu.Item key="doctors" icon={<TeamOutlined />}><Link href={"/admin/doctors"}>Doctors</Link></Menu.Item>
            <Menu.Item key="patients" icon={<UserOutlined />}><Link href={"/admin/patients"}>Patients</Link></Menu.Item>
            <Menu.Item key="reports" icon={<FileTextOutlined />}><Link href={"/admin/reports"}>Reports</Link></Menu.Item>
            <Menu.Item key="analytics" icon={<LineChartOutlined />}><Link href={"/admin/analytics"}>Analytics</Link></Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}><Link  href={"/admin/settings"}>Settings</Link></Menu.Item>
          </Menu>
        </Sider>
        
        <Layout>
        <Header className="px-4 py-0 bg-white border-b border-gray-200 flex justify-between items-center">
            <Breadcrumb className="my-4">
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
            </Breadcrumb>
            
            <Space>
              <Button type="text" icon={<BellOutlined />} />
              <Dropdown overlay={userMenu} trigger={['click']}>
                <Button type="text">
                  <Space>
                    <Avatar icon={<UserOutlined />} />
                    {!collapsed && <span>Admin User</span>}
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </Space>
          </Header>
        {children}
        </Layout>
      </Layout>
    </>
  );
};

