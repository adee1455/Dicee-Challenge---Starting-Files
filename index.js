var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomImage = "images/dice" + randomNumber1 + ".png";
console.log(randomImage);
document.querySelector(".img1").setAttribute("src",randomImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomImage2 = "images/dice" + randomNumber2 + ".png";
console.log(randomImage2);
document.querySelector(".img2").setAttribute("src",randomImage2);

if (randomNumber1 > randomNumber2) {
    
    document.querySelector("h1").innerHTML = "Player 1 Wins" ;
}
else if (randomNumber1 === randomNumber2) {
    
    document.querySelector("h1").innerHTML = "Draw" ;

}
else {

    document.querySelector("h1").innerHTML = "Player 2 Wins" ;

}
