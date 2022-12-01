$(document).ready(function () {
    var cityListEl = document.getElementById('city-list');
    var searchEl = $('.form-control')
    var timeEl = $('.time')
    var date1El = document.getElementById('date1')
    var date2El = document.getElementById('date2')
    var date3El = document.getElementById('date3')
    var date4El = document.getElementById('date4')
    var date5El = document.getElementById('date5')
    var cityNameEl = document.getElementById('city-name')
    var tempEl = document.getElementById('temperature')
    var temp1El = document.getElementById('temperature1')
    var temp2El = document.getElementById('temperature2')
    var temp3El = document.getElementById('temperature3')
    var temp4El = document.getElementById('temperature4')
    var temp5El = document.getElementById('temperature5')
    var windEl = document.getElementById('windSpeed')
    var wind1El = document.getElementById('windSpeed1')
    var wind2El = document.getElementById('windSpeed2')
    var wind3El = document.getElementById('windSpeed3')
    var wind4El = document.getElementById('windSpeed4')
    var wind5El = document.getElementById('windSpeed5')
    var humidityEl = document.getElementById('humidity')
    var humidity1El = document.getElementById('humidity1')
    var humidity2El = document.getElementById('humidity2')
    var humidity3El = document.getElementById('humidity3')
    var humidity4El = document.getElementById('humidity4')
    var humidity5El = document.getElementById('humidity5')
    let formInput = document.getElementById("formInput");
    let previouslySearchedList = document.getElementById("city-list");

    //Clock set to Zulu time for uniformity and no confusion of time zone
    setInterval(function () {
        var today = dayjs().month(10);
        $('.time').text(today);
    }, 1000)


    //On click the input is put into the local storage and a button for it is added, the two problems I'm having is when something is searched or clicked then it just adds the values
    //It doesn't remove the previous values as well it won't save the buttons if you reload the page
    $('.btn').on('click', function (e) {
        e.preventDefault();
        var value = $(this).siblings(searchEl).val();
        var option = JSON.parse(localStorage.getItem('key'))
        //This is when it shows from the search bar as well the api I used shows weather in 3 hour increments, I wanted to create a for loop for this but it wouldn't work for me
        const apikey = '6596a16fd7478288a7389a02b29495ec'
        const cityurl = `https://api.openweathermap.org/data/2.5/forecast?q=${document.getElementById("formInput").value}&appid=${apikey}&units=metric`;
        fetch(cityurl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                cityNameEl.textContent = data.city.name
                document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
                tempEl.textContent = 'Temperature: ' + data.list[0].main.temp + ' °C'
                windEl.textContent = 'Wind Speed: ' + data.list[0].wind.speed + ' m/s'
                humidityEl.textContent = 'Humidity: ' + data.list[0].main.humidity + 'kg m⁻³'

                date1El.textContent = data.list[4].dt_txt
                document.querySelector('.icon1').src = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`
                temp1El.textContent = 'Temperature: ' + data.list[4].main.temp + ' °C'
                wind1El.textContent = 'Wind data: ' + data.list[4].wind.speed + ' m/s'
                humidity1El.textContent = 'Humidity: ' + data.list[4].main.humidity + 'kg m⁻³'

                date2El.textContent = data.list[12].dt_txt
                document.querySelector('.icon2').src = `https://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`
                temp2El.textContent = 'Temperature: ' + data.list[12].main.temp + ' °C'
                wind2El.textContent = 'Wind Speed: ' + data.list[12].wind.speed + ' m/s'
                humidity2El.textContent = 'Humidity: ' + data.list[12].main.humidity + 'kg m⁻³'

                date3El.textContent = data.list[20].dt_txt
                document.querySelector('.icon3').src = `https://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`
                temp3El.textContent = 'Temperature: ' + data.list[20].main.temp + ' °C'
                wind3El.textContent = 'Wind Speed: ' + data.list[20].wind.speed + ' m/s'
                humidity3El.textContent = 'Humidity: ' + data.list[20].main.humidity + 'kg m⁻³'

                date4El.textContent = data.list[28].dt_txt
                document.querySelector('.icon4').src = `https://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`
                temp4El.textContent = 'Temperature: ' + data.list[28].main.temp + ' °C'
                wind4El.textContent = 'Wind Speed: ' + data.list[28].wind.speed + ' m/s'
                humidity4El.textContent = 'Humidity: ' + data.list[28].main.humidity + 'kg m⁻³'

                date5El.textContent = data.list[36].dt_txt
                document.querySelector('.icon5').src = `https://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`
                temp5El.textContent = 'Temperature: ' + data.list[36].main.temp + ' °C'
                wind5El.textContent = 'Wind Speed: ' + data.list[36].wind.speed + ' m/s'
                humidity5El.textContent = 'Humidity: ' + data.list[36].main.humidity + 'kg m⁻³'
            })
        
        if (option == null) {
            var option2 = [value];
        } else {
            var option2 = [...option, value];
        }
        localStorage.setItem('key', JSON.stringify(option2)); ``
        formInput.value = "";
        const newLi = document.createElement("li");
        const cityurl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${apikey}&units=metric`;
        const newButton = (tag, prop) => Object.assign(document.createElement(tag), prop);
        const El_btn = newButton("button", {
            textContent: value,
            //When the button is clicked the information from the API displays
            onclick() {
                fetch(cityurl2)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {

                        cityNameEl.textContent = data.city.name
                document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
                tempEl.textContent = 'Temperature: ' + data.list[0].main.temp + ' °C'
                windEl.textContent = 'Wind Speed: ' + data.list[0].wind.speed + ' m/s'
                humidityEl.textContent = 'Humidity: ' + data.list[0].main.humidity + 'kg m⁻³'

                date1El.textContent = data.list[4].dt_txt
                document.querySelector('.icon1').src = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`
                temp1El.textContent = 'Temperature: ' + data.list[4].main.temp + ' °C'
                wind1El.textContent = 'Wind data: ' + data.list[4].wind.speed + ' m/s'
                humidity1El.textContent = 'Humidity: ' + data.list[4].main.humidity + 'kg m⁻³'

                date2El.textContent = data.list[12].dt_txt
                document.querySelector('.icon2').src = `https://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`
                temp2El.textContent = 'Temperature: ' + data.list[12].main.temp + ' °C'
                wind2El.textContent = 'Wind Speed: ' + data.list[12].wind.speed + ' m/s'
                humidity2El.textContent = 'Humidity: ' + data.list[12].main.humidity + 'kg m⁻³'

                date3El.textContent = data.list[20].dt_txt
                document.querySelector('.icon3').src = `https://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`
                temp3El.textContent = 'Temperature: ' + data.list[20].main.temp + ' °C'
                wind3El.textContent = 'Wind Speed: ' + data.list[20].wind.speed + ' m/s'
                humidity3El.textContent = 'Humidity: ' + data.list[20].main.humidity + 'kg m⁻³'

                date4El.textContent = data.list[28].dt_txt
                document.querySelector('.icon4').src = `https://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`
                temp4El.textContent = 'Temperature: ' + data.list[28].main.temp + ' °C'
                wind4El.textContent = 'Wind Speed: ' + data.list[28].wind.speed + ' m/s'
                humidity4El.textContent = 'Humidity: ' + data.list[28].main.humidity + 'kg m⁻³'

                date5El.textContent = data.list[36].dt_txt
                document.querySelector('.icon5').src = `https://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`
                temp5El.textContent = 'Temperature: ' + data.list[36].main.temp + ' °C'
                wind5El.textContent = 'Wind Speed: ' + data.list[36].wind.speed + ' m/s'
                humidity5El.textContent = 'Humidity: ' + data.list[36].main.humidity + 'kg m⁻³'
                    })
            }
        });

        newLi.appendChild(El_btn);
        previouslySearchedList.appendChild(newLi);
    });

})

//on window.addeventlistenre('load', function(){})
// Functions I got from the ask BCS person I need to figure out a way into integrate them
// function initSearchHistory() {}

//function renderSearchHistory() {}