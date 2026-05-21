// Text to point lines variation 01
// Change = Large ovals, Opacity change, Lines move with the mouse 

let myFont;
let points;
let sampleF;

// preload() = anything to download. Downloading the typeface first
function preload() {
  myFont = loadFont("data/AdobeArabic-BoldItalic.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // This value controls how many points are generated on the text outline. smaller number = less dots/more space
  //researched on p5.js how to slow down the speed of colour change - frame rate
  sampleF = 0.09;
  //frameRate(1);

  // Extract our array of outline points!
  points = myFont.textToPoints('Melbourne', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

}

function draw() {
 
  background(10);

  // A 'for' loop lets us iterate over every single point inside our 'points' array
  for (let i = 1; i < points.length; i++) {
    let p = points[i];

    // DRAW THE LINES
    // The line to follow mouse
    // In stroke, 4th value is for transparency
   
    stroke(255,180,0,10);
    strokeWeight(15);
    line(p.x, p.y, mouseX, mouseY);

    // DRAW THE TWINKLING DOTS
    // Generate a completely random RGB color every single frame for this specific dot
    //let randomDotColor = color(random(255), random(255), random(255));
    //let colourChangeInterval = (0.2);
 
    // Set the fill to our random color, and give it a coloured outline
    fill(255,255,0,25);
    stroke(255,180,0);
    strokeWeight(1);

    // Draw the dot exactly at the mathematical coordinate
    ellipse(p.x, p.y, 20, 60);
  }
}

// Ensure the canvas fully resizes if the browser window changes size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // Recalculate the text points so they are positioned correctly based on the new dimensions
  points = myFont.textToPoints('Melbourne', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });
}

//save as GIF
function keyPressed() {
  if (key === 's') {
    saveGif('Text_tTo_Point_Lines_3', 3); // Saves 3 seconds of animation
  }
}
