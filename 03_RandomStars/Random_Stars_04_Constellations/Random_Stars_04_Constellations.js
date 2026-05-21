// RANDOM STARS Variation 04
// Constellations, using P5.js and VSC to trouble shoot and understand code
// inspired by Sketch 01: Constellations by Robert de Zwart on OpenProcessing 
 
let stars = [];
 
function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 200, 100, 100, 100);
 
    // Create a fixed set of stars
    for (let i = 0; i < 120; i++) {
        stars.push({
            x: random(width), y: random(height), r: random(1, 8) // size of constellations
});
}
}
 
function draw() {
    background(0,20,80); // light pink
 
    let connectDist = 100; // how close two stars need to be to draw a line
 
    //creating the lines between the stars
    for (let i = 0; i < stars.length; i++) {
        for (let s = i + 1; s < stars.length; s++) {
            let d = dist(stars[i].x, stars[i].y, stars[s].x, stars[s].y);
            if (d < connectDist) {
                let b = map(d, 0, connectDist, 200, 0); // b=opacity value for lines between stars
                stroke(300, 100, 400, b);
                strokeWeight(0.5);
                line(stars[i].x, stars[i].y, stars[s].x, stars[s].y);
    }
    }
    }
 
    noStroke(); // stars on top of lines
    fill(225, 225, 100);
    for (let s of stars) {
        circle(s.x, s.y, s.r);
    }
}
 
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
 
