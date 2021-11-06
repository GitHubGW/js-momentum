const weatherTemp = document.querySelector(".js-weather-temp");
const weatherMain = document.querySelector(".js-weather-main");
const jsWeather = document.querySelector(".js-weather");
const API_KEY = "ff26d804d0d9d838fc3e57227eed4bcc";

const handleGeoSuccess = async (position) => {
  const {
    coords: { latitude, longitude },
  } = position;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  const data = await fetch(url);
  const json = await data.json();

  weatherTemp.innerHTML = Math.floor(json.main.temp);
  weatherMain.innerHTML = json.weather[0].main;
  jsWeather.innerHTML = json.name;
};

const handleGeoError = () => {
  alert("Failed to get location.");
};

navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
