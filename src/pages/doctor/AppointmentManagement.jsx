import React, { useState } from "react";
import DoctorSidebar from "../../Components/DoctorPanel/DoctorSidebar";
import DoctorHeader from "../../Components/DoctorPanel/DoctorHeader";
// import AppointmentTable from "../../Components/DoctorPanel/AppointmentTable";
import { Outlet } from "react-router-dom";

const AppointmentManagement = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen">
      <DoctorSidebar />
      <div className="flex flex-col flex-grow w-1/2 ">
        <DoctorHeader />
        <div className="flex flex-col h-full overflow-y-auto">
          {/* <AppointmentTable /> */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AppointmentManagement;
