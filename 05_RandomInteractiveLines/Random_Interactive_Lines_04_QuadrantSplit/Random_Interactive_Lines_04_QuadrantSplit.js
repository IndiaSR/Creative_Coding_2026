/**
 * Random Interactive Lines Variation 04
 //Lines constrained and pulsing using a sine wave 
 //Black and White
 * made with the help of Karen ann Donnachie
 */

let counter = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}
//CHANGE
function draw() {
    background(0, 15);
    let left  = mouseX < width/2;
    let top   = mouseY < height/2;
    
    let xMin = left ? 0: width/2; // ? is shorthand for the if() function
    let xMax = left ? width/2:width;
    let yMin = top ? 0:height/2;
    let yMax = top ? height/2:height;
    //Constraining the lines to only be in the quadrant the mouse is in
    
    for (let i = 0; i < 3; i++) {
        let x = random(xMin, xMax);
        let y = random(yMin, yMax);
        stroke(random(255), random(255), random(255), 180);
        strokeWeight(1.5);
        line(width/2, height/2, x, y);
  }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Save a 5-second gif
function keyPressed() {
  if (key === 's') {
    saveGif('Random_Interactive_Lines_04_Pulsing_QuadrantSplit', 5);
  }
}
