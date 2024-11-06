import React, { useState } from "react";
import { AiOutlineFileImage } from "react-icons/ai";

const DoctorPatientDetails = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [description, setDescription] = useState("");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const patient = {
    name: "Marcus Philips",
    number: "99130 44537",
    issue: "Feeling tired",
    gender: "Male",
    doctor: "Dr. Marcus Philips",
    age: 20,
    appointmentType: "Online",
    address: "B-408 Swastik society, mota varacha rajkot.",
    lastAppointmentDate: "2 Jan, 2022",
    lastAppointmentTime: "4:30 PM",
  };

  const appointments = [
    {
      name: "Marcus Philips",
      issue: "Feeling Tired",
      date: "2 Jan, 2022",
      time: "4:30 PM",
      type: "Online",
    },
    {
      name: "London Shaffer",
      issue: "Stomach Ache",
      date: "2 Jan, 2022",
      time: "5:00 PM",
      type: "Onsite",
    },
    {
      name: "Marcus Philips",
      issue: "Feeling Tired",
      date: "7 Jan, 2022",
      time: "4:30 PM",
      type: "Online",
    },
    {
      name: "London Shaffer",
      issue: "Stomach Ache",
      date: "2 Jan, 2022",
      time: "8:00 AM",
      type: "Onsite",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="bg-white">
        <div className="flex justify-between mb-2">
          <h2 className="text-lg font-bold">Patient Details</h2>
          <button
            onClick={togglePopup}
            className="bg-blue flex items-center text-white py-2 px-4 rounded hover:bg-blue"
          >
            Add Record
          </button>
        </div>
        <div className=" rounded-lg shadow-md p-6 flex">
          <img
            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
            src="https://via.placeholder.com/100"
            alt="Patient"
          />
          <div className="ml-4 space-y-2 w-full">
            <div className="grid grid-cols-5 gap-4">
              <div>
                <p className="col-span-1 font-semibold text-grey">
                  Patient name:
                </p>
                <p className="col-span-1 font-medium">{patient.name}</p>
              </div>

              <div>
                <p className="col-span-1 font-semibold text-grey">
                  Patient Number:
                </p>
                <p className="col-span-1 font-medium">{patient.number}</p>
              </div>

              <div>
                <p className="col-span-1 font-semibold text-grey">
                  Patient Issue:
                </p>
                <p className="col-span-1 font-medium">{patient.issue}</p>
              </div>

              <div>
                <p className="col-span-1 font-semibold text-grey">
                  Patient Gender:
                </p>
                <p className="col-span-1 font-medium">{patient.gender}</p>
              </div>

              <div>
                <p className="col-span-1 font-semibold text-grey">
                  Last Appointment Date:
                </p>
                <p className="col-span-1 font-medium">
                  {patient.lastAppointmentDate}
                </p>
              </div>

              <div>
                <p className="col-span-1 font-semibold text-grey">
                  Doctor Name:
                </p>
                <p className="col-span-1 font-medium">{patient.doctor}</p>
              </div>

              <div>
                <p className="col-span-1 font-semibold text-grey">
                  Patient Age:
                </p>
                <p className="col-span-1 font-medium">{patient.age} Years</p>
              </div>

              <div>
                <p className="col-span-1 font-semibold text-grey">
                  Appointment Type:
                </p>
                <p className="col-span-1 font-medium">
                  {patient.appointmentType}
                </p>
              </div>

              <div>
                <p className="col-span-1 text-grey font-medium">
                  Patient Address:
                </p>
                <p className="col-span-4">{patient.address}</p>
              </div>

              <div>
                <p className="col-span-1 font-semibold text-grey">
                  Last Appointment Time:
                </p>
                <p className="col-span-1 font-medium">
                  {patient.lastAppointmentTime}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Popup Component */}
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">
              <h3 className="text-lg font-bold mb-4">Add New Record</h3>
              <form>
                {/* File Upload Section with Drag and Drop */}
                <div className="mb-4">
                  <label className="block text-gray-700">Upload File</label>
                  <div
                    className={`w-full h-32 flex items-center justify-center border-2 border-dashed rounded-lg cursor-pointer ${
                      dragActive ? "border-blue-500" : "border-gray-300"
                    }`}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      id="file-upload"
                      accept=".png, .jpg, .jpeg, .gif"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center"
                    >
                      <AiOutlineFileImage className="text-4xl text-gray-500" />
                      <p className="mt-2 text-black font-medium">
                        {file ? (
                          file.name
                        ) : (
                          <>
                            <span className="text-blue font-medium">
                              Upload a file
                            </span>{" "}
                            or drag and drop
                          </>
                        )}
                      </p>
                      <p className="mt-2 text-sm text-grey">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </label>
                  </div>
                </div>
                {/* Description Field */}
                <div className="mb-4">
                  <label className="block text-gray-700">Description</label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Enter description"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-end">
                  <button
                    onClick={togglePopup}
                    type="button"
                    className="bg-white  w-full border border-grey text-black py-2 px-4 rounded mr-2 hover:bg-red-700"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="bg-greyLightest w-full text-greyDark py-2 px-4 rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Appointments Table */}
      <div className="mt-10 bg-white">
        <h3 className="text-lg font-bold">All Appointments</h3>
        <div className="overflow-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-greyLightest">
                <th className="px-4 py-2 border-t border-b">Disease Name</th>
                <th className="px-4 py-2 border-t border-b">Patient Issue</th>
                <th className="px-4 py-2 border-t border-b">
                  Appointment Date
                </th>
                <th className="px-4 py-2 border-t border-b">
                  Appointment Time
                </th>
                <th className="px-4 py-2 border-t border-b">
                  Appointment Type
                </th>
                <th className="px-4 py-2 border-t border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index} className="text-center border-b">
                  <td className="px-4 py-2 text-grey font-medium">
                    {appointment.name}
                  </td>
                  <td className="px-4 py-2  text-grey font-medium">
                    {appointment.issue}
                  </td>
                  <td className="px-4 py-2  text-grey font-medium">
                    {appointment.date}
                  </td>
                  <td className="px-4 py-2  text-grey font-medium">
                    {appointment.time}
                  </td>
                  <td className="px-4 py-2  text-grey font-medium">
                    <span
                      className={`${
                        appointment.type === "Online"
                          ? "text-yellow-500"
                          : "text-blue-500"
                      }`}
                    >
                      {appointment.type}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button className="text-blue-500 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorPatientDetails;
