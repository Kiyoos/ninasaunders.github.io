var weatherRequest=new XMLHttpRequest,apiURLpreston="https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=cc37759cf1ea1a86889a1de5b1352725";weatherRequest.open("GET",apiURLpreston,!0);weatherRequest.send();
weatherRequest.onload=function(){var a=JSON.parse(weatherRequest.responseText);console.log(a);document.getElementById("cur-temp").innerHTML=a.main.temp;var b="https://openweathermap.org/img/w/"+a.weather[0].icon+".png",c=a.weather[0].description;document.getElementById("cur-img").setAttribute("src",b);document.getElementById("cur-img").setAttribute("alt",c);document.getElementById("condition").innerHTML=a.weather[0].main;document.getElementById("temp").innerHTML=a.main.temp;document.getElementById("humidity").innerHTML=
a.main.humidity;document.getElementById("windspeed").innerHTML=a.wind.speed;b=a.main.temp;a=a.wind.speed;a=35.74+.6215*b-35.75*Math.pow(a,.16)+.4275*b*Math.pow(a,.16);document.getElementById("windchill").innerHTML=a.toFixed(1)};