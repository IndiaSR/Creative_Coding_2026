/**
 * Random Interactive Lines Variation 05
 //position and angle of line determine the colour, creating a colour wheel 
 * made with the help of Karen ann Donnachie
 */

let counter = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB, 360,100,100,100);
}
//CHANGE
function draw() {
    background(0,0,5,10);
    let x=random(width);
    let y=random(height);
//how the angle and hue intertwine    
    let angle=atan2(y-height/2, x-width/2); //(-Pi to +pi)
    let hue=map(angle, -PI,PI,0,360);
    
    let lineLen = dist(width/2, height/2, x, y);
    let weight  = map(lineLen, 0, width/2, 0.2, 3); // stroke thickness and line distance

stroke(hue, 80, 95, 70);
strokeWeight(weight);
line(width/2, height/2, x, y);
  }
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Save a 5-second gif
function keyPressed() {
  if (key === 's') {
    saveGif('Random_Interactive_Lines_05_Colour_Change_on_Angle', 5);
  }
}
