import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import PatientSidebar from "../../Components/PatientPanel/PatientSidebar";
import PatientHeader from "../../Components/PatientPanel/PatientHeader";

const AppointmentBooking = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };
  return (
    <div className="flex h-screen">
      <PatientSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex flex-col flex-grow w-1/2  ">
        <PatientHeader toggleSidebar={toggleSidebar} />
        <div className="flex flex-col h-full overflow-y-auto bg-greyLightest  ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
