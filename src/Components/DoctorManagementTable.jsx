import React, { useEffect, useState } from "react";
import {
  FaEdit,
  FaTrashAlt,
  FaEye,
  FaSearch,
  FaMale,
  FaFemale,
} from "react-icons/fa";
import NotFoundIcon from "../assets/images/notfound.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const DoctorManagementTable = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [doctorData, setDoctorData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");


  const toggleDrawer = (data = null) => {
    if (!isOpen) {
      setSelectedDoctor(data);
    } else {
      setSelectedDoctor(null);
    }
    setIsOpen(!isOpen);
  };

  const handleDeleteClick = (id) => {
    setSelectedDoctorId(id);
    console.log("Selected doctor ID for deletion:", id);
    setShowModal(true);
  };


  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDoctorId(null);
  };


  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // const [doctores, setDoctorData] = useState([]);


  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await fetch("http://localhost:8090/admin/alldoctors", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch admin data");
        const data = await response.json();
        setDoctorData(data);
        console.log("data", data);
      } catch (err) {
        console.error("Error fetching profile data:", err.message);
      }
    };

    fetchDoctorData();
  }, []);


  const handleConfirmDelete = async () => {
    if (!selectedDoctorId) {
      console.error("No doctor ID selected for deletion.");
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:8090/admin/deletedoctor/${selectedDoctorId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });


      toast.success("Doctor deleted successfully!");
      console.log("Doctor deleted successfully:", response.data);


      navigate('/dashboard');
    } catch (error) {
      console.error("Error details:", error.response || error);
      const errorMsg = error.response?.data?.msg || "Failed to delete doctor. Please try again.";
      toast.error(errorMsg);
      console.error("Failed to delete doctor:", errorMsg);
    }

    setShowModal(false);
  };


  const filteredDoctors = doctorData.filter((doctor) =>
    doctor.DoctorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id) => {
    console.log("id", id);
    navigate(`/UodateDoctorForm/${id}`)
  }
  return (
    <>

      {isOpen && (
        <div className={`fixed inset-y-0 right-0 z-50 w-full md:w-1/4 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out overflow-y-auto`}>
          <div className="p-6">
            <button
              onClick={() => toggleDrawer()}
              className="text-gray-400 hover:text-gray-800 transition mb-4"
            >
              Close
            </button>
            {selectedDoctor && (
              <div>
                {/* Header Section */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={selectedDoctor.DoctorImage || "https://via.placeholder.com/100"}
                    alt="User"
                    className="w-8 h-8 md:w-16 md:h-14 rounded-full"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedDoctor.DoctorName}</h2>
                    <p className="text-gray-500">{selectedDoctor.gender}</p>
                    <span className="inline-block bg-green-100 text-green-700 text-sm px-2 py-1 rounded-full">
                      {selectedDoctor.status}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <hr className="my-4" />

                {/* Doctor Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500">Doctor Qualification</p>
                    <p className="font-bold">{selectedDoctor.DoctorQualification}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Years of Experience</p>
                    <p className="font-bold">{selectedDoctor.Experience}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Specialty Type</p>
                    <p className="font-bold">{selectedDoctor.specialtiyType}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Working Time</p>
                    <p className="font-bold">{selectedDoctor.workingTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Patient Check Up Time</p>
                    <p className="font-bold">{selectedDoctor.CheckupTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Break Time</p>
                    <p className="font-bold">{selectedDoctor.BreakTime}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500">Description</p>
                    <p className="font-bold">{selectedDoctor.Description}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500">Signature</p>
                    <img
                      src={selectedDoctor.DoctorSignature}
                      alt="Signature"
                      className="border border-gray-300 rounded p-2 md:w-32 md:h-14"
                    />
                  </div>
                </div>

                {/* Divider */}
                <hr className="my-4" />

                {/* Additional Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500">Age</p>
                    <p className="font-bold">{selectedDoctor.age}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="font-bold">{selectedDoctor.DoctorEmail}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Phone</p>
                    <p className="font-bold">{selectedDoctor.phoneNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Online Consultation Rate</p>
                    <p className="font-bold">{selectedDoctor.OnlineConsultationRate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Country</p>
                    <p className="font-bold">{selectedDoctor.country}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">State</p>
                    <p className="font-bold">{selectedDoctor.state}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Zip Code</p>
                    <p className="font-bold">{selectedDoctor.ZipCode}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">City</p>
                    <p className="font-bold">{selectedDoctor.city}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500">Address</p>
                    <p className="font-bold">{selectedDoctor.DoctorAddress}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}


      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] text-center">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="bg-red p-4 rounded-full mb-4">
                <FaTrashAlt className="text-red-500" size={30} />
              </div>
            </div>

            {/* Text */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Delete Doctor Details?</h2>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this doctor details?</p>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
                onClick={handleCloseModal}
              >
                No
              </button>
              <button
                className="bg-red text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleConfirmDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => toggleDrawer()}
        ></div>
      )}

      <div className="p-4">
        {/* Table Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl  font-semibold">Doctor Management</h1>
          <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search doctors..."
              className="outline-none bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="bg-blue text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => navigate("/adddoctorform")}
          >
            Add New Doctor
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            {/* Table Head */}
            <thead className="bg-greyLightest text-gray-600 text-sm uppercase">
              <tr>
                <th className="p-3 text-left">Doctor Name</th>
                <th className="p-3 text-left">Gender</th>
                <th className="p-3 text-left">Qualification</th>
                <th className="p-3 text-left">Specialty</th>
                <th className="p-3 text-left">Working Time</th>
                <th className="p-3 text-left">Patient Check Up Time</th>
                <th className="p-3 text-left">Break Time</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-gray-700 text-sm">
              {doctorData?.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center p-4 text-gray-500">
                    <img
                      src={NotFoundIcon}
                      alt="Not Found"
                      className="mx-auto mb-2"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <div>No data found. Please add a new doctor.</div>
                  </td>
                </tr>
              ) : (
                filteredDoctors?.map((doctor) => (
                  <tr key={doctor._id} className="border-b hover:bg-gray-100">
                    <td className="p-3 flex items-center space-x-2">
                      <img
                        src={doctor.DoctorImage || "https://via.placeholder.com/100"}
                        alt={doctor.DoctorName}
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{doctor.DoctorName}</span>
                    </td>
                    <td className="p-3">
                      {doctor.gender === "Male" ? (
                        <FaMale className="text-blue-500" />
                      ) : (
                        <FaFemale className="text-pink-500" />
                      )}
                    </td>
                    <td className="p-3">{doctor.DoctorQualification}</td>
                    <td className="p-3">{doctor.specialtiyType}</td>
                    <td className="p-3">
                      <span className="px-5 py-2 bg-[#f6f8fb] rounded-3xl">{doctor.workingTime}</span>
                    </td>
                    <td className="p-3">
                      <span className="px-5 py-2 bg-[#f6f8fb] rounded-3xl">{doctor.CheckupTime}</span>
                    </td>
                    <td className="p-3">
                      <span className="px-5 py-2 bg-[#f6f8fb] rounded-3xl">{doctor.BreakTime}</span>
                    </td>
                    <td className="p-3 text-center flex justify-center items-center space-x-2">
                      <button
                        className="text-blue hover:text-blue p-2 bg-[#f6f8fb] rounded"
                        onClick={() => toggleDrawer(doctor)}
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() => handleEdit(doctor._id)}
                        className="text-green hover:text-green p-2 bg-[#f6f8fb] rounded"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(doctor._id)}
                        className="text-red hover:text-red p-2 bg-[#f6f8fb] rounded"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>


          </table>
        </div>
      </div>
    </>
  );
};

export default DoctorManagementTable;
