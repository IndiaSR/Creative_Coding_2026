// Random Interactive Lines Variation 06
// mousePressed() function to add new origin points

let counter = 0;
let origins = []; // origin is the starting points where mouse is pressed 

function setup() {
    createCanvas(windowWidth, windowHeight);
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

stroke(random(255), random(255), random(255)); // make random colours 
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
    saveGif('Random_Interactive_Lines_06_Mouse_Pressed_Points', 7);
  }
}
