// Jacob Colby MP4

// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;

var gems = [];
var chestPos;


function setup() {

  createCanvas(windowWidth, windowHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;

  // assets
  gem = loadImage('assets/gem.png');
  chest = loadImage('assets/chest.png');
  bg = loadImage('assets/bg.jpg');

  font = loadFont('assets/Minecraft.ttf')

  // spawn a bunch of gems
  for (var i = 0; i < 40; i++) {
    gems.push(new gemSpawn());
  }

  // initialize the chest's position
  chestPos = createVector(width / 2, height - 80);

  // load any images you need
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();
}

function draw() {

  background(106, 125, 65);

  image(bg, width / 2, height / 2, width, height);

  // map command
  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);


  // move the chest around the screen
  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y

  // draw the chest
  image(chest, 0, 0, 100, 100);
  pop();

  // update the chest's position using the accelerometer data
  chestPos.x = xPosition;
  chestPos.y = yPosition;

  // iterate through the gems loop to move them and see if we need to delete gems
  for (var i = 0; i < gems.length; i++) {
    gems[i].display();
    gems[i].drive();
    if (gems[i].pos.dist(chestPos) < 50) {
      gems.splice(i, 1);
    }
  }

  // decorations
  fill('black');
  textSize(30);
  textAlign(CENTER);
  textFont(font);
  fill("White");
  text("Collect the gems!", width / 2, 260, windowWidth - 200, windowHeight - 200);
  textSize(15);
  text("SHAKE TO PLAY AGAIN", width / 2, 260, windowWidth - 50, windowHeight - 50);


}

function deviceShaken() {
  // respawn gems
  gems = []; // empty array
  for (var i = 0; i < 40; i++) {
    gems.push(new gemSpawn());
  }
}

// read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});

// gems class
function gemSpawn() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));


  // methods
  this.display = function() {
    image(gem, this.pos.x, this.pos.y, 50, 50);
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}
