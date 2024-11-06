import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMessage("");
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
      const response = await axios.patch("http://localhost:8090/admin/resetpassword", {
        oldpassword: oldPassword,
        newpassword: newPassword,
        confirmpassword: confirmPassword,
      }, {
        withCredentials: true
      });

      setMessage(response.data.msg);
      toast.success('Password Reset Sreccesfully..')
      navigate('/login')
    } catch (err) {
      setError(err.response?.data.msg || "An error occurred");
    }
  };

  return (
    <div className="m-0 w-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Change Password</h1>
      <p className="text-sm">
        To change your password, please fill in the fields below. Your password
        must contain at least 6 characters, and must also include at least one
        upper case letter, one lower case letter, one number, and one special
        character.
      </p>
      <form onSubmit={handleChangePassword}>
        <div className="mb-4">
          <label className="block text-gray-700">Current Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm New Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Change Password
        </button>
      </form>
      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default ChangePassword;
