import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const ReschedulePopup = ({ appointment, onClose }) => {
  const [newDate, setNewDate] = useState(new Date());
  const [newTime, setNewTime] = useState("10:00 AM");

  const handleSubmit = () => {
    alert(`Rescheduled to ${newDate.toLocaleDateString()} at ${newTime}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Reschedule Appointment</h2>

        <div className="relative mb-6">
          <DatePicker
            selected={newDate}
            onChange={(date) => setNewDate(date)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholderText="Select Date"
          />
          <label
            className={`absolute left-3 top-2 bg-white transition-all transform ${
              newDate ? "-translate-y-4 scale-75" : "translate-y-2 scale-100"
            } origin-top-left text-[16px] text-gray-500 pointer-events-none`}
          >
            Select Date
          </label>
        </div>

        <div className="relative mb-6">
          <select
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          >
            <option value="" disabled hidden></option>
            <option>10:00 AM - 11:00 AM</option>
            <option>11:00 AM - 12:00 PM</option>
            <option>12:00 PM - 01:00 PM</option>
          </select>
          <label
            className={`absolute left-3 top-2 bg-white transition-all transform ${
              newTime ? "-translate-y-4 scale-75" : "translate-y-2 scale-100"
            } origin-top-left text-[16px] text-gray-500 pointer-events-none`}
          >
            Select Time
          </label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="flex items-center px-4 py-2 bg-blue text-white rounded"
            onClick={handleSubmit}
          >
            <FaCalendarAlt className="mr-2" />
            Reschedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReschedulePopup;
