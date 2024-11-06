import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightSideContent from "./RightSideContent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    hospital: "",
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.hospital.trim()) newErrors.hospital = "Hospital is required";
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!formData.terms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:8090/admin/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: formData.firstName,
            lastname: formData.lastName,
            email: formData.email,
            phonenumber: formData.phone,
            country: formData.country,
            state: formData.state,
            city: formData.city,
            password: formData.password,
            confirmpassword: formData.confirmPassword,
          }),
        });

        const result = await response.json();
        if (response.ok) {
          toast.success("Registration successful! Redirecting...");
          navigate("/login");
        } else {
          setErrors({ apiError: result.msg || "Something went wrong!" });
        }
      } catch (error) {
        setErrors({ apiError: "Network error occurred, please try again." });
      }
    }
  };

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('token')
    console.log('isAuthenticated ::::::::::::', isAuthenticated);
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  })

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen">
      <div className="bg-white m-auto p-6 sm:p-8 rounded-lg shadow-lg w-full md:w-[90%] lg:w-[70%]">
        <h2 className="text-3xl mb-6 text-center">Registration</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="relative">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm placeholder-gray-500 bg-transparent border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                placeholder="Enter First Name"
              />
              <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10">
                Firstname*
              </label>
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm placeholder-gray-500 bg-transparent border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                placeholder="Enter Last Name"
              />
              <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10">
                Lastname*
              </label>
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <div className="relative mt-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm placeholder-gray-500 bg-transparent border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                placeholder="Enter Email"
              />
              <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10">
                Email*
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="relative mt-4">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm placeholder-gray-500 bg-transparent border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                placeholder="Phone"
              />
              <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10">
                Phone*
              </label>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
            <div className="relative">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm bg-transparent border ${
                  errors.country ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
              >
                <option value="" disabled>
                  Select Country
                </option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
              </select>
              <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10">
                Country*
              </label>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
            <div className="relative">
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm bg-transparent border ${
                  errors.state ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
              >
                <option value="" disabled>
                  Select State
                </option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="New York">New York</option>
                <option value="Florida">Florida</option>
                <option value="Ohio">Ohio</option>
              </select>
              <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10">
                State*
              </label>
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state}</p>
              )}
            </div>
            <div className="relative">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm bg-transparent border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
              >
                <option value="" disabled>
                  Select City
                </option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Houston">Houston</option>
                <option value="New York City">New York City</option>
                <option value="Miami">Miami</option>
                <option value="Columbus">Columbus</option>
              </select>
              <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10">
                City*
              </label>
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
          </div>

          <div className="relative mt-4">
            <input
              type="text"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              className={`block px-4 py-2 w-full text-sm placeholder-gray-500 bg-transparent border ${
                errors.hospital ? "border-red-500" : "border-gray-300"
              } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
              placeholder="Enter Hospital Name"
            />
            <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10">
              Hospital*
            </label>
            {errors.hospital && (
              <p className="text-red-500 text-sm">{errors.hospital}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-4">
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm placeholder-gray-500 bg-transparent border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                placeholder="Enter Password"
              />
              <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10">
                Password*
              </label>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm placeholder-gray-500 bg-transparent border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600`}
                placeholder="Confirm Password"
              />
              <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10">
                Confirm Password*
              </label>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm">
              I accept the{" "}
              <Link to="/terms" className="text-blue-600 hover:underline">
                Terms and Conditions
              </Link>
              *
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms}</p>
          )}
          {errors.apiError && (
            <p className="text-red-500 text-sm">{errors.apiError}</p>
          )}
          <button
            type="submit"
            className="w-full mt-4 bg-blue text-white py-2 rounded-lg hover:bg-blue-500 transition duration-200"
          >
            Register
          </button>
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <RightSideContent />
    </div>
  );
};

export default Register;
