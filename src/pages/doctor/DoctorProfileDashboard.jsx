import React from "react";
import Sidebar from "../../Components/Sidebar";
import { Outlet } from "react-router-dom";
import DoctorProfileSidebar from "../../Components/DoctorPanel/DoctorProfileSidebar";
import ProfileSidebar from "../../Components/profileSidebar";
import DoctorHeader from "../../Components/DoctorPanel/DoctorHeader";
import DoctorSidebar from "../../Components/DoctorPanel/DoctorSidebar";

const DoctorProfileDashboard = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <DoctorSidebar />

      <div className="flex flex-col flex-grow bg-greyLightest w-1/2">
        <DoctorHeader />

        <div className="flex flex-col h-full overflow-y-auto">
          <div
            className="p-8"
            style={{
              background:
                "linear-gradient(107.38deg, #4C49ED 2.61%, #020067 101.2%)",
            }}
          >
            <h2
              className="font-medium text-2xl text-white"
              style={{ margin: "2rem 1rem 4rem 2rem" }}
            >
              Profile Setting
            </h2>
          </div>

          <div
            className="profile-box bg-white flex md:flex-row  m-8 rounded-lg shadow-lg"
            style={{ margin: "4rem", marginTop: "-60px" }}
          >
            {/* Profile Sidebar */}
            <div
              className="md:flex md:flex-shrink-0 p-4 rounded-l-lg"
              style={{ borderRight: "3px solid #D9D9D94D" }}
            >
              <DoctorProfileSidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-grow p-4 md:w-2/3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileDashboard;
