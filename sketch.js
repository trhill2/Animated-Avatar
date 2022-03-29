/***********************************************************************************
  Sprite Navigation

  Simple use of the p5.play library
------------------------------------------------------------------------------------
	To use:
	Add this line to the index.html

  <script src="p5.timer.js"></script>
***********************************************************************************/

// This is a 'sprite' which we can move
var ghost;
var speed = 10;

// The is a static sprite
 var star;
 var starImg;

// Static sprite person
var person
var personimg
var person2

// Sun
var sun;
var speed = 15;

function preload() {
  starImg = loadImage('assets/fullStar.png');
  personimg = loadImage('assets/person1 copy.png');
  //person2 = loadImage('assets/person1copy.png');
}
// Setup code goes here
function setup() {
  createCanvas(windowWidth, windowHeight);

  // create a sprite with dimensions
  ghost = createSprite(100, 100);
  sun = createSprite(300, 100);

  // This is a *numbered* sequence of PNG files
  // create a star in the middle of the screen
  // star = createSprite(width/2, height/2);
  // star.addImage('star', starImg);



  person = createSprite(800, 200);
  person.addImage('person', personimg);

  // We add animation to different sprites
  ghost.addAnimation('floating', 'assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');

  sun.addAnimation('rotate', 'assets/avatar1.png', 'assets/avatar4.png');
  


  frameRate(130);
 }

// Draw code goes here
function draw() {
  // could draw a PNG file here
  background(255);

  // trap keyboard arrow keys
  checkMovement();

  // drawSprites is a function in p5.play, draws all the sprites
  drawSprites();

  // callback function
  // ghost.overlap(star, ghostCollision);
  //sun.overlap(star, sunCollision);
  sun.overlap(person, sunCollision);
}

// This will reset position
function keyPressed() {
  if( key === ' ') {
    ghost.position.x = width/2;
    ghost.position.y = height/2;
  }
  if( key === ' ') {
    sun.position.x = width/2;
    sun.position.y = height/2;
  }
}

function checkMovement() {
  // Check x movement
  if(keyIsDown(RIGHT_ARROW)) {
    ghost.velocity.x = speed;
  }
  else if(keyIsDown(LEFT_ARROW)) {
    ghost.velocity.x = -speed;
  }
  else {
    ghost.velocity.x = 0;
  }

  // Check y movement
  if(keyIsDown(DOWN_ARROW)) {
    sun.velocity.y = speed;
  }
  else if(keyIsDown(UP_ARROW)) {
    sun.velocity.y = -speed;
  }
  else {
    sun.velocity.y = 0;
  }
}
function checkMovement() {
  // Check x movement
  if(keyIsDown(RIGHT_ARROW)) {
    sun.velocity.x = speed;
  }
  else if(keyIsDown(LEFT_ARROW)) {
    sun.velocity.x = -speed;
  }
  else {
    sun.velocity.x = 0;
  }

  // Check y movement
  if(keyIsDown(DOWN_ARROW)) {
    sun.velocity.y = speed;
  }
  else if(keyIsDown(UP_ARROW)) {
    sun.velocity.y = -speed;
  }
  else {
    sun.velocity.y = 0;
  }
}

// SpriteA is the sprite in question, spriteA will be ghost in this case
// SpriteB is the one that it collided with
// function ghostCollision(spriteA, spriteB) {
//   ghost.position.x = 100;
//   ghost.position.y = 100;

//   spriteB.remove();
// }

function sunCollision(SpriteA, spriteB) {
  sun.position.x = 200;
  sun.position.y = 200;

  spriteB.remove();
}