"use client";
import React, { useState } from "react";
import { Card, Row, Col, Table, Button, Space, notification } from "antd";
import useSWR from "swr";
import {
  getAllAppopintment,
  markAppointmentAsResponded,
} from "@/app/httpservices/appointment";
import { CheckOutlined } from "@ant-design/icons";
import { User } from "@/app/interfaces/users";

const Page = () => {
  const [refetch, setRefetch] = useState(false);
  const { data, error, isLoading } = useSWR(
    ["appointments", refetch],
    getAllAppopintment
  );
  const handleEdit = async (record: any) => {
    const response = await markAppointmentAsResponded(record?.id);
    if (response?.status == 200) {
      notification.success(response?.message);
      setRefetch(!refetch);
    } else {
      notification.error(response?.message);
    }
  };

  const columns = [
    {
      title: "Patient name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Clinician",
      dataIndex: "clinician",
      key: "clinician",
      render: (value: User) => {
        return value.name;
      },
    },
    {
      title: "Appointment Date",
      dataIndex: "appoint_date",
      key: "appoint_date",
      render: (dateString: string) => {
        if (!dateString) return "-";
        try {
          const date = new Date(dateString);
          return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
        } catch (error) {
          console.error("Invalid date format:", dateString);
          return dateString;
        }
      },
    },
    {
      title: "Time",
      dataIndex: "appoint_time",
      key: "appoint_time",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value: string) => {
        return (
          <span
            className={value == "pending" ? "text-red-600" : "text-green-800"}
          >
            {value}
          </span>
        );
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: any) => (
        <Space size="middle">
          <span
            onClick={() => handleEdit(record)}
            title="respond the appointment"
            className="hover:cursor-pointer"
          >
            <CheckOutlined />
          </span>
        </Space>
      ),
    },
  ];
  if (data) {
    return (
      <Row className="mt-4">
        <Col className="w-full">
          <Card title="Appointments" className="shadow-sm overflow-scroll">
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 10 }}
            />
          </Card>
        </Col>
      </Row>
    );
  }
  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
};
export default Page;
