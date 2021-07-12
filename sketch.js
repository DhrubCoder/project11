var jack,jackRun;
var road,roadR;
 var inVi;
 var inVi2;
 var car,carRun;
 var car2,carRun2;
 var energy,energyImg;

function preload(){
  
  //load background
  roadR = loadImage("path.png");

  //pre-load images
  jackRun = loadAnimation("Runner-1.png","Runner-1.png","Runner-2.png","Runner-2.png");
  carRun = loadImage("car.png");
  carRun2 = loadImage("car.png");
  energyImg = loadImage("energyDrink.png");
  
}

function setup(){
  createCanvas(400,500);

  //create road
    road=createSprite(200,200);
    road.addImage(roadR);
    road.velocityY=4;
    road.scale=1.2;

    //create invisible walls
    inVi=createSprite(380,200,25,100000);
    inVi2=createSprite(25,200,25,100000);


    //create jack sprite
    jack=createSprite(200,410,5,5);
    jack.addAnimation("jack" , jackRun);
    jack.scale=0.1;
    jack.velocityY=-1;

    //create car,car2 sprites
    car=createSprite(80,150);
    car.addImage("carRun",carRun);
    car.scale=0.3;
    car.velocityY=-2;

    car2=createSprite(320,150);
    car2.addImage("car",carRun2);
    car2.scale=0.3;
    car2.velocityY=-2;
    //create energy drink
    energy=createSprite(200,50);
    energy.addImage("energy_img",energyImg);
    energy.scale=0.2;
    //energy.velocityX=2;

}

function draw() {
  background("black");

   //bounce off jack and energy drink
    jack.bounceOff(inVi);
   jack.bounceOff(inVi2);
   energy.bounceOff(inVi);
   energy.bounceOff(inVi2);

  //write if condition for moving jack
  if(keyIsDown(RIGHT_ARROW)){
    jack.position.x=jack.position.x+3;
  }
  if(keyIsDown(LEFT_ARROW)){
    jack.x=jack.x-3;
  }
  //if condition for cars and jack comming back
  if(jack.y<-20){
    jack.y=500;
  }
  if(car.y<-40){
    car.y=520;
  }
  if(car2.y<-40){
    car2.y=520;
  }

    //if condition for the energy drink so that jack run fast
    if(jack.isTouching(energy)){
      energy.visible=false;
      jack.velocityY=-5;
    }

    //if statement for cars to decrease the velocity
    if(car.isTouching(jack)){
      reset();
    }
    if(car2.isTouching(jack)){
      reset();
    }

  if (road.y > 500) 
    {
        road.y = height/2;
    }

  drawSprites();
}

function reset(){
  energy.visible=true;
  jack.velocityY=-1;
}
