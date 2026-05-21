//RANDOM STARS variation 01

// Background fades into a different colour with every mouse click
// using mousePressed(); function
//colorMode() function assistaned with VSC

let bgHue = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);//hue. brightness, saturation
        bgHue = random(360);
    background(bgHue, 100, 100);
}

function draw() {
    // Add multiple particles per frame
   for (let i = 0; i < 5; i++) {
        let x = random(width); // Random x position across the canvas
        let y = random(height); // Random y position across the canvas
        let r = random(0.2, 6); // Random radius for the star, smaller values for more distant stars
        let hue = random(360); // Random hue for color variation (used for our HSB)
        
        fill(0, 0, 100, 80); // White stars with some transparency
        noStroke(); // No outline for the stars
        circle(x, y, r); // Draw the star as a circle at the random position with the random radius (r=radius)
    }
    
    // Fade background faster for trails
    //background(0, 0, 0, 10); // adjust opacity for the twinkling trail effect
    background(bgHue, 100, 100, 10); 
}

//CHANGE
function mousePressed() {
  bgHue = random(360); // Change the background colour each click
    
}

//save as GIF
function keyPressed() {
  if (key === 's') {
    saveGif('Random_Stars_01_Background_Changing_Colour', 7); // Saves 7 seconds of animation
  }
}
