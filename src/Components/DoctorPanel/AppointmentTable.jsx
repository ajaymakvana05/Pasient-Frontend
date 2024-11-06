import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CalIconred from "../../assets/images/cal-red.svg";
import CalIconblue from "../../assets/images/cal-blue.svg";

const AppointmentTable = () => {
  const [activeTab, setActiveTab] = useState("Today Appointment");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const navigate = useNavigate();

  const appointmentData = [
    {
      id: 1,
      patientName: "Marcus Philips",
      disease: "Viral Infection",
      issue: "Stomach Ache",
      date: "2 Jan, 2022",
      time: "4:30 PM",
      type: "Online",
    },
    {
      id: 2,
      patientName: "Julianna Warren",
      disease: "Diabetes",
      issue: "Stomach Ache",
      date: "3 Jan, 2022",
      time: "2:40 PM",
      type: "Onsite",
    },
    {
      id: 3,
      patientName: "Julianna Warren",
      disease: "Diabetes",
      issue: "Feeling Tired",
      date: "4 Jan, 2022",
      time: "6:30 PM",
      type: "Online",
    },
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterAppointments(e.target.value);
  };

  const filterAppointments = (query) => {
    const filtered = appointmentData.filter((appointment) =>
      appointment.patientName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAppointments(filtered);
  };

  const handleDeleteClick = (appointment) => {
    setSelectedAppointment(appointment);
    setDeleteModalOpen(true);
  };

  const handleEditClick = (appointment) => {
    setSelectedAppointment(appointment);
    setEditModalOpen(true);
  };

  const handleConfirmDelete = () => {
    const updatedAppointments = appointmentData.filter(
      (appointment) => appointment.id !== selectedAppointment.id
    );
    setFilteredAppointments(updatedAppointments);
    setDeleteModalOpen(false);
    setSelectedAppointment(null);
  };

  const appointmentsToDisplay = searchQuery
    ? filteredAppointments
    : appointmentData;

  return (
    <div className="p-4">
      <div className="flex border-b mb-4">
        {[
          "Today Appointment",
          "Upcoming Appointment",
          "Previous Appointment",
          "Cancel Appointment",
        ].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-sm font-medium focus:outline-none ${
              activeTab === tab
                ? "text-blue border-b-2 border-blue"
                : "text-grey hover:text-blue"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold mb-4">{activeTab}</h2>

        <input
          type="text"
          placeholder="Search Patient"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-lg py-2 ml-auto mx-2 px-4 focus:outline-none"
        />

        <div className="flex space-x-4">
          <button className="flex items-center bg-white text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
            <FaCalendarAlt className="mr-2" />
            Any Date
          </button>
          <button
            className="bg-blue flex items-center text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() =>
              navigate("/appointmentmanagement/appointmenttimeslot")
            }
          >
            <FaCalendarAlt className="mr-2" />
            Appointment Time Slot
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-sm leading-normal">
              <th className="py-3 px-6 text-left">Patient Name</th>
              <th className="py-3 px-6 text-left">Disease Name</th>
              <th className="py-3 px-6 text-left">Patient Issue</th>
              <th className="py-3 px-6 text-left">Appointment Date</th>
              <th className="py-3 px-6 text-left">Appointment Time</th>
              <th className="py-3 px-6 text-left">Appointment Type</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {appointmentsToDisplay.map((appointment) => (
              <tr
                key={appointment.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {appointment.patientName}
                </td>
                <td className="py-3 px-6 text-left">{appointment.disease}</td>
                <td className="py-3 px-6 text-left">{appointment.issue}</td>
                <td className="py-3 px-6 text-left">{appointment.date}</td>

                <td className="py-3 px-6 text-left">
                  <span className="py-1 px-3 rounded-full text-xs bg-gray-200 text-blue-600">
                    {appointment.time}
                  </span>
                </td>

                <td className="py-3 px-6 text-left">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${
                      appointment.type === "Online"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {appointment.type}
                  </span>
                </td>

                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button
                      className=" mr-2 transform hover:text-purple hover:scale-110"
                      onClick={() => handleEditClick(appointment)}
                    >
                      <img src={CalIconblue} alt="" />
                    </button>
                    <button
                      className=" transform hover:text-red hover:scale-110"
                      onClick={() => handleDeleteClick(appointment)}
                    >
                      <img src={CalIconred} alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDeleteModalOpen && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[400px] relative">
            <h3 className="text-xl font-semibold mb-4">Confirm Delete</h3>
            <p>
              Are you sure you want to delete the appointment for{" "}
              {selectedAppointment.patientName}?
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                onClick={handleConfirmDelete}
              >
                Yes, Delete
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                onClick={() => setDeleteModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditModalOpen && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-[400px] relative">
            <h3 className="text-xl font-semibold mb-4">Edit Appointment</h3>
            <form>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="grid md:grid-cols-2 gap-2 ">
                  <div>
                    <label className="block mb-2" htmlFor="fromDate">
                      From Date
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <input
                        type="date"
                        id="fromDate"
                        className="py-2 px-4 w-full border-none"
                        placeholder="Selectdate"
                        required
                      />
                      <span className="p-2">
                        <i className="fas fa-calendar"></i>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2" htmlFor="toDate">
                      To Date
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <input
                        type="date"
                        id="toDate"
                        className="py-2 px-4 w-full border-none"
                        required
                      />
                      <span className="p-2">
                        <i className="fas fa-calendar"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  className="px-4 py-2 bg-blue text-white rounded hover:bg-blue-700"
                  type="submit"
                >
                  Save Changes
                </button>
                <button
                  className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentTable;
