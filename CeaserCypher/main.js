//fill selector
function fillSelection() {
    var dropDown = document.getElementById("selectKey");
    for (var i = 0; i <= 26; i ++) {
        var opt = document.createElement("option");
        opt.textContent = i;
        opt.value = i;
        dropDown.appendChild(opt);
    }
}
function runCipher(operation) {
    var text = getText();
    var key = parseInt(document.getElementById("selectKey").value);
    var newText = '';
    var charCode;
    
    //Check if user wants to keep case
    if(document.getElementById("caseSensitive").checked == false) {
        text = text.toLowerCase();
    }
    text = text.split('');
    //Edits value of key to support decryption
    if(operation == "decrypt") {
        key = 26 - key;
        if(key < 0) {
            key + 26;
        }
    }
    //The actual cipher
    if(text.length > 0) {
        for(var i = 0; i < text.length; i++) {
            charCode = text[i].charCodeAt(0);
            if((charCode <= 90 && charCode >= 65) || (charCode <= 122 && charCode >=97)) {
                charCode += key;
                //If unicode surpasses alphabetical values.
                if((charCode > 90 && charCode < (97+key)) || (charCode > 122)) {
                    charCode -= 26;
                }
            }
            text[i] = charCode;
        }
        //Convert unicode to string
        for(i = 0; i < text.length; i++) { 
            newText = newText.concat(String.fromCharCode(text[i]));
        }
    } else {
        alert("Please enter some text");
    }
    displayText(newText);
}
function getText() {
    return document.getElementById("txtInput").value;
}
function displayText(text) {
    document.getElementById("txtOutput").value = text;
}
$(document).ready(function () {
    fillSelection();
    $("#encrypt").click(function () {
        runCipher("encrypt");
    });
    $("#decrypt").click(function () {
        runCipher("decrypt");
    });
});