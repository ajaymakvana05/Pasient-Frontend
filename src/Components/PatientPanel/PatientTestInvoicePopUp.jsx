import React from "react";
import patientInvoiceImg from "../../assets/images/invoice.png";

const PatientTestInvoicePopUp = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg h-[95vh] overflow-y-auto">
      <img src={patientInvoiceImg} alt="" />
    </div>
  );
};

export default PatientTestInvoicePopUp;
