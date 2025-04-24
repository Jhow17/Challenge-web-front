// src/components/GraficoDonut.jsx
// Grafico da biblioteca 
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const GraficoDonut = ({ livres, desocupando, ocupados }) => {
  const [series, setSeries] = useState([livres, desocupando, ocupados]);

  useEffect(() => {
    setSeries([livres, desocupando, ocupados]);
  }, [livres, desocupando, ocupados]);

  const options = {
    chart: {
      type: "donut",
    },
    labels: ["LIVRES", "DESOCUPANDO", "OCUPADOS"],
    colors: ["#198754", "#fd7e14", "#dc3545"],
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="card p-3 d-flex flex-column flex-md-row align-items-center gap-4 w-100" style={{ minHeight: "18rem" }}>
      <div
  className="w-100 w-md-50"
  style={{ minHeight: "15rem", maxWidth: "400px", width: "100%" }}
>
        <ReactApexChart options={options} series={series} type="donut" width="100%" />
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column text-center">
        <h5 className="fw-light">Total de Pacientes</h5>
        <h2>{series.reduce((a, b) => a + b, 0)}</h2>
        <p>Pacientes</p>
      </div>
    </div>
  );
};

export default GraficoDonut;
