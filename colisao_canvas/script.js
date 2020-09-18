const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");
const UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39;
const SIZE =50;
var posX = 50;
var posY = 50;
const speed = 2;
var objColor = "#00f"; 

const blockX = cnv.width/2 - 25;
const blockY = cnv.height/2 - 25;

var mvLeft = mvUp = mvRight = mvDown = false;

function updateBlock() {
  if(mvLeft) {
    if(posX>1)
    posX -=speed;
  }
  if(mvRight) {
    posX += speed;
  }
  if(mvUp) {
    posY -= speed;
  }
  if(mvDown) {
    posY += speed;
  }
}

function colide() {
  if(posX + SIZE > blockX &&
     posX < blockX + SIZE &&
     posY + SIZE > blockY &&
     posY < blockY + SIZE) {
       objColor = "#f00";
     }else{
       objColor = "#00f";
     }
}

window.addEventListener("keydown",keydownHandler,false);
window.addEventListener("keyup",keyupHandler,false);

function keydownHandler(e) {
 var key  = e.keyCode;
  switch(key){
    case UP:
      mvUp = true;
      break;
    case DOWN:
      mvDown = true;
      break;
    case LEFT:
      mvLeft = true;
      break;
    case RIGHT:
      mvRight = true;
      break;
  }
}
function keyupHandler(e) {
  var key  = e.keyCode;
   switch(key){
     case UP:
       mvUp = false;
       break;
     case DOWN:
       mvDown = false;
       break;
     case LEFT:
       mvLeft = false;
       break;
     case RIGHT:
       mvRight = false;
       break;
   }
 }

function drawn() {
  ctx.clearRect(0,0,cnv.width, cnv.height);
  ctx.fillStyle = "#000";
  ctx.fillRect(blockX,blockY,SIZE,SIZE);
  ctx.fillStyle = objColor;
  ctx.fillRect(posX,posY,SIZE,SIZE);
}

function update() {
  updateBlock();
  colide();
}

function looping() {
  window.requestAnimationFrame(looping,cnv);
  update();
  drawn();
}

looping();