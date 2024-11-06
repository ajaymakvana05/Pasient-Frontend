import React, { useState } from "react";
import { FaCalendarAlt, FaCaretDown } from "react-icons/fa";
import { AiFillEye, AiOutlineClose } from "react-icons/ai";
import PatientDoctorManagementPopUp from "./PatientDoctorManagementPopUp";
import { useNavigate } from "react-router-dom";

const PatientMyAppointment = () => {
  const [activeTab, setActiveTab] = useState("scheduled");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const navigate = useNavigate();

  // Appointment data
  const scheduledAppointments = [
    {
      doctor: "Nolan George",
      appointmentType: "Online",
      hospital: "Shambua Hospital",
      date: "2 Jan, 2022",
      time: "10:20 AM",
      issue: "Feeling Tired",
    },
    {
      doctor: "Cristofer Stanton",
      appointmentType: "Online",
      hospital: "Shambua Hospital",
      date: "3 Jan, 2022",
      time: "11:00 AM",
      issue: "Back Pain",
    },
  ];

  const previousAppointments = [
    {
      doctor: "Michael Smith",
      appointmentType: "In-Person",
      hospital: "Medicare Hospital",
      date: "20 Dec, 2021",
      time: "09:00 AM",
      issue: "Routine Check-up",
    },
    {
      doctor: "Lisa Johnson",
      appointmentType: "Online",
      hospital: "City Care Clinic",
      date: "15 Dec, 2021",
      time: "02:30 PM",
      issue: "Headache",
    },
  ];

  const canceledAppointments = [
    {
      doctor: "Sandra Lee",
      appointmentType: "In-Person",
      hospital: "HealthFirst Clinic",
      date: "5 Jan, 2022",
      time: "01:00 PM",
      issue: "Allergy",
      reason: "Doctor unavailable",
    },
    {
      doctor: "John Doe",
      appointmentType: "Online",
      hospital: "Wellness Center",
      date: "6 Jan, 2022",
      time: "03:45 PM",
      issue: "Skin Rash",
      reason: "Patient request",
    },
  ];

  const pendingAppointments = [
    {
      doctor: "Emma Brown",
      appointmentType: "In-Person",
      hospital: "Green Valley Hospital",
      date: "10 Jan, 2022",
      time: "11:15 AM",
      issue: "Joint Pain",
    },
  ];

  const handleViewClick = (appointment) => {
    setSelectedAppointment(appointment);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedAppointment(null);
  };

  const renderAppointments = () => {
    const getAppointmentsContent = (appointments) => {
      if (appointments.length === 0) {
        return <div>No appointments available.</div>;
      }

      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {appointments.map((appointment, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold">Dr. {appointment.doctor}</h3>
                <button
                  onClick={() => handleViewClick(appointment)}
                  className="text-sm text-gray-500 flex items-center"
                >
                  <AiFillEye className="mr-1" />
                </button>
              </div>
              {/* Popup Modal */}
              {showPopup && selectedAppointment && (
                <div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex items-center justify-end z-50">
                  <PatientDoctorManagementPopUp closePopup={closePopup} />
                </div>
              )}
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">Appointment Type</p>
                <p className="text-sm text-yellow-500">
                  {appointment.appointmentType}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">Hospital Name</p>
                <p className="text-sm text-gray-700">{appointment.hospital}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">Appointment Date</p>
                <p className="text-sm text-gray-700">{appointment.date}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">Appointment Time</p>
                <p className="text-sm text-gray-700">{appointment.time}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">Patient Issue</p>
                <p className="text-sm text-gray-700">{appointment.issue}</p>
              </div>
              {appointment.reason && (
                <>
                  <p className="text-sm text-gray-500">Cancellation Reason</p>
                  <p className="text-sm text-gray-700">{appointment.reason}</p>
                </>
              )}
              <div className="flex justify-between mt-4">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                  Cancel
                </button>
                <button
                  onClick={() =>
                    navigate("/appointmentbooking/patientappointmenttimelot")
                  }
                  className="bg-blue text-white px-4 py-2 rounded-md"
                >
                  Reschedule
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    };

    // Render content based on the selected tab
    switch (activeTab) {
      case "scheduled":
        return getAppointmentsContent(scheduledAppointments);
      case "previous":
        return getAppointmentsContent(previousAppointments);
      case "cancel":
        return getAppointmentsContent(canceledAppointments);
      case "pending":
        return getAppointmentsContent(pendingAppointments);
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-2 mb-4">
          <div className="flex space-x-4 mb-2 md:mb-0">
            {["scheduled", "previous", "cancel", "pending"].map((tab) => (
              <button
                key={tab}
                className={`${
                  activeTab === tab
                    ? "text-blue border-b-2 border-blue"
                    : "text-gray-500"
                } pb-1`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Appointment
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center border rounded-md lg:px-2 px-1 py-1">
              <FaCalendarAlt className="text-gray-500" /> {/* Calendar Icon */}
              <span className="ml-2 text-gray-700">
                2 Jan, 2022 - 13 Jan, 2022
              </span>
              <FaCaretDown className="text-gray-500 ml-2" />{" "}
            </div>
            <button
              onClick={() =>
                navigate("/appointmentbooking/patientappointmentbooking")
              }
              className="bg-blue text-white px-4 py-2 rounded-md"
            >
              Book Appointment
            </button>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4">My Appointment</h2>
        {renderAppointments()}
      </div>
    </div>
  );
};

export default PatientMyAppointment;
