var canvas = document.getElementById("pizza_slices");
var context = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 100;
var counterClockwise = false;

for(var angle=0; angle<=360; angle+=1){
    var startAngle = (angle-2)*Math.PI/180;
    var endAngle = angle * Math.PI/180;
    context.beginPath();
    context.moveTo(x, y);
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.closePath();
    var gradient = context.createRadialGradient(x, y, 0, x, y, radius);
	gradient.addColorStop(0,'hsl('+angle+', 10%, 100%)');
	gradient.addColorStop(1,'hsl('+angle+', 100%, 50%)');
    context.fillStyle = gradient;
    context.fill();
}
