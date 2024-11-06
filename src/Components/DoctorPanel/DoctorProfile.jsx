import { useState, useEffect } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
import Edit from "../../assets/images/edit.svg";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const DoctorProfile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [profileData, setProfileData] = useState({
    DoctorName: "",
    LastName: "",
    DoctorEmail: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    HospitalName: "",
    gender: "",
  });

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
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset any previous error messages

    try {
      // Assuming profileData contains the updated information
      const response = await axios.patch(
        `http://localhost:8090/doctor/update/${profileData._id}`, // Use the actual ID here
        profileData,
        { withCredentials: true } // Ensure credentials are included for authentication
      );

      if (response.data) {
        setSuccessMessage("Profile updated successfully!");
        toast.success("Profile updated successfully!");
        setIsEditable(false); // Set editable state to false after update

        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error updating profile", error);

      // Update error message based on response
      setErrorMessage(
        "Failed to update profile: " +
          (error.response && error.response.data.msg
            ? error.response.data.msg
            : error.message)
      );
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Profile</h2>
          <button
            className="profile-btn bg-blue text-white px-4 py-2 rounded-lg transition-transform duration-200 transform hover:scale-105"
            onClick={() => setIsEditable(!isEditable)}
          >
            <img src={Edit} alt="edit icon" className="w-5 h-5 mr-2 " />
            {isEditable ? "Cancel Edit" : "Edit Profile"}
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* First Name */}
            <div className="relative">
              <input
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue"
                type="text"
                id="DoctorName"
                value={profileData.DoctorName || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="firstname"
                className={`absolute left-4 top-2 transition-all duration-200 transform ${
                  profileData.DoctorName
                    ? "-translate-y-4 scale-75"
                    : "translate-y-0 scale-100"
                } bg-white px-1 text-sm font-medium text-gray-600`}
              >
                First Name
              </label>
            </div>

            {/* Last Name */}
            <div className="relative">
              <input
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="LastName"
                value={profileData.LastName || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="lastname"
                className={`absolute left-4 top-2 transition-all duration-200 transform ${
                  profileData.LastName
                    ? "-translate-y-4 scale-75"
                    : "translate-y-0 scale-100"
                } bg-white px-1 text-sm font-medium text-gray-600`}
              >
                Last Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                value={profileData.DoctorEmail || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="email"
                className={`absolute left-4 top-2 transition-all duration-200 transform ${
                  profileData.DoctorEmail
                    ? "-translate-y-4 scale-75"
                    : "translate-y-0 scale-100"
                } bg-white px-1 text-sm font-medium text-gray-600`}
              >
                Email Address
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                id="phoneNumber"
                value={profileData.phoneNumber || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="phonenumber"
                className={`absolute left-4 top-2 transition-all duration-200 transform ${
                  profileData.phoneNumber
                    ? "-translate-y-4 scale-75"
                    : "translate-y-0 scale-100"
                } bg-white px-1 text-sm font-medium text-gray-600`}
              >
                Phone Number
              </label>
            </div>

            {/* Hospital Name */}
            <div className="relative">
              <input
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="HospitalName"
                value={profileData.HospitalName || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="hospitalName"
                className={`absolute left-4 top-2 transition-all duration-200 transform ${
                  profileData.HospitalName
                    ? "-translate-y-4 scale-75"
                    : "translate-y-0 scale-100"
                } bg-white px-1 text-sm font-medium text-gray-600`}
              >
                Hospital Name
              </label>
            </div>

            {/* Gender */}
            <div className="relative">
              <input
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="gender"
                value={profileData.gender || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="gender"
                className={`absolute left-4 top-2 transition-all duration-200 transform ${
                  profileData.gender
                    ? "-translate-y-4 scale-75"
                    : "translate-y-0 scale-100"
                } bg-white px-1 text-sm font-medium text-gray-600`}
              >
                Gender
              </label>
            </div>

            {/* City */}
            <div className="relative">
              <input
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="city"
                value={profileData.city || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="city"
                className={`absolute left-4 top-2 transition-all duration-200 transform ${
                  profileData.city
                    ? "-translate-y-4 scale-75"
                    : "translate-y-0 scale-100"
                } bg-white px-1 text-sm font-medium text-gray-600`}
              >
                City
              </label>
            </div>

            {/* State */}
            <div className="relative">
              <input
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="state"
                value={profileData.state || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="state"
                className={`absolute left-4 top-2 transition-all duration-200 transform ${
                  profileData.state
                    ? "-translate-y-4 scale-75"
                    : "translate-y-0 scale-100"
                } bg-white px-1 text-sm font-medium text-gray-600`}
              >
                State
              </label>
            </div>

            {/* Country */}
            <div className="relative">
              <input
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="country"
                value={profileData.country || ""}
                onChange={handleChange}
                readOnly={!isEditable}
                required
              />
              <label
                htmlFor="country"
                className={`absolute left-4 top-2 transition-all duration-200 transform ${
                  profileData.country
                    ? "-translate-y-4 scale-75"
                    : "translate-y-0 scale-100"
                } bg-white px-1 text-sm font-medium text-gray-600`}
              >
                Country
              </label>
            </div>
          </div>

          {isEditable && (
            <div className="flex justify-end mt-6 ml-auto">
              <button
                type="button" // Change to type "button" to avoid form submission
                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                onClick={() => setIsEditable(false)} // Cancel button to exit edit mode
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Save
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default DoctorProfile;
