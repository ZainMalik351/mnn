const apikey = "cc7b839f4b01816f482ac181a69bcec9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const value = document.querySelector(".box input");
const search = document.querySelector(".btn");
const rainy = document.querySelector(".rainy");
const img2 = document.querySelector(".img")
const weathericon = document.getElementById("weathericon");
const flag = document.getElementById("flag");
const description = document.querySelector(".cloudy")

search.addEventListener("click", ()=>{
    if(value.value != ""){
        console.log(value.value);
    }
})


async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".location").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".windspeed-value").innerHTML =data.wind.speed + "M/S";
    document.querySelector(".humidity-value").innerHTML =data.main.humidity + "%" ;
    document.querySelector(".cloudy").innerHTML = data.weather[0].description;
    flag.querySelector("img").src = 'http://flagsapi.com/'+data.sys.country+'/shiny/32.png';
   weathericon.querySelector("img").src = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
   
   
}
    
search.addEventListener("click" , function(){
    checkWeather(value.value);

  fivedaysweatherforcast(value.value);
})
// ====display date and time====
let d = new Date();
const date = document.querySelector(".date-time").innerHTML = d.toDateString()



