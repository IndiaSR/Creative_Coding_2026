//RANDOM STARS variation 03

// Stars cluster around the mouse
//can paint the canvas with stars using mouse

function setup() {
    createCanvas(windowWidth, windowHeight);
    background("black");
}

function draw() {
    // Add multiple particles per frame
   for (let i = 0; i < 5; i++) {
        let x = mouseX + random(-100, 100); // x position follow mouse
        let y = mouseY + random(-100,100); // y position follow mouse
        let r = random(0.2, 6);
        let hue = random(360);
        
        fill(255, 255, 255, 255);
        noStroke();
        circle(x, y, r);
}
}

//save as GIF
function keyPressed() {
  if (key === 's') {
    if (typeof saveGif === 'function') {
      // Preferred: use saveGif if the GIF library is included
      saveGif('Random_Stars_03_Mouse_Clusters', 7); // Saves 7 seconds of animation
    }
  }
}
