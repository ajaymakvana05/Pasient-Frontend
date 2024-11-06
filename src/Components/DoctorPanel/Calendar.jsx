// src/Calendar.js
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setEventStart(arg.dateStr); // Set start date to the clicked date
    setEventEnd(arg.dateStr); // Set end date to the clicked date
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventTitle) {
      const newEvent = {
        title: eventTitle,
        start: eventStart,
        end: eventEnd, // Add end date
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setEventTitle("");
      setEventStart("");
      setEventEnd("");
      setIsOpen(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={events}
        className="w-full max-w-4xl rounded-lg shadow-md"
      />

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-lg font-bold text-center mb-4">Create Event</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full mb-4"
                placeholder="Event Title"
                required
              />
              <label className="block mb-2">Start Date</label>
              <input
                type="date"
                value={eventStart}
                onChange={(e) => setEventStart(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full mb-4"
                required
              />
              <label className="block mb-2">End Date</label>
              <input
                type="date"
                value={eventEnd}
                onChange={(e) => setEventEnd(e.target.value)}
                className="border border-gray-300 rounded p-2 w-full mb-4"
                required
              />
              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Add Event
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full text-red-500 text-center"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
