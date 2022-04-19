function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for(let i = 0; i < 100; i++){
    stroke(random(255), random(255), random(255));
    strokeWeight(random(5));
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    line(x1, y1, x2, y2);

  }
}
