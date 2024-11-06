import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RightSideContent from "../RightSideContent";
import clockImage from "../assets/images/clock.png";

const GetOTP = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    if (isTimerActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsTimerActive(false);
    }
  }, [isTimerActive, timeLeft]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput.focus();
    }

    if (!value && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const joinedOtp = otp.join("");

    if (joinedOtp.length < 6 || !/^\d{6}$/.test(joinedOtp)) {
      setErrors({ otp: "Please enter a valid 6-digit OTP." });
      setIsTimerActive(false);
      setTimeLeft(0);
    } else {
      setErrors({});
      setSuccessMessage("OTP verified successfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    }
  };

  const handleRequestOtp = () => {
    setTimeLeft(30);
    setIsTimerActive(true);
    setErrors({});
    setOtp(Array(6).fill(""));
  };

  const handleResendOtp = () => {
    handleRequestOtp();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-md p-8 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Enter OTP
        </h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Please enter the 6-digit code that was sent to your phone number.
        </p>
        {successMessage && (
          <div className="text-green-500 mb-4 text-center">
            {successMessage}
          </div>
        )}
        {errors.otp && (
          <div className="text-red-500 mb-4 text-center">{errors.otp}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-4">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                id={`otp-input-${index}`}
                value={value}
                onChange={(e) => handleChange(e.target.value, index)}
                onFocus={(e) => e.target.select()}
                maxLength="1"
                className={`w-12 h-12 text-center border rounded-lg focus:outline-none focus:border-blue-600 focus:ring-0 ${
                  errors.otp ? "border-red-500" : "border-blue-500"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-center mb-4">
            <img src={clockImage} alt="Clock Icon" className="h-5 w-5 mr-2" />
            <span className="text-blue-500 text-sm">
              {timeLeft > 0
                ? `00:${String(timeLeft).padStart(2, "0")}`
                : "Expired"}
            </span>
          </div>

          {timeLeft === 0 && (
            <Link
              type="button"
              onClick={handleResendOtp}
              className="w-full  text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Resend OTP
            </Link>
          )}

          <button
            type="submit"
            onClick={handleRequestOtp}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Verify OTP
          </button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-700">
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Back to Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetOTP;
