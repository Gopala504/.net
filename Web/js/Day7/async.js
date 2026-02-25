

const apiKey = "9f7e5bbf69a831336e1ec9384d9f15db";

const getWeatherPromise = () => {

    const city = document.getElementById("cityInput").value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {

            if (!response.ok) {
                throw new Error("City not found!");
            }

            return response.json();
        })
        .then(data => {

            const report = `
                <h3>Weather in ${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;

            document.getElementById("weatherResult").innerHTML = report;
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = 
                `<p style="color:red;">${error.message}</p>`;
        });
};
const getWeatherAsync = async () => {

    try {

        const city = document.getElementById("cityInput").value;

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found!");
        }

        const data = await response.json();

        const report = `
            <h3>Weather in ${data.name}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;

        document.getElementById("weatherResult").innerHTML = report;

    } catch (error) {

        document.getElementById("weatherResult").innerHTML =
            `<p style="color:red;">${error.message}</p>`;
    }
};