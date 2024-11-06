import React from "react";
import { Outlet } from "react-router-dom";
import DoctorHeader from "../../Components/DoctorPanel/DoctorHeader";
import DoctorSidebar from "../../Components/DoctorPanel/DoctorSidebar";

const PrescriptionTools = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <DoctorSidebar />

      <div className="flex flex-col flex-grow bg-greyLightest w-1/2">
        <DoctorHeader />

        <div className="flex flex-col h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrescriptionTools;
