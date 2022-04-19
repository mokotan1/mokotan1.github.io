function setup() {
  //make the window scale x = 300, y = 200
  createCanvas(300, 300);
}

function draw() {
  background(0);
  //distance of lines is 50 and 1st line point y = 50
  for(let y = 50; y < height; y += 50){
    //line color
    stroke(255);
    //draw line
    line(0, y, width, y);
  }
}
