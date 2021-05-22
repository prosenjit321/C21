var square1, square2 ;

function setup() {
  createCanvas(800,400);
  square1 = createSprite(400,200,60,60);
  square2 = createSprite(400, 200, 50, 50);
  square1.shapeColor = ("green");
 square2.shapeColor = ("green");
 square1.debug = true;
 square2.debug = true;
}

function draw() {
  background(255,255,255);  
  square1.x = mouseX;
  square1.y = mouseY;
  if (Istouching(square1,square2)){
    
        square1.shapeColor = "red"
      square2.shapeColor = "pink"
    }
    else{
      square1.shapeColor= "green"
      square2.shapeColor= "green"
    }
  drawSprites();
}






