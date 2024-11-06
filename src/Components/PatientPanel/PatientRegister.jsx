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
    // hospital: "",
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
    // console.log("Form data being sent:", formData); 

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


    // console.log("Passwords:", formData.password, formData.confirmPassword);

    // Log validation errors
    if (Object.keys(newErrors).length > 0) {
      console.log("Validation errors:", newErrors);
      setErrors(newErrors);
      return;
    }

    try {
      console.log("Sending request to API..."); // Log before API call
      const response = await fetch("http://localhost:8090/patient/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Log the response status
      // console.log("Response status:", response.status);
      const result = await response.json();

      // Log the result
      // console.log("API response:", result);

      if (response.ok) {
        toast.success("Registration successful! Redirecting...");
        navigate("/patientlogin");
      } else {
        toast.error(result.msg);
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
              {errors.firstName && (
                <span className="text-red-500 text-sm">{errors.firstName}</span>
              )}
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
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
            <div className="w-full sm:w-1/2 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                Email Address<span className="text-red">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div className="w-full sm:w-1/2 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                Phone Number<span className="text-red">*</span>
              </label>
              <input
                type="number"
                name="phonenumber"
                placeholder="Enter your phone number"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={formData.phonenumber}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
            <div className="w-full sm:w-1/3 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                Age<span className="text-red">*</span>
              </label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={formData.age}
                onChange={handleChange}
              />
              {errors.age && (
                <span className="text-red-500 text-sm">{errors.age}</span>
              )}
            </div>
            <div className="w-full sm:w-1/3 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                Height (cm)<span className="text-red">*</span>
              </label>
              <input
                type="number"
                name="height"
                placeholder="Enter your height in cm"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={formData.height}
                onChange={handleChange}
              />
              {errors.height && (
                <span className="text-red-500 text-sm">{errors.height}</span>
              )}
            </div>
            <div className="w-full sm:w-1/3 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                Weight (kg)<span className="text-red">*</span>
              </label>
              <input
                type="number"
                name="weight"
                placeholder="Enter your weight in kg"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={formData.weight}
                onChange={handleChange}
              />
              {errors.weight && (
                <span className="text-red-500 text-sm">{errors.weight}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
            <div className="w-full sm:w-1/3 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                Gender<span className="text-red">*</span>
              </label>
              <select
                name="gender"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="w-full sm:w-1/3 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                Blood Group<span className="text-red">*</span>
              </label>
              <select
                name="BloodGroup"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={formData.BloodGroup}
                onChange={handleChange}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className="w-full sm:w-1/3 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                Date of Birth<span className="text-red">*</span>
              </label>
              <input
                type="date"
                name="dateofbirth"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={formData.dateofbirth}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4">
            <div className="w-full sm:w-1/3 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                Country<span className="text-red">*</span>
              </label>
              <input
                type="text"
                name="country"
                placeholder="Enter your country"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="w-full sm:w-1/3 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                State<span className="text-red">*</span>
              </label>
              <input
                type="text"
                name="state"
                placeholder="Enter your state"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="w-full sm:w-1/3 relative">
              <label className="absolute left-2 bg-white top-1 text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
                City<span className="text-red">*</span>
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="relative">
            <label className="absolute left-2 bg-white top-[-10px] text-sm font-medium text-gray-500 transition-all duration-200 transform origin-top-left">
              Address<span className="text-red">*</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="mt-4 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className=" relative">
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
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
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
              <span className="text-red-500 text-sm">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="terms"
              className="mr-2"
              checked={formData.terms}
              onChange={handleChange}
            />
            <label className="text-sm">
              I agree to the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue text-white rounded-md py-2 hover:bg-blue"
          >
            Register
          </button>
          <p className="text-center">
            Already have an account ?{" "}
            <Link to="/patientlogin" className="text-blue">
              Login
            </Link>
          </p>
        </form>
      </div>

      <RightSideContent />
    </div>
  );
};

export default PatientRegister;
