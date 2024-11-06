import React, { useState } from "react";
import { FaEye, FaSearch } from "react-icons/fa";
import NotFoundIcon from "../assets/images/notfound.svg";
import { useNavigate } from "react-router-dom";

const appointments = [
  {
    id: 1,
    patientName: "John Doe",
    patientIssue: "Fever",
    doctorName: "Dr. Marcus Philips",
    diseaseName: "Influenza",
    appointmentTime: "10:00 AM",
    appointmentType: "In-person",
    date: new Date(),
    patientDetails: {
      age: 32,
      gender: "Male",
      phone: "123-456-7890",
      address: "123 Elm Street",
    },
  },
  {
    id: 2,
    patientName: "Jane Smith",
    patientIssue: "Toothache",
    doctorName: "Dr. Hayle Schleifer",
    diseaseName: "Dental Infection",
    appointmentTime: "2:30 PM",
    appointmentType: "Online",
    date: new Date(new Date().setDate(new Date().getDate() + 1)),
    patientDetails: {
      age: 28,
      gender: "Female",
      phone: "987-654-3210",
      address: "456 Maple Street",
    },
  },
];

const PatientsManagementTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("today");
  const [showModal, setShowModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const navigate = useNavigate();

  const filteredAppointments = appointments.filter((appointment) => {
    const isNameMatch = appointment.patientName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (activeTab === "today") {
      return (
        isNameMatch &&
        appointment.date.toDateString() === new Date().toDateString()
      );
    } else if (activeTab === "upcoming") {
      return isNameMatch && appointment.date > new Date();
    } else if (activeTab === "previous") {
      return isNameMatch && appointment.date < new Date();
    } else {
      return false;
    }
  });

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPatient(null);
  };

  return (
    <div className={`p-4 ${showModal ? "" : ""}`}>
      <div className="flex border-b mb-4">
        {["today", "upcoming", "previous", "cancel"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue text-blue"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Appointment
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Appointments
        </h1>
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search patients..."
            className="outline-none bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          className="bg-blue text-white px-4 py-2 rounded hover:bg-blue"
          onClick={() => navigate("/addappointmentform")}
        >
          Add New Appointment
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-200 text-gray-600 text-sm uppercase">
            <tr>
              <th className="p-3 text-left">Patient Name</th>
              <th className="p-3 text-left">Patient Issue</th>
              <th className="p-3 text-left">Doctor Name</th>
              <th className="p-3 text-left">Disease Name</th>
              <th className="p-3 text-left">Appointment Time</th>
              <th className="p-3 text-left">Appointment Type</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {filteredAppointments.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center p-4 text-gray-500">
                  <img
                    src={NotFoundIcon}
                    alt="Not Found"
                    className="mx-auto mb-2"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div>No data found. Please add a new appointment.</div>
                </td>
              </tr>
            ) : (
              filteredAppointments.map((appointment) => (
                <tr key={appointment.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{appointment.patientName}</td>
                  <td className="p-3">{appointment.patientIssue}</td>
                  <td className="p-3">{appointment.doctorName}</td>
                  <td className="p-3">{appointment.diseaseName}</td>
                  <td className="p-3">
                    <span className="bg-[#F6F8FB] text-[#718EBF] py-1 px-3 rounded-full shadow-sm">
                      {appointment.appointmentTime}
                    </span>
                  </td>
                  <td className="p-3">{appointment.appointmentType}</td>
                  <td className="p-3 text-center flex justify-center">
                    <button
                      className="text-blue hover:text-blue"
                      onClick={() => handleViewDetails(appointment)}
                    >
                      <FaEye className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedPatient && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 w-96 shadow-lg relative">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold mb-4">Patient Details</h2>
              <button
                className="absolute right-4 text-red hover:text-red"
                onClick={handleCloseModal}
              >
                &#10005;
              </button>
            </div>

            <p>
              <strong>Name:</strong> {selectedPatient.patientName}
            </p>
            <p>
              <strong>Issue:</strong> {selectedPatient.patientIssue}
            </p>
            <p>
              <strong>Doctor:</strong> {selectedPatient.doctorName}
            </p>
            <p>
              <strong>Disease:</strong> {selectedPatient.diseaseName}
            </p>
            <p>
              <strong>Time:</strong> {selectedPatient.appointmentTime}
            </p>
            <p>
              <strong>Type:</strong> {selectedPatient.appointmentType}
            </p>
            <p>
              <strong>Age:</strong> {selectedPatient.patientDetails.age}
            </p>
            <p>
              <strong>Gender:</strong> {selectedPatient.patientDetails.gender}
            </p>
            <p>
              <strong>Phone:</strong> {selectedPatient.patientDetails.phone}
            </p>
            <p>
              <strong>Address:</strong> {selectedPatient.patientDetails.address}
            </p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientsManagementTable;
