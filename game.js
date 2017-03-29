var canvas;
var context;
var carx = 150;
var cary = 100;
var carw = 10;
var carh = 40;
var delta = 10;
var carc = "red";

var boxx = 0;
var boxy = 0;
var boxw = 10;
var boxh = 10;
var boxc = "orange";

function init(){
	 canvas = document.getElementById("canvas");
	 context = canvas.getContext("2d");

	 cary = canvas.height - carh - delta; 
}

function showCar(){
	context.fillStyle = carc;
	context.fillRect(carx, cary, carw, carh);
}

function showBox(){
	context.fillStyle = boxc;
	boxx = Math.random() * (canvas.width - boxw);
	boxy = Math.random() * (canvas.height - boxh); 
	context.fillRect(boxx, boxy, boxw, boxh);
}

init();
showCar();
showBox();
