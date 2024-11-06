import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const appointments = [
  {
    name: "Jaydon Philips",
    type: "Onsite",
    age: 36,
    gender: "Male",
    time: "10:10 AM",
    status: "New",
  },
  {
    name: "Charlie Herwitz",
    type: "Onsite",
    age: 25,
    gender: "Female",
    time: "10:10 AM",
    status: "New",
  },
  {
    name: "Talan Lipshutz",
    type: "Onsite",
    age: 32,
    gender: "Male",
    time: "10:10 AM",
    status: "Old",
  },
  {
    name: "Abram Septimus",
    type: "Onsite",
    age: 45,
    gender: "Male",
    time: "10:10 AM",
    status: "New",
  },
];

const AppointmentCard = ({ appointment }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold">{appointment.name}</h3>
        <div className="flex items-center">
          <span
            className={`px-2 py-1 text-sm rounded-lg mr-2 ${
              appointment.status === "New"
                ? "bg-blue text-blue-500"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {appointment.status}
          </span>
          {/* View Icon */}
          <AiOutlineEye
            className="text-gray-500 cursor-pointer hover:text-blue"
            onClick={() => navigate("/prescriptionTools/patientdetails")}
          />
        </div>
      </div>
      <p className="text-gray-600">Appointment Type: {appointment.type}</p>
      <p className="text-gray-600">Patient Age: {appointment.age} Years</p>
      <p className="text-gray-600">Patient Gender: {appointment.gender}</p>
      <p className="text-gray-600">Appointment Time: {appointment.time}</p>
      <button
        className="mt-4 bg-blue text-white py-2 px-4 rounded-lg w-full hover:bg-blue"
        onClick={() => navigate("/prescriptionTools/patientdetails")}
      >
        Create Prescription
      </button>
    </div>
  );
};

const Appointments = () => {
  const todayDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Today Appointment</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search Patient"
            className="border rounded-lg py-2 px-4"
          />
          <div className="flex items-center text-gray-500">
            <FaCalendarAlt className="mr-2" />
            <span>{todayDate}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {appointments.map((appointment, index) => (
          <AppointmentCard key={index} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default Appointments;
