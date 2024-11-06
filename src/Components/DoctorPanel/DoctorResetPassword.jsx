import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightSideContent from "../RightSideContent";

const DoctorResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!newPassword) {
      newErrors.newPassword = "New password is required.";
    } else if (!passwordPattern.test(newPassword)) {
      newErrors.newPassword =
        "Password must be at least 8 characters, include at least one letter and one number.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required.";
    } else if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage("Your password has been successfully reset.");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/login");
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
            Reset Password
          </h2>
          {successMessage && (
            <div className="text-green mb-4 text-center">{successMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            {/* New Password Field */}
            <div className="mb-4 relative">
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter New Password"
                className={`peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border rounded-lg focus:outline-none focus:border-blue-600 focus:ring-0 ${
                  errors.newPassword ? "border-red" : "border-gray-300"
                }`}
              />
              <label
                htmlFor="newPassword"
                className="absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm font-medium text-gray-500 duration-500 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:scale-75 peer-focus:text-blue-600"
              >
                New Password*
              </label>
              {errors.newPassword && (
                <p className="text-red text-xs mt-1">{errors.newPassword}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="mb-6 relative">
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className={`peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border rounded-lg focus:outline-none focus:border-blue-600 focus:ring-0 ${
                  errors.confirmPassword ? "border-red" : "border-gray-300"
                }`}
              />
              <label
                htmlFor="confirmPassword"
                className="absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm font-medium text-gray-500 duration-500 peer-placeholder-shown:top-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:scale-75 peer-focus:text-blue-600"
              >
                Confirm Password*
              </label>
              {errors.confirmPassword && (
                <p className="text-red text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-greyLightest text-greyDark py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center bg-blue-50 p-6 md:p-12">
        <RightSideContent />
      </div>
    </div>
  );
};

export default DoctorResetPassword;
