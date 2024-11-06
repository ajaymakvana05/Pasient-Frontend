import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";

const BillingDashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />

        <Outlet></Outlet>
        {/* <div className="flex flex-col md:flex-row gap-6 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/4 flex items-center justify-center">
            <button className="bg-blue text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Choose Template
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <div className=" bg-blue flex items-center justify-between border-b pb-4 mb-4">
              <h2 className="text-lg font-bold text-white">Hospital</h2>
              <span className="text-white">Invoice No: 1234</span>
            </div>
            <div className="mb-4">
              <h3 className="text-md font-semibold">Invoice To:</h3>
              <p className="text-black font-semibold">PLK Madhuwan Bank</p>
              <p>+123-456-7890</p>
              <p>www.webpkey.com</p>
              <p>123 Anywhere Street, Any City</p>
            </div>
            <table className="w-full mb-4 text-sm text-left">
              <thead>
                <tr className="bg-blue">
                  <th className="font-bold">Description</th>
                  <th className="font-bold">Qty.</th>
                  <th className="font-bold">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Payment transferred</td>
                  <td>2</td>
                  <td>$200</td>
                </tr>
              </tbody>
            </table>
            <div className="border-t pt-4 text-right">
              <p>Sub Total: $1200.00</p>
              <p>Tax: $20.00</p>
              <p className="font-bold">Total: $1254.00</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <h2 className="text-lg font-bold text-blue">Hospital</h2>
              <span className="text-blue">Invoice No: 1234</span>
            </div>
            <div className="mb-4">
              <h3 className="text-md font-semibold">Billing To:</h3>
              <p>Adeline Palmerston</p>
              <p>123 Anywhere St., Any City</p>
              <p>Invoice Date: 20 June, 2020</p>
            </div>
            <table className="w-full mb-4 text-sm text-left">
              <thead>
                <tr>
                  <th className="font-bold">Item</th>
                  <th className="font-bold">Qty.</th>
                  <th className="font-bold">Price</th>
                  <th className="font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Payment transferred</td>
                  <td>2</td>
                  <td>$100</td>
                  <td>$200</td>
                </tr>
              </tbody>
            </table>
            <div className="border-t pt-4 text-right">
              <p>Sub Total: $2100.00</p>
              <p>Tax: $20.00</p>
              <p className="font-bold">Discount: $50.00</p>
              <p className="font-bold">Total: $2154.00</p>
            </div>
            <div className="mt-4 text-sm">
              <p>Call: +9854 22354</p>
              <p>Email: Help@Gmail.com</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BillingDashboard;
