//RANDOM STARS original code

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("black");
}

function draw() {
    // Add multiple particles per frame
    for (let i = 0; i < 5; i++) {
        let x = random(width); // Random x position across the canvas
        let y = random(height); // Random y position across the canvas
        let r = random(0.2, 6); // Random radius for the star, smaller values for more distant stars
        let hue = random(360); // Random hue for color variation
        
        fill(hue, 80, 90); // Set fill color with random hue and some saturation and brightness
        noStroke(); // No outline for the stars
        circle(x, y, r); // Draw the star as a circle at the random position with the random radius (r=radius)
    }
    
    // Fade background faster for trails
    background(0, 0, 0, 10); // adjusting the opacity to make stars fade quicker, twinkling effeect
}
