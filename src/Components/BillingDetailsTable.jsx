import React, { useState } from "react";
import {
  FaEdit,
  FaTrashAlt,
  FaEye,
  FaSearch,
  FaDollarSign,
} from "react-icons/fa";
import NotFoundIcon from "../assets/images/notfound.svg";
import { useNavigate } from "react-router-dom";

// Sample data for billing details
const bills = [
  {
    id: 1,
    billNumber: "BILL-001",
    patientName: "John Doe",
    diseaseName: "Flu",
    phoneNumber: "123-456-7890",
    status: "Paid",
    date: "2024-10-10",
    time: "10:00 AM",
  },
  {
    id: 2,
    billNumber: "BILL-002",
    patientName: "Jane Smith",
    diseaseName: "Migraine",
    phoneNumber: "098-765-4321",
    status: "Unpaid",
    date: "2024-10-09",
    time: "11:00 AM",
  },
];

const BillingDetailsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Filter bills based on the search term
  const filteredBills = bills.filter((bill) =>
    bill.patientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Table Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Billing Management</h1>
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by Patient Name..."
            className="outline-none bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
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

          <tbody className="text-gray-700 text-sm">
            {filteredBills.length === 0 ? (
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
              filteredBills.map((bill) => (
                <tr key={bill.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">
                    <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full">
                      {bill.billNumber}
                    </span>
                  </td>
                  <td className="p-3">{bill.patientName}</td>
                  <td className="p-3">{bill.diseaseName}</td>
                  <td className="p-3">{bill.phoneNumber}</td>
                  <td className="p-3">
                    <span
                      className={`py-1 px-3 rounded-full ${
                        bill.status === "Paid"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {bill.status}
                    </span>
                  </td>
                  <td className="p-3">{bill.date}</td>
                  <td className="p-3">{bill.time}</td>
                  <td className="p-3 text-center flex justify-center space-x-2">
                    <button className="text-blue hover:text-blue">
                      <FaEye className="w-5 h-5" />
                    </button>
                    <button
                      className="text-green hover:text-green"
                      onClick={() =>
                        navigate("/billingdashboard/editbillsform")
                      }
                    >
                      <FaEdit className="w-5 h-5" />
                    </button>
                    <button
                      className="text-green hover:text-green"
                      onClick={() =>
                        navigate("/billingdashboard/invoicecomponent")
                      }
                    >
                      <FaDollarSign className="w-5 h-5" />
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

export default BillingDetailsTable;
