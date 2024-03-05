//global variables:
//these will define the location of our spaceship
var x; //horizontal location
var y = 300; // vertical location
var d = 100; // diameter
var ySpeed, xSpeed; // set speed in two dimensions
var bodyColor = 200; // gray
var starcolor = "yellow"; // yellow
var rotationSpeed = 0; // how fast to rotate the image
var angle = 0; // how far to rotate the image

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
  x = width / 5; // set initial location
  y = height / 2;
  // set x and y speed and direction:
  xSpeed = random(-1, 1); // pick a horizontal speed
  ySpeed = random(-1, 2); // pick a vertical speed
}

function draw(){
  // this function runs again and again (60x per second)
  background(9, 4, 106); //upper half Dark blue sky
  //Lower half water blue
  fill(0, 191, 255); 
  rect(0,200, width, height);// lower half rect.
  noStroke();
  ellipse(75, 230, 100, 100);
  ellipse(175, 230, 100, 100);//waves
  ellipse(275, 230, 100, 100);
  ellipse(375, 230, 100, 100);
  ellipse(475, 230, 100, 100);
  ellipse(575, 230, 100, 100);

  fill("White"); // white text
  text("click the mouse to move seal <3", 410, 220);
  // add your image drawing code here
  fill(255,255,0);//lower half blue
  arc(1, 0, 200, 200, 0, HALF_PI);//sun

  //stars
fill(starcolor); //white norm
triangle(160, 75, 170, 45, 180, 75); // 1 upper triangle
triangle(160, 75, 170, 105, 180, 75); // 1 lower triangle
triangle(300, 125, 310, 95, 320, 125); // 2 upper triangle
triangle(300, 125, 310, 155, 320, 125); //2 lower triangle
triangle(450, 75, 460, 45, 470, 75); // 3 upper triangle
triangle(450, 75, 460, 105, 470, 75); // 3 lower triangle
fill("white")
ellipse(250, 120, 5, 5); // 1 mini star
ellipse(100, 150, 5, 5); // 2 mini star
ellipse(390, 150, 5, 5); // 3 mini star
ellipse(550, 75, 5, 5); // 4 mini star
ellipse(275, 45, 5, 5); // 5 mini star
ellipse(335, 75, 5, 5); // 6 mini star
ellipse(375, 45, 5, 5); // 7 mini star
ellipse(490, 175, 5, 5); // 8 mini star
ellipse(200, 150, 5, 5); // 9 mini star
ellipse(120, 50, 5, 5); // 10 mini star
if (mouseIsPressed) {
  // Check each frame to see if the mouse is pressed, then do something
  starcolor = color("yellow") // Bright yellow

  // Do something here if the mouse is NOT pressed
} else{ 
  starcolor = color("white"); // White
}
  // Update location each frame
 x += xSpeed;
 y += ySpeed;
 angle += rotationSpeed;

 // Ensure the spaceship stays within canvas boundaries
 if (y < height / 2) {
   y = height / 2;
   ySpeed *= -1; // Reverse vertical direction if spaceship goes above the line
 } else if (y > height) {
   ySpeed *= -1; // Reverse vertical direction if spaceship goes below the canvas
 }

 if (x > width - d / 2 || x < d / 2) {
   xSpeed *= -1; // Reverse horizontal direction if spaceship goes beyond canvas boundaries
 }

 // creating seal

 push(); // create a new drawing layer
 translate(x, y); // shift the origin point
 // all shapes are now located relative to (0,0)
 rotate(angle); // spin the object around the origin point

 //seal head
 fill("grey")
 ellipse(0, 0 - d/6, d/2, d/2);
 
 //face
 fill(0, 255, 0); 
 ellipse(0, 0 - d/4, d/6, d/4);
 fill(0); // eyes
 ellipse(0 - d/20, 0 - d/3.5, d/18, d/10);
 ellipse(0 + d/20, 0 - d/3.5, d/18, d/10);
 stroke(0); // mouth (?)
 line(0 - d/50, 0 - d/5, 0 + d/50, 0 - d/5);

 // body
 noStroke();
 fill(bodyColor);
 ellipse(0, 0, d, d/3);
 
 
 
 pop(); // dispose of the UFO layer
}

//do this one time when the mouse is clicked:
function mousePressed(){
 // choose a new trajectory
 xSpeed = random(-2, 2);
 ySpeed = random(-2, 2);
 rotationSpeed = random(-0.1, 0.1);
}