import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const PatientDoctorManagementPopUp = ({ closePopup }) => {
  return (
    <div className="flex justify-center bg-white items-center min-h-screen max-w-2xl p-4">
      <div className="w-full max-w-3xl  rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4 justify-between">
          <h1 className="text-xl font-semibold ">Doctor Management</h1>
          <button
            onClick={closePopup}
            className=" text-gray-500 hover:text-gray"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>
        <div className="bg-blue rounded-lg p-4 text-white flex items-center mb-4">
          <img
            src="https://placehold.co/50x50"
            alt="Doctor's profile picture"
            className="rounded-full w-12 h-12 mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">Dr. Cristofer Pasquinades</h2>
            <span className="bg-blue rounded-full px-2 py-1 text-xs">Male</span>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600">Hospital Name</p>
              <p className="font-semibold">Shamuba Hospital</p>
            </div>
            <div>
              <p className="text-gray-600">Doctor Qualification</p>
              <p className="font-semibold">MBBS</p>
            </div>
            <div>
              <p className="text-gray-600">Break Time</p>
              <p className="font-semibold">1 Hour</p>
            </div>
            <div>
              <p className="text-gray-600">Working Time</p>
              <p className="font-semibold">6 Hour</p>
            </div>
            <div>
              <p className="text-gray-600">Years Of Experience</p>
              <p className="font-semibold">6+ Year</p>
            </div>
            <div>
              <p className="text-gray-600">Emergency Contact Number</p>
              <p className="font-semibold">48555-20103</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">Specialty Type</p>
            <p className="font-semibold">Obstetrics and gynecology</p>
          </div>
          <div>
            <p className="text-gray-600">Description</p>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDoctorManagementPopUp;
