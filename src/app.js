function formatDate(timestamp) {
  let date = newDate(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
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
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function showTemperature(response) {
  console.log(response.data.main.temp);
  let cityNameElement = document.querySelector("#city-name");
  let dateElement = document.querySelector("#current-date");
  let currentTemperatureElement = document.querySelector(
    "#current-temperature"
  );
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  cityNameElement.innerHTML = response.data.name;
  currentTemperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  description.innerHTML = response.data.weather[0].description;
}

let apiKey = "0d800c588dc0c17f7124ec074768af05";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
