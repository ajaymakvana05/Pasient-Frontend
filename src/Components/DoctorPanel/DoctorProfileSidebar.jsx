import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaLock, FaFileAlt, FaShieldAlt } from "react-icons/fa";

const DoctorProfileSidebar = () => {
  const [profileData, setProfileData] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch("http://localhost:8090/doctor/profile", {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) throw new Error("Failed to fetch admin data");
        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        console.error("Error fetching profile data:", err.message);
      } finally {
        setLoading(false); // Ensure loading is set to false at the end
      }
    };

    fetchAdminData();
  }, []);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
      uploadImage(selectedImage); 
    }
  };

  const uploadImage = async (selectedImage) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("firstname", profileData.firstname);
    formData.append("lastname", profileData.lastname);

    try {
      const response = await fetch(`http://localhost:8090/doctor/update/${profileData._id}`, {
        method: "PATCH",
        body: formData,
        credentials: "include",
      });
      const result = await response.json();
      if (response.ok) {
        setProfileData(result.data); // Update profileData with new data
      } else {
        console.error("Error updating profile:", result.msg);
      }
    } catch (err) {
      console.error("Error during image upload:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-[240px]">
      <div className="flex flex-col items-center">
        <img
          src={profileData?.imageUrl || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4 cursor-pointer"
          onClick={handleImageClick}
        />
        <h2 className="text-xl font-semibold">
          {profileData?.DoctorName ? `${profileData.DoctorName} ${profileData.LastName}` : "Loading..."}
        </h2>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Menu</h3>

        <ul className="space-y-4">
          {/* Profile Link */}
          <li className="flex items-center rounded-md bg-gray-200">
            <NavLink
              to="/doctorprofiledashboard/doctorprofile"
              className={({ isActive }) =>
                isActive
                  ? "text-blue font-medium rounded-md px-3 py-2 flex items-center"
                  : "text-black font-medium px-3 py-2 flex items-center"
              }
            >
              <FaUser className="mr-2" />
              <span className="hidden md:inline">Profile</span>
            </NavLink>
          </li>

          {/* Change Password Link */}
          <li className="flex items-center rounded-md bg-gray-200">
            <NavLink
              to="/doctorprofiledashboard/doctorchangepassword"
              className={({ isActive }) =>
                isActive
                  ? "text-blue font-medium rounded-md px-3 py-2 flex items-center"
                  : "text-black font-medium px-3 py-2 flex items-center"
              }
            >
              <FaLock className="mr-2" />
              <span className="hidden md:inline">Change Password</span>
            </NavLink>
          </li>

          {/* Terms & Conditions Link */}
          <li className="flex items-center rounded-md bg-gray-200">
            <NavLink
              to="/doctorprofiledashboard/doctorTermsandconditions"
              className={({ isActive }) =>
                isActive
                  ? "text-blue font-medium rounded-md px-3 py-2 flex items-center"
                  : "text-black font-medium px-3 py-2 flex items-center"
              }
            >
              <FaFileAlt className="mr-2" />
              <span className="hidden md:inline">Terms & Conditions</span>
            </NavLink>
          </li>

          {/* Privacy Policy Link */}
          <li className="flex items-center rounded-md bg-gray-200">
            <NavLink
              to="/doctorprofiledashboard/doctorprivacypolicy"
              className={({ isActive }) =>
                isActive
                  ? "text-blue font-medium rounded-md px-3 py-2 flex items-center"
                  : "text-black font-medium px-3 py-2 flex items-center"
              }
            >
              <FaShieldAlt className="mr-2" />
              <span className="hidden md:inline">Privacy Policy</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        style={{ display: "none" }} // Hide the input
      />
    </div>
  );
};

export default DoctorProfileSidebar;
