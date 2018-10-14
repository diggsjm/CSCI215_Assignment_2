console.clear();

//Creating images

//budapest image
var budapest;
budapest = document.createElement("img");
budapest.src = "budapest.png";
budapest.height = 100;
budapest.width = 100;

//amsterdam image
var amsterdam;
amsterdam = document.createElement("img");
amsterdam.src = "amsterdam.png";
amsterdam.height = 100;
amsterdam.width = 100;

//florence image
var florence;
florence = document.createElement("img");
florence.src = "florence.png";
florence.height = 100;
florence.width = 100;

//greece image
var greece;
greece = document.createElement("img");
greece.src = "greece.png";
greece.height = 100;
greece.width = 100;

//tulips image
var tulips;
tulips = document.createElement("img");
tulips.src = "tulips.png";
tulips.height = 100;
tulips.width = 100;




var imageArray;
imageArray = ["budapest.png", "amsterdam.png", "florence.png", "greece.png", "tulips.png"];

function displayImage() {
    var randomNum;
    randomNum = Math.floor(Math.random() * (imageArray.length + 1));
    document.getElementById("randomPic").src = imageArray[randomNum];

}