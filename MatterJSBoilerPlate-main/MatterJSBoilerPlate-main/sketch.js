
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj , leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.update(engine);

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(220,10,10, ball_options);
	World.add(world,ball);

	//Create the Bodies Here.
	groundObj = new Ground(width/2,670, width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50,10,30);

  groundObj.display();
  leftSide.display();
  rightSide.display();
  
 
  ellipse(ball.position.x,ball.position.y,20);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){

		Matter.Body.applyForce(ball,ball.position,{x:20,y:-20.05});

	}
}



