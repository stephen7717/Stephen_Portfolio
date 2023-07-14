
let backBtn = document.querySelector(".back-button").addEventListener("click",function(){
    window.location.href = "/index.html";
});

// this lines is for detecting button click / press
for(var i = 0; i < document.querySelectorAll(".drum").length; i++ ){

document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
/*event listener has two parameters (type-for example click, next is the function or the listener and there is a third which is optional
and called option);*/
}
function handleClick() {
    var buttonInnerHTML = this.innerHTML;//w,a,s,d,j,k,l
    makeSound(buttonInnerHTML);
    stopPlayingRandomSound();
    buttonAnimation(buttonInnerHTML);

    // 
}       

document.addEventListener("keypress", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
    stopPlayingRandomSound();
})

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
        break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
        break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
        break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
                audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
        break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
                audio.play();
        break;

        default:
            console.log("press a button")
    }
}

function buttonAnimation(currentKey){

    var activeButton =  document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
// function calculator(num1,num2,operator){
//     return operator(num1,num2);
// }

// function add (num1,num2){
//     return num1+num2;
// }
// function sub (num1,num2){
//     return num1-num2;
// }
// function multiply (num1,num2){
//     return num1*num2;
// }
// function divide (num1,num2){
//     return num1/num2;
// }

function playRandomSound(){
    let num = Math.floor(Math.random()*7+1);

    switch (num) {
        case 1:
            var audio = new Audio("sounds/tom-1.mp3");
            return audio.play();
        break;
        case 2:
            var audio = new Audio("sounds/tom-2.mp3");
            return audio.play();
        break;
        case 3:
            var audio = new Audio("sounds/tom-3.mp3");
            return audio.play();
        break;
        case 4:
            var audio = new Audio("sounds/tom-4.mp3");
            return audio.play();
        break;
        case 5:
            var audio = new Audio("sounds/snare.mp3");
            return audio.play();
        break;
        case 6:
            var audio = new Audio("sounds/kick-bass.mp3");
            return audio.play();
        break;
        case 7:
            var audio = new Audio("sounds/crash.mp3");
            return audio.play();
        break;

        default:
            
    }
    
}
let set = setInterval(playRandomSound,1500);

function stopPlayingRandomSound() {
    clearInterval(set); // Stop the interval
}
