import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Invoice = () => {
  const invoiceData = {
    invoiceNumber: "1234",
    invoiceDate: "30 May, 2020",
    totalDue: "$1,251",
    billTo: {
      name: "PLK Madhuwan Bank",
      contact: "+123-456-7890",
      website: "www.gallery.com",
      address: "123 Anywhere Street, Any City",
    },
    items: [
      { description: "Payment transferred", quantity: 2, price: 200 },
      { description: "Payment transferred", quantity: 2, price: 200 },
      { description: "Payment transferred", quantity: 2, price: 200 },
      { description: "Payment transferred", quantity: 2, price: 200 },
    ],
    subTotal: 2110.0,
    tax: 25.0,
    total: 2254.0,
    terms:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis turpis nulla, finibus sodales erat porta eu.",
  };

  return (
    <div className="p-4 bg-gray flex-grow md:grid md:grid-cols-3 md:gap-4 overflow-x-auto">
      {/* Column 1: Template Selection */}
      <div className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center md:col-span-1">
        <button className="bg-blue text-white py-2 px-4 rounded-lg hover:bg-blue transition duration-300">
          Choose Template
        </button>
      </div>

      {/* Column 2: Invoice Example 1 */}
      <div className="bg-white p-4 rounded-lg shadow-lg md:col-span-1">
        {/* Header */}
        <div className="bg-blue p-4 rounded-t-lg flex justify-between items-center text-white">
          <div>
            <div className="text-2xl font-bold">Hospital</div>
            <span className="text-xs italic">tagline here</span>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-semibold">Invoice</h2>
            <p className="text-sm">Invoice No : {invoiceData.invoiceNumber}</p>
          </div>
        </div>

        {/* Invoice Information */}
        <div className="md:flex md:justify-between mt-4 border-b pb-4">
          <div className="mb-4 md:mb-0">
            <h3 className="text-md font-semibold">Invoice To :</h3>
            <p className="font-semibold">{invoiceData.billTo.name}</p>
            <p>{invoiceData.billTo.contact}</p>
            <p>{invoiceData.billTo.website}</p>
            <p>{invoiceData.billTo.address}</p>
          </div>
          <div className="text-right">
            <p>Invoice Date : {invoiceData.invoiceDate}</p>
            <p>
              Total Due :{" "}
              <span className="text-blue font-bold">
                {invoiceData.totalDue}
              </span>
            </p>
          </div>
        </div>

        {/* Invoice Table */}
        <table className="w-full mt-4 border text-left text-sm">
          <thead className="bg-blue text-white">
            <tr>
              <th className="p-2">Description</th>
              <th className="p-2 text-center">Qty.</th>
              <th className="p-2 text-center">Price</th>
              <th className="p-2 text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{item.description}</td>
                <td className="p-2 text-center">{item.quantity}</td>
                <td className="p-2 text-center">${item.price.toFixed(2)}</td>
                <td className="p-2 text-center">
                  ${(item.quantity * item.price).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals Section */}
        <div className="text-right mt-4 border-t pt-4">
          <p>Sub Total: ${invoiceData.subTotal.toFixed(2)}</p>
          <p>Tax: ${invoiceData.tax.toFixed(2)}</p>
          <p className="font-bold text-lg">
            Total: ${invoiceData.total.toFixed(2)}
          </p>
        </div>

        {/* Terms and Conditions & Signature */}
        <div className="md:flex md:justify-between items-start mt-6">
          <div className="text-left w-full md:w-1/2">
            <h3 className="font-bold">Term and Conditions</h3>
            <p className="text-xs text-grey">{invoiceData.terms}</p>
          </div>
          <div className="text-right w-full md:w-1/2">
            <p className="mb-8">Signature</p>
            <hr className="border-t border-gray-400 w-32 mx-auto" />
          </div>
        </div>
      </div>

      {/* Column 3: Invoice Example 2 */}
      <div className="bg-white p-4 rounded-lg shadow-lg md:col-span-1">
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <h2 className="text-lg font-bold text-blue">Hospital</h2>
          <span className="text-blue-500">Invoice No: 1234</span>
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
              <th className="font-bold text-center">Qty.</th>
              <th className="font-bold text-center">Price</th>
              <th className="font-bold text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Payment transferred</td>
              <td className="p-2 text-center">2</td>
              <td className="p-2 text-center">$100</td>
              <td className="p-2 text-center">$200</td>
            </tr>
            <tr>
              <td className="p-2">Payment transferred</td>
              <td className="p-2 text-center">2</td>
              <td className="p-2 text-center">$100</td>
              <td className="p-2 text-center">$200</td>
            </tr>
            <tr>
              <td className="p-2">Payment transferred</td>
              <td className="p-2 text-center">2</td>
              <td className="p-2 text-center">$100</td>
              <td className="p-2 text-center">$200</td>
            </tr>
            <tr>
              <td className="p-2">Payment transferred</td>
              <td className="p-2 text-center">2</td>
              <td className="p-2 text-center">$100</td>
              <td className="p-2 text-center">$200</td>
            </tr>
            <tr>
              <td className="p-2">Payment transferred</td>
              <td className="p-2 text-center">2</td>
              <td className="p-2 text-center">$100</td>
              <td className="p-2 text-center">$200</td>
            </tr>
            <tr>
              <td className="p-2">Payment transferred</td>
              <td className="p-2 text-center">2</td>
              <td className="p-2 text-center">$100</td>
              <td className="p-2 text-center">$200</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <div className="flex justify-between">
          <div>
            <p className="font-bold">Payment Method</p>
            <p>Bank Name : State Bank Of India</p>
            <p>Account No : 1234567890</p>
          </div>
          <div className="pt-4 text-right">
            <p>Sub Total: $2100.00</p>
            <p className="font-bold">Discount 5%: $50.00</p>
            <p className="font-bold">Total: $2154.00</p>
          </div>
        </div>

        <div className="text-left w-full md:w-1/2">
          <h3 className="font-bold">Term and Conditions</h3>
          <p className="text-xs text-grey">{invoiceData.terms}</p>
        </div>

        <div className="mt-4 text-sm bg-blue flex justify-between">
          <p>Call: +9854 22354</p>
          <p>Email: Help@Gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
