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
    var iconEl = $('.icon')
    var icon1El = $('.icon1')
    var icon2El = $('.icon2')
    var icon3El = $('.icon3')
    var icon4El = $('.icon4')
    var icon5El = $('.icon5')
    let formInput = document.getElementById("formInput");
    let previouslySearchedList = document.getElementById("city-list");

    const apikey = '6596a16fd7478288a7389a02b29495ec'
    // const cityurl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchEl.value}&appid=${apikey}&units=metric`;

    //Clock set to Zulu time for uniformity and no confusion of time zone
    setInterval(function () {
        var today = dayjs().month(10);
        $('.time').text(today);
    }, 1000)


    //On click the input is put into the local storage and a button for it is added
    $('.btn').on('click', function (e) {
        e.preventDefault();
        var value = $(this).siblings(searchEl).val();
        var option = JSON.parse(localStorage.getItem('key'))
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
            //On click this is supossed to run it again and will display the element
            onclick() {
                fetch(cityurl2)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {

                        cityNameEl.append(data.city.name)
                        iconEl.append(src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`)
                        tempEl.append(data.list[0].main.temp + ' °C')
                        windEl.append(data.list[0].wind.speed + ' m/s')
                        humidityEl.append(data.list[0].main.humidity + 'kg m⁻³')

                        date1El.append(data.list[4].dt_txt)
                        var icon1 = (data.list[4].weather[0].icon)
                        icon1El.append(src = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png")
                        temp1El.append(data.list[4].main.temp + ' °C')
                        wind1El.append(data.list[4].wind.speed + ' m/s')
                        humidity1El.append(data.list[4].main.humidity + 'kg m⁻³')

                        date2El.append(data.list[12].dt_txt)
                        icon2El.append(src = `http://openweathermap.org/img/wn/${data.list[2].main[0]}@2x.png`)
                        temp2El.append(data.list[12].main.temp + ' °C')
                        wind2El.append(data.list[12].wind.speed + ' m/s')
                        humidity2El.append(data.list[12].main.humidity + 'kg m⁻³')

                        date3El.append(data.list[20].dt_txt)
                        icon3El.append(src = `http://openweathermap.org/img/wn/${data.list[3].main[0]}@2x.png`)
                        temp3El.append(data.list[20].main.temp + ' °C')
                        wind3El.append(data.list[20].wind.speed + ' m/s')
                        humidity3El.append(data.list[20].main.humidity + 'kg m⁻³')

                        date4El.append(data.list[28].dt_txt)
                        icon4El.append(src = `http://openweathermap.org/img/wn/${data.list[4].main[0]}@2x.png`)
                        temp4El.append(data.list[28].main.temp + ' °C')
                        wind4El.append(data.list[28].wind.speed + ' m/s')
                        humidity4El.append(data.list[28].main.humidity + 'kg m⁻³')

                        date5El.append(data.list[36].dt_txt)
                        icon5El.append(src = `http://openweathermap.org/img/wn/${data.list[5].main[0]}@2x.png`)
                        temp5El.append(data.list[36].main.temp + ' °C')
                        wind5El.append(data.list[36].wind.speed + ' m/s')
                        humidity5El.append(data.list[36].main.humidity + 'kg m⁻³')
                    })
            }
        });

        newLi.appendChild(El_btn);
        previouslySearchedList.appendChild(newLi);
    });

    //This is the long way to get the information from the API and append it to my document. With more time I would've loved to create like a for loop IOT make the code samller and more dynamic.
    //I also couldn't figure out how to make the links show as the images IE if I console log the source and then open it from the webpage the image shows up
    //     fetch(cityurl)
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(data){

    //         cityNameEl.append(data.city.name)
    //         iconEl.append(src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`)
    //         tempEl.append(data.list[0].main.temp + ' °C')
    //         windEl.append(data.list[0].wind.speed + ' m/s')
    //         humidityEl.append(data.list[0].main.humidity + 'kg m⁻³')

    //         date1El.append(data.list[4].dt_txt)
    //         icon1El.append(src = `http://openweathermap.org/img/wn/${data.list[1].main[0]}@2x.png`)
    //         temp1El.append(data.list[4].main.temp + ' °C')
    //         wind1El.append(data.list[4].wind.speed + ' m/s')
    //         humidity1El.append(data.list[4].main.humidity + 'kg m⁻³') 

    //         date2El.append(data.list[12].dt_txt)
    //         icon2El.append(src = `http://openweathermap.org/img/wn/${data.list[2].main[0]}@2x.png`)
    //         temp2El.append(data.list[12].main.temp + ' °C')
    //         wind2El.append(data.list[12].wind.speed + ' m/s')
    //         humidity2El.append(data.list[12].main.humidity + 'kg m⁻³') 

    //         date3El.append(data.list[20].dt_txt)
    //         icon3El.append(src = `http://openweathermap.org/img/wn/${data.list[3].main[0]}@2x.png`)
    //         temp3El.append(data.list[20].main.temp + ' °C')
    //         wind3El.append(data.list[20].wind.speed + ' m/s')
    //         humidity3El.append(data.list[20].main.humidity + 'kg m⁻³')

    //         date4El.append(data.list[28].dt_txt)
    //         icon4El.append(src = `http://openweathermap.org/img/wn/${data.list[4].main[0]}@2x.png`)
    //         temp4El.append(data.list[28].main.temp + ' °C')
    //         wind4El.append(data.list[28].wind.speed + ' m/s')
    //         humidity4El.append(data.list[28].main.humidity + 'kg m⁻³')

    //         date5El.append(data.list[36].dt_txt)
    //         icon5El.append(src = `http://openweathermap.org/img/wn/${data.list[5].main[0]}@2x.png`)
    //         temp5El.append(data.list[36].main.temp + ' °C')
    //         wind5El.append(data.list[36].wind.speed + ' m/s')
    //         humidity5El.append(data.list[36].main.humidity + 'kg m⁻³')
    //     })
})
