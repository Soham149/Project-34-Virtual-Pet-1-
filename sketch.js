var dog,dog_Img,happyDog,happyDog_Img;
var foodStock,foodS;


function preload(){
  dog_Img = loadImage("images/dogImg.png");
  happyDog_img = loadImage("images/dogImg1.png");
	 
}

function setup() {
	createCanvas(800, 700);
  foodStock = 20;
}


function draw() {  

     background(46, 139, 87);

     dog = createSprite(400,400,20,20);
     dog.addImage(dog_Img,"images/dogImg.png");
     dog.scale = 0.5;

     if (keyWentDown(UP_ARROW)){ 
       console.log("hello");
       foodStock = foodStock-1;
       console.log(foodStock);
     }
      if (foodStock <= 0){
          foodStock = 0;
          textSize(20);
          fill("white");
          text("There are no food in Stock.",300,600);
      }
 

     
  drawSprites();
  fill("white");
  textSize(20);
  text("Note:Press the Up Arrow key to give the cute thing food",200,100);

  text("FOOD STOCK:" + foodStock,300,200);

}



