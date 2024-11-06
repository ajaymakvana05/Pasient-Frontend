import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DoctorChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters long");
      return;
    }

    try {
      const response = await axios.patch(
        "http://localhost:8090/doctor/resetpassword",
        {
          oldpassword: oldPassword,
          newpassword: newPassword,
          confirmpassword: confirmPassword,
        },
        {
          withCredentials: true,
        }
      );

      toast.success(response.data.msg || "Password reset successfully.");
      // Clear fields
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      navigate('/doctor/doctorlogin')
    } catch (err) {
      const errorMessage = err.response?.data.msg || "An error occurred";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Change Password</h1>
        <p className="text-sm">
          To change your password, please fill in the fields below. Your
          password must contain at least 8 characters, including one upper case letter, one lower case letter, one number, and one special character.
        </p>
        <form onSubmit={handleChangePassword}>
          <div className="mb-4">
            <label className="block text-gray-700">Current Password</label>
            <input
              type="password"
              className="md:w-2/3 p-2 border rounded"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              className="md:w-2/3 p-2 border rounded"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm New Password</label>
            <input
              type="password"
              className="md:w-2/3 p-2 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="bg-blue text-white px-4 py-2 rounded">
            Change Password
          </button>
        </form>
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default DoctorChangePassword;
