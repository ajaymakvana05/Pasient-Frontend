import React from "react";
import { AiFillEye } from "react-icons/ai";

const data = [
  {
    name: "Dulce Schleifer",
    date: "2 Jan, 2022",
    issue:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or.",
  },
  {
    name: "Alfredo Carder",
    date: "2 Jan, 2022",
    issue:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or.",
  },
  {
    name: "Justin Rhiel Madsen",
    date: "2 Jan, 2022",
    issue:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or.",
  },
  {
    name: "Wilson Workman",
    date: "2 Jan, 2022",
    issue:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or.",
  },
  {
    name: "Lydia Dokidis",
    date: "2 Jan, 2022",
    issue:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or.",
  },
  {
    name: "Dulce Aminoff",
    date: "2 Jan, 2022",
    issue:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or.",
  },
  {
    name: "Chance Westervelt",
    date: "2 Jan, 2022",
    issue:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or.",
  },
  {
    name: "Giana Calzoni",
    date: "2 Jan, 2022",
    issue:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or.",
  },
  {
    name: "Ryan Aminoff",
    date: "2 Jan, 2022",
    issue:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or.",
  },
  {
    name: "Dulce Press",
    date: "2 Jan, 2022",
    issue:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or.",
  },
  {
    name: "Lydia Torff",
    date: "2 Jan, 2022",
    issue:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or.",
  },
  {
    name: "Cristofer Passaquindici Arcand",
    date: "2 Jan, 2022",
    issue:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or.",
  },
];

const PatientMedicalHistory = () => {
  return (
    <div className="m-4 p-4 bg-white">
      <h1 className="text-2xl font-bold mb-6">Medical History</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-2 bg-greyLightest p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <AiFillEye className="fas fa-ellipsis-h text-grey" />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-500">Date</p>
              <p className="text-sm mb-2">{item.date}</p>
              <p className="text-sm text-gray-500">Patient Issue</p>
              <p className="text-sm">{item.issue}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientMedicalHistory;
