function setup() {
  createCanvas(800,400);
  
  fixedrect=createSprite(200, 200, 50, 100);
  fixedrect.shapeColor="blue"
  fixedrect.debug=true;


  movingrect=createSprite(300,300,150,100);
  movingrect.shapeColor="black"
  movingrect.debug=true;
}

function draw() {
  background(255,255,255);  
   movingrect.x = World.mouseX;
   movingrect.y = World.mouseY;
  
   console.log(movingrect.x-fixedrect.x)
   
   if(movingrect.x-fixedrect.x <  movingrect.width/2 + fixedrect.width/2
   &&fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 
    &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    &&fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
     movingrect.shapeColor="red";
   }
   else{
     movingrect.shapeColor="black";
   }
   
  drawSprites();
}