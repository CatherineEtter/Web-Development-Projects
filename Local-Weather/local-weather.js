$(document).ready(function() {
    randBackground();
    getLocation();
    $("#temperature").on("click", function() {
        switchTemp();
    });
});
function randBackground() {
    var images = ["earth1.jpg","earth2.jpg","earth3.jpg","earth4.jpg","earth5.jpg"];
    var randNum = Math.floor(Math.random()*images.length);
    
    $("#content-wrapper").css({'background':'url(images/'+images[randNum]+') no-repeat center center fixed','background-size' : 'cover'});
}
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