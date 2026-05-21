// TEXT_TO_POINT variation 01

// change = Wave Animation with Mouse Runaway
// Each points floats up and down, creating a wave effect
// typeface - Graphik_Medium
// uses sine wave offset and mouse tracking - with help from VSC
// draw() runs continuously
// Making balls runaway from the mouse

let myFont;
let points;
let sampleF;
 
function preload() {
  myFont = loadFont("data/Graphik-Medium-Trial.otf");
}
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  sampleF = 0.04;
  points = myFont.textToPoints('Melbourne', (width / 4) - 200, height / 2, 500, {
    sampleFactor: sampleF,
    simplifyThreshold: 0Text_to_point_01_GraphikMedium_Wave_Running_Away_From_MouseText_to_point_01_GraphikMedium_Wave_Running_Away_From_MouseText_to_point_01_GraphikMedium_Wave_Running_Away_From_MouseText_to_point_01_GraphikMedium_Wave_Running_Away_From_MouseText_to_point_01_GraphikMedium_Wave_Running_Away_From_Mouse
  }).map(pt => new Dot(pt.x, pt.y)); // CHANGE
  // noLoop() is removed - CHANGE
}
 
function draw() {
  background(255,200,255);
 
  fill(400,0,10);
  stroke(0);
  strokeWeight(1);
 
  for (let i = 0; i < points.length; i++) { // CHANGE assisted by VSC
    let p = points[i];
    p.move();
    p.display(i);
  }
}
 
class Dot { // CHANGE
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.waveOffset = random(1000);
  }
 
  move() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 100) {
      let angle = atan2(this.y - mouseY, this.x - mouseX); // CHANGE, assisted by VSC
      this.x += cos(angle) * 5;
      this.y += sin(angle) * 5;
    } else {
    }
  }
 
  display(i) {
    let wave = sin(frameCount * 0.04 + i * 2 + this.waveOffset) * 8;
    ellipse(this.x, this.y + wave, 15, 15);
  }
}
 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  points = myFont.textToPoints('Melbourne', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  }).map(pt => new Dot(pt.x, pt.y));
}

//save as GIF
function keyPressed() {
  if (key === 's') {
    saveGif('Text_to_point_08_GraphikMedium_Wave', 5); // Saves 5 seconds of animation
  }
}
