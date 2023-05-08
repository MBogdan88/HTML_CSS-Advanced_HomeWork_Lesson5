let canvas = document.querySelector('#canvas');
let context = canvas.getContext("2d");
context.moveTo(90, 50);
context.bezierCurveTo(160, 100, 280, 0, 350, 50);
context.lineTo(350, 200);
context.bezierCurveTo(280, 150, 160, 250, 90, 200);
context.closePath();
context.shadowBlur = 10;
// context.shadowOffsetY = 10;
context.shadowColor = "darkgrey";
let gradient = context.createLinearGradient(100, 0, 340, 0);
gradient.addColorStop(0, "darkred");
gradient.addColorStop(0.25, "red");
gradient.addColorStop(0.25, "white");
gradient.addColorStop(0.75, "white");
gradient.addColorStop(0.75, "red");
gradient.addColorStop(1, "darkred");
context.fillStyle = gradient;
context.fill();
context.shadowColor = "white";
let imageFlag = new Image();
imageFlag.src = "./img/canada.jpg";                        
imageFlag.addEventListener('load', function() {
    context.drawImage(imageFlag, 170, 75, 100, 100);
});

