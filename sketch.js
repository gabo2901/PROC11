var ship, ship_movement;
var sea, seaImg;

function preload() {
  ship_movement = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  seaImg = loadImage("sea.png");
}


function setup() {

  createCanvas(400, 400);
  ship = createSprites(200, 200, 20, 20);
  ship.addAnimation("movement", ship_movement);
  ship.scale = 0.25;

  sea = createSprites(200, 180);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale = 0.3;



}

function draw() {
  sea.velocityX = -3;
  if (sea.x < 0) {
    sea.x = sea.with / 2;

  }

  background("blue");
  drawSprites();
}