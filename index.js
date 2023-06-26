const cities = ['Москва', 'Санкт-Петербург', 'Сочи', 'Ростов-на-Дону'];
const temperatures = [];

for (let i = 0; i < cities.length; i++) {
  let temperature = Number(prompt(`Введите температуру для города ${cities[i]}`));
  temperatures.push(temperature);
}

let maxTemperature = -Infinity;
let minTemperature = Infinity;
for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] > maxTemperature) {
    maxTemperature = temperatures[i];
  }
  if (temperatures[i] < minTemperature) {
    minTemperature = temperatures[i];
  }
}

const weatherList = document.getElementById("weather-list");

for (let i = 0; i < cities.length; i++) {
  const listItem = document.createElement("li");
  listItem.innerText = `${cities[i]}: ${temperatures[i]}°C`;
  weatherList.appendChild(listItem);
}

const maxTemperatureItem = document.createElement("li");
maxTemperatureItem.innerText = `Максимальная температура: ${maxTemperature}°C`;
weatherList.appendChild(maxTemperatureItem);

const minTemperatureItem = document.createElement("li");
minTemperatureItem.innerText = `Минимальная температура: ${minTemperature}°C`;
weatherList.appendChild(minTemperatureItem);