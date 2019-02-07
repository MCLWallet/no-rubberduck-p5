let angle = 0.0;
var maxLines = 50;
var clickParameter = 1;
var clickParameter2 = 1;
var movement = 1;
var clickState = false;
var thickness = 20;


// Colors
/*
var lineColorR = 230;
var lineColorG = 220;
var lineColorB = 150;
*/
var lineColorR = 140;
var lineColorG = 34;
var lineColorB = 98;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  // put drawing code here
  background(51);
  for (var i = 0; i < maxLines; i++){
    // Line Row 1
    line(0, i*10*movement, windowWidth, i*10*movement);
    stroke(lineColorR*2,lineColorG,lineColorB);
    strokeWeight(thickness);
    // Line Row 2

    line(i*10*movement, 0, i*10*movement, windowHeight);
    stroke(lineColorR,lineColorG,lineColorB);
    strokeWeight(thickness);

  }

  if (!clickState) {
    movement++;
    if (movement >= 20) {
      movement = 0;
    }
  }
  else {
    movement = random(20);
  }

  //noLoop();

}

function mouseClicked() {
  if (!clickState) clickState = true;
  else clickState = false;
}
