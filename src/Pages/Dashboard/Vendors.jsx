import React, { useState } from "react";
import {
  Table,
  Button,
  Space,
  Avatar,
  Select,
  ConfigProvider,
  Input,
} from "antd";
import { Link } from "react-router-dom";
import randomImg from "../../assets/randomProfile2.jpg";
import { FaEye, FaLock } from "react-icons/fa6";

const Vendors = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy data for staff
  const staffList = {
    data: {
      data: [
        {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          companyName: "RentMe",
          designation: "Software Engineer",
        },
        {
          id: "2",
          name: "Jane Smith",
          email: "jane@example.com",
          companyName: "RentMe",
          designation: "Product Manager",
        },
        {
          id: "3",
          name: "Sam Wilson",
          email: "sam@example.com",
          companyName: "RentMe",
          designation: "UX Designer",
        },
        // Add more dummy staff as needed
      ],
    },
  };

  const data = staffList?.data?.data;

  const onSelectChange = (newSelectedRowKeys) => {
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
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },

    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space>
          <Link to={`/staff/profile/${record.id}`}>
            <FaEye size={20} className="cursor-pointer" />
          </Link>

          <FaLock size={20} className="cursor-pointer text-red-600" />
        </Space>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = changeableRowKeys.filter(
            (_, index) => index % 2 === 0
          );
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = changeableRowKeys.filter(
            (_, index) => index % 2 !== 0
          );
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <div className="bg-white p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold  my-5">Staff List</h1>
        <Input
          placeholder="Search"
          style={{ width: 400, height: 50, borderRadius: 30 }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
      </div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#D2EBC5",
              headerColor: "black",
              selectedRowColor: "white",
              colorBgContainer: "white",
              colorText: "black",
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize, onChange: () => setPageSize() }}
          rowKey={(record) => record.id}
          scroll={{ x: 1000 }}
        />
      </ConfigProvider>
    </div>
  );
};

export default Vendors;
