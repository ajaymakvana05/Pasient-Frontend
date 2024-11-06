import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import InsuranceClaimsTable from "../../Components/InsuranceClaimsTable";

const InsuranceClaims = () => {
  return (
    <div className="flex flex-col h-full">
      <InsuranceClaimsTable />
    </div>
  );
};

export default InsuranceClaims;
