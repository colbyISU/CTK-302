let angle = 0;
let x = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  push();
  translate(x - 300, 0);
  avatar();
  x += 5;
  if (x - 200 > width) {
    x = 0;
  }
  pop();
}

function avatar() {
  if (mouseIsPressed) {
    background(40);
    // Mask Base
    fill("black");
    ellipse(200, 200, 200, 250);
    fill(40);
    ellipse(200, 340, 280, 120);
    fill("black");
    ellipse(200, 275, 80, 40);
    // Ears
    fill("black");
    triangle(100, 195, 125, 50, 170, 95);
    triangle(300, 195, 275, 50, 230, 95);
    fill(150, 200, 255);
    triangle(120, 125, 130, 75, 155, 100);
    triangle(280, 125, 270, 75, 245, 100);
    // Nose
    fill("white");
    triangle(190, 260, 210, 260, 200, 270);
    // Eyes
    quad(135, 190, 150, 215, 180, 225, 165, 200);
    quad(265, 190, 250, 215, 220, 225, 235, 200);
    // Details
    fill(150, 200, 255);
    ellipse(200, 150, 30, 60);

    push();
    translate(235, 150);
    rotate(30);
    ellipse(0, 0, 15, 40);
    pop();

    push();
    translate(165, 150);
    rotate(-30);
    ellipse(0, 0, 15, 40);
    pop();

    triangle(105, 215, 170, 235, 115, 250);
    triangle(295, 215, 230, 235, 285, 250);
    triangle(135, 275, 120, 260, 150, 255);
    triangle(265, 275, 280, 260, 250, 255);

    // Cherry Blossoms
    blossom(100, 100, 1.5);
    blossom(300, 270, 1);
    blossom(310, 250, 0.5);
    blossom(150, 70, 0.75);
    blossom(310, 100, 0.3);
    blossom(315, 110, 0.55);
    blossom(150, 300, 1);
    blossom(120, 290, 0.5);
  } else {
    background(150, 190, 255);
    // Mask Base
    fill("white");
    ellipse(200, 200, 200, 250);
    fill(150, 190, 255);
    ellipse(200, 340, 280, 120);
    fill("white");
    ellipse(200, 275, 80, 40);
    // Ears
    fill("white");
    triangle(100, 195, 125, 50, 170, 95);
    triangle(300, 195, 275, 50, 230, 95);
    fill(180, 20, 40);
    triangle(120, 125, 130, 75, 155, 100);
    triangle(280, 125, 270, 75, 245, 100);
    // Nose
    fill("black");
    triangle(190, 260, 210, 260, 200, 270);
    // Eyes
    quad(135, 190, 150, 215, 180, 225, 165, 200);
    quad(265, 190, 250, 215, 220, 225, 235, 200);
    // Details
    fill(180, 20, 40);
    ellipse(200, 150, 30, 60);

    push();
    translate(235, 150);
    rotate(30);
    ellipse(0, 0, 15, 40);
    pop();

    push();
    translate(165, 150);
    rotate(-30);
    ellipse(0, 0, 15, 40);
    pop();

    triangle(105, 215, 170, 235, 115, 250);
    triangle(295, 215, 230, 235, 285, 250);
    triangle(135, 275, 120, 260, 150, 255);
    triangle(265, 275, 280, 260, 250, 255);

    // Cherry Blossoms
    blossom(100, 100, 1.5);
    blossom(300, 270, 1);
    blossom(310, 250, 0.5);
    blossom(150, 70, 0.75);
    blossom(310, 100, 0.3);
    blossom(315, 110, 0.55);
    blossom(150, 300, 1);
    blossom(120, 290, 0.5);
  }
}

function blossom(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  fill(255, 170, 170);
  ellipse(0, 0, 45, 15);
  rotate(60);
  ellipse(0, 0, 45, 15);
  rotate(60);
  ellipse(0, 0, 45, 15);
  fill(250, 215, 0);
  circle(0, 0, 12);
  pop();
}

function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
