var hr,mn,sc;

function setup() {
  createCanvas(600,500);
  angleMode(DEGREES);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");

  push();
  angleMode(DEGREES);
  strokeWeight(5);
  stroke("white");
  fill("green");
  textSize(70);
  text("TICK TOCK",130,80);
  pop(); 

  
  translate(300,300);
  rotate(-90);

  

  let hr = hour();
  let mn = minute();
  let sc = second();   
  
  strokeWeight(8);
  stroke("red");
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle );
  
  
  stroke("blue");
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle );
  
  stroke("yellow");
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle );
 
  push();
  rotate(secondAngle);
  stroke("red");
  line(0, 0, 100, 0);
  pop();
  
  push();
  rotate(minuteAngle);
  stroke("blue");
  line(0, 0, 100, 0);
  pop();
  
  push();
  rotate(hourAngle);
  stroke("yellow");
  line(0, 0, 100, 0);
  pop();
  
  stroke(255);
  point(0, 0);

  drawSprites();

 
}