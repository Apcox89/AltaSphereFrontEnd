function imageAnimation(sqearthbounce){

var earthbounce = sqearthbounce.earthbounce.value;
var x = 0;
var y = 10;
var xdisp = 5;
var ydisp = 5;

var reqAnimationFrame = window.RequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.msRequestAnimationFrame;

    var context = canvas.getContext('2d');
    context.clearRect(0,0,500,350);
    var bouncyEart = new Image();
    bouncyEart.onload = function(drawImage){
        context.drawImage(bouncyEart, 0, 0 , 25, 25)
    };

    x += xdisp;
    y += ydisp;
    if (x <= 0 || x >= 290) { xdisp = -xdisp;}
    if (y <= 0 || y >= 140) { ydisp = -ydisp;}
    requestAnimationFrame();

    

    bouncyEart.src= 'sqearthview.jpg';

};
