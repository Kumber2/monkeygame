
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var survivalTime = 0; 

var gameState;
var PLAY:
var END;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x= ground.width/2;
  console.log(ground.x);
  
}


function draw() {
  background(255);

  if(ground.x <0){
    ground.x = ground.width/2;
  }
  
 if(keyDown("space")) {
   monkey.velocityY = -12;
 }
  
  monkey.velocityY = monkey.velocityY + 0.8;
 
  monkey.collide(ground);
 
 
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime , 10,50);
  
  
  drawSprites();
  
}

function banana(){
  
  if (World.frameCount % 80 == 0){
  banana = createSprite(400,200,20,20);                                        banana.scale = 0.2;                                                          
  banana.addImage(banana);
  
  
  banana.velocityX = 7;
  banana.setLifetime = 100;
           
  }
  
}

function obstacle(){
  
  if (World.frameCount % 100 == 0){
  obstacle = createSprite(400,200,20,20);                                        obstacle.scale = 0.2;                                                          
 obstacle.addImage(obstacle);
  
  
 obstacle.velocityX = 7;
  obstacle.setLifetime = 100;
           
    if(obstacle.isTouching){
  gameState = END;
    }
  }
  
}

