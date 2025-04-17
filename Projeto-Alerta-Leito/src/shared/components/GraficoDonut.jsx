// src/components/GraficoDonut.jsx
// Grafico da biblioteca 
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const GraficoDonut = () => {
  const [state] = useState({
    series: [14, 27, 30],
    options: {
      chart: {
        type: 'donut',
      },
      labels: ['LIVRES', 'DESOCUPANDO', 'OCUPADOS'],
      colors: ['#198754', '#fd7e14', '#dc3545'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',

            },
          },
        },
      ],
    },
  });

  return (
    <div className="card p-3 d-flex flex-row align-items-center" style={{ minHeight: '20rem', minWidth: '25rem' }}>
      <div style={{ width: '100%', maxWidth: '30rem' }}>

        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          width="100%"
        />
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h5 className="fw-light">Total de Pacientes</h5> 
        <h2 className="text-center">{state.series.reduce((a, b) => a + b, 0)}</h2>
        <p className="text-center">Pacientes</p>
      </div>
    </div>
  );
};

export default GraficoDonut;

