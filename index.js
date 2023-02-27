var yellowCar = document.getElementById("yellowcar");
var redCar = document.getElementById("redcar");
var game = document.getElementById("game");
var result = document.getElementById("result");
var score = document.getElementById("score");





yellowCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random()*2))*130)
    yellowCar.style.left = random+"px";
    counter++
})


window.addEventListener("keydown",function(e){
    if(e.keyCode == "39"){
        var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
    if (redCarLeft<130){
        redCar.style.left = (redCarLeft+130)+"px"}
    };
    if(e.keyCode =="37"){
        var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
        if(redCarLeft>130){
            redCar.style.left = (redCarLeft-130)+"px"}
    }
})
setInterval(function GameOver (){
    var yellowCarTop = parseInt(window.getComputedStyle(yellowCar).getPropertyValue("top"))
    var yellowCarLeft = parseInt(window.getComputedStyle(yellowCar).getPropertyValue("left"))
    var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))

        if ((yellowCarLeft === redCarLeft) && (yellowCarTop > 163) && (yellowCarTop < 427)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }

}, 10)




