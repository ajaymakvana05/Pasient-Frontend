import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RightSideContent from "./RightSideContent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
  };

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch("http://localhost:8090/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const result = await response.json();

      if (response.ok) {
        //   localStorage.setItem("token", result.token);
        //   console.log("Login successful:", result);
        //   navigate("/adminDashboard");
        // } else {
        //   setErrors({
        //     apiError: result.message || "Login failed, please try again.",
        //   });

        //   localStorage.setItem("token", result.token);
        //   console.log("Login successful:", result);
        //   navigate("/adminDashboard");
        // } else {
        //   setErrors({
        //     apiError: result.message || "Login failed, please try again.",
        //   });

        localStorage.setItem("token", result.Admintoken);
        toast.success("Login successful! Redirecting...");
        navigate("/dashboard");
      } else {
        toast.error(result.message || "Login failed, please try again.");
        setErrors({
          apiError: result.message || "Login failed, please try again.",
        });
        setErrors({
          apiError: result.message || "Login failed, please try again.",
        });
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error occurred, please try again.");
      setErrors({ apiError: "Network error occurred, please try again." });
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
      <div className="md:order-2 order-1 flex justify-center items-center bg-blue-50">
        <RightSideContent />
      </div>

      <div className="md:order-1 order-2 flex justify-center items-center bg-gray-50 p-6 md:p-12">
        <div className="w-full max-w-md p-8 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <input
                type="text"
                id="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                className={`peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-0 ${
                  errors.email ? "border-red" : "border-gray-300"
                }`}
              />
              <label
                htmlFor="email"
                className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10 fs-[16px]"
              >
                Email*
              </label>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-4 relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder=" "
                value={formData.password}
                onChange={handleChange}
                className={`peer block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-0 ${
                  errors.password ? "border-red" : "border-gray-300"
                }`}
              />
              <label
                htmlFor="password"
                className="font-medium -translate-y-4 absolute bg-white cursor-text duration-300 left-4 origin-[0] scale-75 text-black text-sm top-2 transform z-10 fs-[16px]"
              >
                Password*
              </label>
              <span
                className="absolute right-3 top-5 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember Me
                </label>
              </div>
              <Link
                to="/forgetpassword"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Login
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-700">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Registration
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
