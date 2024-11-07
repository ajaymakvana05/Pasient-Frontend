import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightSideContent from "../RightSideContent";
import { toast } from "react-toastify";

const PatientRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    BloodGroup: "",
    dateofbirth: "",
    country: "",
    state: "",
    city: "",
    address: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation checks
    if (!formData.firstname) newErrors.firstname = "First Name is required.";
    if (!formData.lastname) newErrors.lastname = "Last Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.phonenumber) {
      newErrors.phonenumber = "Phone Number is required.";
    } else if (!/^\d{10}$/.test(formData.phonenumber)) {
      newErrors.phonenumber = "Phone Number must be 10 digits.";
    }
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.terms) newErrors.terms = "You must agree to the terms.";

    // Check if there are any validation errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear any existing error state
    setErrors({});

    try {
      // Send the form data to the API
      const response = await fetch("https://pasient-backend-1.onrender.com/patient/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Registration successful! Redirecting...");
        navigate("/patientlogin");
      } else {
        toast.error(result.msg || "Something went wrong!");
        setErrors({ apiError: result.msg || "Something went wrong!" });
      }
    } catch (error) {
      console.error("Network error occurred:", error);
      setErrors({ apiError: "Network error occurred, please try again." });
    }
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 ">
      <div className="bg-white m-auto p-4 sm:p-4 rounded-lg shadow-lg w-full md:w-[90%] lg:w-[70%]">
        <h2 className="text-3xl mb-2">Registration</h2>
        <form className="space-y-2" onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
            <div className="w-full sm:w-1/2 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                First Name<span className="text-red">*</span>
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter your first name"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-black"
                value={formData.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname}</span>}
            </div>
            <div className="w-full sm:w-1/2 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                Last Name<span className="text-red">*</span>
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter your last name"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={formData.lastname}
                onChange={handleChange}
              />
              {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname}</span>}
            </div>
          </div>

          {/* Other fields... */}
          {/* Display other input fields similarly and validate them with the 'errors' state */}

          <div className="relative">
            <label className="absolute left-2 bg-white top-[-10px] text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
              Password<span className="text-red">*</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div>

          <div className=" relative">
            <label className="absolute left-2 bg-white top-[-10px] text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
              Confirm Password<span className="text-red">*</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">{errors.confirmPassword}</span>
            )}
          </div>

          {/* Terms and Conditions checkbox */}
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="terms"
              className="mr-2"
              checked={formData.terms}
              onChange={handleChange}
            />
            <label className="text-sm">I agree to the terms and conditions</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue text-white rounded-md py-2 hover:bg-blue"
          >
            Register
          </button>

          {/* API error display */}
          {errors.apiError && <span className="text-red-500 text-sm">{errors.apiError}</span>}

          <p className="text-center">
            Already have an account?{" "}
            <Link to="/patientlogin" className="text-blue">Login</Link>
          </p>
        </form>
      </div>

      <RightSideContent />
    </div>
  );
};

export default PatientRegister;
