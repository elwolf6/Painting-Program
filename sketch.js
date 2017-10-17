
var BrushSize

//function preload() {
	//img = loadImage("assets/DeathTaco.png")
//}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	BrushSize = 1000
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

