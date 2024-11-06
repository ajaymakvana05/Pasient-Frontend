import React, { useState } from "react";
import { FaMale, FaFemale, FaEye } from "react-icons/fa";
import logo from "./assets/images/logo.svg";

const MangePatientTable = () => {
  const [activeTab, setActiveTab] = useState("today");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const patientData = [
    {
      name: "Marcus Philips",
      number: "89564 25462",
      type: "Online",
      time: "4:30 PM",
      age: "22 Years",
      gender: "Male",
    },
    {
      name: "London Shaffer",
      number: "89564 25462",
      type: "Onsite",
      time: "5:00 PM",
      age: "74 Years",
      gender: "Male",
    },
    {
      name: "Julianna Warren",
      number: "89564 25462",
      type: "Online",
      time: "4:30 PM",
      age: "44 Years",
      gender: "Female",
    },
    // Add more patient data as needed
  ];

  const renderTableData = () => {
    return patientData.map((patient, index) => (
      <tr key={index} className="border-b hover:bg-gray-100 bg-white">
        <td className="py-4 px-6">{patient.name}</td>
        <td className="py-4 px-6">{patient.number}</td>
        <td className="py-4 px-6">
          <span
            className={`inline-block px-3 py-1 rounded-full text-blue ${
              patient.type === "Online"
                ? "bg-[#FFC3131A] text-[#FFC313]"
                : "bg-[#5678E91A] "
            }`}
          >
            {patient.type}
          </span>
        </td>
        <td className="py-4 px-6 ">
          <span className="bg-white text-blue px-3 py-1 rounded-full">
            {patient.time}
          </span>
        </td>
        <td className="py-4 px-6">{patient.age}</td>
        <td className="py-4 px-6">
          {patient.gender === "Male" ? (
            <FaMale className="text-blue" />
          ) : (
            <FaFemale className="text-pink" />
          )}
        </td>
        <td className="py-4 px-6">
          <button
            className="text-blue hover:text-blue bg-greyLight px-2 py-1 rounded-full"
            onClick={toggleModal}
          >
            <FaEye className="mr-1" />
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <div className="mb-4">
          <button
            className={`px-4 py-2 ${
              activeTab === "today"
                ? "text-blue border-b-2 border-blue"
                : "text-grey"
            } `}
            onClick={() => setActiveTab("today")}
          >
            Today Prescription
          </button>
          <button
            className={`ml-4 px-4 py-2 ${
              activeTab === "older"
                ? "text-blue border-b-2 border-blue"
                : "text-grey"
            }`}
            onClick={() => setActiveTab("older")}
          >
            Older Prescription
          </button>
        </div>
        <h1 className="text-xl font-bold">Patient Details</h1>
      </div>
      <table className="min-w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-6 text-left">Patient Name</th>
            <th className="py-2 px-6 text-left">Patient Number</th>
            <th className="py-2 px-6 text-left">Appointment Type</th>
            <th className="py-2 px-6 text-left">Appointment Time</th>
            <th className="py-2 px-6 text-left">Age</th>
            <th className="py-2 px-6 text-left">Gender</th>
            <th className="py-2 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </table>
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-[676px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Prescription</h2>
              <button className="text-red text-4xl" onClick={toggleModal}>
                &times;
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <img src={logo} alt="Hospital Logo" className="w-238 h-82" />
                <div>
                  <h3 className="text-xl text-blue font-semibold">
                    Dr. Bharat Patel
                  </h3>
                  <p className="text-grey font-medium ">
                    Obstetrics and genecology
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-[16px] font-semibold text-black">
                  Hospital Name:{" "}
                  <span className="text-[14px] font-medium text-greyBlue">
                    Medical Center
                  </span>
                </p>
                <p className="text-[16px] font-semibold text-black">
                  Patient Name:{" "}
                  <span className="text-[14px] font-medium text-greyBlue">
                    Roberto Boshros
                  </span>
                </p>
                <p className="text-[16px] font-semibold text-black">
                  Gender:{" "}
                  <span className="text-[14px] font-medium text-greyBlue">
                    Male
                  </span>
                </p>
                <p className="text-[16px] font-semibold text-black">
                  Address:{" "}
                  <span className="text-[14px] font-medium text-greyBlue">
                    6B Vivek Bunglows Pasuppara, Mussoorie, Jharkhand
                  </span>
                </p>
              </div>

              <table className="w-full table-auto mb-6">
                <thead>
                  <tr>
                    <th className="px-4 py-2 font-16">Medicine Name</th>
                    <th className="px-4 py-2">Strength</th>
                    <th className="px-4 py-2">Dose</th>
                    <th className="px-4 py-2">Duration</th>
                    <th className="px-4 py-2">When to Take</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" px-4 py-2">Calcium Carbonate</td>
                    <td className=" px-4 py-2">120 mg</td>
                    <td className=" px-4 py-2">1-0-1</td>
                    <td className=" px-4 py-2">2 Days</td>
                    <td className=" px-4 py-2">Before Food</td>
                  </tr>
                </tbody>
              </table>

              <div className="mb-4">
                <h4 className="font-semibold">Additional Notes:</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas feugiat metus ac sapien tempor, at iaculis lorem
                  fringilla.
                </p>
              </div>

              <div className="flex justify-end">
                <p className="font-bold">Doctor Signature</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MangePatientTable;
