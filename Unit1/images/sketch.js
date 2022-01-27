let one;
let two;
let three;

function setup() {
  createCanvas(500, 500);
  background(0);

  one = loadImage("assets/1.png");
  two = loadImage("assets/2.jpg");
  three = loadImage("assets/3.jpg");
}

function draw() {
  image(one, width/2 - 50, 100, 100, 100);
  image(two, width/2 - 50, 200, 100, 100);
  image(three, width/2 - 50, 300, 100, 100);
}
