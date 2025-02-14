import React from "react";
import { Table, Input, Space } from "antd";
import { FaSearch, FaFilter, FaInfoCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const CustomerDetails = () => {
  const columns = [
    { title: "Quote. no.", dataIndex: "quoteNo", key: "quoteNo" },
    { title: "S. executive", dataIndex: "executive", key: "executive" },
    { title: "Manager", dataIndex: "manager", key: "manager" },
    { title: "Quote Recipe", dataIndex: "recipe", key: "recipe" },
    { title: "Weight", dataIndex: "weight", key: "weight" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Delivery Time", dataIndex: "deliveryTime", key: "deliveryTime" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <span className={`text-${text.color}`}>{text.label}</span>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <Space>
          <FaEye size={20} className="text-gray-600 cursor-pointer" />
        </Space>
      ),
    },
  ];

  const data = [
    {
      quoteNo: 2472,
      executive: "Asad Ujjaman",
      manager: "Mr. Nadir",
      recipe: "NPKC Recipe 1, 2more",
      weight: "2 Tonnes",
      price: "R20,000",
      deliveryTime: "12/1/2024, 12:30 am",
      status: { label: "Pending", color: "red-500" },
    },
    {
      quoteNo: 2450,
      executive: "Shameemah",
      manager: "Mr. Nadir",
      recipe: "NPKC Recipe 1, 1more",
      weight: "22 Tonnes",
      price: "R220,000",
      deliveryTime: "12/1/2024, 12:30 am",
      status: { label: "Processing", color: "blue-500" },
    },
    {
      quoteNo: 2450,
      executive: "Sabbir",
      manager: "Babalwa Moloi",
      recipe: "NPKC Recipe 1, 1more",
      weight: "22 Tonnes",
      price: "R220,000",
      deliveryTime: "12/1/2024, 12:30 am",
      status: { label: "On way", color: "yellow-500" },
    },
    {
      quoteNo: 2450,
      executive: "Awami Santo",
      manager: "SM. Albard",
      recipe: "NPKC Recipe 1, 1more",
      weight: "32 Tonnes",
      price: "R320,000",
      deliveryTime: "12/1/2024, 12:30 am",
      status: { label: "Delivered", color: "green-500" },
    },
  ];

  return (
    <div className="bg-gray-100 p-5 rounded-lg">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
        <div className="flex items-center gap-6">
          <img
            src="https://i.ibb.co.com/hF8qFB5L/Rectangle-5330.png"
            alt="customer"
            className="w-52 h-52 rounded-lg"
          />
          <div className="text-sm space-y-4">
            <p>
              <strong>Customer Name:</strong> X Mans Farm
            </p>
            <p>
              <strong>Address:</strong> 284 Daffodil Dr, Mount Frere, Eastern
              Cape - 5088 South Africa
            </p>
            <p>
              <strong>Serial Number:</strong> sr123401
            </p>
            <p>
              <strong>Email:</strong> Asadujjaman101@bd.com
            </p>
            <p>
              <strong>Contact Number:</strong> 073 155 4568
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Quotes List</h2>
          <div className="flex items-center gap-2">
            <Input
              placeholder="Search here"
              prefix={<FaSearch className="text-gray-500" />}
              className="w-80 rounded-full h-12"
            />
          </div>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          rowKey="quoteNo"
          pagination={false}
        />
      </div>
    </div>
  );
};

export default CustomerDetails;
