var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath(); 
ctx.rect(20, 40, 50, 50); //rectangular
ctx.fillStyle = "#ff0000"
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false); //false를 넣으면 시계방향으로 그려집니다. 기본 값이나 true를 넣으면 반 시계방향으로 그려집니다.
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "#0000ff";
ctx.stroke();
ctx.closePath();