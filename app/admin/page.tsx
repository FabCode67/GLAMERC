// pages/admin/dashboard.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { 
  Layout, 
  Menu, 
  Typography, 
  Card, 
  Row, 
  Col, 
  Statistic, 
  Table, 
  Tag, 
  Button, 
  Avatar, 
  Dropdown, 
  Space, 
  Breadcrumb,
  Calendar,
  Badge
} from 'antd';
import { 
  UserOutlined, 
  TeamOutlined, 
  CalendarOutlined, 
  DashboardOutlined, 
  SettingOutlined, 
  BellOutlined, 
  LogoutOutlined, 
  UserAddOutlined, 
  MedicineBoxOutlined, 
  FileTextOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  LineChartOutlined,
  DownOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

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

const AdminDashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  
  // Mock statistics data
  const stats = {
    totalPatients: 1247,
    totalDoctors: 14,
    totalAppointments: 368,
    pendingAppointments: 42,
    completedAppointments: 312,
    cancelledAppointments: 14,
    appointmentsToday: 28,
    revenueMTD: '$28,450'
  };
  
  // Mock appointment data
  const recentAppointments: AppointmentData[] = [
    {
      key: '1',
      patient: 'Sarah Johnson',
      doctor: 'Dr. Michael Chen',
      date: '2025-03-08',
      time: '09:00 AM',
      status: 'scheduled',
      type: 'Consultation'
    },
    {
      key: '2',
      patient: 'Robert Williams',
      doctor: 'Dr. Emily Taylor',
      date: '2025-03-08',
      time: '10:30 AM',
      status: 'scheduled',
      type: 'Follow-up'
    },
    {
      key: '3',
      patient: 'Jennifer Lee',
      doctor: 'Dr. James Wilson',
      date: '2025-03-08',
      time: '11:15 AM',
      status: 'completed',
      type: 'Vaccination'
    },
    {
      key: '4',
      patient: 'David Brown',
      doctor: 'Dr. Sarah Parker',
      date: '2025-03-08',
      time: '02:00 PM',
      status: 'cancelled',
      type: 'Check-up'
    },
    {
      key: '5',
      patient: 'Maria Garcia',
      doctor: 'Dr. Michael Chen',
      date: '2025-03-09',
      time: '09:30 AM',
      status: 'scheduled',
      type: 'Consultation'
    }
  ];
  
  // Mock doctors data
  const activeDoctors: DoctorData[] = [
    {
      key: '1',
      name: 'Dr. Michael Chen',
      specialty: 'Cardiology',
      appointments: 8,
      availability: 'Available'
    },
    {
      key: '2',
      name: 'Dr. Emily Taylor',
      specialty: 'Pediatrics',
      appointments: 6,
      availability: 'Available'
    },
    {
      key: '3',
      name: 'Dr. James Wilson',
      specialty: 'Dermatology',
      appointments: 5,
      availability: 'Unavailable'
    },
    {
      key: '4',
      name: 'Dr. Sarah Parker',
      specialty: 'General Medicine',
      appointments: 9,
      availability: 'Available'
    }
  ];
  
  // Column definitions for the appointment table
  const appointmentColumns: ColumnsType<AppointmentData> = [
    {
      title: 'Patient',
      dataIndex: 'patient',
      key: 'patient',
    },
    {
      title: 'Doctor',
      dataIndex: 'doctor',
      key: 'doctor',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = '';
        let icon = null;
        
        switch(status) {
          case 'scheduled':
            color = 'blue';
            icon = <ClockCircleOutlined />;
            break;
          case 'completed':
            color = 'green';
            icon = <CheckCircleOutlined />;
            break;
          case 'cancelled':
            color = 'red';
            icon = <CloseCircleOutlined />;
            break;
        }
        
        return (
          <Tag color={color} icon={icon}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Tag>
        );
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: AppointmentData) => (
        <Space size="small">
          <Button type="text" size="small">View</Button>
          {record.status === 'scheduled' && (
            <>
              <Button type="text" size="small">Edit</Button>
              <Button type="text" danger size="small">Cancel</Button>
            </>
          )}
        </Space>
      ),
    },
  ];
  
  // Doctor column definitions
  const doctorColumns: ColumnsType<DoctorData> = [
    {
      title: 'Doctor',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => (
        <Space>
          <Avatar icon={<UserOutlined />} />
          {text}
        </Space>
      )
    },
    {
      title: 'Specialty',
      dataIndex: 'specialty',
      key: 'specialty',
    },
    {
      title: 'Today\'s Appointments',
      dataIndex: 'appointments',
      key: 'appointments',
    },
    {
      title: 'Status',
      dataIndex: 'availability',
      key: 'availability',
      render: (availability: string) => (
        <Tag color={availability === 'Available' ? 'green' : 'red'}>
          {availability}
        </Tag>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Button type="link" size="small">View Schedule</Button>
      ),
    },
  ];
  
  // Get today's date in a formatted string
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  // Sample data for calendar
  const getListData = (value: any) => {
    const day = value.date();
    const month = value.month();
    
    // Mock data - in a real app, this would come from your appointments database
    if (month === 2) { // March (0-indexed)
      if (day === 8) return [{ type: 'success', content: '28 appointments' }];
      if (day === 9) return [{ type: 'warning', content: '15 appointments' }];
      if (day === 10) return [{ type: 'error', content: '30 appointments' }];
      if (day === 15) return [{ type: 'success', content: '20 appointments' }];
      if (day === 22) return [{ type: 'warning', content: '18 appointments' }];
    }
    return [];
  };
  
  const dateCellRender = (value: any) => {
    const listData = getListData(value);
    return (
      <ul className="events p-0 m-0 list-none">
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type as any} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  
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
            defaultSelectedKeys={['dashboard']}
            style={{ borderRight: 0 }}
          >
            <Menu.Item key="dashboard" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
            <Menu.Item key="appointments" icon={<CalendarOutlined />}>Appointments</Menu.Item>
            <Menu.Item key="doctors" icon={<TeamOutlined />}>Doctors</Menu.Item>
            <Menu.Item key="patients" icon={<UserOutlined />}>Patients</Menu.Item>
            <Menu.Item key="reports" icon={<FileTextOutlined />}>Reports</Menu.Item>
            <Menu.Item key="analytics" icon={<LineChartOutlined />}>Analytics</Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>Settings</Menu.Item>
          </Menu>
        </Sider>
        
        <Layout>
          <Header className="px-4 py-0 bg-white border-b border-gray-200 flex justify-between items-center">
            <Breadcrumb className="my-4">
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
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
          
          <Content className="m-4 overflow-auto">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div className="flex justify-between items-center mb-4">
                  <Title level={3} className="!m-0">Dashboard Overview</Title>
                  <Text>{today}</Text>
                </div>
                <Card className="shadow-sm">
                  <Text>Welcome to the GLAMERC Clinic Administration Dashboard. Here you can manage appointments, doctors, and patients.</Text>
                </Card>
              </Col>
            </Row>
            
            <Row className="mt-4" gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6}>
                <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <Statistic 
                    title="Total Patients" 
                    value={stats.totalPatients} 
                    prefix={<UserOutlined />} 
                    valueStyle={{ color: '#3f8600' }}
                  />
                  <div className="mt-2">
                    <Button type="link" size="small" icon={<UserAddOutlined />}>
                      Add New
                    </Button>
                  </div>
                </Card>
              </Col>
              
              <Col xs={24} sm={12} md={6}>
                <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <Statistic 
                    title="Total Doctors" 
                    value={stats.totalDoctors} 
                    prefix={<TeamOutlined />} 
                    valueStyle={{ color: '#1890ff' }}
                  />
                  <div className="mt-2">
                    <Button type="link" size="small" icon={<UserAddOutlined />}>
                      Add New
                    </Button>
                  </div>
                </Card>
              </Col>
              
              <Col xs={24} sm={12} md={6}>
                <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <Statistic 
                    title="Total Appointments" 
                    value={stats.totalAppointments} 
                    prefix={<CalendarOutlined />} 
                    valueStyle={{ color: '#722ed1' }}
                  />
                  <div className="mt-2">
                    <Text type="secondary">This Month</Text>
                  </div>
                </Card>
              </Col>
              
              <Col xs={24} sm={12} md={6}>
                <Card className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  <Statistic 
                    title="Today's Appointments" 
                    value={stats.appointmentsToday} 
                    prefix={<ClockCircleOutlined />} 
                    valueStyle={{ color: '#fa8c16' }}
                  />
                  <div className="mt-2">
                    <Button type="link" size="small">
                      View All
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
            
            <Row className="mt-4" gutter={[16, 16]}>
              <Col xs={24} lg={16}>
                <Card 
                  title="Recent Appointments" 
                  className="shadow-sm"
                  extra={<Button type="primary">Add New Appointment</Button>}
                >
                  <Table 
                    columns={appointmentColumns} 
                    dataSource={recentAppointments} 
                    pagination={{ pageSize: 5 }}
                    size="middle"
                  />
                </Card>
              </Col>
              
              <Col xs={24} lg={8}>
                <Card title="Appointment Status" className="shadow-sm mb-4">
                  <Row gutter={[16, 16]}>
                    <Col span={8}>
                      <Statistic 
                        title="Pending" 
                        value={stats.pendingAppointments} 
                        valueStyle={{ color: '#1890ff' }}
                      />
                    </Col>
                    <Col span={8}>
                      <Statistic 
                        title="Completed" 
                        value={stats.completedAppointments} 
                        valueStyle={{ color: '#3f8600' }}
                      />
                    </Col>
                    <Col span={8}>
                      <Statistic 
                        title="Cancelled" 
                        value={stats.cancelledAppointments} 
                        valueStyle={{ color: '#cf1322' }}
                      />
                    </Col>
                  </Row>
                </Card>
                
                <Card title="Active Doctors Today" className="shadow-sm">
                  <Table 
                    columns={doctorColumns} 
                    dataSource={activeDoctors} 
                    pagination={false}
                    size="small"
                  />
                </Card>
              </Col>
            </Row>
            
            <Row className="mt-4" gutter={[16, 16]}>
              <Col span={24}>
                <Card title="Appointment Calendar" className="shadow-sm">
                  <Calendar fullscreen={false} dateCellRender={dateCellRender} />
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminDashboard;