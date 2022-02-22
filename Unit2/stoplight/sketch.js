let state = 0;
let timer = 0;
let x = 0;
let vel = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  background(160, 180, 250);
  fill("black");
  rect(width/2, height/2, 200, 600);

  timer++;
  if (timer > 3*60) {
    timer = 0;
    state = (state + 1) % 3;
  }

// Car
fill("blue");
rect(x - 100, height - 50, 100, 50);
x = (x % (width + 200)) + vel;

// Stoplight
  switch(state) {
    case 2: // Red Light
    fill("red");
    circle(width/2, height/2 - 175, 150); // Top
    fill(50);
    circle(width/2, height/2, 150); // Middle
    circle(width/2, height/2 + 175, 150); // Bottom

    vel = 0;
    break;

    case 1: // Yellow Light
    fill(50);
    circle(width/2, height/2 - 175, 150); // Top
    fill("yellow");
    circle(width/2, height/2, 150); // Middle
    fill(50);
    circle(width/2, height/2 + 175, 150); // Bottom

    vel = 5;
    break;

    case 0: // Green Light
    fill(50);
    circle(width/2, height/2 - 175, 150); // Top
    circle(width/2, height/2, 150); // Middle
    fill("green");
    circle(width/2, height/2 + 175, 150); // Bottom

    vel = 10;
    break;
  }
}
