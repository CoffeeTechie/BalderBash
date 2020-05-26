

/*-------------------------
Use Oxford Dictionary API


var Dictionary = require("oxford-dictionary-api");

var app_id ='9bd41ca3';
var app_key = 'dffab5c140734237ac29ef723b6169b4';
var dict = new Dictionary('9bd41ca3', 'dffab5c140734237ac29ef723b6169b4');

dict.find("ace",function(error,data){if(error) return console.log(error); console.log(data); });

*/
/*-------------------------
Fisher-Yates shuffle algorithm
-Returns random word and removes that word from the word array every time 'shuffle' is called
*/

var wordArray = ['animal', 'wretch', 'snore', 'cough'];
//this feature was disabled by installing socket.io
document.getElementById("clue").innerHTML = shuffle(wordArray);

function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    var clue = array[array.length-1];
    wordArray = array.slice(0, array.length-1);
    return clue;
}

