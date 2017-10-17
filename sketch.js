var c;

function setup() {
 	createCanvas(windowWidth, windowHeight);
	c = color(0);
}
 
function draw()
{
	// display instructions
	noStroke();
	fill(200);
	rect(0, 0, width, 250);
	fill(0);
	text("elwolf's awesome painting program", 100, 150);
}
 
function mouseDragged() 
{ 
	strokeWeight(10);
	stroke(c);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
