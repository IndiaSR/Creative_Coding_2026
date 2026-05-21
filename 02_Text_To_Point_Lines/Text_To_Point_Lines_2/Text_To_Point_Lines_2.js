// Text to point lines variation 02
// Change = sampleF,white outline, Rainbow lines  

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
  sampleF = 0.2;

  // Extract our array of outline points!
  points = myFont.textToPoints('Melbourne', (width / 4) - 200, height / 2, 300, {
    sampleFactor: sampleF,
    simplifyThreshold: 0
  });

}

function draw() {
  // Clear the background every frame so our moving lines don't smear
  // "blue" works as a built-in web color, or you can use RGB values!
  background(10);

  // A 'for' loop lets us iterate over every single point inside our 'points' array
  for (let i = 1; i < points.length; i++) {
    // Extract the exact X and Y coordinates for the current point
    let p = points[i];

  
    stroke(random(255),random(255),random(255), 100);
    strokeWeight(2);
    line(p.x, p.y, mouseX, mouseY);

  
    // Generate a completely random RGB color every single frame for this specific dot
    let randomDotColor = color(random(255), random(255), random(255));

    // Set the fill to our random color, and give it a solid solid white outline
    fill("white");
    stroke("white");
    strokeWeight(1);

    // Draw the dot exactly at the mathematical coordinate
    ellipse(p.x, p.y, 10, 10);
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
    saveGif('Text_To_Point_Lines_2', 3); // Saves 3 seconds of animation
  } 
}
