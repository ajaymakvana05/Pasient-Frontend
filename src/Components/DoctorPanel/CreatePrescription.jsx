import React, { useState } from "react";

const CreatePrescription = () => {
  const [patientDetails] = useState({
    name: "Marcus Philips",
    age: 22,
    gender: "Male",
  });

  const [medications, setMedications] = useState([
    {
      name: "Calcium carbonate",
      strength: "100 Mg",
      dose: "1-0-1",
      duration: "2 Day",
      whenToTake: "Before Food",
    },
    {
      name: "Cyclobenzaprine",
      strength: "200 Mg",
      dose: "1-1-1",
      duration: "4 Day",
      whenToTake: "With Food",
    },
    {
      name: "Fluticasone Almetrerol",
      strength: "250 Mg",
      dose: "1-0-1",
      duration: "5 Day",
      whenToTake: "Before Food",
    },
    {
      name: "Hydrochlorothiazide",
      strength: "150 Mg",
      dose: "0-0-1",
      duration: "2 Day",
      whenToTake: "After Food",
    },
    {
      name: "Ronasec Allergy Relief",
      strength: "180 Mg",
      dose: "1-0-0",
      duration: "1 Day",
      whenToTake: "Before Food",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedMedications = medications.map((med, i) =>
      i === index ? { ...med, [field]: value } : med
    );
    setMedications(updatedMedications);
  };

  const handleSend = () => {
    console.log("Prescription sent:", { patientDetails, medications });
  };

  return (
    <div className="flex flex-col md:flex-row p-4 bg-gray-100 min-h-screen">
      <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md mb-6 md:mb-0 min-h-fit">
        <h2 className="text-2xl font-bold mb-4">Create Prescription</h2>

        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="mb-4">
            <label className="block text-gray-700">Patient Name:</label>
            <input
              type="text"
              value={patientDetails.name}
              readOnly
              className=" px-3  border border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/3 pr-2 mb-2 md:mb-0 ">
            <label className="block text-gray-700">Age:</label>
            <input
              type="text"
              value={patientDetails.age}
              readOnly
              className="w-full px-3  border border-gray-300 rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/3 pl-2 mb-2 md:mb-0">
            <label className="block text-gray-700">Gender:</label>
            <input
              type="text"
              value={patientDetails.gender}
              readOnly
              className="w-full px-3  border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <h3 className="text-lg font-bold mb-2">Drug Prescription</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 mb-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 border-b text-left">Medicine Name</th>
                <th className="py-2 border-b text-left">Strength</th>
                <th className="py-2 border-b text-left">Dose</th>
                <th className="py-2 border-b text-left">Duration</th>
                <th className="py-2 border-b text-left">When to Take</th>
                <th className="py-2 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {medications.map((med, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 border-b">
                    <input
                      type="text"
                      value={med.name}
                      onChange={(e) =>
                        handleInputChange(index, "name", e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="py-2 border-b">
                    <input
                      type="text"
                      value={med.strength}
                      onChange={(e) =>
                        handleInputChange(index, "strength", e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="py-2 border-b">
                    <input
                      type="text"
                      value={med.dose}
                      onChange={(e) =>
                        handleInputChange(index, "dose", e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="py-2 border-b">
                    <input
                      type="text"
                      value={med.duration}
                      onChange={(e) =>
                        handleInputChange(index, "duration", e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    />
                  </td>
                  <td className="py-2 border-b">
                    <select
                      value={med.whenToTake}
                      onChange={(e) =>
                        handleInputChange(index, "whenToTake", e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded"
                    >
                      <option value="Before Food">Before Food</option>
                      <option value="After Food">After Food</option>
                      <option value="With Food">With Food</option>
                    </select>
                  </td>
                  <td className="py-2 border-b text-center">
                    <img
                      src="https://via.placeholder.com/20/FF0000/FFFFFF?text=!"
                      alt="Action Icon"
                      className="inline-block cursor-pointer"
                      onClick={() => {}}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-auto">
          <p className="mt-4">Additional Note:</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <button
          onClick={handleSend}
          className="bg-blue px-2 py-2 text-white  rounded-lg"
        >
          Send
        </button>
      </div>

      <div className="w-full md:w-1/2 md:ml-6 bg-white p-4 min-h-fit rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <img
            src="https://via.placeholder.com/100x100?text=Hospital+Logo"
            alt="Hospital Logo"
            className="w-20 h-20 rounded-lg"
          />
          <div className="ml-4">
            <h4 className="font-bold text-blue">Dr. Bharat Patel</h4>
            <p>Obstetrics and Gynecology</p>
          </div>
        </div>
        <div className="border border-gray-300 p-4 mb-4 rounded-lg bg-gray-50 ">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex">
              <p className="font-semibold text ">Hospital Name:</p>
              <p>Medical Center</p>
            </div>

            <div className="flex">
              <p className="font-semibold">Prescription Date:</p>
              <p>2 Jan, 2022</p>
            </div>

            <div className="flex">
              <p className="font-semibold">Patient Name:</p>
              <p>{patientDetails.name}</p>
            </div>

            <div className="flex">
              <p className="font-semibold">Age:</p>
              <p>{patientDetails.age}</p>
            </div>
          </div>
          <div>
            <div className="flex">
              <p className="font-semibold flex">Gender:</p>
              <p>{patientDetails.gender}</p>
            </div>

            <div className="flex">
              <p className="font-semibold">Address:</p>
              <p>B-105 West Banglow Puranpur Madhavdas Jamdar.</p>
            </div>
          </div>
        </div>

        <h3 className="mt-6 text-lg font-bold">Medicine Name</h3>
        <div className="overflow-x-auto">
          <table className="bg-white border border-gray-300 mt-2 w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 border-b">Medicine Name</th>
                <th className="py-2 border-b">Strength</th>
                <th className="py-2 border-b">Dose</th>
                <th className="py-2 border-b">Duration</th>
                <th className="py-2 border-b">When to Take</th>
              </tr>
            </thead>
            <tbody>
              {medications.map((med, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 border-b">{med.name}</td>
                  <td className="py-2 border-b">{med.strength}</td>
                  <td className="py-2 border-b">{med.dose}</td>
                  {/* Duration column with pill-like styling */}
                  <td className="py-2 border-b">
                    <span className="px-3 py-1  bg-green  opacity-10  text-green rounded-full text-sm">
                      {med.duration}
                    </span>
                  </td>
                  {/* When to Take column with pill-like styling */}
                  <td className="py-2 border-b">
                    <span className="px-3 py-1  bg-green opacity-10  text-green -700 rounded-full text-sm">
                      {med.whenToTake}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4">Additional Note:</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="flex justify-end mt-4">
          <img
            src="https://via.placeholder.com/100x50?text=Signature"
            alt="Signature"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePrescription;
