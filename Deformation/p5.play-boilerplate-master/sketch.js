var car,wall;

var speed,weight;

function setup() {
//making of canvas
  createCanvas(800,400);
 //making car 
   car = createSprite(50, 200, 50, 50);
 //making a wall
   wall = createSprite(750, 200, 60, height/2); 
//randomizer of speed n weight
  speed = random(55, 90);
  weight = random(400, 1500);
}

function draw() {
 //coloring background 
   background(0);  
 //giving velocityX to car 
   car.velocityX = speed;
   
 //The Deformation Process
   if (wall.x = car.x < (car.width + wall.width)/2) {
       car.velocityX = 0;
       var deformation = 0.5 * weight * speed * speed/22509;

      if (deformation>180) {
          car.shapeColor = "red"; 
      }

      if (deformation<180 && deformation>100) {
          car.shapeColor = "orange";
      }

      if (deformation<100) {
          car.shapeColor = "yellow";
      }

   }  
  
  
   drawSprites();
}