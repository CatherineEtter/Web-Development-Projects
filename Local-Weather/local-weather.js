$(document).ready(function() {
    getLocation();
    $("#temperature").on("click", function() {
        switchTemp();
    });
});
function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayData);
    } else {
        alert("Geolocation not supported!");
    }
}
function displayData(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var urlString = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
    
    $.ajax({
        url: urlString, success: function(data) {
            $("#location").text(data.name + ", " + data.sys.country);
            $("#icon").attr("src",data.weather[0].icon);
            $("#temperature").text(data.main.temp);
            $("#measurement").text("°C");
            $("#description").text(data.weather[0].description);
            $("#humidity").text(data.main.humidity + "% humidity");
        }
    });
}
function switchTemp() {
    var text = $("#temperature").text();
    var num = parseFloat(text);
    var conversion;
    
    if($("#measurement").text() == "°C") {
        conversion = num * (9/5) + 32;
        $("#temperature").text(conversion.toFixed(2));
        $("#measurement").text("°F");
    } else {
        conversion = (num - 32) * (5/9);
        $("#temperature").text(conversion.toFixed(2));
        $("#measurement").text("°C");
    }
}