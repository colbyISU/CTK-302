let state = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {

    background(100);

    switch (state) {

        case 0:
            background("blue");
            for (let j = 0; j < 20; j++) {
                for (let i = 0; i < 20; i++) {
                    rect(i * 20, j * 20, 12, 12);
                }
            }
            break;

        case 1:
            background("purple");
            fill(0);
            for (let j = 0; j < 20; j++) {
                for (let i = 0; i < 20; i++) {
                    rect(i * 20, j * 20, 2, 2);
                }
            }
            break;

        case 2:
            background("red");
            for (let j = 0; j < 20; j++) {
                for (let i = 0; i < 20; i++) {
                  fill(random(0,255), random(0,255), random(0,255));
                    ellipse(i * 20, j * 20, 15, 15);
                }
            }
            break;

        case 3:
            background("orange");
            fill("yellow");
            for (let j = 0; j < 20; j++) {
                for (let i = 0; i < 20; i++) {
                    rect(i * 20, j * 20, 1, 1);
                }
            }
            break;

        case 4:
            fill("purple");
            background("yellow");
            for (let j = 0; j < 30; j++) {
                for (let i = 0; i < 30; i++) {
                    ellipse(i * 30, j * 30, 7, 7);
                }
            }
            break;

    }
}

function mouseReleased() {
    state++;
    if (state > 4) state = 0;

}
