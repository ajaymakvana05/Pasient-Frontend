import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";

const PatientProfileSidebar = () => {
  const [formData, setFormData] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:8090/patient/profile", {  
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch patient data: ${response.statusText}`);
        }

        const data = await response.json();
        setFormData(data);
      } catch (err) {
        console.error("Error fetching patient data:", err);
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientData();
  }, []);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(URL.createObjectURL(selectedImage));
      uploadImage(selectedImage);
    }
  };

  const uploadImage = async (selectedImage) => {
    setLoading(true);

    if (!formData || !formData._id) {
      setErrorMessage("Patient ID is missing.");
      setLoading(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("image", selectedImage);
    formDataToSend.append("firstname", formData.firstname);
    formDataToSend.append("lastname", formData.lastname);

    try {
      const response = await axios.patch(
        `http://localhost:8090/patient/update/${formData._id}`,
        formDataToSend,
        { withCredentials: true }
      );

      if (response.data) {
        setSuccessMessage("Profile updated successfully!");
        setFormData(response.data.data); // Update formData with the new data
        // toast.success("Profile updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      }
    } catch (error) {
      setErrorMessage("Failed to update profile: " + error.message);
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
          src={image || formData?.imageUrl || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4 cursor-pointer"
          onClick={handleImageClick}
        />
        <h2 className="text-xl font-semibold">
          {formData?.firstname
            ? `${formData.firstname} ${formData.lastname}`
            : "Loading..."}
        </h2>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-700 mb-4">Menu</h3>

        <ul className="space-y-4">
          <li className="flex items-center rounded-md bg-gray-200">
            <NavLink
              to="#"
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

export default PatientProfileSidebar;
