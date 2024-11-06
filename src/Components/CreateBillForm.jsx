import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { FaCalendarAlt, FaClock, FaPen } from "react-icons/fa"; // Import the edit icon
import UploadIcon from "../assets/images/upload.svg";
import AddFieldModal from "./AddNewField";

const CreateBillForm = () => {
  const [formData, setFormData] = useState({
    hospitalDetails: {
      name: "",
      otherText: "",
      email: "",
      billDate: "",
      billTime: "",
      billNumber: "",
      phoneNumber: "",
      address: "",
    },
    patientDetails: {
      name: "",
      diseaseName: "",
      doctorName: "",
      description: "",
      discount: 0,
      tax: 0,
      amount: 0,
      totalAmount: 0,
      paymentType: "",
      age: "",
      gender: "",
      address: "",
    },
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newField, setNewField] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      const simulateUpload = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(simulateUpload);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddNewField = () => {
    if (newField.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        hospitalDetails: {
          ...prevData.hospitalDetails,
          [newField]: "",
        },
      }));
      setNewField("");
      setIsModalOpen(false);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex bg-white p-4 rounded shadow-lg flex-col h-full overflow-x-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold mb-4">Hospital Details</h3>
              <button
                className="mb-4 bg-blue text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleModalToggle}
              >
                + Add New Field
              </button>
            </div>

            <div className="flex gap-2 p-4  justify-between rounded shadow-lg">
              <div className="flex flex-col items-center">
                <label className="block mb-2 font-medium text-sm">
                  Upload Logo
                </label>
                <div className="border border-dashed border-gray-400 rounded-lg h-32 p-4 flex flex-col items-center justify-center relative cursor-pointer">
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/gif"
                    className="hidden"
                    onChange={handleFileChange}
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center h-full"
                  >
                    {selectedFile ? (
                      <img
                        src={selectedFile}
                        alt="Uploaded Logo"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <img
                        src={UploadIcon}
                        alt="Upload Icon"
                        className="mb-2"
                      />
                    )}
                    <p className="text-blue-500 font-medium text-sm">
                      <span className="text-blue font-medium">
                        Upload a file{" "}
                      </span>
                      or drag and drop
                    </p>
                    <p className="text-sm text-gray-400 font-medium">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </label>
                  {selectedFile && (
                    <FaPen
                      className="absolute top-2 right-2 text-blue-500 cursor-pointer"
                      onClick={() =>
                        document.getElementById("file-upload").click()
                      }
                    />
                  )}
                </div>
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div className="w-full mt-2">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {uploadProgress}%
                    </p>
                  </div>
                )}
              </div>
              {/* Other Hospital Fields */}
              <div className="">
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="border rounded px-4 py-2 w-full"
                      onChange={(e) =>
                        handleChange(e, "hospitalDetails", "name")
                      }
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Other Text"
                      className="border rounded px-4 py-2 w-full"
                      onChange={(e) =>
                        handleChange(e, "hospitalDetails", "otherText")
                      }
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="border rounded px-4 py-2 w-full"
                      onChange={(e) =>
                        handleChange(e, "hospitalDetails", "email")
                      }
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="relative">
                    <FaCalendarAlt className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="date"
                      className="border rounded pl-10 py-2 w-full"
                      onChange={(e) =>
                        handleChange(e, "hospitalDetails", "billDate")
                      }
                    />
                  </div>
                  <div className="relative">
                    <FaClock className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="time"
                      className="border rounded pl-10 py-2 w-full"
                      onChange={(e) =>
                        handleChange(e, "hospitalDetails", "billTime")
                      }
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Bill Number"
                      className="border rounded px-4 py-2 w-full"
                      onChange={(e) =>
                        handleChange(e, "hospitalDetails", "billNumber")
                      }
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="Enter Phone Number"
                      className="border rounded px-4 py-2 w-full"
                      onChange={(e) =>
                        handleChange(e, "hospitalDetails", "phoneNumber")
                      }
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Address"
                      className="border rounded px-4 py-2 w-full"
                      onChange={(e) =>
                        handleChange(e, "hospitalDetails", "address")
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Details Section */}
          <div className="">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold mb-4">Patient Details</h3>
              <button
                className="mb-4 bg-blue text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleModalToggle}
              >
                + Add New Field
              </button>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Enter Name"
                className="border rounded px-4 py-2 w-full"
                onChange={(e) => handleChange(e, "patientDetails", "name")}
              />
              <input
                type="text"
                placeholder="Enter Disease Name"
                className="border rounded px-4 py-2 w-full"
                onChange={(e) =>
                  handleChange(e, "patientDetails", "diseaseName")
                }
              />
              <input
                type="text"
                placeholder="Enter Doctor Name"
                className="border rounded px-4 py-2 w-full"
                onChange={(e) =>
                  handleChange(e, "patientDetails", "doctorName")
                }
              />
              <input
                type="text"
                placeholder="Enter Description"
                className="border rounded px-4 py-2 w-full"
                onChange={(e) =>
                  handleChange(e, "patientDetails", "description")
                }
              />
              <input
                type="number"
                placeholder="₹ 0000"
                className="border rounded px-4 py-2 w-full"
                onChange={(e) => handleChange(e, "patientDetails", "discount")}
              />
              <input
                type="number"
                placeholder="₹ 0000"
                className="border rounded px-4 py-2 w-full"
                onChange={(e) => handleChange(e, "patientDetails", "tax")}
              />
              <input
                type="number"
                placeholder="₹ 0000"
                className="border rounded px-4 py-2 w-full"
                onChange={(e) => handleChange(e, "patientDetails", "amount")}
              />
              <input
                type="number"
                placeholder="₹ 0000"
                className="border rounded px-4 py-2 w-full"
                onChange={(e) =>
                  handleChange(e, "patientDetails", "totalAmount")
                }
              />
              <select
                className="border rounded px-4 py-2 w-full"
                onChange={(e) =>
                  handleChange(e, "patientDetails", "paymentType")
                }
              >
                <option>Select Payment Type</option>
                <option>Cash</option>
                <option>Card</option>
                <option>UPI</option>
              </select>
              <input
                type="number"
                placeholder="Enter Age"
                className="border rounded px-4 py-2 w-full"
                onChange={(e) => handleChange(e, "patientDetails", "age")}
              />
              <select
                className="border rounded px-4 py-2 w-full"
                onChange={(e) => handleChange(e, "patientDetails", "gender")}
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input
                type="text"
                placeholder="Enter Address"
                className="border rounded px-4 py-2 w-full"
                onChange={(e) => handleChange(e, "patientDetails", "address")}
              />
            </div>
          </div>

          {/* Save Button */}
          <button className="bg-blue w-[100px] ml-auto mt-2 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>

      {/* Modal for Adding New Field */}
      <AddFieldModal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        onAddField={handleAddNewField}
      />
    </div>
  );
};

export default CreateBillForm;
