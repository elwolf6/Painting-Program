var c;
var brushSizeSlider;

function setup() {
 	createCanvas(windowWidth, windowHeight);
	c = color(0);
	brushSizeSlider = createSlider(1, 100, 10);
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
	text("Luis's Painting Program",210,100)
	rect(0,120,10000,55)
}
 
function mouseDragged() 
{
  if(mouseY > 210)
  {
		strokeWeight(BrushSize);
		stroke(c);
		line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed()
{
	if(key == 'e' || key == 'E')
	{
		c = color(255, 255, 255);
	}
}

