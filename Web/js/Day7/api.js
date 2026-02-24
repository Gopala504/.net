fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })

    .catch(error => {
        console.log("Error:", error)
    })