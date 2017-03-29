var canvas;
var context;
var carx = 150;
var cary = 100;
var carw = 10;
var carh = 40;
var delta = 10;
var carc = "red";

var boxw = 10;
var boxh = 10;
var boxc = "orange";
var box = Array();//массив для хранения препятствий

var level = 0;

function init(){
	 canvas = document.getElementById("canvas");
	 context = canvas.getContext("2d");

	 cary = canvas.height - carh - delta; 
}

function showCar(){
	context.fillStyle = carc;
	context.fillRect(carx, cary, carw, carh);
}

function addBox(){
	level ++;
	if(Math.random() * 20000 > level)
		return;
	var x = Math.random() * (canvas.width - boxw);
	var y = -boxh;//Math.random() * (canvas.height - boxh); 
	box.push([x, y]);
}

function showBox(){
	context.fillStyle = boxc;
	for(var j = 0; j < box.length; j++)
	{
		context.fillRect(box[j][0], box[j][1], boxw, boxh);
	}
}

function cls () {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function downBox(){
	for(j = 0; j < box.length; j++)
		if(box[j][1] < canvas.height)
			box [j] [1] ++;
		else
			box.splice(j, 1);
	
}

function timer () {
	addBox();
	downBox(); 
	cls(); 
	showBox(); 
	showCar();
}

init();

setInterval(timer, 20)
