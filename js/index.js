var city = document.getElementById("city");
var condition = document.getElementById("condition");
var tempr = document.getElementById("temp");
var btn = document.getElementById("subBtn");
var input = document.getElementById("txtInput");
var apiKey = "5f050a054b4fed3f9cf564d3f95ad6d6";

// function getWeather() {
//     fetch("api.openweathermap.org/data/2.5/weather?q="+ input.value + "&appid="+ apiKey);
//     .then(result => result.json());
//     .then(data => console.log(data));
// }

btn.addEventListener("click",  function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+input.value+"&appid="+apiKey)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
        var cityName = data['name']
        var tempreture = data['main']['temp']
        var description = data['weather']['0']['description']

        city.innerHTML = `Name: ${cityName}`
        condition.innerHTML = `Condition: ${description}`
        tempr.innerHTML = `Tempreture: ${tempreture}`
    })
    .catch(err => alert("Plz Enter Corect City Name..."))

})

