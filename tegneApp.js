//var canvas;
var ctx;
//var xgl;
//var ygl;
//var colours = ['red', 'green', 'blue', 'yellow', 'black'];


function init(){
	var touchzone = document.getElementById("myCanvas");
	touchzone.addEventListener("touchmove", opdaterCanvas, false);
	touchzone.addEventListener("touchend", end, false);
	ctx = touchzone.getContext("2d");
	myCanvas.width = myCanvas.width;
	ctx.fillStyle="white";
	//ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
	ctx.lineCap="round";
	ctx.lineJoin="round";
}

function end(e){
	e.preventDefault();
	if (lastPt=null);
			ctx.beginPath();
			ctx.moveTo(lastPt.x, lastPt.y);
			ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
			ctx.stroke();
			//ctx.strokeStyle = colours[id];
}
lastPt = {x:e.touches[0].pageX, y:e.touches[0].pageY};
	


function opdaterCanvas(){
	var pas = document.getElementById("color").value;
		//ctx.moveTo(event.touches[0].pageX, event.touches[0].pageY);
		ctx.lineTo(event.touches[0].pageX, event.touches[0].pageY);
		//ctx.moveTo(150,150);
		//ctx.lineTo(100,100);
		ctx.stroke();
		ctx.lineWidth = document.getElementById("bredde").value;
		ctx.strokeStyle = pas;
} 



//function red(){
//	var n = document.getElementById("color").value = 1;
//}


//function farve(){
//	ctx.strokeStyle = '#0000ff';
//	ctx.stroke();
//}

//function farve(){
//	var blue = document.getElementById()
//	var red = 
//}
















