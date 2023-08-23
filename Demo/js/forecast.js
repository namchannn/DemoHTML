async function forecast() {
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
    var data = await fetch(url);
    data = await data.json();
    var list = data.list;
    list.forEach(e => {
        var time = e.dt_txt;
        var temp = e.main.temp;
        var desc = e.weather[0].description;
        var icon = e.weather[0].icon;

        var li_html = `<div class="col-3">
                        <div class="card temp mt-3 mb-3">
                            <div class="card-body">
                                <p>${time}</p>
                                <h2>${temp}<sup>o</sup></h2>
                                <p>${desc}</p>
                                <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="">
                            </div>
                        </div>
                    </div>`;
        document.getElementById("list").innerHTML += li_html;
    });
}

forecast();