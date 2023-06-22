let getWeather = function (event) {

    event.preventDefault()


    let cityName = document.querySelector("#cityName").value;

    let API_Key = 'ec052b1e3e9dccbb8f4211c7bfb4e20c';

    let now = moment().format('dddd MMMM Do hh:mm A'); 


    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=metric`)
        .then(function (response) {
            // handle success
            console.log(response.data);
            document.querySelector("#temp").innerHTML = `${Math.round(response.data.main.temp)} °C`
            document.querySelector("#humadity_num").innerHTML = `${response.data.main.humidity} %`
            document.querySelector("#winds_num").innerHTML = `${response.data.wind.speed} km/h`
            document.querySelector("#cloud_num").innerHTML = `${response.data.clouds.all} %`
            document.querySelector("#city_title").innerHTML = `${response.data.name}`
            document.querySelector("#now").innerHTML = `${now}`
            document.querySelector("#temp_type").innerHTML = `${response.data.weather[0].main}`
        })
        .catch(function (error) {
            // handle error
            console.log(error.data);
            document.querySelector("#result").innerHTML = "error in getting weather data"
        })

}