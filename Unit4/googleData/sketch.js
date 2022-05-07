var bubbles = [];
let url = "";

function setup() {
  let key = "12abpdASFLPWpodxmrvP3CfVc-gFms-zitg5BjYXQ7sE";

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What's your first name?"],
        data[i]["What's the best season?"],
        data[i]["What's the best holiday?"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("purple");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(name, szn, hol) {
    // only the order of these parameters matters!
    this.name = name;
    this.szn = szn;
    this.hol = hol;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("white");
    fill("pink")
    circle(this.pos.x, this.pos.y + 10, 120, 120);
    fill("black");
    text(
      this.name + "\n" + this.szn + "\n" + this.hol,
      this.pos.x,
      this.pos.y
    );

    this.pos.add(this.vel);
    if (this.pos.x > width + 30) this.pos.x = -30;
    if (this.pos.y > height + 30) this.pos.y = -30;

  }


}
