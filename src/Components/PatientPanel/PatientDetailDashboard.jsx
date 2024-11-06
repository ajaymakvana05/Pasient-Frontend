import React, { useEffect, useState } from "react";
import viewIcon from "../../assets/images/view.svg";
import status1 from "../../assets/images/status1.svg";
import { Link, useNavigate } from "react-router-dom";

const PatientDetailDashboard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        console.log("Fetching patient data...");
        const response = await fetch("http://localhost:8090/patient/profile", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch patient data: ${response.statusText}`
          );
        }

        const data = await response.json();
        // console.log("Patient data received:", data);
        setFormData(data);
      } catch (err) {
        console.error("Error fetching patient data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
        console.log("Loading complete.");
      }
    };

    fetchAdminData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Check if patientData is not null before accessing properties
  if (!formData) {
    return <div>No patient data available.</div>;
  }

  return (
    <div className=" min-h-screen">
      <div className="p-4 rounded-lg">
        <div className="p-6 bg-white shadow-md rounded-md">
          <div className="flex justify-between items-center  pb-2 mb-4">
            <h1 className="text-xl font-semibold">Patient Details</h1>

            <button className="bg-blue text-white lg:px-4 py-2 px-2 rounded-md">
              <i className="fas fa-edit"></i>{" "}
              <Link to="/patientprofiledashboard/patientprofile">
                Edit Profile
              </Link>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-1/4 mb-4 sm:mb-0 flex justify-center sm:justify-start">
              <img
                src={formData?.imageUrl || "https://via.placeholder.com/100"}
                alt="Profile"
                className="rounded-full w-24 h-24"
              />
            </div>
            <div className="sm:w-7/7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 text-sm">
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">Name</p>
                <p className="font-semibold">
                  {" "}
                  {formData?.firstname
                    ? `${formData.firstname} ${formData.lastname}`
                    : "Loading..."}
                </p>
              </div>
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">Number</p>
                <p className="font-semibold">{formData.phonenumber}</p>
              </div>
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">Email</p>
                <p className="font-semibold">{formData.email}</p>
              </div>
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">Gender</p>
                <p className="font-semibold">{formData.gender}</p>
              </div>
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">DOB</p>
                <p className="font-semibold">
                  {formData.dateofbirth
                    ? formData.dateofbirth.split("T")[0]
                    : ""}
                </p>
              </div>
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">Age</p>
                <p className="font-semibold">{formData.age}</p>
              </div>
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">Blood Group</p>
                <p className="font-semibold">{formData.BloodGroup}</p>
              </div>
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">Height (cm)</p>
                <p className="font-semibold">{formData.height}</p>
              </div>
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">Weight (Kg)</p>
                <p className="font-semibold">{formData.weight}</p>
              </div>
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">Country</p>
                <p className="font-semibold">{formData.country}</p>
              </div>
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">State</p>
                <p className="font-semibold">{formData.state}</p>
              </div>
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">City</p>
                <p className="font-semibold">{formData.city}</p>
              </div>
              <div className="font-lota text-[16px] md:text-[16px]">
                <p className="text-grey">Address</p>
                <p className="font-semibold  whitespace-nowrap">
                  {formData.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-lg ">
        <div className="flex flex-col lg:flex-row justify-between mb-6 gap-4 p-6 bg-white shadow-md rounded-md">
          <div className="w-full lg:w-2/3 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Medical History</h2>
              <button
                className="text-blue text-sm"
                onClick={() =>
                  navigate("/personalhealthrecord/patientmedicalhistory")
                }
              >
                View All History
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow">
              {/* Individual Medical History Card */}
              <div className="bg-white rounded-lg shadow">
                <div className="flex justify-between bg-greyLightest p-4">
                  <h3 className="font-semibold">Dulce Schleifer</h3>
                  <p className="text-gray-500 text-sm">2 Jan, 2022</p>
                </div>
                <div className="p-4">
                  <h4 className="mt-2 font-semibold">Patient Issue</h4>
                  <p className="text-gray-600 text-sm">
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow">
                <div className="flex justify-between bg-greyLightest p-4">
                  <h3 className="font-semibold">Dulce Workman</h3>
                  <p className="text-gray-500 text-sm">2 Jan, 2022</p>
                </div>
                <div className="p-4">
                  <h4 className="mt-2 font-semibold">Patient Issue</h4>
                  <p className="text-gray-600 text-sm">
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow">
                <div className="flex justify-between bg-greyLightest p-4">
                  <h3 className="font-semibold lg:whitespace-nowrap">
                    Miracle Septimus
                  </h3>
                  <p className="text-gray-500 text-sm lg:whitespace-nowrap">
                    2 Jan, 2022
                  </p>
                </div>
                <div className="p-4">
                  <h4 className="mt-2 font-semibold">Patient Issue</h4>
                  <p className="text-gray-600 text-sm">
                    the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prescriptions Section */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Prescriptions</h2>
              <button
                onClick={() =>
                  navigate("/personalhealthrecord/patientprescriptions")
                }
                className="text-blue"
              >
                View All Prescription
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow flex-grow overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="pb-2">Hospital Name</th>
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Disease Name</th>
                    <th className="pb-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2">Apollo Hospitals</td>
                    <td className="py-2">2 Jan, 2022</td>
                    <td className="py-2">Colds and Flu</td>
                    <td className="py-2">
                      <img src={viewIcon} alt="View" className="h-4 w-4" />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Medanta The Medicity</td>
                    <td className="py-2">2 Jan, 2022</td>
                    <td className="py-2">Allergies</td>
                    <td className="py-2">
                      <img src={viewIcon} alt="View" className="h-4 w-4" />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Manipal Hospitals</td>
                    <td className="py-2">2 Jan, 2022</td>
                    <td className="py-2">Diarrhea</td>
                    <td className="py-2">
                      <img src={viewIcon} alt="View" className="h-4 w-4" />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="py-2">Narayana Health</td>
                    <td className="py-2">2 Jan, 2022</td>
                    <td className="py-2">Colds and Flu</td>
                    <td className="py-2">
                      <img src={viewIcon} alt="View" className="h-4 w-4" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4   ">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-2/3 bg-white p-4  rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-bold">Test Reports</h2>
              <button
                className="text-blue text-sm md:text-base"
                onClick={() =>
                  navigate("/personalhealthrecord/patientstestreports")
                }
              >
                View All Reports        
              </button>
            </div>
            <div className="gap-4 grid grid-cols-2 ">
              {[
                {
                  name: "Dr. Marcus Philips",
                  date: "2 Jan, 2022",
                  disease: "Viral Infection",
                  test: "Pathology Test",
                },
                {
                  name: "Dr. Ryan Carder",
                  date: "2 Jan, 2022",
                  disease: "Allergies",
                  test: "Pathology Test",
                },
                {
                  name: "Dr. Zaire Saris",
                  date: "2 Jan, 2022",
                  disease: "Viral Infection",
                  test: "Pathology Test",
                },
                {
                  name: "Dr. Jaxson Herwitz",
                  date: "2 Jan, 2022",
                  disease: "Allergies",
                  test: "Pathology Test",
                },
              ].map((report, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://placehold.co/50x50"
                      alt="Doctor's profile picture"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-sm md:text-base">
                        {report.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-500">
                        {report.date}
                      </p>
                      <p className="text-xs md:text-sm text-gray-700">
                        Dieses:{" "}
                        <span className="text-blue-600">{report.disease}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500 text-xs md:text-sm">
                      {report.test}
                    </span>
                    <i className="fas fa-ellipsis-v text-gray-400"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h2 className="text-lg md:text-xl font-bold mb-4">
              Patient Status
            </h2>
            <div className="grid grid-cols-2 sm:grid-flow-row1">
              <div className="flex items-center space-x-4">
                <img src={status1} className="text-blue text-lg md:text-xl" />
                <span className="text-sm md:text-base">Shambula Hospital</span>
              </div>
              <div className="flex items-center space-x-4">
                <img src={status1} className="text-blue text-lg md:text-xl" />
                <span className="text-sm md:text-base">Dr. Mathew Best</span>
              </div>
              <div className="flex items-center space-x-4">
                <img src={status1} className="text-blue text-lg md:text-xl" />
                <span className="text-sm md:text-base">2 Jan, 2022</span>
              </div>
              <div className="flex items-center space-x-4">
                <img src={status1} className="text-blue text-lg md:text-xl" />
                <span className="text-sm md:text-base">Chance Carder</span>
              </div>
            </div>
            <p className="text-gray-700 text-xs md:text-sm mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailDashboard;
