import React, { useState } from "react";
import { FaPhoneAlt, FaRedo, FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AppointmentPopup from "./AppointmentPopup";
import ReschedulePopup from "./ReschedulePopup";

const appointments = [
  {
    name: "Jaydon Philips",
    type: "Teleconsultation",
    gender: "Male",
    issue: "Headache",
    disease: "Migraine",
    appointmentDate: "15 October 2024",
    time: "10:10 AM",
    status: "New",
  },
  {
    name: "Charlie Herwitz",
    type: "Teleconsultation",
    gender: "Female",
    issue: "Stomach Pain",
    disease: "Gastritis",
    appointmentDate: "16 October 2024",
    time: "10:30 AM",
    status: "Upcoming",
  },
  {
    name: "Talan Lipshutz",
    type: "Teleconsultation",
    gender: "Male",
    issue: "Knee Pain",
    disease: "Arthritis",
    appointmentDate: "14 October 2024",
    time: "11:00 AM",
    status: "Previous",
  },
  {
    name: "Abram Septimus",
    type: "Teleconsultation",
    gender: "Male",
    issue: "Fatigue",
    disease: "Anemia",
    appointmentDate: "13 October 2024",
    time: "11:30 AM",
    status: "Cancelled",
  },
];

const AppointmentTable = ({ filteredAppointments, activeTab }) => {
  const navigate = useNavigate();

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 text-left">Patient Name</th>
          <th className="py-2 px-4 text-left">Issue</th>
          <th className="py-2 px-4 text-left">Disease</th>
          <th className="py-2 px-4 text-left">Appointment Date</th>
          <th className="py-2 px-4 text-left">Time</th>
          <th className="py-2 px-4 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredAppointments.map((appointment, index) => (
          <tr key={index} className="border-t">
            <td className="py-2 px-4">{appointment.name}</td>
            <td className="py-2 px-4">{appointment.issue}</td>
            <td className="py-2 px-4">{appointment.disease}</td>
            <td className="py-2 px-4">{appointment.appointmentDate}</td>
            <td className="py-2 px-4">{appointment.time}</td>
            <td className="py-2 px-4">
              {activeTab === "Upcoming" ? (
                <FaTimesCircle
                  className="text-red cursor-pointer  hover:text-red"
                  onClick={() => alert("Reschedule or Cancel Appointment")}
                />
              ) : (
                <AiOutlineEye
                  className="text-gray-500 cursor-pointer hover:text-blue"
                  onClick={() => navigate("/view-appointment-details")}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const DateRangePicker = ({ startDate, endDate, onChange }) => {
  return (
    <div className="flex items-center bg-white p-2 rounded-md ml-auto">
      <DatePicker
        selected={startDate}
        onChange={(date) => onChange([date, endDate])}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Start Date"
        className="mr-2 outline-none"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => onChange([startDate, date])}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="End Date"
        className="border-none outline-none"
      />
      <FaTimesCircle
        className="text-red cursor-pointer hover:text-red ml-2"
        onClick={() => onChange([null, null])}
      />
    </div>
  );
};

const TeleconsultationAppointment = () => {
  const [activeTab, setActiveTab] = useState("Today");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);

  const tabs = ["Today", "Upcoming", "Previous", "Cancel"];

  const filteredAppointments = appointments
    .filter((appointment) => {
      if (activeTab === "Today") return appointment.status === "New";
      if (activeTab === "Upcoming") return appointment.status === "Upcoming";
      if (activeTab === "Previous") return appointment.status === "Previous";
      if (activeTab === "Cancel") return appointment.status === "Cancelled";
      return false;
    })
    .filter((appointment) =>
      appointment.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (dateRange[0] && dateRange[1]) {
    const startDate = new Date(dateRange[0]);
    const endDate = new Date(dateRange[1]);

    return filteredAppointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.appointmentDate);
      return appointmentDate >= startDate && appointmentDate <= endDate;
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-sm font-medium focus:outline-none ${
              activeTab === tab
                ? "text-blue border-b-2 border-blue"
                : "text-gray-500 hover:text-blue"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} Appointment
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Teleconsultation Module</h2>

        {activeTab === "Today" && (
          <DateRangePicker
            startDate={dateRange[0]}
            endDate={dateRange[1]}
            onChange={setDateRange}
          />
        )}

        {activeTab !== "Today" && (
          <div className="">
            <input
              type="text"
              placeholder="Search by Patient Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-lg py-2 px-4 ml-3"
            />
          </div>
        )}
      </div>

      {activeTab === "Today" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAppointments.map((appointment, index) => (
            <AppointmentCard key={index} appointment={appointment} />
          ))}
        </div>
      ) : (
        <AppointmentTable
          filteredAppointments={filteredAppointments}
          activeTab={activeTab}
        />
      )}
    </div>
  );
};

const AppointmentCard = ({ appointment }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isReschedulePopupOpen, setIsReschedulePopupOpen] = useState(false); // Reschedule popup state

  const handleJoinCall = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleReschedule = () => {
    setIsReschedulePopupOpen(true);
  };

  const handleCloseReschedulePopup = () => {
    setIsReschedulePopupOpen(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full">
      <div className="flex justify-between bg-greyLightest items-center mb-2 px-4 py-2">
        <h3 className="text-lg font-bold ">{appointment.name}</h3>
      </div>
      <div>
        <p className="text-sm flex justify-between text-greyBlue font-medium">
          Patient Issue{" "}
          <span className="text-greyDark font-medium">{appointment.issue}</span>
        </p>
        <p className="text-sm flex justify-between text-greyBlue font-medium">
          Disease Name{" "}
          <span className="text-greyDark font-medium">
            {appointment.disease}
          </span>{" "}
        </p>
        <p className="text-sm flex justify-between text-greyBlue font-medium">
          Appointment Date{" "}
          <span className="text-greyDark font-medium">
            {appointment.appointmentDate}
          </span>{" "}
        </p>
        <p className="text-sm flex justify-between text-greyBlue font-medium">
          Appointment Time{" "}
          <span className="text-greyDark font-medium">{appointment.time}</span>{" "}
        </p>

        <div className="gap-2 grid grid-cols-2 mt-4 text-sm ">
          <button
            className="flex items-center px-2 h-12  justify-center gap-2 bg-green text-white  rounded hover:bg-green"
            onClick={handleJoinCall}
          >
            <FaPhoneAlt className="mr-2" />
            Join Call
          </button>
          <button
            className="flex items-center px-2 h-12 justify-center gap-2  bg-blue text-white  rounded hover:bg-blue"
            onClick={handleReschedule}
          >
            <FaRedo className="mr-2" />
            Reschedule
          </button>
        </div>
      </div>

      <AppointmentPopup
        appointment={appointment}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />

      {/* Reschedule Popup */}
      {isReschedulePopupOpen && (
        <ReschedulePopup
          appointment={appointment}
          onClose={handleCloseReschedulePopup} 
        />
      )}
    </div>
  );
};

export default TeleconsultationAppointment;
