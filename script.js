
const apiKey = "a286d8313d08438fa8351112260111";

function getWeather() {

    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.error) {
                alert("City not found!");
                return;
            }

            document.getElementById("cityName").innerText =
                data.location.name;

            document.getElementById("temperature").innerText =
                data.current.temp_c + "°C";

            document.getElementById("description").innerText =
                data.current.condition.text;

            document.getElementById("humidity").innerText =
                data.current.humidity + "%";

            document.getElementById("wind").innerText =
                data.current.wind_kph + " km/h";

        })
        .catch(error => {
            alert("Something went wrong!");
            console.log(error);
        });
}

;