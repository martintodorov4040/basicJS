const planetsTable = document.querySelector("#planets-table");
const getPlanetsBtn = document.querySelector("#get-planets-btn");
const nextPlanetsBtn = document.querySelector("#next-planets-btn");
const prevPlanetsBtn = document.querySelector("#prev-planets-btn");

let currentPage = 1;

function fetchPlanets(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      clearTable();
      data.results.forEach(planet => {
        addPlanetToTable(planet);
      });
      nextPlanetsBtn.style.display = "block";
      prevPlanetsBtn.style.display = "block";
    });
}

function addPlanetToTable(planet) {
  const row = planetsTable.insertRow();
  const nameCell = row.insertCell();
  const populationCell = row.insertCell();
  const climateCell = row.insertCell();
  const gravityCell = row.insertCell();

  nameCell.innerHTML = planet.name;
  populationCell.innerHTML = planet.population;
  climateCell.innerHTML = planet.climate;
  gravityCell.innerHTML = planet.gravity;
}

function clearTable() {
  while (planetsTable.rows.length > 1) {
    planetsTable.deleteRow(1);
  }
}

getPlanetsBtn.addEventListener("click", () => {
  fetchPlanets(`https://swapi.dev/api/planets/?page=1`);
});

nextPlanetsBtn.addEventListener("click", () => {
  currentPage++;
  fetchPlanets(`https://swapi.dev/api/planets/?page=2`);
});

prevPlanetsBtn.addEventListener("click", () => {
  currentPage--;
  fetchPlanets(`https://swapi.dev/api/planets/?page=${currentPage}`);
});