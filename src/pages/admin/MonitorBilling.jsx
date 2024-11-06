import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import MonitorBillingTable from "../../Components/MonitorBillingTable";

const MonitorBilling = () => {
  return (
    <div className="flex flex-col h-full overflow-x-auto">
      <MonitorBillingTable />
    </div>
  );
};

export default MonitorBilling;
