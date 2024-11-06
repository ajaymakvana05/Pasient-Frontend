import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import DoctorManagementTable from "../../Components/DoctorManagementTable";

const DoctorDashboard = () => {
  return (
    <div className="flex h-screen overflow-y-auto">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col h-full overflow-x-auto container">
          <DoctorManagementTable />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
