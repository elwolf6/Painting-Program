var c;
var brushSizeSlider;

function setup() {
 	createCanvas(windowWidth, windowHeight);
	c = color(0);
	brushSizeSlider = createSlider(10, 200, 36);
  	brushSizeSlider.position(5, 80);
}
 
function draw()
{
	BrushSize = brushSizeSlider.value()
	fill(0,0,0);
	noStroke()
	textSize(40)
	text("Brush Size:",5,40)
	textSize(40)
	text(BrushSize,5,70)
	textSize(120)
	text("Luis's painting Program",210,100)
	rect(0,130,10000,50)
}
 
function mouseDragged() 
{
    if(mouseY > 180)
    {
	strokeWeight(BrushSize);
	stroke(c);
	line(mouseX, mouseY, pmouseX, pmouseY);
    }
}
