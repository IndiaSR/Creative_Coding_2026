//RANDOM STARS variation 02

//Stars get bigger when mouse is pressed
//Uses let circlemax = function, changed opacity of stars and bg colour to black 

//let bgHue;
let circleMax=10;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("black");
}

function draw() {
    // Add multiple particles per frame
    for (let i = 0; i < 5; i++) {
        let x = random(width); // Random x position across the canvas
        let y = random(height); // Random y position across the canvas
        let r = random(0.2, circleMax); // Random radius for the star, each click increases circle size
        
        fill(255, 255, 255, 255); // White stars with some transparency
        noStroke(); // No outline for the stars
        circle(x, y, r); // Draw the star as a circle at the random position with the random radius (r=radius)
    }
    
    // Fade background faster for trails
    background(0, 0, 0, 10); // adjust opacity for the twinkling trail effect
}

//CHANGE
function mousePressed() {
circleMax = min(circleMax + 1, 100); // increase the maximum star size each click
}

//save as GIF
function keyPressed() {
  if (key === 's') {
    saveGif('Random_Stars_02_Stars_Bigger_on_Press', 5); // Saves 5 seconds of animation
  }
}
