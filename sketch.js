const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, rope, fruit;

let engine;
let world;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
  ground = new Ground();
  rope = new Rope(6, {x:245, y:30});

  fruit = Bodies.circle(300, 300, 20);
}

function draw() 
{
  
  background(51);
  ground.display();
  rope.show();
  Engine.update(engine);
  ellipse(fruit.position.x, fruit.position.y, 30, 30)
   
  
}




