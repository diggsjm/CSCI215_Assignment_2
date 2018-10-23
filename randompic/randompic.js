console.clear();
/*
Algorithms
No functions
1.generate a random number btw 0,4
2.load an array of picture locations
3.set image tag src attribute to array[randomNumber]
p.html img tag (just a src on the tag)
then put script tag

 */
//1.generate a random number btw 0,4
var randomNum;
randomNum = (Math.floor(Math.random() * 5));
console.log(randomNum);


//2.load an array of pic locations
var imageArray;
imageArray = ["budapest.png", "amsterdam.png", "florence.png", "greece.png", "tulips.png"];

var picDiv = document.getElementById("randomPic");
picDiv.setAttribute('src', imageArray[randomNum]);

