// async function getData() {
//     var data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`)
//     data = await data.json();

//     var ad = document.getElementById("add");
//     ad.innerText = data.name;
//     var cnt = document.getElementById("country");
//     cnt.innerText = data.sys.country;
//     var pnhietdo = document.getElementById("p-nhietdo");
//     pnhietdo.innerText = data.main.temp;
//     var papsuat = document.getElementById("p-apsuat");
//     papsuat.innerText = data.main.pressure;
//     var pdoam = document.getElementById("p-doam");
//     pdoam.innerText = data.main.humidity;
//     var pdesc = document.getElementById("p-desc");
//     pdesc.innerHTML = data.weather[0].description;
// }
// getData();

async function searchWeather() {
    var cityInput = document.getElementById("city-input").value;
    var data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`)
    data = await data.json();

    var ad = document.getElementById("add");
    ad.innerText = data.name;
    var cnt = document.getElementById("country");
    cnt.innerText = data.sys.country;
    var pnhietdo = document.getElementById("p-nhietdo");
    pnhietdo.innerText = data.main.temp;
    var papsuat = document.getElementById("p-apsuat");
    papsuat.innerText = data.main.pressure;
    var pdoam = document.getElementById("p-doam");
    pdoam.innerText = data.main.humidity;
    var pdesc = document.getElementById("p-desc");
    pdesc.innerHTML = data.weather[0].description;
}