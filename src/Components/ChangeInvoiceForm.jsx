import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaPen, FaPlus } from "react-icons/fa"; 
import UploadIcon from "../assets/images/upload.svg";
import AddFieldModal from "./AddNewField";
import { useNavigate } from "react-router-dom";

const ChangeInvoiceForm = () => {
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
  const navigate = useNavigate();

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
    <div className="flex bg-white p-4 rounded shadow-lg flex-col h-full overflow-x-auto">
      <div className="mb-8">
        <div
          className="flex items-center justify-between"
          onClick={() => navigate("billingdashboard/invoice")}
        >
          <h2>Edit Invoice Design</h2>
          <button className="mb-4 bg-blue text-white px-4  flex  items-center gap-2 py-2 rounded hover:bg-blue">
            {" "}
            <FaPlus /> Change Invoice Theme
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold mb-4">Hospital Details</h3>
          <button
            className="mb-4 bg-blue text-white px-4 py-2 rounded hover:bg-blue"
            onClick={handleModalToggle}
          >
            + Add New Field
          </button>
        </div>

        <div className="flex gap-2 p-4 rounded shadow-lg">
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
                  <img src={UploadIcon} alt="Upload Icon" className="mb-2" />
                )}
                <p className="text-blue-500 font-medium text-sm">
                  <span className="text-blue-600 font-medium">
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
                  onClick={() => document.getElementById("file-upload").click()}
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
                <p className="text-sm text-gray-600 mt-1">{uploadProgress}%</p>
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="border rounded px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7] "
                  onChange={handleFileChange}
                  required
                />
                <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
                  Enter Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="border rounded px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
                  onChange={handleFileChange}
                  required
                />
                <label className="absolute left-4 -top-2.5  bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
                  Enter Other Text
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder=" "
                  className="border rounded px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
                  onChange={handleFileChange}
                  required
                />
                <label className="absolute left-4 -top-2.5  bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
                  Enter Email
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <FaCalendarAlt className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="date"
                  className="border rounded pl-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
                  onChange={handleFileChange}
                  required
                />
                <label className="absolute left-4 -top-2.5  bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
                  Select Date
                </label>
              </div>

              <div className="relative">
                <FaClock className="absolute top-3 left-3  bg-white text-gray-400" />
                <input
                  type="time"
                  className="border rounded pl-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
                  onChange={handleFileChange}
                  required
                />
                <label className="absolute left-4 -top-2.5  bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
                  Select Time
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="border rounded px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
                  onChange={handleFileChange}
                  required
                />
                <label className="absolute left-4 -top-2.5  bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
                  Enter Bill Number
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <input
                  type="tel"
                  placeholder=" "
                  className="border rounded px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
                  onChange={handleFileChange}
                  required
                />
                <label className="absolute left-4 -top-2.5  bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
                  Enter Phone Number
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="border rounded px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
                  onChange={handleFileChange}
                  required
                />
                <label className="absolute left-4 -top-2.5  bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
                  Enter Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="border rounded px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
                  onChange={handleFileChange}
                  required
                />
                <label className="absolute left-4 -top-2.5  bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
                  Enter Description
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold mb-4">Patient Details</h3>
          <button
            className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleModalToggle}
          >
            + Add New Field
          </button>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="relative border rounded focus-within:border-blue-500">
            <input
              type="text"
              placeholder=" "
              className="block w-full px-4 py-2 text-sm bg-transparent appearance-none focus:outline-none peer"
              onChange={handleFileChange}
            />
            <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none">
              Enter Name
            </label>
          </div>

          <div className="relative border rounded focus-within:border-blue-500">
            <input
              type="text"
              placeholder=" "
              className="block w-full px-4 py-2 text-sm bg-transparent appearance-none focus:outline-none peer"
              onChange={handleFileChange}
            />
            <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none">
              Enter Disease Name
            </label>
          </div>

          <div className="relative border rounded focus-within:border-blue-500">
            <input
              type="text"
              placeholder=" "
              className="block w-full px-4 py-2 text-sm bg-transparent appearance-none focus:outline-none peer"
              onChange={handleFileChange}
            />
            <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none">
              Enter Doctor Name
            </label>
          </div>

          <div className="relative border rounded focus-within:border-blue-500">
            <input
              type="text"
              placeholder=" "
              className="block w-full px-4 py-2 text-sm bg-transparent appearance-none focus:outline-none peer"
              onChange={handleFileChange}
            />
            <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none">
              Enter Description
            </label>
          </div>

          <div className="relative border rounded focus-within:border-blue-500">
            <input
              type="number"
              placeholder=" "
              className="block w-full px-4 py-2 text-sm bg-transparent appearance-none focus:outline-none peer"
              onChange={handleFileChange}
            />
            <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none">
              Enter Discount (₹)
            </label>
          </div>

          <div className="relative border rounded focus-within:border-blue-500">
            <input
              type="number"
              placeholder=" "
              className="block w-full px-4 py-2 text-sm bg-transparent appearance-none focus:outline-none peer"
              onChange={handleFileChange}
            />
            <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none">
              Enter Tax (₹)
            </label>
          </div>

          <div className="relative border rounded focus-within:border-blue-500">
            <input
              type="number"
              placeholder=" "
              className="block w-full px-4 py-2 text-sm bg-transparent appearance-none focus:outline-none peer"
              onChange={handleFileChange}
            />
            <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none">
              Enter Amount (₹)
            </label>
          </div>

          <div className="relative border rounded focus-within:border-blue-500">
            <input
              type="number"
              placeholder=" "
              className="block w-full px-4 py-2 text-sm bg-transparent appearance-none focus:outline-none peer"
              onChange={handleFileChange}
            />
            <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none">
              Enter Total Amount (₹)
            </label>
          </div>

          <div className="relative border rounded focus-within:border-blue-500">
            <select
              className="block w-full px-4 py-2 text-sm bg-transparent appearance-none focus:outline-none peer"
              onChange={handleFileChange}
            >
              <option className="text-gray-500">Select Payment Type</option>
              <option>Cash</option>
              <option>Card</option>
              <option>UPI</option>
            </select>
            <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none">
              Payment Type
            </label>
          </div>

          <div className="relative border rounded focus-within:border-blue-500">
            <input
              type="number"
              placeholder=" "
              className="block w-full px-4 py-2 text-sm bg-transparent appearance-none focus:outline-none peer"
              onChange={handleFileChange}
            />
            <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none">
              Enter Age
            </label>
          </div>

          <div className="relative border rounded focus-within:border-blue-500">
            <select
              className="block w-full px-4 py-2 text-sm bg-transparent appearance-none focus:outline-none peer"
              onChange={handleFileChange}
            >
              <option className="text-gray-500">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none">
              Gender
            </label>
          </div>

          <div className="relative border rounded focus-within:border-blue-500">
            <input
              type="text"
              placeholder=" "
              className="block w-full px-4 py-2 text-sm bg-transparent appearance-none focus:outline-none peer"
              onChange={handleFileChange}
            />
            <label className="absolute left-4 top-2 text-gray-500 transition-all duration-200 transform origin-left peer-focus:-translate-y-4 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 pointer-events-none">
              Enter Address
            </label>
          </div>
        </div>
      </div>

      <button className="bg-blue w-[100px] ml-auto mt-2 text-white px-4 py-2 rounded hover:bg-blue-600">
        Save
      </button>

      <AddFieldModal
        isOpen={isModalOpen}
        onClose={handleModalToggle}
        onAddField={handleAddNewField}
      />
    </div>
  );
};

export default ChangeInvoiceForm;
