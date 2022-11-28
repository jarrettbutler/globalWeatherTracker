$(document).ready(function(){
var cityListEl = $('#city-list');
var date = dayjs().day();
var todayEl = $('#today');
var searchEl = $('.form-control')


setInterval(function(){
    var today = dayjs().month(10);
    $('.time').text(today);
    },1000)
















})

