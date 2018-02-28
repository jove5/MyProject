/* 
Setting color. 
Created by Jovan Georgievski March 2017. 
*/

function setup() {
  createCanvas(800, 400);
}

// an ellipse is draw at an x position of 250 and a y position of 250 with a width of 150 and a height of 50.
function draw() {
  background(0);
  stroke(0, 255, 200); // stroke() sets the color of the outline
  strokeWeight(10);     // strokeWeight() sets the thickness of the outline
  fill(255, 35, 125);  // fill() sets the color of the object
  ellipse(250, 250, 150, 50);
  ellipse(450, 250, 150, 50);// another ellipsse is draw at x position of 450 and y position of 250 with width of 150 and a hight of 50.
  stroke(0, 255, 0);
  line(350, 10, 250, 225);
  line(350, 10, 450, 225);
}