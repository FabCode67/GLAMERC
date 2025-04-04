"use client";
import React from "react";
import useSWR from "swr";
import {
  Card,
  Row,
  Col,
  Table,
  Button,
} from "antd";
import { useRouter } from "next/navigation";
import { getAllClinicians } from "@/app/httpservices/user";
const Page = () => {
  const router = useRouter();
  const { data, error, isLoading } = useSWR(['clinicians'], getAllClinicians)
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
          console.error("Invalid date format:", dateString, error);
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
      title: "Specialist",
      dataIndex: "specialist",
      key: "specialist",
    },
  ];
  if(data){
  return (
    <Row className="mt-4">
      <Col className="w-full">
        <Card
          title="Doctors"
          className="shadow-sm overflow-scroll"
          extra={
            <Button type="primary" onClick={() => router.push("doctors/new")}>
              Add New doctor
            </Button>
          }
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
  return <div>Loading....</div>
}
if(error){
  return <div>Something went wrong.</div>
}
};
export default Page;
