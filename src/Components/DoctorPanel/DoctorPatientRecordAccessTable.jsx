import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import viewIcon from "../../assets/images/view.svg";
import { useNavigate } from "react-router-dom";

const DoctorPatientRecordAccessTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Month");
  const navigate = useNavigate();

  const patients = [
    {
      name: "Marcus Philips",
      disease: "Viral Infection",
      issue: "Feeling Tired",
      lastAppointmentDate: "2 Jan, 2022",
      lastAppointmentTime: "4:30 PM",
      age: "22 Years",
      gender: "Male",
    },
    {
      name: "London Shaffer",
      disease: "Diabetes",
      issue: "Stomach Ache",
      lastAppointmentDate: "5 Jan, 2022",
      lastAppointmentTime: "5:00 PM",
      age: "45 Years",
      gender: "Female",
    },
    // Add more patient records here
  ];

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getGenderIcon = (gender) => {
    return gender === "Male" ? "♂️" : "♀️"; // You can replace these with actual icons
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // Implement sorting logic here if needed
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">
          Patient Record Access
        </h1>

        {/* Search and Sort */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Patient"
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Month">Month</option>
            <option value="Date">Date</option>
            <option value="Status">Status</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="py-2 px-4">Patient Name</th>
              <th className="py-2 px-4">Disease Name</th>
              <th className="py-2 px-4">Patient Issue</th>
              <th className="py-2 px-4">Last Appointment Date</th>
              <th className="py-2 px-4">Last Appointment Time</th>
              <th className="py-2 px-4">Age</th>
              <th className="py-2 px-4">Gender</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{patient.name}</td>
                <td className="py-2 px-4">{patient.disease}</td>
                <td className="py-2 px-4">{patient.issue}</td>
                <td className="py-2 px-4">{patient.lastAppointmentDate}</td>
                <td className="py-2 px-4">
                  <span className="bg-gray-200 text-blue-600 px-3 py-1 rounded-full font-semibold">
                    {patient.lastAppointmentTime}
                  </span>
                </td>
                <td className="py-2 px-4">{patient.age}</td>
                <td className="py-2 px-4">
                  <span className="text-lg">
                    {getGenderIcon(patient.gender)}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() =>
                      navigate("/patientrecordaccess/doctorpatientdetails")
                    }
                  >
                    <img src={viewIcon} alt="View" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorPatientRecordAccessTable;
