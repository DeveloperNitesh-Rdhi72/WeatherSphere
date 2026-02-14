const btn = document.querySelector(".search-btn");
const city = document.querySelector(".city")
const img1 = document.querySelector(".img1");
const deg1 = document.querySelector(".degree");
const weather_discription = document.querySelector("#weather-dis");
const humid_percent = document.querySelector("#humid-percent");
const wind_speed = document.querySelector("#wind-speed");
const otherCountry_temp = document.querySelector(".temp");
const otherCountry_discription = document.querySelector(".dis");
const img2 = document.querySelector("#weatherimg")
let cName = document.querySelector(".c-Name");

async function showOtherContryWeather(countryName) {
    const api_key = "c5598975f0200b31f45513e53450a1a1 ";
    const weather_api_url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${api_key}`
    const weather_data = await fetch(`${weather_api_url}`).then(response => response.json());

    otherCountry_temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}&deg;C`;
    otherCountry_discription.innerHTML = `${weather_data.weather[0].main}`;


    if (otherCountry_discription.innerHTML == "Clouds" || otherCountry_discription.innerHTML == "Cloudy" || otherCountry_discription.innerHTML == "Partly Cloudy" || otherCountry_discription.innerHTML == "Overcast") {
        img2.src = "assets/clouds.gif"
    }
    else if (otherCountry_discription.innerHTML == "Haze") {
        img2.src = "assets/haze.png"
    }
    else if (otherCountry_discription.innerHTML == "Smoke") {
        img2.src = "assets/smoke.png"
    }
    else if (otherCountry_discription.innerHTML == "Snow" || weather_discription.innerHTML == "Snowy") {
        img2.src = "assets/snowflake.gif"
    }
    else if (otherCountry_discription.innerHTML == "Sunny") {
        img2.src = "assets/sun.gif"
    }
    else if (otherCountry_discription.innerHTML == "Rainy") {
        img2.src = "assets/rain.gif"
    }
    else if (otherCountry_discription.innerHTML == "Fogg" || weather_discription.innerHTML == "Foggy") {
        img2.src = "assets/foggy-day.gif"
    }
    else if (otherCountry_discription.innerHTML == "Wind" || weather_discription.innerHTML == "Windy") {
        img2.src = "assets/wind.gif"
    }
    else if (otherCountry_discription.innerHTML == "Thunderstorms") {
        img2.src = "assets/thundrstrom.gif"
    }
    else if (otherCountry_discription.innerHTML == "Mist") {
        img2.src = "assets/mist.png"
    }
    else {
        img2.src = "assets/sun.gif"
    }
}

showOtherContryWeather("delhi")

async function showWeather(city) {
    const api_key = "c5598975f0200b31f45513e53450a1a1 ";
    const weather_api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    img1.src = "assets/loading.gif"
    let weather_data;
    try {
        const response = await fetch(`${weather_api_url}`);

        if (!response.ok) {
            throw new error("city not found")
        }
        weather_data = await response.json();
        deg1.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}&deg;C`
        weather_discription.innerHTML = weather_data.weather[0].main;
        // console.log(weather_data);
        humid_percent.innerHTML = `${weather_data.main.humidity}%`
        wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`
        cName.innerHTML = weather_data.name;

        if (weather_discription.innerHTML == "Clouds" || weather_discription.innerHTML == "Cloudy" || weather_discription.innerHTML == "Partly Cloudy" || weather_discription.innerHTML == "Overcast") {
            img1.src = "assets/clouds.gif"
        }
        else if (weather_discription.innerHTML == "Haze") {
            img1.src = "assets/haze.png"
        }
        else if (weather_discription.innerHTML == "Smoke") {
            img1.src = "assets/smoke.png"
        }
        else if (weather_discription.innerHTML == "Snow" || weather_discription.innerHTML == "Snowy") {
            img1.src = "assets/snowflake.gif"
        }
        else if (weather_discription.innerHTML == "Sunny") {
            img1.src = "assets/sun.gif"
        }
        else if (weather_discription.innerHTML == "Rainy") {
            img1.src = "assets/rain.gif"
        }
        else if (weather_discription.innerHTML == "Fogg" || weather_discription.innerHTML == "Foggy") {
            img1.src = "assets/foggy-day.gif"
        }
        else if (weather_discription.innerHTML == "Wind" || weather_discription.innerHTML == "Windy") {
            img1.src = "assets/wind.gif"
        }
        else if (weather_discription.innerHTML == "Thunderstorms") {
            img1.src = "assets/thundrstrom.gif"
        }
        else if (weather_discription.innerHTML == "Mist") {
            img1.src = "assets/mist.png"
        }
        else {
            img1.src = "assets/sun.gif"
        }
    } catch (error) {
        alert("city not found")
        if (weather_discription.innerHTML == "Clouds" || weather_discription.innerHTML == "Cloudy" || weather_discription.innerHTML == "Partly Cloudy" || weather_discription.innerHTML == "Overcast") {
            img1.src = "assets/clouds.gif"
        }
        else if (weather_discription.innerHTML == "Haze") {
            img1.src = "assets/haze.png"
        }
        else if (weather_discription.innerHTML == "Smoke") {
            img1.src = "assets/smoke.png"
        }
        else if (weather_discription.innerHTML == "Snow" || weather_discription.innerHTML == "Snowy") {
            img1.src = "assets/snowflake.gif"
        }
        else if (weather_discription.innerHTML == "Sunny") {
            img1.src = "assets/sun.gif"
        }
        else if (weather_discription.innerHTML == "Rainy") {
            img1.src = "assets/rain.gif"
        }
        else if (weather_discription.innerHTML == "Fogg" || weather_discription.innerHTML == "Foggy") {
            img1.src = "assets/foggy-day.gif"
        }
        else if (weather_discription.innerHTML == "Wind" || weather_discription.innerHTML == "Windy") {
            img1.src = "assets/wind.gif"
        }
        else if (weather_discription.innerHTML == "Thunderstorms") {
            img1.src = "assets/thundrstrom.gif"
        }
        else if (weather_discription.innerHTML == "Mist") {
            img1.src = "assets/mist.png"
        }
        else {
            img1.src = "assets/sun.gif"
        }
    }
}

showWeather("lucknow")

btn.addEventListener("click", () => {
    if (city.value == "") {
        alert("please enter the contry name!!")
    }
    else {
        showWeather(city.value)
        setTimeout(() => {
            city.value = ""
        }, 1000)
    }
})

window.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        if (city.value == "") {
            alert("please enter the contry name!!")
        }
        else {
            showWeather(city.value)
            setTimeout(() => {
                city.value = ""
            }, 1000)
        }
    }

})


let windowlength = window.outerWidth;
let v1 = document.querySelector("#v1");
let v2 = document.querySelector("#v2");

if (windowlength > 500) {
    v1.classList.remove("video-hide");
    v2.classList.add("video-hide")
}
else {
    v1.classList.add("video-hide");
    v2.classList.remove("video-hide")
}
