
var BrushSize

//function preload() {
	//img = loadImage("assets/DeathTaco.png")
//}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	BrushSize = 1
	fill(0,0,0);
	noStroke()
	textSize(40)
	text("Brush Size:",210,210)
	textSize(40)
	text(BrushSize,210,250)
	textSize(120)
	text("elwolf's painting Program",210,100)
	rect(0,130,10000,50)
	if (mouseIsPressed) {
		ellipse(mouseX,mouseY,BrushSize,BrushSize);
	}
}

function keyPressed() {
  if (keyCode == 0x52) {
	noStroke();
    fill(255,255,255);
	rect(0,0,1920,1080);
  }
  if (keyCode == 0x45) {
	noStroke();
    fill(255,255,255);
	rect(mouseX,mouseY,30,30);
  }
  return false; // prevent default
}
