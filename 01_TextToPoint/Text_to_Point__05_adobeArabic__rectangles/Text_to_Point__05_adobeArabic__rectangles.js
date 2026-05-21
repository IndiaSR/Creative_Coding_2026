// TEXT_TO_POINT variation 05

// change = Pink squares instead of ellipses

let myFont;
let points;
let sampleF;

function preload() {
  myFont = loadFont("data/AdobeArabic-Bold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  sampleF = 0.05;

//  // Extract our array of outline points!
//  // (string, x, y, fontSize, options)
  points = myFont.textToPoints('Melbourne', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

  // noLoop() tells p5.js to only run the draw() function exactly one time.
  noLoop();
}

// draw() normally runs continuously, but we stopped it using noLoop() in setup()
function draw() {
  background(240); // Light gray background


  stroke(200, 0, 0);       // Red lines
  strokeWeight(2);         // 2 pixels thick
  //line(width / 2, 0, width / 2, height);  // Vertical center
  //line(0, height / 2, width, height / 2); // Horizontal center

  fill("pink");       
  stroke(0);     
  strokeWeight(1); 

  // A 'for' loop lets us iterate over every single point inside our 'points' array
  for (let i = 0; i < points.length; i++) {
  
    let p = points[i];

    rect(p.x, p.y, 20, 20); // change to rectangles
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
