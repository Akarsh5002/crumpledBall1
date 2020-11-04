
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
var trash1,trash2,trash3;
var world,groundSprite;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paperObject  = new Paper(200,500,70);
 
   trash1 = new Dustbin(1200,510,20,200);
   trash2 = new Dustbin(1090,600,200,20);
   trash3 = new Dustbin(1000,510,20,200);
   groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  hasCollide(paperObject,groundSprite);
  
paperObject.display();
trash1.display();
trash2.display();
trash3.display();



drawSprites();

  
 
}
function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:140,y:-135})
	}
}

function hasCollide(paperObject,groundSprite){
	
}
