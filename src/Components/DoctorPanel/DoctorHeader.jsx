import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileIcon from "../../assets/images/profile.svg";
import SearchBarWithDropdown from "../SearchBarWithDropdown";
import Notification from "../Notification";
import { FaHome } from "react-icons/fa"; // Using a home icon from React Icons

const DoctorHeader = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null); 

  const handleProfileClick = () => {
    navigate("/doctorprofiledashboard/doctorprofile");
  };

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch("http://localhost:8090/doctor/profile", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch admin data");
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* Toggle Sidebar Button */}
      <button onClick={toggleSidebar} className="md:hidden p-2">
        <span className="text-white text-2xl">&#9776;</span>{" "}
        {/* Hamburger Icon */}
      </button>

      {/* Breadcrumb-like Component */}
      <div className="flex items-center space-x-2 bg-gray-100 text-blue-600 py-1 px-3 rounded-full">
        <FaHome className="text-gray-500" /> {/* Home Icon */}
        <span className="text-gray-500">›</span> {/* Separator */}
        <span className="font-medium text-blue">Appointment Management</span>
      </div>

      {/* <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
        Profile Setting
      </h1> */}

      <div className="flex items-center space-x-4">
        <div className="hidden md:block">
          <SearchBarWithDropdown />
        </div>

        <Notification />

        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={handleProfileClick}
        >
          <img
            src={profileData?.imageUrl || "https://via.placeholder.com/100"} 
            alt="User"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
          <div className="hidden md:block text-black">
          <p>{profileData?.DoctorName ? `${profileData.DoctorName} ${profileData.LastName}` : "Loading..."}</p>
            <p className="text-sm">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DoctorHeader;
