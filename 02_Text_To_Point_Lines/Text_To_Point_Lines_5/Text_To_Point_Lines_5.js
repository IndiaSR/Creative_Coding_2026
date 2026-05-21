// Text to point lines variation 05
// Change = Lines extend from centre 

let myFont;
let points;
let sampleF;

// preload() = anything to download. Downloading the typeface first
function preload() {
  myFont = loadFont("data/AdobeArabic-BoldItalic.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // This value controls how many points are generated on the text outline.
  sampleF = 0.09;

  // Extract our array of outline points!
  points = myFont.textToPoints('Melbourne', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

}

function draw() {
  
  background(100,0,30); 
  

  // A 'for' loop lets us iterate over every single point inside our 'points' array
  for (let i = 1; i < points.length; i++) {
    let p = points[i];
    
  
    stroke((255),(255),(255), 100);
    strokeWeight(0.5);
    line(p.x, p.y, width/2, height/2); // CHANGE

  
    // Generate a completely random RGB color every single frame for this specific dot
    //let randomDotColor = color(random(255), random(255), random(255));

    // Set the fill to our random color, and give it a solid solid white outline
    fill("white");
    stroke("white");
    strokeWeight(1);

    // Draw the dot exactly at the mathematical coordinate
    ellipse(p.x, p.y, 8, 8);
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
    saveGif('Text_To_Point_Lines_5', 5); // Saves 5 seconds of animation
  } 
}
