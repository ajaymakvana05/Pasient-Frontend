import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import BillingDetailsTable from "../../Components/BillingDetailsTable";

const PatientDashboard = () => {
  return (
    <div className="flex flex-col h-full">
      <BillingDetailsTable />
    </div>
  );
};

export default PatientDashboard;
