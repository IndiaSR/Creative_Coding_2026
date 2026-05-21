/**
 * Random Interactive Lines Variation 03
 //Lines constrained and pulsing using a sine wave 
 //Black and White
 * made with the help of Karen ann Donnachie
 */

let counter = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
    //let x = random(width); 
    //let y = random(height); 
    //line(width/2, height/2, x, y); // CHANGE
    
    //x += random(-1, 1); // Random horizontal movement
    //y += random(-1, 1); // Random vertical movement
    
    //// keep position within canvas
    //x = constrain(x, 0, width);
    //y = constrain(y, 0, height);
    
    //stroke(random(255), random(255), random(255));
    //strokeWeight(2);
    
    //// Move mouse to new position
    //mouseX = x;
    //mouseY = y;
    
// pulses between 50 and 450 pixels
   let maxRadius = map(sin(frameCount * 0.02), -1, 1, 50, 450);
 
    // Pick a random angle and place the endpoint along that angle
    let angle = random(TWO_PI);
    let r = random(maxRadius); // beginning at a random distance
 
    let x = width/2 + cos(angle) * r;
    let y = height/2 + sin(angle) * r;
    
    stroke(hue, random(100, 200), random(100, 200));
    strokeWeight(1);
    line(width/2, height/2, x, y);
    
background(255, 10);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Save a 5-second gif
function keyPressed() {
  if (key === 's') {
    saveGif('Random_Interactive_Lines_03_Pulsing_Central_Lines', 5);
  }
}
