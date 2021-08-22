function showTemperature(response) {
  let cityNameElement = document.querySelector("#city-name");
  let dateElement = document.querySelector("#date");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  cityNameElement.innerHTML = response.data.name;
  temperatureElement = Math.round(response.data.main.temp);

  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  description.innerHTML = response.data.weather[0].description;
}

let apiKey = "0d800c588dc0c17f7124ec074768af05";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Antananarivo&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
