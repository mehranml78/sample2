// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.font = '130px serif';
// ctx.fillStyle = "red";
// ctx.strokeText('Hello world', 5, 140, 900);
// ctx.textAlign = "center";







var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "95px arial";
ctx.strokeStyle = "#009000";
ctx.textAlign = "center";
ctx.lineWidth = 2;
ctx.strokeText("Avizhe stadio" , canvas.width/2, canvas.height-50); 
const mousehover = () => {


}

const nextP = document.getElementById("button")
nextP.addEventListener("mouseenter", mousehover)