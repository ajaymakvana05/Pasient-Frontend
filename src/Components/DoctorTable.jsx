import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const DoctorTable = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. John Doe",
      gender: "Male",
      qualification: "MBBS, MD",
      specialization: "Cardiology",
      workingTime: "9:00 AM - 5:00 PM",
      checkUpTime: "10:00 AM - 12:00 PM",
      breakTime: "1:00 PM - 2:00 PM",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      gender: "Female",
      qualification: "MBBS, MS",
      specialization: "Neurology",
      workingTime: "10:00 AM - 6:00 PM",
      checkUpTime: "11:00 AM - 1:00 PM",
      breakTime: "2:00 PM - 3:00 PM",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray">
        <thead>
          <tr className="bg-gray-100 text-gray uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left text-black">Doctor Name</th>
            <th className="py-3 px-6 text-left text-black">Gender</th>
            <th className="py-3 px-6 text-left text-black">Qualification</th>
            <th className="py-3 px-6 text-left text-black">Specialization</th>
            <th className="py-3 px-6 text-left text-black">Working Time</th>
            <th className="py-3 px-6 text-left text-black">Check-Up Time</th>
            <th className="py-3 px-6 text-left text-black">Break Time</th>
            <th className="py-3 px-6 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray text-sm font-light">
          {doctors.map((doctor) => (
            <tr key={doctor.id} className="border-b border-gray hover:bg-gray">
              <td className="py-3 px-6 text-left text-black">{doctor.name}</td>
              <td className="py-3 px-6 text-left text-black">
                {doctor.gender}
              </td>
              <td className="py-3 px-6 text-left text-black">
                {doctor.qualification}
              </td>
              <td className="py-3 px-6 text-left text-black">
                {doctor.specialization}
              </td>
              <td className="py-3 px-6 text-left text-black">
                {doctor.workingTime}
              </td>
              <td className="py-3 px-6 text-left text-black">
                {doctor.checkUpTime}
              </td>
              <td className="py-3 px-6 text-left text-black">
                {doctor.breakTime}
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center space-x-4">
                  <button className="text-blue hover:text-blue">
                    <FaEye />
                  </button>
                  <button className="text-green hover:text-green">
                    <FaEdit />
                  </button>
                  <button className="text-red hover:text-red">
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorTable;
