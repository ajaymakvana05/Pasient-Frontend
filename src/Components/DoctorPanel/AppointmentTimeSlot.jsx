import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaCalendar,
  FaClock,
} from "react-icons/fa";

const AppointmentTimeSlot = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [disabledSlots, setDisabledSlots] = useState({});
  const [note, setNote] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  const timeSlots = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    if (disabledSlots[slot]) {
      setIsEditing(true);
      setIsBooking(false);
      setNote(disabledSlots[slot]);
    } else {
      setIsBooking(true);
      setIsEditing(false);
      setNote("");
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSlot(null);
    setNote("");
    setIsEditing(false);
    setIsBooking(false);
  };

  const handleBooking = () => {
    if (selectedSlot) {
      setDisabledSlots((prevState) => ({
        ...prevState,
        [selectedSlot]: note || "No notes added",
      }));
    }
    closeModal();
  };

  const handleEdit = () => {
    if (selectedSlot) {
      setDisabledSlots((prevState) => ({
        ...prevState,
        [selectedSlot]: note || "No notes added",
      }));
    }
    closeModal();
  };

  const handleDelete = () => {
    if (selectedSlot) {
      setDisabledSlots((prevState) => {
        const newState = { ...prevState };
        delete newState[selectedSlot];
        return newState;
      });
    }
    closeModal();
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Appointment Time Slot</h2>

      {/* Date Navigation */}
      <div className="flex justify-center mb-4">
        <button className="text-blue px-4 py-2 rounded flex items-center">
          <FaArrowLeft className="mr-2" />
        </button>
        <h3 className="text-lg font-semibold text-blue">
          18 June, 2022 - 23 June, 2022
        </h3>
        <button className="text-blue px-4 py-2 rounded flex items-center">
          <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Time Slot Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th className="border p-2 w-24 text-blue">Time</th>
              {days.map((day) => (
                <th key={day} className="border p-2 w-24">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, index) => (
              <tr key={index}>
                <td className="border p-2 text-center text-blue">{time}</td>
                {days.map((day, idx) => {
                  const slotKey = `${day} ${time}`;
                  return (
                    <td
                      key={idx}
                      className={`border p-2 text-center cursor-pointer transition-colors duration-200 ease-in-out hover:bg-blue-100 ${
                        disabledSlots[slotKey]
                          ? "bg-gray-100 text-gray-500"
                          : "text-[#D9D9D9]"
                      }`}
                      onClick={() => handleSlotClick(slotKey)}
                    >
                      {disabledSlots[slotKey] ? "Not Available" : "Available"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Booking, Editing, and Deleting */}
      {isModalOpen && selectedSlot && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[400px] relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={closeModal}
            >
              <FaTimes />
            </button>

            <h3 className="text-xl font-semibold mb-4">
              {isEditing
                ? "Not Available"
                : isBooking
                ? "Book Appointment"
                : "Not Available"}
            </h3>

            {/* Date and Time Info */}
            <div className="flex items-center mb-4">
              <FaCalendar className="text-gray-500 mr-2" />
              <p>{`Monday, 18 June, 2022`}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaClock className="text-gray-500 mr-2" />
              <p>{`09:00 AM - 10:00 AM`}</p>
            </div>

            {/* Note or Description */}
            <textarea
              className="border p-2 w-full mb-4"
              placeholder="Add a note..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                className="px-6 py-2 bg-green text-white rounded hover:bg-green"
                onClick={isEditing ? handleEdit : handleBooking}
              >
                {isEditing ? "Update Note" : "Book Appointment"}
              </button>
              <button
                className={`px-6 py-2 text-white rounded ${
                  note
                    ? "bg-red hover:bg-red"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={handleDelete}
                disabled={!note} // Disable if note is empty
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentTimeSlot;
