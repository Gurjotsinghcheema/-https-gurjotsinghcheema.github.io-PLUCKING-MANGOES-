const Constraint=Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1,R1,r1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    R1= new ROOF(400,100,700,50)
    b1= new bob(400,300,100)
	r1 =new rope(400,300,R1,b1)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(249, 247, 247));
  R1.display()
  b1.display()
  r1.display()
  drawSprites();
 
}



