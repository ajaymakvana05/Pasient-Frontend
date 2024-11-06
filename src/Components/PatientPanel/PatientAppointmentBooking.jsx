import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PatientAppointmentBooking = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [patientIssue, setPatientIssue] = useState("");
  const [diseaseName, setDiseaseName] = useState("");
  const [errors, setErrors] = useState({});
  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [appointmentDate] = useState("19 June, 2022"); // Hardcoded for simplicity

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!patientIssue) {
      newErrors.patientIssue = "Patient Issue is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const fetchDoctorsAndHospitals = async () => {
      try {
        const doctorResponse = await fetch("http://localhost:8090/Appointment/alldoctor", {
          credentials: 'include',
        });
        const doctorData = await doctorResponse.json();
        setDoctors(doctorData);
        const uniqueHospitals = [...new Set(doctorData.map(doc => doc.HospitalName))];
        setHospitals(uniqueHospitals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDoctorsAndHospitals();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/appointmentbooking/patientaappointmentbookinginvoice");
    }
  };

  const filteredDoctors = doctors.filter(doctor => doctor.HospitalName === selectedHospital);

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 md:mb-6">Appointment Booking</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 md:mb-6">
          <select className="border border-gray-300 rounded p-2">
            <option>Specialty</option>
            <option>Obstetrics</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>Country</option>
            <option>India</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>State</option>
            <option>Gujarat</option>
          </select>
          <select className="border border-gray-300 rounded p-2">
            <option>City</option>
            <option>Nagpur</option>
          </select>
          <select
            className="border border-gray-300 rounded p-2"
            value={selectedHospital}
            onChange={(e) => {
              setSelectedHospital(e.target.value);
              setSelectedDoctor("");
            }}
          >
            <option value="">Select Hospital</option>
            {hospitals.map((hospital, index) => (
              <option key={index} value={hospital}>
                {hospital}
              </option>
            ))}
          </select>
          <select
            className="border border-gray-300 rounded p-2"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Select Doctor</option>
            {filteredDoctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>
                {doctor.DoctorName}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-center items-center mb-4">
                <button className="text-blue">&lt; 18 June, 2022 &gt;</button>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="py-2">Time</th>
                    <th className="py-2">Sun 17</th>
                    <th className="py-2">Mon 18</th>
                    <th className="py-2">Tue 19</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { time: "08 AM", available: ["No Schedule", "No Schedule", "No Schedule"] },
                    { time: "09 AM", available: ["No Schedule", "Not Available", "No Schedule"] },
                    { time: "10 AM", available: ["No Schedule", "No Schedule", "No Schedule"] },
                    { time: "11 AM", available: ["No Schedule", "Available", "No Schedule"] },
                    { time: "12 PM", available: ["No Schedule", "No Schedule", "No Schedule"] },
                    { time: "01 PM", available: ["No Schedule", "No Schedule", "No Schedule"] },
                    { time: "02 PM", available: ["No Schedule", "No Schedule", "No Schedule"] },
                    { time: "03 PM", available: ["No Schedule", "No Schedule", "No Schedule"] },
                    { time: "04 PM", available: ["No Schedule", "No Schedule", "No Schedule"] },
                  ].map((slot, index) => (
                    <tr key={index}>
                      <td className="py-2">{slot.time}</td>
                      <td className="py-2">{slot.available[0]}</td>
                      <td className="py-2">{slot.available[1] === "Available" ?
                        <span className="bg-blue text-white cursor-pointer" onClick={() => { setSelectedTime("11:00AM - 12:00PM"); setShowPopup(true); }}>11:00AM - 12:00PM</span> : slot.available[1]}</td>
                      <td className="py-2">{slot.available[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold mb-4">Doctor Details</h2>
            {filteredDoctors.length > 0 && (
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/100x100"
                  alt="Doctor's profile picture"
                  className="rounded-full w-16 h-16 mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{filteredDoctors[0].DoctorName}</h3>
                  <p className="text-blue">Male</p>
                </div>
              </div>
            )}
            <div className="text-sm">
              <p><strong>Qualification:</strong> MBBS</p>
              <p><strong>Years Of Experience:</strong> 6+ Year</p>
              <p><strong>Specialty Type:</strong> 6 Hour</p>
              <p><strong>Working Time:</strong> 1 Hour</p>
              <p><strong>Break Time:</strong> 1 Hour</p>
              <p><strong>Emergency Contact Number:</strong> 48555-20103</p>
              <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Appointment</h2>
            <div className="mb-4 flex justify-between">
              <label className="block text-gray-700">Appointment Type</label>
              <span className="inline-block bg-yellow-100 text-yellow-700 rounded-full px-3 py-1 text-sm font-semibold">Online</span>
            </div>
            <div className="mb-4 flex justify-between">
              <label className="block text-gray-700">Patient Name</label>
              <p>John Doe</p>
            </div>
            <div className="mb-4 flex justify-between">
              <label className="block text-gray-700">Appointment Date</label>
              <p>{appointmentDate}</p>
            </div>
            <div className="mb-4 flex justify-between">
              <label className="block text-gray-700">Appointment Time</label>
              <p>{selectedTime}</p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="mb-4 relative">
                <input
                  type="text"
                  id="patient-issue"
                  value={patientIssue}
                  onChange={(e) => setPatientIssue(e.target.value)}
                  className="peer border border-gray-300 rounded p-2 w-full placeholder-transparent focus:outline-none focus:border-blue-500"
                  placeholder="Enter Patient Issue"
                />
                <label
                  htmlFor="patient-issue"
                  className="absolute left-2 -top-2.5 text-gray-600 text-sm bg-white px-1 transition-all peer-focus:text-sm"
                >
                  Patient Issue
                </label>
                {errors.patientIssue && (
                  <p className="text-red-600 text-sm">{errors.patientIssue}</p>
                )}
              </div>

              <div className="mb-4 relative">
                <input
                  type="text"
                  id="disease-name"
                  value={diseaseName}
                  onChange={(e) => setDiseaseName(e.target.value)}
                  className="peer border border-gray-300 rounded p-2 w-full placeholder-transparent focus:outline-none focus:border-blue-500"
                  placeholder="Enter Disease Name"
                />
                <label
                  htmlFor="disease-name"
                  className="absolute left-2 -top-2.5 text-gray-600 text-sm bg-white px-1 transition-all peer-focus:text-sm"
                >
                  Disease Name <span className="text-gray-500">(Optional)</span>
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-700 rounded px-4 py-2 mr-2"
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue text-white rounded px-4 py-2"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientAppointmentBooking;
