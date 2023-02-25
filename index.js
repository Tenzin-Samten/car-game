var yellowCar = document.getElementById("yellowcar");
var redCar = document.getElementById("redcar");



yellowCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random()*2))*130)
    yellowCar.style.left = random+"px";
})
redCar.addEventListener("keyup", function(e)){
 if(e.key == "39"){
    if(redCarleft<260)
    {
        redCar.style.left = (redCarLeft+130)+"px"
    }
 }; s
}