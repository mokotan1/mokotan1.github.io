function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background color is white
  background(0);
  //repeat draw some circle color is gray
  for(let i = 250; i >= 50; i -= 50){
    fill(i);
    ellipse(width/2, height/2, i, i);
  }
}
