
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango//,mango1
var tree
var background
var stone
var fruit_con;


function preload(){
  background = loadImage('background.png')
  tree = loadImage("tree.png")
  stone = loadImage("stone.png")
  mango = loadImage("mango.png")
  cut_sound = loadSound('rope_cut.mp3');
}

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  button = createImg('cut_btn.png');
  button.position(100,90);
  button.size(50,50);
  button.mouseClicked(drop);

ground = new Ground(200,height,width,20) 
 
  rope = new Rope(5,{x:120,y:90})
  rectMode(CENTER)
  ellipseMode(RADIUS)
  mango = Bodies.circle(300,300,20)
  Matter.composite.add(rope.body,mango)
  fruit_con = new Link(rope,mango)
}


function draw() 
{
  background(51);
  image(background,0,0,width,height)
  imageMode(CENTER)
 
  Engine.update(engine);
  world = engine.world
  ground.show()
  drawSprites()
  rope.show()
 
}
function drop()
{
  cut_sound.play();
  rope.break();
  fruit_con.dettach();
  fruit_con = null; 
}
