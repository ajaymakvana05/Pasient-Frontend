import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaBars,
  FaChevronDown,
  FaCalendarCheck,
  FaClipboardList,
  FaPrescriptionBottleAlt,
  FaVideo,
  FaComments,
  FaTimes,
} from "react-icons/fa";
import Logo from "../../assets/images/logo.svg";

const PatientSidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("PatientToken");
    navigate("/Patientlogin");
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-lg p-4 z-50 transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:relative md:shadow-none md:h-auto`}
    >
      {/* Close Button - Only visible on small screens */}
      <button
        className="md:hidden absolute top-4 right-4 p-2 focus:outline-none"
        onClick={toggleSidebar}
      >
        <FaTimes size={24} />
      </button>

      <div>
        <div className="flex justify-center items-center mb-8">
          <img src={Logo} alt="Hospital Logo" className="max-w-[200px] w-100" />
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/personalhealthrecord/patientdetaildashboard"
                className={({ isActive }) =>
                  `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                  }`
                }
              >
                <FaClipboardList />
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Personal Health Record
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/appointmentbooking/patientmyappointment"
                className={({ isActive }) =>
                  `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                  }`
                }
              >
                <FaCalendarCheck />
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Appointment Booking
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/prescriptionaccess"
                className={({ isActive }) =>
                  `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                  }`
                }
              >
                <FaPrescriptionBottleAlt />
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Prescription Access
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/teleconsultationaccess"
                className={({ isActive }) =>
                  `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                  }`
                }
              >
                <FaVideo />
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Teleconsultation Access
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bills"
                className={({ isActive }) =>
                  `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                  }`
                }
              >
                <FaComments />
                <span style={{ fontSize: "16px", fontWeight: "600" }}>
                  Bills
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="mt-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center bg-liteRed text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          <FaSignOutAlt className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default PatientSidebar;
