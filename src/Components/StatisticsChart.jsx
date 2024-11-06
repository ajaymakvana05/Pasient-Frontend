// src/components/StatisticsChart.js
import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StatisticsChart = () => {
  const [timeframe, setTimeframe] = useState("Month");
  const chartRef = useRef(null);
  const [lineColor, setLineColor] = useState("#5BC4FF");

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
      gradient.addColorStop(0, "#5BC4FF");
      gradient.addColorStop(1, "#FF5BEF");
      setLineColor(gradient);
    }
  }, [timeframe]);

  const data = {
    labels:
      timeframe === "Year"
        ? ["2018", "2019", "2020", "2021", "2022", "2023"]
        : timeframe === "Month"
        ? [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ]
        : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Patients",
        data:
          timeframe === "Year"
            ? [12000, 15000, 18000, 22000, 25000, 30000]
            : timeframe === "Month"
            ? [
                5000, 10000, 7000, 3000, 20000, 15000, 2476, 20000, 25000,
                30000, 15000, 5000,
              ]
            : [300, 500, 700, 200, 1000, 800, 600],
        borderColor: lineColor,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "#fff",
        borderWidth: 4,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Patients",
        },
      },
      x: {
        title: {
          display: true,
          text:
            timeframe === "Year"
              ? "Years"
              : timeframe === "Month"
              ? "Months"
              : "Days of the Week",
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Patients Statistics</h3>
        <div className="flex space-x-2">
          <button
            className={`px-3 py-1 text-sm ${
              timeframe === "Year" ? "bg-blue text-white" : "bg-gray-200"
            } rounded`}
            onClick={() => setTimeframe("Year")}
          >
            Year
          </button>
          <button
            className={`px-3 py-1 text-sm ${
              timeframe === "Month" ? "bg-blue text-white" : "bg-gray-200"
            } rounded`}
            onClick={() => setTimeframe("Month")}
          >
            Month
          </button>
          <button
            className={`px-3 py-1 text-sm ${
              timeframe === "Week" ? "bg-blue text-white" : "bg-gray-200"
            } rounded`}
            onClick={() => setTimeframe("Week")}
          >
            Week
          </button>
        </div>
      </div>
      <Line ref={chartRef} data={data} options={options}  />
    </div>
  );
};

export default StatisticsChart;
