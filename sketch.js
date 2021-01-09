var backgrimg,cat,mouse,catimg1,catimg2,catimg3,catimg4,mouseimg1,mouseimg2,mouseimg3,mouseimg4;
function preload() {
    backgrimg=loadAnimation("garden.png");
catimg1=loadAnimation("tomOne.png");
catimg2=loadAnimation("tomTwo.png");
catimg3=loadAnimation("tomThree.png");
catimg4=loadAnimation("tomFour.png");
mouseimg1=loadAnimation("jerryOne.png");
mouseimg2=loadAnimation("jerryTwo.png");
mouseimg3=loadAnimation("jerryThree.png");
mouseimg4=loadAnimation("jerryFour.png");
    }

function setup(){
    createCanvas(1000,800);
  

cat=createSprite(100,100,10,20,);
cat.addAnimation(catimg1);

mouse=createSprite(120,50,20,10);
mouse.addAnimation(mouseimg1);
}

function draw() {

    background(backgrimg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catlastimage",catimg3);
        cat.changeAnimation("catlastimage");
    }
    drawSprites();
    text(mouseX+','+mouseY, 10,45);
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");
}
 


}
