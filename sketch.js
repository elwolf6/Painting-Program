function setup() {
 	createCanvas(windowWidth, windowHeight);
}
 
function draw()
{
	//BrushSize = 30
	fill(0,0,0);
	noStroke()
	textSize(40)
	text("Brush Size:",210,210)
	//textSize(40)
	//text(BrushSize,210,250)
	textSize(120)
	text("elwolf's painting Program",210,100)
	rect(0,130,10000,50)
}
 
function mouseDragged() 
{ 
	strokeWeight(10);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
