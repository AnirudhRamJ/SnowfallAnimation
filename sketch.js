const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImage, snowflakeImage;
var maxSnow = 200;
var snow = [];

function preload() {
  backgroundImage = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  for (var i = 0; i < maxSnow; i++) {
    snow.push(new Snow(random(0, 800), random(0, 10)));
  }
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  for (var i = 0; i < maxSnow; i++) {
    snow[i].display();
    snow[i].updateY();
  }
  drawSprites();
}