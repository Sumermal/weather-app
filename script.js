const apiKey = "83315a5bd1e68e02d6b8e5700f57b5e6";

const cityInput = document.querySelector(".city-input");

const searchBtn = document.querySelector(".search-btn");

const temp = document.querySelector(".temp");

const city = document.querySelector(".city");

const weather = document.querySelector(".weather");

const humidityValue = document.querySelector(".humidity-value");

const windSpeed = document.querySelector(".wind-speed");

const weatherIcon = document.querySelector(".weather-icon");


async function getWeather(cityName){

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    if(data.cod == "404"){

    alert("City not found");

    return;
}

    console.log(data);

    temp.innerHTML = `${Math.round(data.main.temp)}°C`;

    city.innerHTML = data.name;

    weather.innerHTML = data.weather[0].main;

    humidityValue.innerHTML = `${data.main.humidity}%`;

    windSpeed.innerHTML = `${data.wind.speed} km/h`;

    const iconCode = data.weather[0].icon;

    weatherIcon.src =
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}


searchBtn.addEventListener("click", ()=>{

    getWeather(cityInput.value);

});

cityInput.addEventListener("keypress",(event)=>{

    if(event.key === "Enter"){
        getWeather(cityInput.value);
    }

});