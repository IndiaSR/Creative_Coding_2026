// Random Interactive Lines Variation 08
// Keeping mousePressed() function to add new origin points but each point is a random WARM toned hue

let counter = 0;
let origins = []; // origin is the starting points where mouse is pressed 
//let coolPalette = [(0,80,80), (0,100,255), (0,255,100)] // for this to work need to determine a predefined arrays

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100); // 360 for hue
    background(0);
}

function draw() {
    background(0, 20); // Fade previous lines to maintain twinkle effect 
    strokeWeight(2);
    
//CHANGES for mousePressed() function , determining the randomness of the lines with a max line length 
for (let i = 0; i < origins.length; i++) {
  let origin = origins[i];
  let x = origin.x + random(-50, 50); // stored x coordinates of that mouse press
  let y = origin.y + random(-50, 50); // stored y coordinates of that mouse click 
 let warmHue = random (0,50); // let the colours range from 0-50 as they are warmer tones in HSB

stroke(warmHue, 80, random(50,100)); // high saturation and varied brightness
line(origin.x, origin.y, x, y);
}
}

function mousePressed() {
origins.push(createVector(mouseX, mouseY)); // createVector is storing the each created line sequence as an object to stay put
}

function windowResized() {
 resizeCanvas(windowWidth, windowHeight);
}

// Save 7-second gif
function keyPressed() {
  if (key === 's') {
    saveGif('Random_Interactive_Lines_08_Warm_Tones', 7);
  }
}
