import React from "react";

const PatientPrescriptions = () => {
  const prescriptions = [
    {
      doctor: "Dr. Ryan Vetrows",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-check-circle",
      iconColor: "text-blue-500",
    },
    {
      doctor: "Dr. Omar Herwitz",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-circle",
      iconColor: "text-gray-400",
    },
    {
      doctor: "Dr. Corey Dorwart",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-circle",
      iconColor: "text-gray-400",
    },
    {
      doctor: "Dr. Kadin Workman",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-circle",
      iconColor: "text-gray-400",
    },
    {
      doctor: "Dr. Leo Workman",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-circle",
      iconColor: "text-gray-400",
    },
    {
      doctor: "Dr. Emerson Levin",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-circle",
      iconColor: "text-gray-400",
    },
    {
      doctor: "Dr. Emerson Press",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-circle",
      iconColor: "text-gray-400",
    },
    {
      doctor: "Dr. Ryan Herwitz",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-circle",
      iconColor: "text-gray-400",
    },
    {
      doctor: "Dr. Jaylon Lubin",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-circle",
      iconColor: "text-gray-400",
    },
    {
      doctor: "Dr. Ruben Septimus",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-circle",
      iconColor: "text-gray-400",
    },
    {
      doctor: "Zaire Dorwart",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-circle",
      iconColor: "text-gray-400",
    },
    {
      doctor: "Dr. Phillip Rhiel Madsen",
      hospital: "Artemis Hospital",
      disease: "Viral Infection",
      date: "2 Jan, 2022",
      icon: "fa-circle",
      iconColor: "text-gray-400",
    },
  ];
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Prescriptions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prescriptions.map((prescription, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{prescription.doctor}</h2>
              <i
                className={`fas ${prescription.icon} ${prescription.iconColor}`}
              ></i>
            </div>
            <div className="text-sm text-gray-600">
              <p>
                <span className="font-semibold">Hospital Name</span>{" "}
                {prescription.hospital}
              </p>
              <p>
                <span className="font-semibold">Disease Name</span>{" "}
                {prescription.disease}
              </p>
              <p>
                <span className="font-semibold">Date</span> {prescription.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientPrescriptions;
