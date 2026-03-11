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
import { Line } from "react-chartjs-2";
import type { Patient } from "../types/patient";
import "./DiagnosisHistory.css";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface DiagnosisHistoryProps {
  patient: Patient;
}

type Option =
  | "Last 1 month"
  | "Last 3 months"
  | "Last 6 months"
  | "Last 1 year";

export default function DiagnosisHistory({ patient }: DiagnosisHistoryProps) {
  const lastSixMonths = patient?.diagnosis_history?.slice(0, 6).reverse() || [];
  const latestData = patient?.diagnosis_history?.[0];

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<Option>("Last 6 months");

  const options1: Option[] = [
    "Last 1 month",
    "Last 3 months",
    "Last 6 months",
    "Last 1 year",
  ];

  const chartData = {
    labels: lastSixMonths.map(
      (h) => `${h?.month?.substring(0, 3)}, ${h?.year}`,
    ),
    datasets: [
      {
        label: "Systolic",
        data: lastSixMonths.map((h) => h?.blood_pressure?.systolic?.value),
        borderColor: "#C26EB4",
        backgroundColor: "#C26EB4",
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: lastSixMonths.map((h) => h?.blood_pressure?.diastolic?.value),
        borderColor: "#7E6CAB",
        backgroundColor: "#7E6CAB",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <>
      <div className="diagnosis-card">
        <h2 className="card-title-24pt">Diagnosis History</h2>
        <div className="blood-pressure-section">
          <div className="chart-content">
            <div className="chart-wrapper">
              <div className="container">
                {/* Left Title */}
                <span className="blo-title">
                  Blood Pressure
                </span>

                {/* Dropdown */}
                <div className=" drop">
                  <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="dropdown-btn"
                  >
                    {value}
                    <span className="text-xs">▼</span>
                  </button>

                  
                </div>
              </div>
              <Line data={chartData} options={options} />
            </div>
            <div className="blood-pressure-values">
              <div className="bp-value">
                <div className="bp-indicator systolic"></div>
                <div>
                  <div className="body-emphasized-14pt">Systolic</div>
                  <div className="bp-number">
                    {latestData?.blood_pressure?.systolic?.value}
                  </div>
                  <div className="bp-level body-regular-14">
                    {latestData?.blood_pressure?.systolic?.levels ===
                    "Higher than Average"
                      ? "↑"
                      : "↓"}{" "}
                    {latestData?.blood_pressure?.systolic?.levels}
                  </div>
                </div>
              </div>
              <div className="bp-separator"></div>
              <div className="bp-value">
                <div className="bp-indicator diastolic"></div>
                <div>
                  <div className="body-emphasized-14pt">Diastolic</div>
                  <div className="bp-number">
                    {latestData?.blood_pressure?.diastolic?.value}
                  </div>
                  <div className="bp-level body-regular-14">
                    {latestData?.blood_pressure?.diastolic?.levels ===
                    "Lower than Average"
                      ? "↓"
                      : "↑"}{" "}
                    {latestData?.blood_pressure?.diastolic?.levels}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vital-signs">
          <div className="vital-card respiratory">
            <img
              src="/respiratory.svg"
              alt="Respiratory"
              className="vital-icon"
            />
            <div className="vital-label body-regular-14">Respiratory Rate</div>
            <div className="vital-value">
              {latestData?.respiratory_rate?.value} bpm
            </div>
            <div className="vital-status body-regular-14">
              {latestData?.respiratory_rate?.levels}
            </div>
          </div>
          <div className="vital-card temperature">
            <img
              src="/temperature.svg"
              alt="Temperature"
              className="vital-icon"
            />
            <div className="vital-label body-regular-14">Temperature</div>
            <div className="vital-value">
              {latestData?.temperature?.value}°F
            </div>
            <div className="vital-status body-regular-14">
              {latestData?.temperature?.levels}
            </div>
          </div>
          <div className="vital-card heart-rate">
            <img
              src="/pink-heart-icon.svg"
              alt="Heart Rate"
              className="vital-icon"
            />
            <div className="vital-label body-regular-14">Heart Rate</div>
            <div className="vital-value">
              {latestData?.heart_rate?.value} bpm
            </div>
            <div className="vital-status body-regular-14">
              {latestData?.heart_rate?.levels === "Lower than Average"
                ? "↓"
                : ""}{" "}
              {latestData?.heart_rate?.levels}
            </div>
          </div>
        </div>
      </div>

      <div className="diagnostic-list-card">
        <h2 className="card-title-24pt">Diagnostic List</h2>
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th className="body-emphasized-14pt">Problem/Diagnosis</th>
              <th className="body-emphasized-14pt">Description</th>
              <th className="body-emphasized-14pt">Status</th>
            </tr>
          </thead>
          <tbody style={{ height: "10px", overflowY: "scroll" }}>
            {patient?.diagnostic_list?.map((diagnostic, index) => (
              <tr key={index}>
                <td className="body-regular-14">{diagnostic?.name}</td>
                <td className="body-regular-14">{diagnostic?.description}</td>
                <td className="body-regular-14">{diagnostic?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
