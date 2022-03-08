let y = 500;
let x;
let timer = 0;
let state = 0;
let mic;
let vol;
let pop;

function setup() {
  createCanvas(700, 500);
  bg = loadImage('assets/Background.jpg');
  balloon = loadImage('assets/Balloon.png')
  popimg = loadImage('assets/Pop.png');

  pop = loadSound("assets/Pop.wav");

  mic = new p5.AudioIn();
  mic.start();

  textAlign(CENTER);
  rectMode(CENTER);
  textFont("Courier New");

  x = random(100, 600);
}

function draw() {
  image(bg, 0, 0);
  if (y > height) {
    y = 0;
  }
  switch (state) {
    case 0:
      textStyle(ITALIC);
      textSize(16);
      text("Click to start!", width/2, height/2);
      if (mouseIsPressed) {
        state = 1;
      }

      break;

    case 1:
      textStyle(BOLD);
      textSize(20);
      text("Wait... do you see that?", width/2, height/2);
      timer++;
      if (timer > 3.5 * 60) {
        state = 2;
        timer = 0;
      }

      break;

    case 2:
      fill("Maroon");
      textSize(30);
      text("IT'S A BALLOON!", width/2, height/2);
      balloon.resize(100, 200);
      image(balloon, x, y);
      y -= 0.5;

      timer++;
      if (timer > 5 * 60) {
        state = 3;
        timer = 0;
      }

      break;

    case 3:
      fill("Navy");
      textStyle(ITALIC);
      textSize(24);
      text("I wonder what happens if you yell?", width/2, height/2);
      balloon.resize(100, 200);
      image(balloon, x, y);
      y -= 0.25;
      vol = mic.getLevel();
      if (vol > 0.1) {
        pop.play();
        state = 4;
        timer = 0;
      }

      break;

    case 4:
      fill("Black");
      textStyle(BOLDITALIC);
      text("Nice work!\nClick to restart!", 150, 100);
      popimg.resize(150, 300);
      image(popimg, x, y);

      if (mouseIsPressed) {
        state = 1;
      }


  }
}
