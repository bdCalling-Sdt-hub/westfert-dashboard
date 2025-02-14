import React, { useState } from "react";
import { Table, Button, Space, Avatar } from "antd";
import { Link } from "react-router-dom";
import randomImg from "../../assets/randomProfile2.jpg";
import { FaEye, FaLock } from "react-icons/fa6";

const Users = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pageSize, setPageSize] = useState(10);

  // Dummy data for users

  const users = [
    {
      key: "1",
      id: "1",
      name: "John Brown",
      email: "jbrown@example.com",
      company: "ABC Limited",
      phoneNumber: "123-456-7890",
      address: "123 Main Street, Anytown, USA 12345",
    },
    {
      key: "2",
      id: "2",
      name: "Jane Smith",
      email: "jsmith@example.com",
      company: "XYZ Inc.",
      phoneNumber: "987-654-3210",
      address: "456 Elm Street, Othertown, USA 67890",
    },
    {
      key: "3",
      id: "3",
      name: "John Doe",
      email: "jdoe@example.com",
      company: "PQR Services",
      phoneNumber: "555-123-4567",
      address: "789 Oak Street, Thistown, USA 34567",
    },
    {
      key: "4",
      id: "4",
      name: "Jane Doe",
      email: "janedoe@example.com",
      company: "ABC Limited",
      phoneNumber: "555-901-2345",
      address: "321 Pine Street, Thatplace, USA 90123",
    },
    {
      key: "5",
      id: "5",
      name: "John Smith",
      email: "john.smith@example.com",
      company: "XYZ Inc.",
      phoneNumber: "555-555-5555",
      address: "555 Any Street, Nowheresville, USA 55555",
    },
    {
      key: "6",
      id: "6",
      name: "Jane Brown",
      email: "jbrown@example.com",
      company: "PQR Services",
      phoneNumber: "555-111-2222",
      address: "222 Park Avenue, Uptown, USA 11111",
    },
    {
      key: "7",
      id: "7",
      name: "John Johnson",
      email: "john.johnson@example.com",
      company: "ABC Limited",
      phoneNumber: "555-333-4444",
      address: "333 Broadway, Downtown, USA 33333",
    },
    {
      key: "8",
      id: "8",
      name: "Jane Davis",
      email: "janedavis@example.com",
      company: "XYZ Inc.",
      phoneNumber: "555-555-7777",
      address: "777 Main Street, Anytown, USA 77777",
    },
    {
      key: "9",
      id: "9",
      name: "John Lee",
      email: "john.lee@example.com",
      company: "PQR Services",
      phoneNumber: "555-666-8888",
      address: "999 Maple Street, Othertown, USA 66666",
    },
    {
      key: "10",
      id: "10",
      name: "Jane Kim",
      email: "jane.kim@example.com",
      company: "ABC Limited",
      phoneNumber: "555-222-1111",
      address: "123 Main Street, Thistown, USA 22222",
    },
  ];

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        const name = record.name || "Unknown";
        const imgUrl = record.profileImg || randomImg;
        const fullImgUrl = imgUrl.startsWith("http")
          ? imgUrl
          : `${import.meta.env.VITE_BASE_URL}${imgUrl}`;

        return (
          <Space>
            <Avatar src={fullImgUrl} alt={name} size="large" />
            <span>{name}</span>
          </Space>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Company Name",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space>
          <Link to={`/client/profile/${record.id}`}>
            <FaEye size={20} className="cursor-pointer" />
          </Link>
          <FaLock size={20} className="cursor-pointer text-red-600" />
        </Space>
      ),
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-semibold  my-5">Users</h1>
      <Table
        columns={columns}
        dataSource={users}
        pagination={{ pageSize, onChange: () => setPageSize() }}
        scroll={{ x: 1000 }}
      />
    </>
  );
};

export default Users;
