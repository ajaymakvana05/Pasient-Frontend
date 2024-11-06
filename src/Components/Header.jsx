import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification";
import SearchBarWithDropdown from "./SearchBarWithDropdown";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null); 

  const handleProfileClick = () => {
    navigate("/profiledashboard/profile");  
  };
  
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch("http://localhost:8090/admin/profile", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch admin data");
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        console.error("Error fetching profile data:", err.message);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
     

      <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
        Profile Setting
      </h1>

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
            <p>{profileData?.firstname ? `${profileData.firstname} ${profileData.lastname}` : "Loading..."}</p>
            <p className="text-sm">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
