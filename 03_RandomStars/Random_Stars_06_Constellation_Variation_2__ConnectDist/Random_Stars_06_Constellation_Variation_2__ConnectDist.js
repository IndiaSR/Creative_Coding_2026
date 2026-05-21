// RANDOM STARS Variation 06
// changed from variation 05 by adjusting the stroke weight, background colour, connectDist to 4
let stars = [];
 
function setup() {
    createCanvas(windowWidth, windowHeight);
    //colorMode(HSB, 200, 100, 100, 100);
 
    // Create a fixed set of stars
    for (let i = 0; i < 120; i++) {
        stars.push({
            x: random(width), y: random(height), r: random(1, 8) // size of constellations
});
}
}
 
function draw() {
    background(255,255,255); // white
 
    let connectDist = 400; // how close two stars need to be to draw a line
 
    //creating the lines between the stars
    for (let i = 0; i < stars.length; i++) {
        for (let s = i + 1; s < stars.length; s++) {
            let d = dist(stars[i].x, stars[i].y, stars[s].x, stars[s].y);
            if (d < connectDist) {
                let b = map(d, 0, connectDist, 200, 0); // b=opacity value for lines between stars
                stroke(255, 20, 20, b);
                strokeWeight(4);
                line(stars[i].x, stars[i].y, stars[s].x, stars[s].y);
    }
    }
    }
 
    noStroke(); // stars on top of lines
    fill(20, 20, 100);
    for (let s of stars) {
        circle(s.x, s.y, s.r);
    }
}
 
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
 
