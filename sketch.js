function setup() {
 	createCanvas(400, 400);
}
 
function draw()
{
	// do nothing
}
 
function mouseDragged() 
{ 
	strokeWeight(10);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
