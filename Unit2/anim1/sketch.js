let x = 0;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  font1 = loadFont("assets/Bebas.otf");
}

function draw() {
  background('black');
  fill('white');

  x += 5;
  if (x > width) {
    x = 0;
  }
  textFont(font1, 40)
  text("Jacob Colby", x, height/2);
}
