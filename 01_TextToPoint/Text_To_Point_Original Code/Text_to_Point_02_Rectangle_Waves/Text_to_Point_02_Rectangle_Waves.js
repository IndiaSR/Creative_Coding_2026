// TEXT_TO_POINT variation 02

// change = Squares
// Each points floats up and down, creating a wave effect
// typeface - Graphik_Medium
// uses sine wave offset - with help from VSC
// removed mouse interaction
// draw() runs continuously

let myFont;
let points;
let sampleF;
 
function preload() {
  myFont = loadFont("data/Graphik-Medium-Trial.otf");
}
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
  sampleF = 0.05;
  points = myFont.textToPoints('Melbourne', (width / 4) - 200, height / 2, 200, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  }).map(pt => new Dot(pt.x, pt.y)); // CHANGE
  // noLoop() is removed - CHANGE
}
 
function draw() {
  background(50,200,255);
 
  fill(0,200,10);
  stroke(0);
  strokeWeight(1);
 
  for (let i = 0; i < points.length; i++) { // CHANGE assisted by VSC
    let p = points[i];
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
 
  //move() {
  //  let d = dist(mouseX, mouseY, this.x, this.y);
  //  if (d < 100) {
  //    let angle = atan2(this.y - mouseY, this.x - mouseX); // CHANGE, assisted by VSC
  //    this.x += cos(angle) * 5;
  //    this.y += sin(angle) * 5;
  //  } else {
  //  }
  //}
 
  display(i) {
    let wave = sin(frameCount * 0.04 + i * 0.3 + this.waveOffset) * 8;
    rect(this.x, this.y + wave, 15, 15);
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
    saveGif('Text_to_Point_02_Rectangle_Waves', 5); // Saves 5 seconds of animation
  }
}
