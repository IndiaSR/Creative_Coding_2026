// TEXT_TO_POINT variation 08

// change = pulsing Animation
// Each points floats up and down, creating a wave effect
// typeface - Graphik_Medium
// uses sine wave offset - with help from Visual Studio Code 
// draw() runs continuously

let myFont;
let points;
let sampleF;
 
function preload() {
  myFont = loadFont("data/Graphik-Medium-Trial.otf");
}
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  sampleF = 0.05;
  points = myFont.textToPoints('Melbourne', (width / 4) - 200, height / 2, 200, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });
  // noLoop() is removed - CHANGE
}
 
function draw() {
  background(255,10,255);
 
  fill("pink");
  stroke(0);
  strokeWeight(1);
 
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
 
    // offset (i * 0.3) creates a ripple effect
    let waveOffset = sin(frameCount * 0.04 + i * 0.3) * 8; // CHANGE
 
    ellipse(p.x, p.y + waveOffset, 15, 15); //  CHANGE
  }
}
 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  points = myFont.textToPoints('Melbourne', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });
}

//save as GIF
function keyPressed() {
  if (key === 's') {
    saveGif('Text_to_point_08_GraphikMedium_Wave', 5); // Saves 5 seconds of animation
  }
}
