import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MasterCard from "../../assets/images/pay1.svg";
import Visa from "../../assets/images/pay2.svg";

const PatientAppointmentBookingInvoice = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const [succesfullyPopup, setSuccesfullyPopup] = useState(false);
  //   const [selectedCard, setSelectedCard] = useState("");

  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  const handleOpenSuccesfully = () => {
    setSuccesfullyPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // setSuccesfullyPopup(false);
  };
  const navigate = useNavigate();
  return (
    <div className="max-w-full lg:max-w-2xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-lg mt-5 sm:mt-10">
      <div className="flex flex-wrap justify-between items-center border-b pb-4 mb-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="text-blue text-3xl sm:text-4xl mr-2">
            <i className="fas fa-hospital"></i>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-blue">
              Hospital
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">Tagline here</p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue">Invoice</h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mb-6">
        <div className="mb-6 w-full sm:w-auto flex-1">
          <h3 className="text-lg sm:text-xl font-bold">Dr. Bharat Patel</h3>
          <p className="text-gray-500 text-sm sm:text-base break-words">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            mattis turpis nulla, finibus sodales erat porta eu.
          </p>
        </div>
        <div className="w-full sm:w-auto text-sm sm:text-base">
          <p>
            <span className="font-bold">Bill No:</span> 1234
          </p>
          <p>
            <span className="font-bold">Bill Date:</span> 20 June, 2020
          </p>
          <p>
            <span className="font-bold">Bill Time:</span> 10:45 PM
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p>
              <span className="font-bold">Name:</span> Miracle Kenter
            </p>
            <p>
              <span className="font-bold">Gender:</span> Male
            </p>
            <p>
              <span className="font-bold">Age:</span> 36 Years
            </p>
            <p>
              <span className="font-bold">Address:</span> B-105 Virat Bungalows,
              Punagam Motavaracha Jamnagar.
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Disease Name:</span> Jaxson Saris
            </p>
            <p>
              <span className="font-bold">Phone Number:</span> 9957 96557
            </p>
            <p>
              <span className="font-bold">Payment Type:</span> Insurance
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6 overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-blue text-white">
              <th className="p-2 sm:p-3 text-left text-sm sm:text-base">
                Description
              </th>
              <th className="p-2 sm:p-3 text-right text-sm sm:text-base">
                Amount
              </th>
              <th className="p-2 sm:p-3 text-right text-sm sm:text-base">
                Qty.
              </th>
              <th className="p-2 sm:p-3 text-right text-sm sm:text-base">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 sm:p-3">Neuromuscular blockers</td>
              <td className="p-2 sm:p-3 text-right">₹ 12000.00</td>
              <td className="p-2 sm:p-3 text-right">2</td>
              <td className="p-2 sm:p-3 text-right">₹ 24000.00</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 sm:p-3">Neuromuscular blockers</td>
              <td className="p-2 sm:p-3 text-right">₹ 8000.00</td>
              <td className="p-2 sm:p-3 text-right">1</td>
              <td className="p-2 sm:p-3 text-right">₹ 8000.00</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 sm:p-3">
                Leucovorin with high dose methotrexate (HDMTX)
              </td>
              <td className="p-2 sm:p-3 text-right">₹ 1000.00</td>
              <td className="p-2 sm:p-3 text-right">2</td>
              <td className="p-2 sm:p-3 text-right">₹ 2000.00</td>
            </tr>
            <tr className="border-b">
              <td className="p-2 sm:p-3">
                Hydroxyurea for sickle cell disease
              </td>
              <td className="p-2 sm:p-3 text-right">₹ 20.00</td>
              <td className="p-2 sm:p-3 text-right">2</td>
              <td className="p-2 sm:p-3 text-right">₹ 40.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <p>
            <span className="font-bold">Insurance Company:</span> HDFC life
            Insurance
          </p>
          <p>
            <span className="font-bold">Insurance Plan:</span> Health insurance
          </p>
          <p>
            <span className="font-bold">Claim Amount:</span>{" "}
            <span className="text-blue">₹ 2000.00</span>
          </p>
          <p>
            <span className="font-bold">Claimed Amount:</span>{" "}
            <span className="text-blue">₹ 2500.00</span>
          </p>
        </div>
        <div className="text-right text-sm sm:text-base">
          <p>
            <span className="font-bold">Amount:</span> ₹ 25840.00
          </p>
          <p>
            <span className="font-bold">Discount 5%:</span> ₹ 1292.00
          </p>
          <p>
            <span className="font-bold">Tax:</span> ₹ 1220.00
          </p>
          <p className="text-lg sm:text-xl font-bold">
            <span className="font-bold">Total Amount:</span>{" "}
            <span className="text-blue">₹ 24668.00</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center bg-blue text-white p-4 rounded-lg">
        <p className="text-sm sm:text-base">Call : +90854 22354</p>
        <p className="text-sm sm:text-base">Email : Hello@Gmail.com</p>
      </div>

      <div className="m-auto w-full sm:w-3/12 mt-3">
        <button
          onClick={handleOpenPopup}
          className="bg-blue hover:bg-blue flex justify-center text-white font-bold py-2 px-4 rounded w-full"
        >
          Pay Now
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Payment Method
            </h2>

            <div className="mb-4">
              <label className="flex items-center p-2 border rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio text-blue"
                  checked={selectedCard === "MasterCard"}
                  onChange={() => setSelectedCard("MasterCard")}
                />
                <img
                  src={MasterCard}
                  alt="MasterCard logo"
                  className="ml-2 mr-4"
                />
                <span className="text-gray-700">Master Card</span>
              </label>
            </div>

            <div className="mb-6">
              <label className="flex items-center p-2 border rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  className="form-radio text-blue"
                  checked={selectedCard === "Visa"}
                  onChange={() => setSelectedCard("Visa")}
                />
                <img src={Visa} alt="Visa logo" className="ml-2 mr-4" />
                <span className="text-gray-700">Visa Card</span>
              </label>
            </div>

            {selectedCard && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Card Holder Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Card Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Number"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div className="flex justify-between gap-4 mb-6">
                  <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Expiry Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      CVV <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter CVV"
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg">
                Cancel
              </button>
              <button
                onClick={handleOpenSuccesfully}
                className="px-4 py-2 bg-blue text-white rounded-lg"
              >
                Pay Now
              </button>
            </div>
          </div>
          {succesfullyPopup && (
            <div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-sm">
                <div className="bg-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar-alt text-white text-2xl"></i>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Appointment Booked Successfully!
                </h2>
                <p className="text-gray-600 mb-4">
                  The appointment is successfully booked.
                </p>
                <button className="bg-green text-white py-2 px-4 rounded">
                  Okay
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PatientAppointmentBookingInvoice;
