const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var heroImg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/GamingBackground.png");
  heroImg = loadImage("images/Superhero-01.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1200,20);

  hero = new Hero(400,800,250);

  fly = new Fly(hero.body,{x:500,y:50});
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  
  ground.display();
  hero.display();
  fly.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

