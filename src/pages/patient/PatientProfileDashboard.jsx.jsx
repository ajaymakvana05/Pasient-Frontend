import React, { useState } from "react";
import PatientSidebar from "../../Components/PatientPanel/PatientSidebar";
import PatientHeader from "../../Components/PatientPanel/PatientHeader";
import PatientProfileSidebar from "../../Components/PatientPanel/PatientProfileSidebar";
import { Outlet } from "react-router-dom";

const PatientProfileDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };
  return (
    <div className="flex  h-screen">
      <PatientSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="flex flex-col flex-grow bg-greyLightest w-1/2">
        <PatientHeader toggleSidebar={toggleSidebar} />

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
            className="profile-box bg-white flex md:flex-row flex-col m-8 rounded-lg shadow-lg md:m-0"
            style={{ margin: "4rem", marginTop: "-60px" }}
          >
            <div
              className="md:flex md:flex-shrink-0 p-4 rounded-l-lg"
              style={{ borderRight: "3px solid #D9D9D94D" }}
            >
              <PatientProfileSidebar />
            </div>

            <div className="flex-grow p-4 md:w-2/3">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfileDashboard;
