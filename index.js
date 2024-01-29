function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  updateCity(searchInputElement.value);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function updateCity(city) {
  let apiKey = "971666041co003fba6800ebft2ef2e87";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(unveilTemp);
}

function unveilTemp(response) {
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  console.log(response.data.temperature.current);
  let newTemperature = Math.round(response.data.temperature.current);
  let newTemperatureElement = document.querySelector(
    ".current-temperature-value"
  );

  newTemperatureElement.innerHTML = newTemperature;
}
