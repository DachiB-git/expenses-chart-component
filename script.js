import data from "./data.json" assert { type: "json" };
const chartData = data
  .map(
    ({ day, amount }) =>
      `<div class="chart-col">
      <div class="daily-expense"><p>$${amount}</p></div>
      <div style="--height:${Math.floor(amount / 10) * 30}px"class="bar"></div>
      <p class="day">${day}</p>
    </div>`
  )
  .join("");
const chart = document.querySelector(".chart");
const currentDay = new Date()
  .toLocaleDateString("en-gb", { weekday: "short" })
  .toLocaleLowerCase();

function render() {
  chart.innerHTML = chartData;
  update();
}
function update() {
  const chartCols = [...document.querySelectorAll("div.chart-col")];
  const currentDayChartCol = chartCols.find(
    (col) => col.children[2].textContent === currentDay
  );
  currentDayChartCol.children[1].style.backgroundColor = "hsl(186, 34%, 60%)";
}
render();
