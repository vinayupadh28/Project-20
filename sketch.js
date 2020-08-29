//Creating Global Variables
var car,wall;
var speed, weight;
function setup() {
  //Creating Canvas
  createCanvas(1600,400);
  //Creating Objects
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  wall(80,80,80);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
  //Creating Color Changing Functions
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight* speed* speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformation< 180 && deformation>100);
    {
      car.shapeColor=color(230,230,0);
    }

    if(deformation<180)
    {
      car.shapeColor=color(0,255,0);
    }
  }

}

function draw() {
  background(255,255,255);  
  drawSprites();
}