let state = 0;

function setup() {
    createCanvas(500, 500);
    textAlign(CENTER);
    rectMode(CENTER);
    textSize(28);
    textFont("Georgia");
}

function draw() {
    switch (state) {
        case 0:
            background("yellow");
            text("why?", width / 2, height / 2);
            break;
        case 1:
            background("green");
            text("because", width / 2, height / 2);
            break;
    }
}

function mouseReleased() {
    state = (state + 1) % 2;
}
