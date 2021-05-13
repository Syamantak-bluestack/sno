var bg,bgImage;
var snow1,snow2
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snow1=new snow(0,200);
}

function preload() {
  bgImage=loadImage("snow2.jpg");
  

}


function draw() {
  background(bgImage)
  Engine.update(engine);
  snow1.display();
  drawSprites();
  

}