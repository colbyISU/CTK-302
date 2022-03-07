let state = 0;
let timer = 0;
let img;

function setup() {
  createCanvas(400, 400);
  img = loadImage("assets/Art.jpg");
}

function draw() {
    background(100);
    switch (state) {
        case 0:
            background("yellow");
            text("0", 100, 100);

            timer++;
            if (timer > 3 * 60) {
                timer = 0;
                state = 1;
            }
            break;

        case 1:
            text("1", 200, 200);
            timer++;
            if (timer > 5 * 60) {
                timer = 0;
                state = 2;
            }
            break;

        case 2:
            background("blue");
            text("2", 300, 300);
            timer++;
            if (timer > 3 * 60) {
                timer = 0;
                state = 0;
            }
            image(img, width/2 - 75, height/2 - 75, 150, 150);
            break;
    }
}
