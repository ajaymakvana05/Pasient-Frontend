import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserMd,
  FaUsers,
  FaFileInvoiceDollar,
  FaChartLine,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaCalendarCheck,
  FaClipboardList,
  FaPrescriptionBottleAlt,
  FaVideo,
  FaComments,
} from "react-icons/fa";
import Logo from "../../assets/images/logo.svg";

const DoctorSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prescriptionDropdownOpen, setPrescriptionDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("DoctorToken");
    navigate("/doctor/doctorlogin");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const togglePrescriptionDropdown = () => {
    setPrescriptionDropdownOpen(!prescriptionDropdownOpen);
  };

  return (
    <div className="flex md:min-[280px]">
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="p-4 text-black transition-colors duration-300"
        >
          <FaBars size={24} />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 md:shadow-none md:h-auto`}
      >
        <div>
          <div className="flex justify-between items-center mb-8">
            <div className="flex justify-center items-center">
              <img
                src={Logo}
                alt="Hospital Logo"
                className="max-w-[200px] w-100"
              />
            </div>
            <button
              onClick={toggleSidebar}
              className={`text-black transition-colors duration-300 ${isOpen ? "block md:hidden" : "hidden"
                }`}
            >
              <FaTimes size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/appointmentmanagement/appointmenttable"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${isActive
                      ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaCalendarCheck />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Appointment Management
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/patientrecordaccess/doctorpatientrecordaccessTable"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${isActive
                      ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaClipboardList />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Patient Record Access
                  </span>
                </NavLink>
              </li>

              {/* Prescription Tools with Dropdowns */}
              <li>
                <NavLink
                  to="/prescriptiontools/appointments"
                  onClick={togglePrescriptionDropdown}
                  className="flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb] w-full"
                >
                  <FaPrescriptionBottleAlt />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Prescription Tools
                  </span>
                  <FaChevronDown
                    className={`transition-transform ${prescriptionDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </NavLink>

                {prescriptionDropdownOpen && (
                  <ul className="ml-8 space-y-2">
                    <li>
                      <NavLink
                        to="/prescriptiontools/patientdetails"
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-md transition-colors duration-300 ${isActive
                            ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                            : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                          }`
                        }
                      >
                        Create
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/prescriptiontools/mangePatienttable"
                        className={({ isActive }) =>
                          `block px-4 py-2 rounded-md transition-colors duration-300 ${isActive
                            ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                            : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                          }`
                        }
                      >
                        Manage
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <NavLink
                  to="/teleconsultationmodule/teleconsultationappointment"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${isActive
                      ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaVideo />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Teleconsultation Module
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/chatdashboard/chatcomponent"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${isActive
                      ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                      : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaComments />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Chat
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
    </div>
  );
};

export default DoctorSidebar;
