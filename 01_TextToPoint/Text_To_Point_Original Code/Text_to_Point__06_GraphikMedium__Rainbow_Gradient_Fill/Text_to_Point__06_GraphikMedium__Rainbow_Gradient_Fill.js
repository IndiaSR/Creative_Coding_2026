// TEXT_TO_POINT variation 06

// change = Rainbow Gradient fill 
// fill(255) changes to fill(p.x % 255, p.y % 255, 150) so each colour is calculated from its own XY coordinates
// changed typeface to Graphik_Medium
// changed sampleF to 0.2 and adjusted positioning

let myFont;
let points;
let sampleF;

function preload() {
  myFont = loadFont("data/Graphik-Medium-Trial.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  sampleF = 0.2; // CHANGE

//  // (string, x, y, fontSize, options)
  points = myFont.textToPoints('Melbourne', (width / 2) - 500, height / 2, 200, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

  // noLoop() tells p5.js to only run the draw() function exactly one time.
  noLoop();
}

function draw() {
  background(240); // Light gray background


  stroke(50, 0, 0);       // Red lines
  strokeWeight(2);         // 2 pixels thick
  //line(width / 2, 0, width / 2, height);  // Vertical center
  //line(0, height / 2, width, height / 2); // Horizontal center
       
  stroke(0);     
  strokeWeight(1); 

  // A 'for' loop lets us iterate over every single point inside our 'points' array
  for (let i = 0; i < points.length; i++) {
       let p = points[i];
       fill (p.x % 255, p.y % 255, 150); // CHANGE 
       ellipse(p.x, p.y, 15, 15);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // When the window resizes, we should recalculate the text points 
  // so they are positioned correctly based on the new width and height!
  points = myFont.textToPoints('Melbourne', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

  // Since we called noLoop() earlier, draw() isn't running automatically. 
  // We must manually trigger a redraw using this command!
  redraw();
}
