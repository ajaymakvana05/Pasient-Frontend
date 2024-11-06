import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightSideContent from "../RightSideContent";

const DoctorForgetPassword = () => {
  const [inputValue, setInputValue] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validateInput = (value) => {
    const newErrors = {};
    const emailPattern = /\S+@\S+\.\S+/;
    const phonePattern = /^\d{10}$/;

    if (!value) {
      newErrors.inputValue = "Email or Phone Number is required.";
    } else if (!emailPattern.test(value) && !phonePattern.test(value)) {
      newErrors.inputValue = "Please enter a valid Email or Phone Number.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInput(inputValue);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage(
        "An OTP has been sent to your email or phone number. Please check."
      );
      navigate("/doctorgetotp");
      setInputValue("");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="block md:hidden p-6 bg-blue-50">
        <RightSideContent />
      </div>

      <div className="flex justify-center items-center bg-gray-50 p-6 md:p-12">
        <div className="w-full max-w-md p-8 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Forgot Password
          </h2>
          {successMessage && (
            <div className="text-green mb-4 text-center">{successMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <input
                type="text"
                id="emailOrPhone"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter your email or phone number"
                className={`peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border rounded-lg focus:outline-none focus:border-blue-600 focus:ring-0 ${
                  errors.inputValue ? "border-red" : "border-gray-300"
                }`}
              />
              <label
                htmlFor="emailOrPhone"
                className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10 fs-[16px]"
              >
                Email or Phone Number*
              </label>
              {errors.inputValue && (
                <p className="text-red text-xs mt-1">{errors.inputValue}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-greyLightest text-greyDark py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Get OTP
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-700">
                <Link to="/doctorlogin" className="text-blue hover:text-blue">
                  Back to Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center bg-blue-50 p-6 md:p-12">
        <RightSideContent />
      </div>
    </div>
  );
};

export default DoctorForgetPassword;
