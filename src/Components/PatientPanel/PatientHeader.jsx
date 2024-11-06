import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileIcon from "../../assets/images/profile.svg";
import SearchBarWithDropdown from "../SearchBarWithDropdown";
import Notification from "../Notification";
import { FaHome, FaBars } from "react-icons/fa";

const PatientHeader = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [Loading,setLoading] = useState(false);

  const handleProfileClick = () => {
    navigate("/patientprofiledashboard/patientprofile");
  };

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        console.log("Fetching patient data...");
        const response = await fetch("http://localhost:8090/patient/profile", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch patient data: ${response.statusText}`
          );
        }

        const data = await response.json();
        // console.log("Patient data received:", data);
        setFormData(data);
      } catch (err) {
        console.error("Error fetching patient data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
        console.log("Loading complete.");
      }
    };

    fetchAdminData();
  }, []);

  return (
    <header className="w-full  text-black p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="md:hidden p-2">
        <FaBars size={24} />
      </button>

      <div className="hidden md:flex items-center space-x-2 bg-gray-100 text-blue-600 py-1 px-3 rounded-full">
        <FaHome className="text-gray-500" />

        <span className="hidden md:inline-block text-gray-500">›</span>
        <span className="hidden md:inline-block font-medium text-blue">
          Appointment Management
        </span>
      </div>

      <div className="md:flex hidden items-center space-x-4">
        <div className=" md:block">
          <SearchBarWithDropdown className="md:px-3" />
        </div>

        <Notification />

        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleProfileClick}
        >
          <img
            src={formData?.imageUrl || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
          />
          <div className="hidden md:block text-black">
            <p>
              {formData?.firstname
                ? `${formData.firstname} ${formData.lastname}`
                : "Loading..."}
            </p>
            <p className="text-sm">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PatientHeader;
