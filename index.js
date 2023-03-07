var yellowCar = document.getElementById("yellowcar");
var redCar = document.getElementById("redcar");
var game = document.getElementById("game");
var start = document.getElementById("start");
var result = document.getElementById("result");
var score = document.getElementById("score");
var counter = 0;

yellowCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random()*2))*130)
    yellowCar.style.left = random+"px";
    console.log("randNum");
    counter++;
})


window.addEventListener("keydown",function(e){
    if(e.keyCode == "39"){
        var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
    if (redCarLeft<130){
        redCar.style.left = (redCarLeft+140)+"px"}
       
    };
    if(e.keyCode == "37"){
        var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
        if(redCarLeft>130){
            redCar.style.left = (redCarLeft-140)+"px"}
            
        }
})
 setInterval(function GameOver(){
    var yellowCarTop = parseInt(window.getComputedStyle(yellowCar).getPropertyValue("top"))
    var yellowCarLeft = parseInt(window.getComputedStyle(yellowCar).getPropertyValue("left"))
    var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
   
    if ((yellowCarLeft === redCarLeft) && (yellowCarTop > 171) && (yellowCarTop < 430)){




        console.log(`checking top position ${yellowCarLeft}`) 
        console.log(`checking yellow left position ${yellowCarLeft}`)
        console.log(`checking red left position ${redCarLeft}`)
        console.log(`checking left position ${yellowCarLeft}`)

            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter}`;  

            counter = 0;
        }

},10) 




