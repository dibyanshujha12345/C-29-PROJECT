const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var wall1,wall2;
var rope ;
var link;
var link1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  wall1= new Base(40,height-420,400,70);
  wall2 = new Base(770,height-420,400,70);
  rope = new Bridge(10,{x:550,y:100});

  Matter.Composite.add(rope.body,wall1);
  link = new Link(rope,wall2);
  //link1 = new Link(rope,wall1); 

}

function draw() {
  background(51);
  Engine.update(engine);
  wall1.display();
  wall2.display();
  rope.show();
}
