function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/Bebas.otf");
  font2 = loadFont("assets/HoneyFlourist.otf");
}

function draw() {
  background(35);
  textAlign(CENTER);
  textFont(font1, 40);
  fill('teal');
  text("Font number 1.", 250, 150);
  fill('orange');
  textFont(font2, 60);
  text("Font number 2.", 250, 350);
}
