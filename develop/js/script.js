$(document).ready(function () {
    var cityListEl = $('#city-list');
    var searchEl = $('.form-control')
    var timeEl = $('.time')
    var date1El = $('.date1')
    var date2El = $('.date2')
    var date3El = $('.date3')
    var date4El = $('.date4')
    var date5El = $('.date5')
    var cityNameEl = $('.city-name')
    var tempEl = $('.temperature')
    var temp1El = $('.temperature1')
    var temp2El = $('.temperature2')
    var temp3El = $('.temperature3')
    var temp4El = $('.temperature4')
    var temp5El = $('.temperature5')
    var windEl = $('.windSpeed')
    var wind1El = $('.windSpeed1')
    var wind2El = $('.windSpeed2')
    var wind3El = $('.windSpeed3')
    var wind4El = $('.windSpeed4')
    var wind5El = $('.windSpeed5')
    var humidityEl = $('.humidity')
    var humidity1El = $('.humidity1')
    var humidity2El = $('.humidity2')
    var humidity3El = $('.humidity3')
    var humidity4El = $('.humidity4')
    var humidity5El = $('.humidity5')
    let formInput = document.getElementById("formInput");
    let previouslySearchedList = document.getElementById("city-list");

    const apikey = '6596a16fd7478288a7389a02b29495ec'
    const cityurl = `https://api.openweathermap.org/data/2.5/forecast?q=${document.getElementById("formInput").value}&appid=${apikey}&units=metric`;
    console.log(cityurl)

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
        //This is when it shows from the search bar as well the api I used shows weather in 3 hour increments 
        const apikey = '6596a16fd7478288a7389a02b29495ec'
        const cityurl = `https://api.openweathermap.org/data/2.5/forecast?q=${document.getElementById("formInput").value}&appid=${apikey}&units=metric`;
        fetch(cityurl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                cityNameEl.append(data.city.name)
                document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
                tempEl.append(data.list[0].main.temp + ' °C')
                windEl.append(data.list[0].wind.speed + ' m/s')
                humidityEl.append(data.list[0].main.humidity + 'kg m⁻³')

                date1El.append(data.list[4].dt_txt)
                document.querySelector('.icon1').src = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`
                temp1El.append(data.list[4].main.temp + ' °C')
                wind1El.append(data.list[4].wind.speed + ' m/s')
                humidity1El.append(data.list[4].main.humidity + 'kg m⁻³')

                date2El.append(data.list[12].dt_txt)
                document.querySelector('.icon2').src = `https://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`
                temp2El.append(data.list[12].main.temp + ' °C')
                wind2El.append(data.list[12].wind.speed + ' m/s')
                humidity2El.append(data.list[12].main.humidity + 'kg m⁻³')

                date3El.append(data.list[20].dt_txt)
                document.querySelector('.icon3').src = `https://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`
                temp3El.append(data.list[20].main.temp + ' °C')
                wind3El.append(data.list[20].wind.speed + ' m/s')
                humidity3El.append(data.list[20].main.humidity + 'kg m⁻³')

                date4El.append(data.list[28].dt_txt)
                document.querySelector('.icon4').src = `https://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`
                temp4El.append(data.list[28].main.temp + ' °C')
                wind4El.append(data.list[28].wind.speed + ' m/s')
                humidity4El.append(data.list[28].main.humidity + 'kg m⁻³')

                date5El.append(data.list[36].dt_txt)
                document.querySelector('.icon5').src = `https://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`
                temp5El.append(data.list[36].main.temp + ' °C')
                wind5El.append(data.list[36].wind.speed + ' m/s')
                humidity5El.append(data.list[36].main.humidity + 'kg m⁻³')
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

                        cityNameEl.append(data.city.name)
                        document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
                        tempEl.append(data.list[0].main.temp + ' °C')
                        windEl.append(data.list[0].wind.speed + ' m/s')
                        humidityEl.append(data.list[0].main.humidity + 'kg m⁻³')

                        date1El.append(data.list[4].dt_txt)
                        document.querySelector('.icon1').src = `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`
                        temp1El.append(data.list[4].main.temp + ' °C')
                        wind1El.append(data.list[4].wind.speed + ' m/s')
                        humidity1El.append(data.list[4].main.humidity + 'kg m⁻³')

                        date2El.append(data.list[12].dt_txt)
                        document.querySelector('.icon2').src = `http://openweathermap.org/img/wn/${data.list[12].weather[0].icon}@2x.png`
                        temp2El.append(data.list[12].main.temp + ' °C')
                        wind2El.append(data.list[12].wind.speed + ' m/s')
                        humidity2El.append(data.list[12].main.humidity + 'kg m⁻³')

                        date3El.append(data.list[20].dt_txt)
                        document.querySelector('.icon3').src = `http://openweathermap.org/img/wn/${data.list[20].weather[0].icon}@2x.png`
                        temp3El.append(data.list[20].main.temp + ' °C')
                        wind3El.append(data.list[20].wind.speed + ' m/s')
                        humidity3El.append(data.list[20].main.humidity + 'kg m⁻³')

                        date4El.append(data.list[28].dt_txt)
                        document.querySelector('.icon4').src = `http://openweathermap.org/img/wn/${data.list[28].weather[0].icon}@2x.png`
                        temp4El.append(data.list[28].main.temp + ' °C')
                        wind4El.append(data.list[28].wind.speed + ' m/s')
                        humidity4El.append(data.list[28].main.humidity + 'kg m⁻³')

                        date5El.append(data.list[36].dt_txt)
                        document.querySelector('.icon5').src = `http://openweathermap.org/img/wn/${data.list[36].weather[0].icon}@2x.png`
                        temp5El.append(data.list[36].main.temp + ' °C')
                        wind5El.append(data.list[36].wind.speed + ' m/s')
                        humidity5El.append(data.list[36].main.humidity + 'kg m⁻³')
                    })
            }
        });

        newLi.appendChild(El_btn);
        previouslySearchedList.appendChild(newLi);
    });

})
