var canvas = document.getElementById("canvas");
// console.log(canvas);
var context = canvas.getContext('2d');

// Set up the base options for the pictionary board
var color = "#000000";
var thickness = 10;
var colorPicker = document.getElementById("color-picker");
var thicknessPicker = document.getElementById("thickness");
// console.dir(colorPicker);
var mouseDown = false;
var mousePosition = {};
var lastMousePosition = null;

colorPicker.addEventListener("change", function(event){
	// console.dir(event.target)
	color = colorPicker.value
	// color.event.target.value
	console.log(color);
});
thicknessPicker.addEventListener("change", function(event){
	thickness = thicknessPicker.value
	console.log(thickness);
});

canvas.addEventListener("mousedown", function(event){
	mouseDown = true;
	lastMousePosition = null;
});

canvas.addEventListener("mouseup", function(event){
	mouseDown = false;
});

canvas.addEventListener("mousemove", function(event){
	if(mouseDown){
		// console.log(event);
		// console.log("User has pressed the mouse down and is moving!!")
		if(lastMousePosition == null){
			lastMousePosition = {
				x: event.offsetX,
				y: event.offsetY
			}
		}
		mousePosition.x = event.offsetX;
		mousePosition.y = event.offsetY;
		// console.log(mousePosition.x);

		context.strokeStyle = color;
		context.lineJoin = "round";
		context.lineWidth = thickness;
		context.beginPath();
		context.moveTo(lastMousePosition.x, lastMousePosition.y);
		context.lineTo(mousePosition.x, mousePosition.y);
		context.stroke();
		context.closePath();

		lastMousePosition = {
			x: mousePosition.x,
			y: mousePosition.y
		}
	}
	
});































