window.addEventListener("resize", () => {
  myChart1.resize();
  myChart2.resize();
});

// Datos de ejemplo para los gráficos
const data1 = {
  labels: [
    "Germany",
    "United Kingdom",
    "France",
    "Netherlands",
    "Norway",
    "Italy",
    "Sweden",
    "Belgium",
    "Denmark",
    "Poland",
    "Ireland",
  ],
  datasets: [
    {
      label: "% Visitantes",
      data: [33.6, 19.21, 7.83, 7.7, 7.54, 7.54, 6.96, 3.39, 2.57, 1.86, 1.74],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const data2 = {
  labels: [
    "Germany",
    "United Kingdom",
    "France",
    "Norway",
    "Italy",
    "Netherlands",
    "Belgium",
    "Ireland",
    "Sweden",
    "Denmark",
    "Poland",
  ],
  datasets: [
    {
      label: "% de Gasto",
      data: [15.77, 11.77, 9.83, 9.22, 9.1, 8.74, 8.39, 8.33, 7.76, 6.87, 4.17],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// Configuración de los gráficos
const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// Crear los gráficos
const ctx1 = document.getElementById("chart1").getContext("2d");
const myChart1 = new Chart(ctx1, {
  type: "doughnut",
  data: data1,
  options: options,
});

const ctx2 = document.getElementById("chart2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: data2,
  options: options,
});
