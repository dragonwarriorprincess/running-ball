var box;
function preload(){
ball=loadImage("sparkly ball.png")
}
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
box.addImage(ball)
box.scale=0.2

}

function draw() 
{
   background("purple");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




