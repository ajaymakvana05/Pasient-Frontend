import React from "react";

const AppointmentCard = ({ name, doctor, disease, time, status }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-4 max-w-xs">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <span
          className={`text-sm px-2 py-1 rounded-full ${
            status === "Onsite"
              ? "bg-blue text-blue"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {status}
        </span>
      </div>
      <p className="text-gray-600 mt-2">
        <strong>Doctor Name:</strong> {doctor}
      </p>
      <p className="text-gray-600 mt-1">
        <strong>Disease Name:</strong> {disease}
      </p>
      <p className="text-gray-600 mt-1">
        <strong>Appointment Time:</strong> {time}
      </p>
    </div>
  );
};

const AppointmentsList = () => {
  const appointments = [
    {
      name: "Roger Lubin",
      doctor: "Leo Geidt",
      disease: "Meningococcal Disease",
      time: "10:00 AM",
      status: "Onsite",
    },
    {
      name: "Jakob Korsgaard",
      doctor: "Leo Geidt",
      disease: "Meningococcal Disease",
      time: "10:00 AM",
      status: "Online",
    },
    {
      name: "Roger Lubin",
      doctor: "Leo Geidt",
      disease: "Meningococcal Disease",
      time: "10:00 AM",
      status: "Onsite",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Today's Appointments List</h2>
        <a href="/" className="text-blue">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {appointments.map((appointment, index) => (
          <AppointmentCard key={index} {...appointment} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentsList;
