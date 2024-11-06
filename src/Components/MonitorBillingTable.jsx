import React, { useState } from "react";
import { FaEye, FaEdit, FaFileInvoice, FaPlusCircle } from "react-icons/fa";
import NotFoundIcon from "../assets/images/notfound.svg";
import { useNavigate } from "react-router-dom";

const billingData = [
  {
    id: 1,
    billNumber: "B123",
    patientName: "John Doe",
    diseaseName: "Flu",
    phoneNumber: "123-456-7890",
    status: "Paid",
    date: "2024-10-01",
    time: "10:00 AM",
  },
  {
    id: 2,
    billNumber: "B124",
    patientName: "Jane Smith",
    diseaseName: "Headache",
    phoneNumber: "098-765-4321",
    status: "Unpaid",
    date: "2024-10-02",
    time: "11:00 AM",
  },
];

const MonitorBillingTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredBillingData = billingData.filter((bill) =>
    bill.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Table Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Monitor Billing</h1>
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
          <input
            type="text"
            placeholder="Search patients..."
            className="outline-none bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <button
            className=" text-blue px-4 py-2 rounded shadow-blue flex items-center"
            onClick={() => navigate("/billingdashboard/changennvoiceform")}
          >
            <FaEdit className="mr-2" />
            Edit Design Invoice
          </button>
          <button
            className="bg-blue text-white px-4 py-2 rounded hover:bg-blue  flex items-center"
            onClick={() => navigate("/create-bill")}
          >
            <FaPlusCircle className="mr-2" />
            Create Bills
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          {/* Table Head */}
          <thead className="bg-gray-200 text-gray-600 text-sm uppercase">
            <tr>
              <th className="p-3 text-left">Bill Number</th>
              <th className="p-3 text-left">Patient Name</th>
              <th className="p-3 text-left">Disease Name</th>
              <th className="p-3 text-left">Phone Number</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-grey text-sm">
            {filteredBillingData.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center p-4 text-gray-500">
                  <img
                    src={NotFoundIcon}
                    alt="Not Found"
                    className="mx-auto mb-2"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div>No data found. Please add a new bill.</div>
                </td>
              </tr>
            ) : (
              filteredBillingData.map((bill) => (
                <tr key={bill.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">
                    {" "}
                    <span className="bg-[#F6F8FB] text-[#718EBF] py-1 px-3 rounded-full">
                      {bill.billNumber}
                    </span>
                  </td>
                  <td className="p-3">{bill.patientName}</td>
                  <td className="p-3">{bill.diseaseName}</td>
                  <td className="p-3">{bill.phoneNumber}</td>
                  <td className="p-3">
                    <span
                      className={`py-1 px-3 rounded-full shadow-sm ${
                        bill.status === "Paid"
                          ? "bg-[#39973D1A] text-green"
                          : "bg-[#E11D291A] text-red"
                      }`}
                    >
                      {bill.status}
                    </span>
                  </td>
                  <td className="p-3">{bill.date}</td>
                  <td className="p-3">{bill.time}</td>
                  <td className="p-3 text-center">
                    <button className="text-blue hover:text-blue">
                      <FaEye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonitorBillingTable;
