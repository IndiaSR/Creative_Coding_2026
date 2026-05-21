//Draw Rays and Fade Variation 07
//High Opacity so no fade 

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(25, 25, 255); 
}

function draw() {
//4th value is opacity which creates the fading effect 
  background(25, 25, 255, 255);

  if (mouseIsPressed) {
    // If the mouse is pressed, colour of circle changes
    fill(0, 255, 0);
    stroke(255, 255, 255);
    
    // 💡 TRY THIS: Uncomment the line below to randomize the background color when clicked!
     //background(random(255), random(255), random(255)); 
  } else {

    fill(random(255), random(255), random(255)); 
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
