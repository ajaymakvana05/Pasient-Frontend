import React from "react";
import Sidebar from "../../Components/Sidebar";
import { Outlet } from "react-router-dom";
import DoctorHeader from "../../Components/DoctorPanel/DoctorHeader";
import DoctorSidebar from "../../Components/DoctorPanel/DoctorSidebar";
import Appointments from "../../Components/DoctorPanel/Appointments";

const TeleconsultationModule = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <DoctorSidebar />

      <div className="flex flex-col flex-grow bg-greyLightest w-1/2">
        <DoctorHeader />

        <div className="flex flex-col h-full overflow-y-auto">
          <Outlet />
          {/* <Appointments /> */}
        </div>
      </div>
    </div>
  );
};

export default TeleconsultationModule;
