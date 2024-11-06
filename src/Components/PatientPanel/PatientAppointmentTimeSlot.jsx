import React, { useState } from "react";

const PatientAppointmentTimeSlot = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const days = [
    "Time",
    "Sun 17",
    "Mon 18",
    "Tue 19",
    "Wed 20",
    "Thu 21",
    "Fri 22",
    "Sat 23",
  ];

  const timeSlots = [
    "08 AM",
    "09 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "01 PM",
    "02 PM",
    "03 PM",
    "04 PM",
    "05 PM",
    "06 PM",
    "07 PM",
    "08 PM",
    "09 PM",
  ];

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-semibold mb-4">Appointment Time Slot</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <button className="text-blue">&lt;</button>
          <span className="text-blue font-semibold">
            18 June, 2022 - 23 June, 2022
          </span>
          <button className="text-blue">&gt;</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 text-center">
          {days.map((day, index) => (
            <div key={index} className="font-semibold">
              {day}
            </div>
          ))}

          {timeSlots.map((time, index) => (
            <React.Fragment key={index}>
              <div className="py-2">{time}</div>
              {days.slice(1).map((_, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`py-2 ${
                    time === "03 PM"
                      ? "bg-blue text-white rounded-lg cursor-pointer"
                      : time === "10 AM"
                      ? "bg-gray-200 text-gray-500"
                      : "text-gray-400"
                  }`}
                  onClick={time === "03 PM" ? openModal : null}
                >
                  {time === "03 PM" && dayIndex === 2 ? (
                    <div>
                      <div>Dr. Andrew</div>
                      <div>Skin Treatment</div>
                      <div className="text-sm">
                        <i className="fas fa-clock"></i> 03:00 PM - 04:00 PM
                      </div>
                    </div>
                  ) : time === "10 AM" && dayIndex === 1 ? (
                    <div>Not Available</div>
                  ) : (
                    "No Schedule"
                  )}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-96">
            <h2 className="text-xl font-semibold mb-4">
              Reschedule Appointment
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Select Date</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border rounded-lg py-2 px-3"
                  value="18 June, 2022"
                  readOnly
                />
                <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-500"></i>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Select Time</label>
              <div className="relative">
                <select className="w-full border rounded-lg py-2 px-3">
                  <option>03:00 PM - 04:00 PM</option>
                </select>
                <i className="fas fa-clock absolute right-3 top-3 text-gray-500"></i>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button className="bg-blue text-white py-2 px-4 rounded-lg flex items-center">
                <i className="fas fa-check mr-2"></i> Reschedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientAppointmentTimeSlot;
