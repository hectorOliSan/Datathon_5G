const pais = document.getElementById("pais");
const municipio = document.getElementById("municipio");
const fecha1 = document.getElementById("fecha1");
const fecha2 = document.getElementById("fecha2");
const tipo_visit = document.getElementById("tipo_visit");
const tipo_dia = document.getElementById("tipo_dia");

const r1 = document.getElementById("resultado1");
const r2 = document.getElementById("resultado2");
const rv = document.getElementById("resultado_visitantes");
const ra = document.getElementById("resultado_amount");

const apiUrl = "http://127.0.0.1:8000";

function predecir() {
  r1.style.display = "block";
  r2.style.display = "block";

  let p = pais.value;
  let m = municipio.value;
  let f1 = fecha1.value.split("-");
  let f2 = fecha2.value.split("-");
  let tv = tipo_visit.value;
  let td = tipo_dia.value;

  const datos1 = {
    input_data: [
      parseFloat(p),
      parseInt(m),
      parseInt(tv),
      parseInt(td),
      parseInt(f2[0]),
      parseInt(f2[1]),
      parseInt(f2[2]),
      parseInt(f1[0]),
      parseInt(f1[1]),
      parseInt(f1[2]),
    ],
  };

  const datos2 = {
    input_data: [
      parseFloat(p),
      parseInt(f1[2]),
      parseInt(f1[0]),
      parseInt(f1[1]),
      parseInt(m),
    ],
  };

  fetch("http://127.0.0.1:8000/visitantes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos1),
  })
    .then((response) => response.json())
    .then((data) => {
      rv.innerText = data["num_visitantes"];
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  fetch("http://127.0.0.1:8000/amount", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos2),
  })
    .then((response) => response.json())
    .then((data) => {
      ra.innerText = data["amount"].toFixed(2);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function borrar() {
  r1.style.display = "none";
  r2.style.display = "none";
}
