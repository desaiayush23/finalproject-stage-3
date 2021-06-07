var city,backgroundimg;
var ninja,ninjaRun,ninjaJump;
var edges;
var element1,element2,element3,element4,element1Img,element2Img,element3Img,element4Img;
var score;
var element1Group,element2Group,element3Group,element4Group;
var bomb,bombImg,bombGroup;

function preload(){
backgroundimg=loadImage("ninjabackground.jpg")
  ninjaRun=loadAnimation("ninjaRun1.png","ninjaRun2.png","ninjaRun3.png","ninjaRun4.png","ninjaRun5.png","ninjaRun6.png","ninjaRun7.png")
  ninjaJump=loadAnimation("ninjaJump1.png","ninjaJump2.png","ninjaJump3.png","ninjaJump4.png","ninjaJump5.png")
  element1Img=loadImage("element1.png")
  element2Img=loadImage("element2.png")
  element3Img=loadImage("element3.png")
  element4Img=loadImage("element4.png")
  bombImg=loadImage("bomb.png")
}



function setup() {
  createCanvas(1000,390);
  edges=createEdgeSprites();
  
 city=createSprite(0,70,1200,500);
 city.addImage("city",backgroundimg)
 city.scale=0.9
 city.velocityX=-2
 
 ninja=createSprite(80,330,40,100)
 ninja.addAnimation("ninjaRunning",ninjaRun)
 ninja.scale=0.8

element1Group=createGroup();
element2Group=createGroup();
element3Group=createGroup();
element4Group=createGroup();
bombGroup=createGroup();
 score=0;
}

function draw() {
 background(255);
  
 if(city.x<520){
   city.x=750
 }

 if(keyDown("space")){
   ninja.addAnimation("jumping",ninjaJump)
   ninja.changeAnimation("jumping",ninjaJump)
   ninja.velocityY=-10
   ninja.scale=0.8
 }

 ninja.velocityY=ninja.velocityY+0.8
 ninja.collide(edges)

 spawnElement1();
 spawnElement2();
 spawnElement3();
 spawnElement4();
 spawnBomb();

 if(element1Group.isTouching(ninja)){
   score=score+5;
   element1Group.destroyEach();
 }
 if(element2Group.isTouching(ninja)){
  score=score+5;
  element2Group.destroyEach();
}
if(element3Group.isTouching(ninja)){
  score=score+5;
  element3Group.destroyEach();
}
if(element4Group.isTouching(ninja)){
  score=score+5;
  element4Group.destroyEach();
}
  drawSprites();

 
  textSize(24);
  fill("white");
  text("Assets: "+score,880,35)
}

function spawnElement1() {
  
  if (frameCount % 300 === 0) {
    element1=createSprite(990,random(100,350),35,35)
    element1.addImage("element",element1Img)
    element1.velocityX=-3;
    element1.scale=0.2;
    element1Group.add(element1)
    element1.lifetime = 400;
    }
}

function spawnElement2() {
  
  if (frameCount % 300 === 0) {
    element2=createSprite(790,random(100,350),35,35)
    element2.addImage("element",element2Img)
    element2.velocityX=-3;
    element2.scale=0.2;
    element2Group.add(element2)
    element2.lifetime = 400;
    }
}

function spawnElement3() {
  
  if (frameCount % 300 === 0) {
    element3=createSprite(690,random(100,350),35,35)
    element3.addImage("element",element3Img)
    element3.velocityX=-3;
    element3.scale=0.2;
    element3Group.add(element3)
    element3.lifetime = 400;
    }
}

function spawnElement4() {
  
  if (frameCount % 300 === 0) {
    element4=createSprite(890,random(100,350),35,35)
    element4.addImage("element",element4Img)
    element4.velocityX=-3;
    element4.scale=0.2;
    element4Group.add(element4)
    element4.lifetime = 400;
    }
}

function spawnBomb() {
  
  if (frameCount % 300 === 0) {
    bomb=createSprite(300,random(100,350),35,35)
    bomb.addImage("bomb",bombImg)
    bomb.velocityX=-3;
    bomb.scale=0.2;
    bombGroup.add(bomb)
    bomb.lifetime = 400;
    }
}