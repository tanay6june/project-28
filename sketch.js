var rock;
var mango,mango1,mango2,mango3,mango4,mango5;
var tree;
var boy,boyimage;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
   boyimage = loadImage("Plucking+mangoes\Plucking mangoes/boy.png")	
}

function setup() {
	createCanvas(800, 700);

	boy=createSprite(250,150, 10,10);
	boy.scale=1;

    engine = Engine.create();
	world = engine.world;

	mango1 = new FRUIT(650,350,10,10);
	mango2 = new FRUIT(750,350,10,10);
	mango3 = new FRUIT(550,350,10,10);
	mango4 = new FRUIT(650,400,10,10);
	mango5 = new FRUIT(650,300,10,10);

	tree = new TREE(650,350,10,10);
	
	ground = new Ground(750,height,800,20);
	
	rock = new STONE(200,150,20,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);
  detectCollision(rock,mango5);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  tree.display();

  ground.display();
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    stone.fly ()
}

function keyPressed() { 
  if (keyCode === 32) { 
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
    launcherObject.attach(stone.body); 
  } 
  }

function detectCollision(lstone,lmango){
  mangoBodyPosition=lamngo.body.position
  stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r)
    {
      Matter.Body.setStatic(lamngo.body,false);
}
}



