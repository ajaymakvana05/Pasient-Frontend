import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin to display text in the center of the doughnut chart
const centerTextPlugin = {
  id: "centerText",
  beforeDraw(chart) {
    const { width, height, ctx } = chart;
    ctx.restore();
    const fontSize = (height / 140).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#333";

    const totalPatients = 100; // Total patients count
    const text = `${totalPatients}`;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;
    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

const PatientsSummary = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "Patients Summary",
        data: [35, 65],
        backgroundColor: ["#FFBE76", "#6AEB70"],
        borderColor: ["#FFBE76", "#6AEB70"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
      tooltip: {
        enabled: true,
      },
      centerTextPlugin, // Register the custom plugin here
    },
    cutout: "70%", // This creates the hollow area in the doughnut chart
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Patients Summary</h3>
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <Doughnut
            data={data}
            options={options}
            plugins={[centerTextPlugin]}
          />
        </div>
        <div className="flex flex-col items-start justify-center ml-4">
          <div className="flex items-center mb-2">
            <span
              className="w-4 h-4 mr-2 rounded-full"
              style={{ backgroundColor: "#FFBE76" }}
            ></span>
            <span>
              New Patients: <strong>35</strong>
            </span>
          </div>
          <div className="flex items-center mb-2">
            <span
              className="w-4 h-4 mr-2 rounded-full"
              style={{ backgroundColor: "#6AEB70" }}
            ></span>
            <span>
              Old Patients: <strong>65</strong>
            </span>
          </div>
          <div className="flex items-center">
            <span
              className="w-4 h-4 mr-2 rounded-full"
              style={{ backgroundColor: "#5BC4FF" }}
            ></span>
            <span>
              Total Patients: <strong>100</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsSummary;
