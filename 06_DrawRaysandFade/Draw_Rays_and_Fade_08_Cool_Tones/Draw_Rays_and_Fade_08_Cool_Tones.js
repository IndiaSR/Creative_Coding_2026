//Draw Rays and Fade Variation 08
//Cool Tones in squares, white background

let coolPalette = [(0,80,80), (0,100,255), (0,255,100)];

function setup() {
  createCanvas(windowWidth, windowHeight);
   colorMode(HSB, 360, 100, 100, 100); // 360 for hue
   background(20); // WARM TONED BACKGROUND
  
}

function draw() {
//4th value is opacity which creates the fading effect 
  background(255, 10);

  if (mouseIsPressed) {

 let coolHue = random(180, 260);

    fill(coolHue, 80, random(50, 100));
    stroke(255);
    
  } else {

    fill(200,80,80); 
    stroke(0);      
  }
  
  strokeWeight(2);
  
// CIRCLE
  square(mouseX, mouseY, 64);
  
  // "rays" extending from the center out to the cursor 
   //circle(width / 2, height / 2, 24);
   //line(width / 2, height / 2, mouseX, mouseY);  
}


// Save 5-second gif
function keyPressed() {
  if (key === 's') {
    saveGif('Draw_Rays_and_Fade_07_High_Opacity.gif', 5);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 255, 0); 
}
