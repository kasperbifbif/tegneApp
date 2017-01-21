var ctx;

function init(){
	var touchzone = document.getElementById("myCanvas");
	touchzone.addEventListener("touchmove", opdaterCanvas, false);
	touchzone.addEventListener("touchend", end, false);
	ctx = touchzone.getContext("2d");
	ctx.canvas.width = window.innerWidth-18;
	ctx.canvas.height = window.innerHeight-100;
	ctx.fillStyle="white";
	ctx.lineCap="round";
	ctx.lineJoin="round";
	var sliderzone = document.getElementById("range");
	sliderzone.addEventListener("touchend",slider);
}

function end(e){
	ctx.beginPath();
	ctx.stroke();
}

function opdaterCanvas(){
	var pas = document.getElementById("color").value;
	ctx.lineTo(event.touches[0].pageX, event.touches[0].pageY);
	ctx.lineWidth = document.getElementById("bredde").value;
	ctx.stroke();
	ctx.strokeStyle = pas;
} 

function slider(){
	var x = document.getElementById("range").value;
    document.getElementById("bredde").value = x;
}

