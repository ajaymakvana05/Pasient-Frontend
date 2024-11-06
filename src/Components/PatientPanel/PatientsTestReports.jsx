import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import PatientTestInvoicePopUp from "./PatientTestInvoicePopUp";

const PatientsTestReports = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const reports = [
    { name: "Dr. Ryan Velros", date: "2 Jan, 2022" },
    { name: "Dr. Angela Franci", date: "2 Jan, 2022" },
    { name: "Dr. James Kantar", date: "2 Jan, 2022" },
    { name: "Dr. Rhiel Madsen", date: "2 Jan, 2022" },
    { name: "Dr. Jakob Wokman", date: "2 Jan, 2022" },
    { name: "Dr. Nalim Culhan", date: "2 Jan, 2022" },
    { name: "Dr. Brandon George", date: "2 Jan, 2022" },
    { name: "Dr. Omar Bothman", date: "2 Jan, 2022" },
    { name: "Dr. Omar Drowent", date: "2 Jan, 2022" },
    { name: "Dr. Martin Saric", date: "2 Jan, 2022" },
    { name: "Dr. Alfonso Saxton", date: "2 Jan, 2022" },
    { name: "Dr. Brandon Pless", date: "2 Jan, 2022" },
  ];
  return (
    <div className="p-4 md:m-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">Test Reports</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {reports.map((report, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-2 bg-greyLightest p-4">
              <h2 className="text-lg font-semibold">{report.name}</h2>
              <AiFillEye className="cursor-pointer" onClick={togglePopup} />
            </div>

            {isPopupVisible && (
              <div className="fixed top-0 left-0 w-full h-full backdrop-blur-lg z-50 bg-opacity-50 flex justify-center items-center">
                <PatientTestInvoicePopUp />
              </div>
            )}
            <div className="p-4">
              <p className="text-sm text-greyBlue">Disease Name</p>
              <p className="text-sm text-greyBlue">Shumba Hospital</p>
              <p className="text-sm text-greyBlue">Test Report Name</p>
              <p className="text-sm text-greyBlue">Blood Test</p>
              <p className="text-sm text-greyBlue">Report Date</p>
              <p className="text-sm text-greyBlue">{report.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsTestReports;
