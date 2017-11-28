var interval;

function start() {
    var time = $("#disp-time").text();
    var minutes = time.substr(0,time.indexOf(':'));
    var seconds = time.substr(time.indexOf(':') + 1,time.length);
    interval = setInterval(function() {
        if(seconds == 0 && minutes > 0) {
            minutes--;
            seconds = 59;
        } else if(minutes >= 0 && seconds > 0){
            seconds--;
        } else {
            $("body").css("background-color","red");
            clearInterval(interval);
        }
        $("#disp-time").text(minutes + ":" + seconds);
    },1000);
}
function refresh() {
    clearInterval(interval);
    $("body").css("background-color","#003366");
    $("#disp-time").text("10:00");
}
function stop() {
    clearInterval(interval);
}
$(document).ready(function() {
    $("#btn-start").on("click",function() {
        start();
    });
    $("#btn-stop").on("click",function() {
        stop();
    });
    $("#btn-refresh").on("click",function() {
        refresh();
    });
});
//Interval stuff
//https://stackoverflow.com/questions/20745790/how-can-i-call-clearinterval-outside-of-a-function-in-jquery-outside-the-setint