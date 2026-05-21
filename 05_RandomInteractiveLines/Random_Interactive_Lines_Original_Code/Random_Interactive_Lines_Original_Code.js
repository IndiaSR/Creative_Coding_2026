/**
 * Creative Coding 2026 - Week 6: Randomness and Noise
 * made with the help of Karen ann Donnachie
 */

let counter = 0;x

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0); // Start with a black background
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
    
background(0, 25); // Black background with opacity to create a fading 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    // Press 's' to save a screenshot of the current canvas
    if (key === 's' || key === 'S') {
        saveCanvas(`glitch_tv_${nf(counter, 3)}`, 'jpg'); 
        counter++;
    }
}
