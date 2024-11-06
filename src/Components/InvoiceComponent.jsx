import React from "react";

const InvoiceComponent = () => {
  return (
    <div className="flex flex-col h-full overflow-x-auto">
      <div className="max-w-2xl mx-auto border rounded-lg p-6 bg-white shadow-lg">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-blue">Hospital</h2>
            <p className="text-sm">Your Health, Our Priority</p>
          </div>
          <div className="text-right">
            <h1 className="text-2xl font-semibold text-blue">Invoice</h1>
            <p className="text-sm">
              Bill No: <span className="font-bold">1234</span>
            </p>
            <p className="text-sm">
              Date: <span className="font-bold">2nd June, 2020</span>
            </p>
            <p className="text-sm">
              Time: <span className="font-bold">10:45 PM</span>
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Dr. Bharat Patel
          </h3>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proin
            multis turpis.
          </p>
          <div className="mt-4">
            <p>
              <strong>Name:</strong> Miracle Kenter
            </p>
            <p>
              <strong>Disease Name:</strong> Stomach Ache
            </p>
            <p>
              <strong>Gender:</strong> Male
            </p>
            <p>
              <strong>Phone Number:</strong> 9957 9657
            </p>
            <p>
              <strong>Age:</strong> 36 Years
            </p>
            <p>
              <strong>Address:</strong> B-105 Virat Bunglows Pragati Motorwache
              Jamnagar
            </p>
          </div>
        </div>

        <table className="w-full text-left mb-6">
          <thead className="bg-blue text-white">
            <tr>
              <th className="p-2">Description</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Qty</th>
              <th className="p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Neuromuscular blockers</td>
              <td className="p-2">₹ 12,000.00</td>
              <td className="p-2">2</td>
              <td className="p-2">₹ 24,000.00</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">
                Labetalol with high dose methotrexate (HDMTX)
              </td>
              <td className="p-2">₹ 8,000.00</td>
              <td className="p-2">1</td>
              <td className="p-2">₹ 8,000.00</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Hydroxyurea for sickle cell</td>
              <td className="p-2">₹ 3,500.00</td>
              <td className="p-2">2</td>
              <td className="p-2">₹ 7,000.00</td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between items-center mb-6">
          <div>
            <p>
              <strong>Insurance Company:</strong> HDFC Life Insurance
            </p>
            <p>
              <strong>Health Insurance:</strong> HDFC Health
            </p>
            <p>
              <strong>Claim Amount:</strong> ₹ 25,000.00
            </p>
            <p>
              <strong>Claimed Amount:</strong> ₹ 2,500.00
            </p>
          </div>
          <div className="text-right">
            <p>
              <strong>Amount:</strong> ₹ 39,500.00
            </p>
            <p>
              <strong>Discount (5%):</strong> - ₹ 1,975.00
            </p>
            <p>
              <strong>Tax:</strong> ₹ 2,000.00
            </p>
            <p className="font-bold text-lg">Total Amount: ₹ 45,000.00</p>
          </div>
        </div>

        <div className="text-center bg-blue text-white p-4 rounded-lg">
          <p>Call: +919854 32254</p>
          <p>Email: hello@hospital.com</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
