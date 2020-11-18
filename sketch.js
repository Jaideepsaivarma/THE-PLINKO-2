var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var gameState;
  play = 1;
  end = 0;
  gameState = play;
  var Theplinko;
  var chances = 5;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,40);
  wall1 = new Divisions(5,400,10,800);
  wall2 = new Divisions(795,400,10,800)


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 30; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  trackMouse();
  
  background("black");
  textSize(20);
   
  if(gameState===0){
    push();
    console.log("CHANCE COMPLEATED");
    textSize(50);
    fill("blue")
    text("GAME OVER",270,330);
    fill("pink");
    textSize(40)
    text("Score : "+score,180,250);
    textSize(38);
    text("Chances : "+chances,500,250);
    pop();
     
    
  }
  
  text("Score : "+score,20,30);
  text("Chances : "+chances,650,30);
  text("500",25,550);
  text("-200",100,550);
  text("GAME",170,530);
  text("OVER",170,560);
  text("10",265,550);
  text("200",345,550);
  text("20",430,550);
  text("GAME",490,530);
  text("OVER",490,560);
  text("1000",575,550)
  text("0",670,550);
  text("50",750,550);
  
  
  
  Engine.update(engine);
//creating 500 score....
  if(Theplinko!=null){
    Theplinko.display();
   if(Theplinko.body.position.y > 760 ){
   if(Theplinko.body.position.x < 80){
   
        chances = chances - 1;
        score = score+500;
        Theplinko = null;
     }
    }
   }
 

//creating -200 score
if(Theplinko!=null){
  Theplinko.display();
 if(Theplinko.body.position.y > 761 ){
 if(Theplinko.body.position.x < 160){
 if(Theplinko.body.position.x > 80){
      chances = chances - 1;
      score = score-200;
      Theplinko = null;
   }
  }
 }
}

if(Theplinko!=null){
  Theplinko.display();
 if(Theplinko.body.position.y > 761 ){
 if(Theplinko.body.position.x < 240){
 if(Theplinko.body.position.x > 160){
      gameState = end;
      Theplinko = null;
   }
  }
 }
}

if(Theplinko!=null){
  Theplinko.display();
 if(Theplinko.body.position.y > 761 ){
 if(Theplinko.body.position.x < 320){
 if(Theplinko.body.position.x > 240){
  chances = chances - 1;
  score = score+10;
  Theplinko = null;
   }
  }
 }
}

if(Theplinko!=null){
  Theplinko.display();
 if(Theplinko.body.position.y > 761 ){
 if(Theplinko.body.position.x < 400){
 if(Theplinko.body.position.x > 320){
      chances = chances - 1;
      score = score+200;
      Theplinko = null;
   }
  }
 }
}

if(Theplinko!=null){
  Theplinko.display();
 if(Theplinko.body.position.y > 761 ){
 if(Theplinko.body.position.x < 480){
 if(Theplinko.body.position.x > 400){
      chances = chances - 1;
      score = score+20;
      Theplinko = null;
   }
  }
 }
}

if(Theplinko!=null){
  Theplinko.display();
 if(Theplinko.body.position.y > 761 ){
 if(Theplinko.body.position.x < 560){
 if(Theplinko.body.position.x > 480){
    gameState = end;
   }
  }
 }
}

if(Theplinko!=null){
  Theplinko.display();
 if(Theplinko.body.position.y > 761 ){
 if(Theplinko.body.position.x < 640){
 if(Theplinko.body.position.x > 560){
      chances = chances - 1;
      score = score+1000;
      Theplinko = null;
   }
  }
 }
}
if(Theplinko!=null){
  Theplinko.display();
 if(Theplinko.body.position.y > 761 ){
 if(Theplinko.body.position.x < 720){
 if(Theplinko.body.position.x > 640){
      chances = chances - 1;
      score = score + 0;
      Theplinko = null;
   }
  }
 }
}

if(Theplinko!=null){
  Theplinko.display();
 if(Theplinko.body.position.y > 761 ){
 if(Theplinko.body.position.x < 800){
 if(Theplinko.body.position.x > 720){
      chances = chances - 1;
      score = score+50;
      Theplinko = null;
   }
  }
 }
}






  if(chances===0){
    gameState = end;
  }
  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   wall1.display();
   wall2.display();
}
function mousePressed(){
 if(gameState===play){
   Theplinko = new Particle(mouseX,10,10,10);
    
 }
}