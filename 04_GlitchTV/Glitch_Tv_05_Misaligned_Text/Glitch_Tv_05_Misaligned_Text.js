//GLITCH TV variation 05
//text misaligned, ADJUSTING THE TRANSPARENT LAYERS
//troubleshooting with vsc

 // ============================================
 // Original code by Karen ann Donnachie and Andy Simionato 
 // for Creative Coding 2026
 // ============================================

 // Global variables for the background image effects
let backgroundOpacity;
let backgroundFadeDirection;
let img, imgXoffset;

function preload() {
img = loadImage('data/8569e2ab-1257-4841-b9aa-98f067f50c05.jpeg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noStroke();
    textAlign(CENTER, CENTER);
    
    // Track opacity for the background fade effect (0 to 1)
    backgroundOpacity = 0;
    backgroundFadeDirection = 1; // fade in first
}

function draw() {
    backgroundOpacity += backgroundFadeDirection * 0.005; // Adjust fade speed here (0.01 = 1% per frame)
    // Keep opacity between 0 and 1
    if (backgroundOpacity >= 1) {
        backgroundFadeDirection = -1;
    }
    if (backgroundOpacity <= 0) {
        backgroundFadeDirection = 1;
    }

    // Draw background image with fading opacity
    // Using the alpha parameter directly on the image() function
    tint(255, int(backgroundOpacity * 255)); // Apply fade effect to the image
    if (random() < 0.01) {
        imgXoffset = random(-150, 150); // big horizontal glitchy shift
        image(img, imgXoffset, 0, width, height, 0, 0, img.width, img.height);
} else {
        image(img, 0, 0, width, height, 0, 0, img.width, img.height);
}

    // Glitchy background with random color shifts
    let glitchHue = random(0, 360);     // Random hue 0-360
    let glitchSat = random(25, 100);    // Random saturation
    let glitchBri = random(2, 10);      // Random brightness

    // Random glitch flashes - appears occasionally
    if (frameCount % random(10, 20) === 0) {
        // frameCount % random(10,50) creates unpredictable timing
        fill(random(0, 255), random(0, 255), random(0, 255), random(50, 100));
        // Full screen flash for glitch effect
        rect(0, 0, width, height);
}

    // Glitchy pixel noise - simulates digital interference
    for (let i = 0; i < 10; i++) {
        let x = random(width);      // Random x position
        let y = random(height);     // Random y position
        let size = random(1, 5);    // Random pixel size
        let r = random(0, 255);     // Random red value
        let g = random(0, 255);     // Random green value
        let b = random(0, 255);     // Random blue value

        fill(r, g, b);              // RGB color mode
        rect(x, y, size, size);     // Draw small colored rectangles
}

    // Glitchy color inversion effect - occasional screen flash
    if (frameCount % 35 === 0) {
        let invert = random(0, 1); // 0 = no invert, 1 = full invert
        fill(255 - invert * 255, invert * 255, invert * 255, 80);
        rect(0, 0, width, height); // Flash entire screen
}

    // Glitchy text effect - appears every 40 frames
    if (frameCount % 40 === 0) { //CHANGE
        // Array indexing with random() for text selection
        // floor() converts random decimal to integer index
        let glitchText = ['ERROR', 'GLITCH TV', 'ERROR', 'GL T H T ', 'G  T TV'][floor(random(0, 5))];
        fill(255, 255, 255);
        textSize(height/2);
        text(glitchText, width / 2, height / 3); // CHANGED TO BECOME HIGHER

        // Text distortion - offset text for glitch effect
        fill(255, 0, 0, random(50, 300)); // Red with transparency
        textSize(height/1);
        text(glitchText, width / 2 + random(-20, 20), height / 2 + random(-20, 20));

        fill(0, 255, 255, random(50, 100)); // Cyan with transparency
        textSize(height/5);
        text(glitchText, width / 2 + random(-20, 20), height / 2 + random(-20, 20));
    }

    // Glitchy scanlines - horizontal lines like old CRT monitors
    for (let y = 0; y < height; y += 9) {
        fill(0, 0, 0, random(0, 80)); // Black with varying transparency
        rect(0, y, width, 2); // Full width, 2px height
    }

    // Glitchy horizontal bars - random colored strips
    for (let i = 0; i < 15; i++) {
        let y = random(height);     // Random vertical position
        let h = random(2, 10);      // Random height
        let hue = random(0, 360);   // Random color
        let sat = random(80, 100);  // High saturation
        let bri = random(0, 50);    // Low brightness
        let alpha = random(0, 50);  // Very transparent

        fill(hue, sat, bri, alpha);
        rect(0, y, width, h);
    }

    // Glitchy random dots - more digital noise effect
    for (let i = 0; i < 400; i++) {
        let x = random(width); //pick a randomen x position
        let y = random(height); //pick a random y position
        let size = random(0.5, 3); // Random size for dots between 0.5 and 3
        let hue = random(0, 360); // Random hue for colorful noise
        let sat = random(80, 150); // Random saturation for vibrant colors
        let bri = random(100, 255); // Random brightness for visible dots

        fill(hue, sat, bri); // note the HSB color mode
        circle(x, y, size); // Draw small circles for noise
    }

    // Glitchy random rectangles - scattered shapes
    for (let i = 0; i < 15; i++) {
        let x = random(width);
        let y = random(height);
        let w = random(600, 1200);
        let h = random(100, 120);
        let hue = random(100, 260);
        let sat = random(80, 100);
        let bri = random(50, 80);
        let alpha = random(10, 15);

        fill(hue, sat, bri, alpha);
        rect(x, y, w, h);
    }

    // Glitchy frame-based distortion - sine wave movement
    // Runs every 60 frames
    if (frameCount % 60 === 0) {
        // Calculate oscillating vertical offset using sine wave
        let yShift = sin(frameCount * 0.05) * 20;

        // Draw multiple horizontal lines with different offsets
        fill(255, 255, 255, 20); // White line
        rect(0, yShift, width, 5);

        fill(0, 255, 0, 20); // Green line
        rect(0, yShift + 10, width, 5);

        fill(255, 0, 255, 20); // Magenta line
        rect(0, yShift - 10, width, 5);

        // Additional distortion lines for stronger effect
        fill(255, 0, 0, 15); // Red line
        rect(0, yShift + 20, width, 3);

        fill(0, 0, 255, 15); // Blue line
        rect(0, yShift - 20, width, 3);
    }
}

function windowResized() {
    // Adjust canvas size when the window is resized
    resizeCanvas(windowWidth, windowHeight);
}
        
// Save a 5-second gif
function keyPressed() {
  if (key === 's') {
    saveGif('Glitch_Tv_05_Misaligned_Text', 5);
  }
}
