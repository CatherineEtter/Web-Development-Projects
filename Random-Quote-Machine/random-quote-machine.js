function changeQuote() {
    $.getJSON("https://raw.githubusercontent.com/CatherineEtter/Web-Development-Projects/master/Random-Quote-Machine/quotes.JSON", function(json) {
        var count = Object.keys(json).length;
        var rand = Math.floor(Math.random() * (count + 1))
        $("#quote").text(json[rand].quote);
        $("#author").text(json[rand].author);
   });
}
$(document).ready(function() {
    changeQuote();
    
    $("#get-quote").on("click",function() {
        changeQuote();
    });
    /*
   $.getJSON("quotes.JSON", function(json) {
       $("#quote").text(json[0].quote);
   });
   */
});