import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import NotFoundIcon from "../assets/images/notfound.svg"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

// Sample data for bills with doctor avatars
const bills = [
  {
    id: 1,
    billNo: "BILL-001",
    doctorName: "Dr. Marcus Philips",
    doctorAvatar: "https://via.placeholder.com/40", // Placeholder for doctor's avatar
    patientName: "John Doe",
    diseaseName: "Hypertension",
    insuranceCompany: "HealthPlus",
    insurancePlan: "Premium Plan",
    billDate: "2024-10-10",
  },
  {
    id: 2,
    billNo: "BILL-002",
    doctorName: "Dr. Hayle Schleifer",
    doctorAvatar: "https://via.placeholder.com/40", // Placeholder for doctor's avatar
    patientName: "Jane Smith",
    diseaseName: "Diabetes",
    insuranceCompany: "Medicare",
    insurancePlan: "Basic Plan",
    billDate: "2024-10-09",
  },
];

const InsuranceClaimsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Filter bills based on the search term
  const filteredBills = bills.filter((bill) =>
    bill.doctorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="m-4 p-4 bg-white">
      {/* Table Header */}
      <div className="flex justify-between items-center mb-4 ">
        <h1 className="text-2xl font-semibold">Insurance Claims</h1>
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
          <FaEye className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by Doctor Name..."
            className="outline-none bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          {/* Table Head */}
          <thead className="bg-gray-200 text-gray-600 text-sm uppercase">
            <tr>
              <th className="p-3 text-left">Bill No</th>
              <th className="p-3 text-left">Doctor Name</th>
              <th className="p-3 text-left">Patient Name</th>
              <th className="p-3 text-left">Disease Name</th>
              <th className="p-3 text-left">Insurance Company</th>
              <th className="p-3 text-left">Insurance Plan</th>
              <th className="p-3 text-left">Bill Date</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
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
                  <td className="p-3">{bill.billNo}</td>
                  <td className="p-3 flex items-center space-x-3">
                    <img
                      src={bill.doctorAvatar}
                      alt={bill.doctorName}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{bill.doctorName}</span>
                  </td>
                  <td className="p-3">{bill.patientName}</td>
                  <td className="p-3">{bill.diseaseName}</td>
                  <td className="p-3">{bill.insuranceCompany}</td>
                  <td className="p-3">{bill.insurancePlan}</td>
                  <td
                    className="p-3 cursor-pointer"
                    onClick={() => navigate("/invoicecomponent")}
                  >
                    {bill.billDate}
                  </td>
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

export default InsuranceClaimsTable;
