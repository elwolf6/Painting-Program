var c;
var brushSizeSlider;

function setup() {
 	createCanvas(windowWidth, windowHeight);
	c = color(0);
	brushSizeSlider = createSlider(10, 72, 36);
  	brushSizeSlider.position(25, 25);
}
 
function draw()
{
	BrushSize = brushSizeSlider.value()
	fill(0,0,0);
	noStroke()
	textSize(40)
	text("Brush Size:",210,210)
	textSize(40)
	text(BrushSize,210,250)
	textSize(120)
	text("elwolf's painting Program",210,100)
	rect(0,130,10000,50)
}
 
function mouseDragged() 
{ 
	strokeWeight(BrushSize);
	stroke(c);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
