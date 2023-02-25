var yellowCar = document.getElementById("yellowcar");
var redCar = document.getElementById("redcar");



yellowCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random()*2))*130)
    yellowCar.style.left = random+"px";
})

