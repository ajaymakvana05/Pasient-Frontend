import React from "react";
import Sidebar from "../../Components/Sidebar";
import Header from "../../Components/Header";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale
);

const ReportingDashboard = () => {
  const appointmentsData = {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Online Consultation",
        data: [10, 20, 30, 40, 30, 50],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Other Appointment",
        data: [20, 30, 25, 35, 50, 40],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  // Data for Patients Summary Chart
  const patientsSummaryData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "New Patients",
        data: [10, 20, 15, 30, 25, 35, 40],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Old Patients",
        data: [5, 10, 15, 20, 30, 25, 20],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  };
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white shadow-md p-4 rounded-md text-center">
              <h2 className="text-xl font-semibold">Total Patients</h2>
              <p className="text-2xl">1500</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md text-center">
              <h2 className="text-xl font-semibold">Repeat Patients</h2>
              <p className="text-2xl">500</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md text-center">
              <h2 className="text-xl font-semibold">Admitted Patients</h2>
              <p className="text-2xl">1000</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md text-center">
              <h2 className="text-xl font-semibold">Total Claims</h2>
              <p className="text-2xl">250</p>
            </div>
          </div>

          <div className="bg-white shadow-md p-4 rounded-md col-span-1 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Appointments</h2>
            <Bar data={appointmentsData} options={{ responsive: true }} />
          </div>

          <div className="bg-white shadow-md p-4 rounded-md col-span-1 lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Patients Summary</h2>
            <Line data={patientsSummaryData} options={{ responsive: true }} />
          </div>

          <div className="bg-white shadow-md p-4 rounded-md col-span-1 lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4">
              Patients Count Department
            </h2>
            <ul>
              <li className="flex justify-between py-2 border-b">
                <span>Cardiology</span>
                <span>105</span>
              </li>
              <li className="flex justify-between py-2 border-b">
                <span>Endocrinologist</span>
                <span>254</span>
              </li>
              <li className="flex justify-between py-2 border-b">
                <span>Gastroenterologist</span>
                <span>657</span>
              </li>
              <li className="flex justify-between py-2 border-b">
                <span>Anesthesiologist</span>
                <span>480</span>
              </li>
              <li className="flex justify-between py-2 border-b">
                <span>Pediatrician</span>
                <span>784</span>
              </li>
              <li className="flex justify-between py-2 border-b">
                <span>Ophthalmologist</span>
                <span>254</span>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-4 rounded-md col-span-1 lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4">
              Doctor Count Department
            </h2>
            <ul>
              <li className="flex justify-between py-2 border-b">
                <span>Cardiology</span>
                <span>20</span>
              </li>
              <li className="flex justify-between py-2 border-b">
                <span>Endocrinologist</span>
                <span>15</span>
              </li>
              <li className="flex justify-between py-2 border-b">
                <span>Gastroenterologist</span>
                <span>22</span>
              </li>
              <li className="flex justify-between py-2 border-b">
                <span>Anesthesiologist</span>
                <span>18</span>
              </li>
              <li className="flex justify-between py-2 border-b">
                <span>Pediatrician</span>
                <span>30</span>
              </li>
              <li className="flex justify-between py-2 border-b">
                <span>Ophthalmologist</span>
                <span>10</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportingDashboard;
