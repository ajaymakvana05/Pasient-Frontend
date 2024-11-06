import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import PatientsManagementTable from "../../Components/PatientsManagementTable";

const PatientDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col h-full">
          <PatientsManagementTable />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
