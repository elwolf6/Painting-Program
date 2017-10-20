var c;
var brushSizeSlider;
var eraser;
var isBrushClicked;
var isEraserClicked;
var ErPic;
var BrPic;

function preload()  {
  ErPic = "assets/eraser.jpg"
  ErBrush = "assets/brush.jpg"
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = color(0);
  eraser = 0
  brushSizeSlider = createSlider(1, 100, 10);
  brushSizeSlider.position(300, 15);
}

function draw() {
  var distanceB = dist(mouseX, mouseY, 1400, 50);
  var distanceE = dist(mouseX, mouseY, 1430, 50); 
  BrushSize = brushSizeSlider.value()
  fill(200);
  strokeWeight(0);
  rect(0, 0, width, 81)
  fill(0)
  //Buttons
  fill(0);
  rect(1400, 50, 25, 25);
  rect(1430, 50, 25, 25);
  noStroke()
  textSize(40)
  text("Brush Size:", 5, 40)
  text(BrushSize, 220, 40)
  text("Tool:", 1400, 40)
  if (eraser == 1) {
    strokeWeight(0);
    textSize(40)
    text("Eraser", 1500, 40)
  }
  if (eraser === 0) {
    strokeWeight(0);
    textSize(40)
    text("Brush", 1500, 40)
  }
  if(distanceB < 50)
  {
    isBrushClicked = true;
  } else {
    isBrushClicked = false;
  }
  if(distanceE < 50)
  {
    isEraserClicked = true;
  } else {
    isEraserClicked = false;
  }
}

function mousePressed()
{
  if(isBrushClicked === true)
  {
    eraser = 0
  }
  if(isEraserClicked === true)
  {
    eraser = 1
  }
}

function mouseDragged() {
    strokeWeight(BrushSize);
    stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed() {
  if (key == 'e' || key == 'E') {
    eraser = 1
    c = color(255);
  }
  if (key == 'b' || key == 'B') {
    eraser = 0
    c = color(0);
  }
}
