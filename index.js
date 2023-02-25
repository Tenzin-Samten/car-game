var yellowCar = document.getElementById("yellowcar");
var redCar = document.getElementById("redcar");
var result = document.getElementById("result");
var score = document.getElementById("score");
var game = document.getElementById("game");




yellowCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random()*2))*130)
    yellowCar.style.left = random+"px";
})


window.addEventListener("keydown",function(e){
    if(e.keyCode == "39"){
        var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
    if (redCarLeft<130){
        redCar.style.left = (redCarLeft+130)+"px";
    }
    };
    if(e.keyCode =="37"){
        var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
        if(redCarLeft>130){
            redCar.style.left = (redCarLeft-130)+"px";
        }
    }
})


