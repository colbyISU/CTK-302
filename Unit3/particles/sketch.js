let cars = [];

function setup() {
  createCanvas(500, 500);
  // for (let i = 0; i < 20; i++) {
  //   cars.push(new Car());
  // }
  noStroke();
}

function draw() {
  background('grey');
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].a <= 0) {
      cars.splice(i, 1);
    }
  }
}


class Car {
  constructor() {
    // Attributes
    this.pos = createVector(width * 0.05, height * 0.95);
    this.vel = createVector(random(1, 5), random(-6, -2));
    // this.r = random(255);
    // this.g = random(255);
    // this.b = random(255);
    this.a = random(255);
    this.size = random(30);
  }

  // Methods
  display() {
    fill(0, 0, 0, this.a);
    circle(this.pos.x, this.pos.y, this.size);
    fill(255, 255, 255, this.a);
    circle(width-this.pos.x, height-this.pos.y, this.size);
  }

  move() {
    this.pos.add(this.vel);
    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }

}
