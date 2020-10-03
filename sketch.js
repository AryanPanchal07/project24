
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1;
var ground;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(50,50,50,50);
	ground = new Ground(600, height, 1200, 20);
	box1 = new Dustbin(500, 610, 20, 100);
	box2 = new Dustbin(700, 610, 20, 100);
	box3 = new Dustbin(600, 650, 200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();	
  ground.display();	
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:385,y:-385});
	}
}

