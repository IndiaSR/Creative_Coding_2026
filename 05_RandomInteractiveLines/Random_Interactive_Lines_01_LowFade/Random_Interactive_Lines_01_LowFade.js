/**
 * Random Interactive Lines Variation 01
 //Colour Changing
 * made with the help of Karen ann Donnachie
 */

let counter = 0;x

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255); // Start with a black background
}

function draw() {
    let x = random(width); 
    let y = random(height); 
    line(mouseX, mouseY, x, y);
    
    x += random(-1, 1); // Random horizontal movement
    y += random(-1, 1); // Random vertical movement
    
    // keep position within canvas
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    
    stroke(random(255), random(255), random(255));
    strokeWeight(2);
    
    // Move mouse to new position
    mouseX = x;
    mouseY = y;
    
background(0, 2); // making the fade really low 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Save a 5-second gif when the user presses the 's' key.
function keyPressed() {
  if (key === 's') {
    saveGif('Random_Interactive_Lines_01_LowFade', 5);
  }
}
