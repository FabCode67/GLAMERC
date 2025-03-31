"use client";
import React from "react";
import {
  Card,
  Row,
  Col,
  Table,
} from "antd";
import useSWR from "swr";
import { getAllClinicians, getAllpatients } from "@/app/httpservices/user";
const Page = () => {
  const { data, error, isLoading } = useSWR(['users'], getAllpatients)
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      render: (dateString:string) => {
        if (!dateString) return "-";
        try {
          const date = new Date(dateString);
          return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
        } catch (error) {
          console.error("Invalid date format:", dateString);
          return dateString; 
        }
      }
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Insurance",
      dataIndex: "insurance",
      key: "insurance",
    },
  ];
  if(data){
  return (
    <Row className="mt-4">
      <Col className="w-full">
        <Card
          title="Patients"
          className="shadow-sm overflow-scroll"
        >
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
if(isLoading){
  return <div>Loading...</div>
}
if(error){
  return <div>Something went wrong</div>
}
};
export default Page;
