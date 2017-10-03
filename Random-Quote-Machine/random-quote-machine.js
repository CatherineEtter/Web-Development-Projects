function changeQuote() {
    $.getJSON("quotes.JSON", function(json) {
        $("#quote").text(json[0].quote);
        $("#author").text(json[0].author);
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