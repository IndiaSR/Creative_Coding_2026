// RANDOM STARS Variation 08
// keeping mousePressed() function, adjusting size and density of stars
let stars = [];
 
function setup() {
    createCanvas(windowWidth, windowHeight);
    //colorMode(HSB, 200, 100, 100, 100);
 
    // Create a fixed set of stars
    for (let i = 0; i < 50; i++) { // changed beginning density 
        stars.push({
            x: random(width), y: random(height), r: random(5, 20) // size of constellations
});
}
}
 
function draw() {
    background(5,5,5); // white
 
    let connectDist = 100; // how close two stars need to be to draw a line
 
    //creating the lines between the stars
    for (let i = 0; i < stars.length; i++) {
       for (let s = i + 1; s < stars.length; s++) {
       let d = dist(stars[i].x, stars[i].y, stars[s].x, stars[s].y);
       if (d < connectDist) {
 let b = map(d, 0, connectDist, 200, 0); // b=opacity value for lines between stars
 stroke(255, 20, 20, b);
 strokeWeight(1);
 line(stars[i].x, stars[i].y, stars[s].x, stars[s].y);
    }
    }
    }
 
    noStroke(); // stars on top of lines
    fill(255, 255, 100);
    for (let s of stars) {
        circle(s.x, s.y, s.r);
    }
}
 
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
 function mousePressed() {
    // Add a new star at the mouse position
    stars.push({ x: mouseX, y: mouseY, r: random(1, 8) });
}
 
 // Save a gif
function keyPressed() {
  if (key === 's') {
    saveGif('Random_Sketch_07_Constellation_interaction', 7);//7 seconds
  }
}
