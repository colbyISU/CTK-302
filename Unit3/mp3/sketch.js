let spawns = [];
let state = 0;
let timer = 0;
let bucket;
let bucketPos;
let slime;
let slimes = [];
let bg;
let font1;
let lose;
let win;
let hit;

function setup() {
  //Fullscreen
  createCanvas(windowWidth, windowHeight);

  slimes[0] = loadImage("assets/slime1.png");
  slimes[1] = loadImage("assets/slime2.png");
  slimes[2] = loadImage("assets/slime3.png");
  bucket = loadImage("assets/bucket.png");

  slime = loadImage("assets/slime1.png");

  bg = loadImage('assets/bg.png');
  lose = loadImage('assets/lose.png');
  win = loadImage('assets/win.png');
  font1 = loadFont('assets/Slime.ttf');
  hit = loadSound('assets/Hit.mp3');

  for (var i = 0; i < 8; i++) {
    spawns.push(new Spawn());
  }

  bucketPos = createVector(width / 2, height - 80);
  imageMode(CENTER);
}

function draw() {
  switch (state) {
    case 0:
      background('green');
      fill('white');
      textFont(font1);
      textSize(50);
      textAlign(CENTER);
      text("SLIME SURGE", width / 2, height * 0.3);

      textFont('Courier New');
      textSize(30);
      textStyle(BOLD);
      text("GATHER ALL THE SLIME!", width / 2, height * 0.38);

      textSize(20);
      textStyle(NORMAL);
      fill(150, 255, 150);
      text("CLICK TO BEGIN", width / 2, height * 0.8);
      break;

    case 1:
      game();
      timer++;
      if (timer > 800) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      //Lose Screen
      image(lose, width / 2, height / 2);
      break;

    case 3:
      //Win Screen
      image(win, width / 2, height / 2);
      break;
  }

}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2:
      resetTheGame();
      state = 0;
      break;

    case 3:
      resetTheGame();
      state = 0;
      break;
  }
}

function resetTheGame() {
  spawn = [];
  for (var i = 0; i < 5; i++) {
    spawns.push(new Spawn());
  }
  timer = 0;
}

function Spawn() {
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.slimeNum = floor(random(slimes.length));

  this.display = function() {
    image(slimes[this.slimeNum], this.pos.x, this.pos.y, 100, 100);
  }

  this.move = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) bucketPos.x = bucketPos.x - 5;
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) bucketPos.x = bucketPos.x + 5;
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) bucketPos.y = bucketPos.y - 5;
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) bucketPos.y = bucketPos.y + 5;

}

function game() {
  image(bg, width / 2, height / 2);

  for (var i = 0; i < spawns.length; i++) {
    spawns[i].display();
    spawns[i].move();

    if (spawns[i].pos.dist(bucketPos) < 50) {
      spawns.splice(i, 1);
      hit.play();
    }
  }

  if (spawns.length == 0) {
    timer = 0
    state = 3;
  }

  image(bucket, bucketPos.x, bucketPos.y, 100, 100);
  checkForKeys();
}
