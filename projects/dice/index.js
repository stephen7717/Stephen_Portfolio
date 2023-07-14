
let refreshBtn = document.querySelector(".refresh").addEventListener("click",buttonPressed);

function buttonPressed(){
   let activeButton =  document.querySelector(".refresh");
   activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed");
}, 100);
location.reload();
}

let backBtn = document.querySelector(".back-button").addEventListener("click",function(){
    window.location.href = "/index.html";
});

var diceOne = Math.floor((Math.random()*6)+1);
var diceTwo = Math.floor((Math.random()*6)+1);

var randomDice = "dice" + diceOne +".png"; 
var randomImage = ("/images/")+randomDice ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);

var randomDice2 = "dice" + diceTwo +".png"; 
var randomImage2 = ("/images/")+randomDice2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

if(diceOne > diceTwo){
    document.querySelector("h1").innerHTML = "Player One Wins!⛳";
}
else if(diceTwo > diceOne){
    document.querySelector("h1").innerHTML = "Player Two Wins!🚩";
}

else {
    document.querySelector("h1").innerHTML = "Draw🎌";
}