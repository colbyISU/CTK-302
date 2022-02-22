let state = 0;
let song1, song2, song3;

function preload() {
  song1 = loadSound("assets/ClearDay.mp3");
  song2 = loadSound("assets/Funky.mp3");
  song3 = loadSound("assets/Inspire.mp3");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch(state) {
    case 0:
    song1.play();
    state = 1;
    break;

    case 1:
    background(150);
    text("Listening to Song 1", 100, 100);
    break;

    case 2:
    song2.play();
    state = 3;
    break;

    case 3:
    background("orange");
    text("Listening to Song 2", 200, 200);
    break;

    case 4:
    song3.play();
    state = 5;
    break;

    case 5:
    background("blue");
    text("Listening to Song 3", 300, 300);
    break;
  }
}

function mouseReleased() {
  state = (state + 1) % 6;
  song1.pause();
  song2.pause();
  song3.pause();
}
