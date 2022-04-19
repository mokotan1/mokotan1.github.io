function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  let x = random(width);
  let y = random(height);
  for(let i = 100; i > 0; i -= 20){
    fill(random(255), random(255), random(255))
    ellipse(x, y, i, i);
  }
}
