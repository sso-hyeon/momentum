const API_KEY = "3459d3dc26c89178443519f7030ecb86";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector(".weather");
            const weatherIcon = document.querySelector(".weather-icon");
            const city = document.querySelector(".location");
            const tempMin = document.querySelector(".temp_min");
            const tempMax = document.querySelector(".temp_max");
            weather.innerText = data.weather[0].main;
            weatherIcon.src = "img/weather/" + data.weather[0].icon + ".png";
            city.innerText = data.name;
            tempMin.innerText = Math.floor(data.main.temp_min) + "°C";
            tempMax.innerText = Math.floor(data.main.temp_max) + "°C";
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
