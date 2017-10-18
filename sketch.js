var c;
var brushSizeSlider;
var eraser;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = color(0);
  eraser = 0
  brushSizeSlider = createSlider(1, 100, 10);
  brushSizeSlider.position(300, 15);
}

function draw() {
  BrushSize = brushSizeSlider.value()
  fill(200);
  strokeWeight(0);
  rect(0, 0, width, 55)
  fill(0)
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
}

function mouseDragged() {
  if (mouseY > 75) {
    strokeWeight(BrushSize);
    stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
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
