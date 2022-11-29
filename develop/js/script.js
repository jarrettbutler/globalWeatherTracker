$(document).ready(function(){
var cityListEl = $('#city-list');
var searchEl = $('.form-control')
var dateEl = $('date')
var cityNameEl = $('.city-name')
var tempEl = $('.temperature')
var windEl = $('.windSpeed')
var humidityEl = $('.humidity')
var iconEl = $('.icon')

const apikey = '6596a16fd7478288a7389a02b29495ec'
const cityurl = `https://api.openweathermap.org/data/2.5/forecast?q=${'key'}&appid=${apikey}&units=metric`;

setInterval(function(){
    var today = dayjs().month(10);
    $('.time').text(today);
    },1000)

    $('.btn').on('click', function(){
        var value = $(this).siblings(searchEl).val();
        localStorage.setItem('key', value);
    });


    fetch(cityurl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        console.log(data.list[0].weather[0].icon);
        cityNameEl.append(data.city.name)
        iconEl.append(src = `http://openweathermap.org/img/wn/10d@2x.png`)
        tempEl.append(data.list[0].main.temp + ' °C')
        windEl.append(data.list[0].wind.speed + ' m/s')
        humidityEl.append(data.list[0].main.humidity + 'kg m⁻³')
    })
})