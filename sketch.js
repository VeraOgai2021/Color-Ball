var canvas;
var music;
var pbox;
var gbox;
var bbox;
var obox;
var wbox;
var fence1;
var fence2;
var fence3;
var fence4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    pbox = createSprite(70, 590, 165, 20);
    pbox.shapeColor = "magenta";
    gbox = createSprite(290, 590, 165, 20);
    gbox.shapeColor = "green";
    bbox = createSprite(510, 590, 165, 20);
    bbox.shapeColor = "blue";
    obox = createSprite(730, 590, 165, 20);
    obox.shapeColor = "orange";
    wbox = createSprite(random(20, 750), 30, 50, 50);
    wbox.shapeColor = "white";
    wbox.velocityY = 4;
    wbox.velocityX = -2;

    fence1 = createSprite(400, 0, 800, 1);
    fence2 = createSprite(400, 600, 800, 1);
    fence3 = createSprite(0, 300, 1, 800);
    fence4 = createSprite(800, 300, 1, 800);
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if(wbox.isTouching(pbox)){
        wbox.shapeColor = "magenta";
        wbox.bounceOff(pbox);
        music.play();
    }
    if(wbox.isTouching(gbox)){
        wbox.shapeColor = "green";
        wbox.bounceOff(gbox);
    }
    if(wbox.isTouching(bbox)){
        wbox.shapeColor = "blue";
        music.stop();
        wbox.velocityY = 0;
        wbox.velocityX = 0;
    }
    if(wbox.isTouching(obox)){
        wbox.shapeColor = "orange";
        wbox.bounceOff(obox);
    }

    if(wbox.isTouching(fence1)){
        wbox.bounceOff(fence1);
    }
    if(wbox.isTouching(fence2)){
        wbox.bounceOff(fence2);
    }
    if(wbox.isTouching(fence3)){
        wbox.bounceOff(fence3);
    }
    if(wbox.isTouching(fence4)){
        wbox.bounceOff(fence4);
    }

    //add condition to check if box touching surface and make it box
    drawSprites();
}
