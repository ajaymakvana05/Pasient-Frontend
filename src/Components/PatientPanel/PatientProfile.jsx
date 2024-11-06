import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PatientProfile = () => {
  // State to manage form data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    gender: "",
    dateofbirth: "",
    age: "",
    BloodGroup: "",
    height: "",
    weight: "",
    country: "",
    state: "",
    city: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          throw new Error(`Failed to fetch patient data: ${response.statusText}`);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const patientId = formData._id;

    try {
      const response = await axios.patch(
        `http://localhost:8090/patient/update/${patientId}`,
        formData,
        { withCredentials: true }
      );

      if (response.data) {
        setSuccessMessage("Profile updated successfully!");
        toast.success("Profile updated successfully!");
        setIsEditable(false);
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error("Error updating profile", error);
      setErrorMessage(
        "Failed to update profile: " +
        (error.response ? error.response.data.msg : error.message)
      );
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-6 w-full max-w-4xl h-1/4">
        <h1 className="text-2xl font-bold mb-6 text-blue">Edit Profile</h1>
        <form
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          onSubmit={handleSubmit}
        >
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={`${formData.firstname} ${formData.lastname}`}
              onChange={(e) => {
                const [first, last] = e.target.value.split(" ");
                setFormData({ ...formData, firstname: first || "", lastname: last || "" });
              }}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700">Number</label>
            <input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700">Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700">DOB</label>
            <input
              type="text"
              name="dateofbirth"
              value={formData.dateofbirth ? formData.dateofbirth.split('T')[0] : ""}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700">Age</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700">Blood Group</label>
            <input
              type="text"
              name="BloodGroup"
              value={formData.BloodGroup}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700">Height (Cm)</label>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700">Weight (Kg)</label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-1">
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-3">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-1 md:col-span-3 flex justify-end space-x-4 mt-4">
            <button
              type="button"
              className="bg-white border border-gray-300 text-gray-700 rounded-md px-4 py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue text-white rounded-md px-4 py-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientProfile;
