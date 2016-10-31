$(document).ready(function() {
    var ip = returnCitySN["cip"];
    var httpRequest = "https://api.heweather.com/x3/weather?cityip=" + ip + "&key=e2589cc3b44644679cbf74b72aafa0b9";
    $.getJSON(httpRequest, function(json) {
        var city = json["HeWeather data service 3.0"][0]["basic"]["city"];
        var country = json["HeWeather data service 3.0"][0]["basic"]["cnty"];
        var weather = json["HeWeather data service 3.0"][0]["now"]["cond"]["txt"];
        var temp = json["HeWeather data service 3.0"][0]["now"]["tmp"];
        $(".loc").html(city + "," + country);
        $(".temp").html(temp + "&#8451");
        $(".weather").html(weather);
        var dailyForecast = json["HeWeather data service 3.0"][0]["daily_forecast"];
        var htmlStr = "";
        for (var i = 0; i < dailyForecast.length; i++) {
            htmlStr += "<li class='forecast-ul-li'>";
            htmlStr += "<ul class='forecast-ul-li-ul'>"
            htmlStr += "<li class='forecast-ul-li-ul-li'>" + dailyForecast[i]["date"] + "</li>";
            htmlStr += "<li class='forecast-ul-li-ul-li'>" + dailyForecast[i]["tmp"]["max"] + "-" + dailyForecast[i]["tmp"]["min"] + "</li>";
            htmlStr += "<li class='forecast-ul-li-ul-li'>" + dailyForecast[i]["cond"]["txt_d"] + "-" + dailyForecast[i]["cond"]["txt_n"] + "</li>";
            htmlStr += "</ul></li>";
            $(".forecast-ul").html(htmlStr);
        }

    });
});
