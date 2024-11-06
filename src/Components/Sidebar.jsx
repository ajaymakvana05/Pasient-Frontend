import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
} from "react-icons/fa";
import Logo from "../assets/images/logo.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [billingDropdownOpen, setBillingDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleBillingDropdown = () => {
    setBillingDropdownOpen(!billingDropdownOpen);
  };

  return (
    <div className="flex md:min-[266px]">
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="p-4 text-black transition-colors duration-300"
        >
          <FaBars size={24} />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg p-4 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
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
              className={`text-black transition-colors duration-300 ${
                isOpen ? "block md:hidden" : "hidden"
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
                  to="/dashboard"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#0EABEB]/20 to-transparent text-[#0EABEB]"
                        : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaTachometerAlt />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Dashboard
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/doctordashboard"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#0EABEB]/20 to-transparent text-[#0EABEB]"
                        : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaUserMd />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Doctor Management
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/patientdashboard"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#0EABEB]/20 to-transparent text-[#0EABEB]"
                        : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaUsers />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Patient Management
                  </span>
                </NavLink>
              </li>

              {/* Billing and Payments with Dropdown */}
              <li className="relative">
                <button
                  onClick={toggleBillingDropdown}
                  className="flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb] w-full text-left"
                >
                  <FaFileInvoiceDollar />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Billing And Payments
                  </span>
                  <FaChevronDown
                    className={`ml-auto transition-transform ${
                      billingDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {billingDropdownOpen && (
                  <ul className="ml-8 mt-2 space-y-2">
                    <li>
                      <NavLink
                        to="/billingdashboard/monitorbilling"
                        className={({ isActive }) =>
                          `flex items-center text-sm px-2 py-1 rounded-md transition-colors duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                              : "text-gray-600 hover:text-[#0EABEB]"
                          }`
                        }
                      >
                        Monitor Billing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/billingdashboard/insuranceclaims"
                        className={({ isActive }) =>
                          `flex items-center text-sm px-2 py-1 rounded-md transition-colors duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                              : "text-gray-600 hover:text-[#0EABEB]"
                          }`
                        }
                      >
                        Insurance Claims
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/billingdashboard/paymentprocess"
                        className={({ isActive }) =>
                          `flex items-center text-sm px-2 py-1 rounded-md transition-colors duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-[#0EABEB] to-transparent text-[#0EABEB]"
                              : "text-gray-600 hover:text-[#0EABEB]"
                          }`
                        }
                      >
                        Payment Process
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <NavLink
                  to="/reportingdashboard"
                  className={({ isActive }) =>
                    `flex fs-[16px] items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-[#0EABEB]/20 to-transparent text-[#0EABEB]"
                        : "text-gray hover:text-[#0EABEB] hover:bg-[#b6dceb]"
                    }`
                  }
                >
                  <FaChartLine />
                  <span style={{ fontSize: "16px", fontWeight: "600" }}>
                    Reporting And Analytics
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

export default Sidebar;
