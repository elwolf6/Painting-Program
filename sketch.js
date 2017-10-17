function setup() {
 	createCanvas(windowWidth, windowHeight);
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
