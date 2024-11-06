import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightSideContent from "../RightSideContent";

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
          navigate("/login");
        } else {
          setErrors({ apiError: result.msg || "Something went wrong!" });
        }
      } catch (error) {
        setErrors({ apiError: "Network error occurred, please try again." });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl  mb-6 text-center">Registration</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative ">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={` block px-[8px] py-2 w-full text-sm  placeholder-grey bg-transparent border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer peer`}
                placeholder="Enter First Name"
              />
              <label className=" font-medium -translate-y-4 absolute bg-white cursor-text duration-300  left-1 origin-[0] px-4 scale-75 select-none text-black text-sm top-2 transform z-10">
                Firstname*
              </label>
              {errors.firstName && (
                <p className="text-red text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="relative ">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`block  px-[8px] py-2 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder="Enter Last Name"
              />
              <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300  left-1 origin-[0] px-4 scale-75 select-none text-black text-sm top-2 transform z-10">
                Lastname*
              </label>
              {errors.lastName && (
                <p className="text-red text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mt-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder="Enter Email"
              />
              <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300  left-1 origin-[0] px-4 scale-75 select-none text-black text-sm top-2 transform z-10">
                Email*
              </label>
              {errors.email && (
                <p className="text-red text-sm">{errors.email}</p>
              )}
            </div>
            <div className="relative mt-4">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`block px-6 py-2 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" Phone "
              />
              <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300  left-1 origin-[0] px-4 scale-75 select-none text-black text-sm top-2 transform z-10">
                Phone*
              </label>
              {errors.phone && (
                <p className="text-red text-sm">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="relative">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.country ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              >
                <option value="" className="" disabled selected>
                  Select Country
                </option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
              </select>
              <label
                className={`absolute top-2 left-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600`}
              >
                Country*
              </label>
              {errors.country && (
                <p className="text-red text-sm">{errors.country}</p>
              )}
            </div>

            <div className="relative">
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.state ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              >
                <option value="" disabled>
                  Select State
                </option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="New York">New York</option>
                <option value="Florida">Florida</option>
                <option value="Illinois">Illinois</option>
              </select>
              <label
                className={`absolute top-2 left-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600`}
              >
                State*
              </label>
              {errors.state && (
                <p className="text-red text-sm">{errors.state}</p>
              )}
            </div>

            <div className="relative">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              >
                <option value="" disabled>
                  Select City
                </option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
              </select>
              <label
                className={`absolute top-2 left-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600`}
              >
                City*
              </label>
              {errors.city && <p className="text-red text-sm">{errors.city}</p>}
            </div>
          </div>

          <div className="relative mt-4">
            <select
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${
                errors.hospital ? "border-red-500" : "border-gray-300"
              } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            >
              <option value="" disabled>
                Select Hospital
              </option>
              <option value="General Hospital">General Hospital</option>
              <option value="City Hospital">City Hospital</option>
              <option value="Community Health Center">
                Community Health Center
              </option>
              <option value="Central Clinic">Central Clinic</option>
              <option value="Northside Hospital">Northside Hospital</option>
            </select>
            <label
              className={`text-black  absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600`}
            >
              Select Hospital
            </label>
            {errors.hospital && (
              <p className="text-red text-sm">{errors.hospital}</p>
            )}
          </div>

          <div className="relative mt-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder="Enter Password"
            />
            <label className="font-medium font-medium -translate-y-4 absolute bg-white cursor-text duration-300  left-1 origin-[0] px-4 scale-75 select-none text-black text-sm top-2 transform z-10">
              Password
            </label>
            {errors.password && (
              <p className="text-red text-sm">{errors.password}</p>
            )}
          </div>
          <div className="relative mt-4">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`block px-4 py-2 w-full text-sm text-gray-900 bg-transparent border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder="Confirm Password"
            />
            <label className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300  left-1 origin-[0] px-4 scale-75 select-none text-black text-sm top-2 transform z-10">
              Confirm Passowrd
            </label>
            {errors.confirmPassword && (
              <p className="text-red text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm text-gray-600">
              I accept the terms and conditions
            </label>
          </div>
          {errors.terms && <p className="text-red text-sm">{errors.terms}</p>}

          <button
            type="submit"
            className="mt-6 w-full bg-greyLightest text-black py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>

          {errors.apiError && (
            <p className="mt-4 text-red-500 text-sm text-center">
              {errors.apiError}
            </p>
          )}

          <p className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
      <RightSideContent />
    </div>
  );
};

export default Register;
