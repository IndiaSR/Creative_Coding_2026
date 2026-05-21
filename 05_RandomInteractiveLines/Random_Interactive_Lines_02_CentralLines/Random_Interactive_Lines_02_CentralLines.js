/**
 * Random Interactive Lines Variation 02
 //Changed Line position to width/2, height/2 instead of mouseX, mouseY
 //Background colour change 
 * made with the help of Karen ann Donnachie
 */

let counter = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("pink");
}

function draw() {
    let x = random(width); 
    let y = random(height); 
    line(width/2, height/2, x, y); // CHANGE
    
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
    
background(255, 10);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Save a 5-second gif
function keyPressed() {
  if (key === 's') {
    saveGif('Random_Interactive_Lines_01_LowFade', 5);
  }
}
