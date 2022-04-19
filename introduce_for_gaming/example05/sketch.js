function setup() {
  createCanvas(500, 500);
  background(200);
  textSize(30);
  textAlign(CENTER);

  //while many used to infinity loop
  //when i make infinity loop that i must make escape point
  while(true){
    let password = int (random(-10, 10));
    if(password == 5){
      //loop escape point
      break;
    }
    if(password < 0){
      //do not go to below code but do restart while
      continue;
    }
    fill(0);
    text(password, random(width), random(height));
  }
  fill(255, 0, 0);
  text('Welcome!', width/2, height/2);
}

//loop never end
function draw(){  

  //loop draw some line utilize for
  /*
  for(let y = 50; y < height; y+=50){
    stroke(255);
    line(0, y, width, y);
  }
  */

  //loop: draw some line utilize while
  /*
  //impotent valuable point 
    let y = 50; 

    while(y < height){
    
    stroke(255);
    line(0, y, width, y);
    y+=50;

  }*/

  //loop draw some line utilize do-while
  //draw some line until to y is become bigger than height
  /*let y = 50;
  do{
    stroke(255);
    line(0, y, width, y,);
    y+=50;
  }while(y < height);
  */
//don't use ';' at behind do but must use at behind while
//do-while must work at least one time
}
