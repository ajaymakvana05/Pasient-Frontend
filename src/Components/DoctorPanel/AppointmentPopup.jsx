import React, { useState } from "react";
import Jitsi from "react-jitsi";
import { useNavigate } from "react-router-dom";

const AppointmentPopup = ({ appointment, isOpen, onClose }) => {
  const [isCallStarted, setIsCallStarted] = useState(false);
  const [isUserAdmitted, setIsUserAdmitted] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleJoinCall = () => {
    setIsCallStarted(true);
  };

  const handleAdmitUser = () => {
    setIsUserAdmitted(true);
    navigate("/teleconsultationmodule/appointmentpopup");
  };

  const handleDenyUser = () => {
    setIsCallStarted(false);
    setIsUserAdmitted(false);
    alert("User denied access to the call.");
  };

  return (
    <>
      {/* Background overlay with blur effect */}
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"></div>

      {/* Popup container */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-4 w-80 shadow-lg">
          <h3 className="text-lg font-bold">Reminder</h3>
          <div className="my-2">
            <p>This patient wants to meet you</p>
          </div>
          <p className="text-sm flex justify-between">
            Patient Name <span className="font-medium">{appointment.name}</span>
          </p>
          <p className="text-sm flex justify-between">
            Patient Issue{" "}
            <span className="font-medium">{appointment.issue}</span>
          </p>
          <p className="text-sm flex justify-between">
            Disease Name{" "}
            <span className="font-medium">{appointment.disease}</span>
          </p>
          <p className="text-sm flex justify-between">
            Appointment Time{" "}
            <span className="font-medium">{appointment.time}</span>
          </p>

          <div className="flex justify-between mt-4">
            <button
              className="bg-gray text-black px-4 py-2 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleJoinCall}
            >
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Google Meet-like Calling Screen */}
      {isCallStarted && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-liteBlue z-50">
          {!isUserAdmitted ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              {/* Full-Screen Avatar */}
              <div className="rounded-full bg-gray-100 flex items-center justify-center w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 shadow-md mb-6">
                <img
                  src={appointment.avatar || "https://via.placeholder.com/150"}
                  alt="User Avatar"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
                <h3 className="text-lg font-bold mb-4">Waiting Room</h3>
                <p className="mb-4">
                  {appointment.name} wants to join the call.
                </p>
                <div className="flex justify-around">
                  <button
                    className="bg-red text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={handleDenyUser}
                  >
                    Deny
                  </button>
                  <button
                    className="bg-green text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={handleAdmitUser}
                  >
                    Admit
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-4 w-full h-full">
              <Jitsi
                roomName={`PatientMeeting-${appointment.name}`}
                displayName={appointment.name}
                onMeetingEnd={() => setIsCallStarted(false)}
                containerStyle={{ width: "100%", height: "90vh" }}
              />
              <button
                className="bg-red text-white px-4 py-2 rounded mt-2 hover:bg-red-600"
                onClick={() => setIsCallStarted(false)}
              >
                Leave Call
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AppointmentPopup;
