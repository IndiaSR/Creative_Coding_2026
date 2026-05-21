// Text to point lines variation 06
// Change = Mouse acts as a spotlight and moves the lines with it
//VSC used to troubleshoot and understand the code

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
  
  background(10,30,30); 
  
  //CHANGE
  let maxReach = 250; // max distance at which lines appear

  // A 'for' loop lets us iterate over every single point inside our 'points' array
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    let d = dist(p.x,p.y,mouseX,mouseY);
    if (d > maxReach) continue;
    
    let alpha = map(d, 0, maxReach, 220, 0); // VSC assistance
    let weight = map(d, 0, maxReach, 4, 0.5);
    
    let dotSize = map(d, 0, maxReach, 14, 4);
    stroke((255),(255),(255), alpha);
    strokeWeight(0.5);
    line(p.x, p.y,mouseX, mouseY);

    fill(300,300,0,alpha);
    noStroke();
    //strokeWeight(1);

    // Draw the dot exactly at the mathematical coordinate
    ellipse(p.x, p.y, 8, 8);
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
    saveGif('Text_To_Point_Lines_6', 5); // Saves 5 seconds of animation
  } 
}
