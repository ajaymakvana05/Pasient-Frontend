import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const EditBillsform = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    gender: "",
    age: "",
    doctorName: "",
    diseaseName: "",
    description: "",
    paymentType: "cash",
    billDate: "",
    billTime: "",
    billNumber: "",
    discount: "",
    tax: "",
    amount: "",
    totalAmount: "",
    address: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col h-full overflow-x-auto bg-white mx-4">
      <div className="flex-1 p-6">
        <div className="grid md:grid-cols-4 gap-4 mb-4">
          {" "}
          {/* Changed to 4 columns */}
          <div className="relative">
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Patient Name
            </label>
          </div>
          <div className="relative">
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Phone Number
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Gender
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Age
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Doctor Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="diseaseName"
              value={formData.diseaseName}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Disease Name
            </label>
          </div>
          <div className="relative ">
            {" "}
            {/* Make description span all 4 columns */}
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Description
            </label>
          </div>
          <div className="relative">
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Payment Type
            </label>
            <select
              name="paymentType"
              value={formData.paymentType}
              onChange={handleInputChange}
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            >
              <option value="cash">Cash</option>
              <option value="online">Online</option>
              <option value="card">Card</option>
            </select>
          </div>
          <div className="relative">
            <input
              type="date"
              name="billDate"
              value={formData.billDate}
              onChange={handleInputChange}
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Bill Date
            </label>
          </div>
          <div className="relative">
            <input
              type="time"
              name="billTime"
              value={formData.billTime}
              onChange={handleInputChange}
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Bill Time
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              name="billNumber"
              value={formData.billNumber}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Bill Number
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Discount (%)
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              name="tax"
              value={formData.tax}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Tax
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Amount
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              name="totalAmount"
              value={formData.totalAmount}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Total Amount
            </label>
          </div>
          <div className="relative ">
            {" "}
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder=" "
              className="border rounded-lg px-4 py-2 w-full peer focus:outline-none focus:ring-2 focus:ring-[#A7A7A7]"
              required
            />
            <label className="absolute left-4 -top-2.5 bg-white text-gray-600 transition-all duration-200 transform scale-75 origin-top-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-placeholder-shown:scale-100 peer-focus:-top-2.5 peer-focus:left-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-base peer-focus:text-blue-600">
              Address
            </label>
          </div>
        </div>

        <button className="bg-blue flex ml-auto text-white py-2 px-8 rounded mt-4">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBillsform;
