/*
Algorithm
1.get the input text(long string)
"word word2"
2.Parse input into individual words(array of words)
3.Convert words to uppercase
    var inputText = inputText.toUpperCase();
    var inputText = inputText.replace(/\./g,"");
    var inputText = inputText.split(" ");
4.Compare while iterating through the words, compare with what i've seen keeping track
5.Construct the output string
6.set output div to output string
**need onclick=myfunction button
* need a function
 */

console.clear()

//1.Get the input text(long string)
var newInput;
newInput = document.getElementsByTagName("input");


//2.Parse input into individual words(array of words)
//3.Convert words to uppercase
//     var inputText = inputText.toUpperCase();
//     var inputText = inputText.replace(/\./g,"");
//     var inputText = inputText.split(" ");
var newInputArray = [];
for(var i = 0; 0<newInput.length; i++){
    newInput = newInput.toUpperCase();
    newInput = newInput.replace(/\./g,"");
    newInput = newInput.split(" ");
    newInputArray += newInput;
}

//4.Compare while iterating through the words, compare with what i've seen keeping track
var counter = 0;
for(var i = 0; 0<newInputArray.length; i++){
    var compare = 0;

    for( var j = newInputArray.length; newInputArray.length>=0 ; j++){
        if(newInputArray[i] == newInputArray[j]){
            counter++;
        }
    }
    compare++;
}