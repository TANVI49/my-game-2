class Game {
  constructor(){

  }
  async start(){
    if(gameState === 0){
      //player = new Player();
      form = new Form()
      form.display();
    }

    bg1= createSprite(240,500,200,200);
   bg1.addImage(plain);
   bg2 = createSprite(780,500,200,200);
   bg2.addImage(desert);
   bg3 = createSprite(1160,500,200,200);
    bg3.addImage(jungle);
  }
  
  theme(){
    form.hide();
    background(255)
      image(ground,0,0,displayWidth -20, displayHeight-30)
    drawSprites();
    fill("black");
    textSize(30);
    text("Hello " + player.name + ",please select your theme where you want to race",380,70)

    text("PLAIN",280,580);
    text("DESERT",750,580);
    text("JUNGLE",1197,580);
    if(mousePressedOver(bg1)||mousePressedOver(bg2)||mousePressedOver(bg3)){
      if(mousePressedOver(bg1)){
        
          bg=loadImage('images/track.jpg');
          console.log("hello,hi")
        }
        if(mousePressedOver(bg2)){
        
          bg=loadImage('images/ground.png')
        }
        if(mousePressedOver(bg3)){
         //gameState=2
         bg=loadImage('images/firstPage.png')
        }
          gameState=2;
         }
  }
  play(){
    bg1.visible=false;
    bg2.visible=false;
    bg3.visible=false;
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      //drawSprites();
  }
  }