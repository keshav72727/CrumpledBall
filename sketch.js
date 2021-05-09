
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(400,350,20);

	ground = new Ground(750,695,1500,20);	

	dustbin1 = new Dustbin(1200,610,10,150);
	dustbin2 = new Dustbin(1305,680,200,10);
	dustbin3 = new Dustbin(1400,610,10,150);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);

  paper.display();
 
	ground.display();

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});
	}
}



