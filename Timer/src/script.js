var interval;

//Gets current time and counts down until 0
function start() {
    var time = $("#disp-time").text();
    var minutes = time.substr(0,time.indexOf(':'));
    var seconds = time.substr(time.indexOf(':') + 1,time.length);
    interval = setInterval(function() {
        if(minutes == 0 && seconds == 1) { //Time's up
            $("body").css("background-color","red");
            seconds--;
            clearInterval(interval);
        } else if(minutes > 0 && seconds == 0) {
            minutes--;
            seconds = 59;
        } else if(seconds > 0){
            seconds--;
        }
        $("#disp-time").text(minutes + ":" + (seconds < 10 ? '0' + seconds : seconds));
    },1000);
}
//Stops countdown and resets time
function refresh() {
    clearInterval(interval);
    $("body").css("background-color","#003366");
    $("#disp-time").text("10:00");
}
//Stops countdown
function stop() {
    clearInterval(interval);
}
$(document).ready(function() {
    refresh();
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