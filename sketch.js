var c;
var brushSizeSlider;
var eraser;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = color(0);
  eraser = 0
  brushSizeSlider = createSlider(1, 100, 10);
  brushSizeSlider.position(5, 80);
}

function draw() {
  BrushSize = brushSizeSlider.value()
  fill(0, 0, 0);
  noStroke()
  textSize(40)
  text("Brush Size:", 5, 40)
  text("Tool:", 1500, 40)
  textSize(40)
  text(BrushSize, 5, 70)
  textSize(120)
  text("Luis's Painting Program", 210, 100)
  rect(0, 120, 10000, 55)
}

function mouseDragged() {
  if (mouseY > 210) {
    strokeWeight(BrushSize);
    stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  if (eraser == 1) {
    textSize(40)
    text("Eraser", 1500, 70)
  }
  if (eraser === 0) {
    textSize(40)
    text("Brush", 1500, 70)
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
