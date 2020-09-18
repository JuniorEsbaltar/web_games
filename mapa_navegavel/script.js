const LEFT = 37, UP=38, RIGHT=39, DOWN = 40, PGUP=33, PGDOWN = 34; 
var mvLeft = false, mvRight = false, mvUp = false,mvDown = false, zoomIn = false, zoomOut = false;
var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");
var srcX = 0;
var srcY = 0;
var size = 400;
var speed = 5;
var map = new Image();
map.src = "img/map.png";
map.onload= looping();

window.addEventListener("keydown",keydownHandler,false);
window.addEventListener("keyup",keyupHandler,false);

function keydownHandler(e) {
  var key = e.keyCode;
  switch(key) {
    case LEFT:
      mvLeft = true;
      break;
    case RIGHT:
      mvRight =true;
      break;
    case UP:
      mvUp = true;
      break;
    case DOWN:
      mvDown = true;
      break;
    case PGDOWN:
      zoomOut = true;
      break;
    case PGUP:
      zoomIn = true;
  }
}
function keyupHandler(e) {
  var key = e.keyCode;
  switch(key) {
    case LEFT:
      mvLeft = false;
      break;
    case RIGHT:
      mvRight =false;
      break;
    case UP:
      mvUp = false;
      break;
    case DOWN:
      mvDown = false;
      break;
    case PGDOWN:
      zoomOut = false;
      break;
    case PGUP:
      zoomIn = false;
  }

}

function render() {
  ctx.clearRect(0,0,cnv.width,cnv.height);
  ctx.drawImage(map,srcX,srcY,size,size,0,0,cnv.width,cnv.height);
}

function update() {
  if(mvLeft) {
    if(srcX > 1)
      srcX -= speed;
  }
  if(mvRight){
    srcX += speed;
  }
  if(mvUp){
    if(srcY >  1)
    srcY -= speed;
  }
  if(mvDown){
    srcY += speed;
  }
  if(zoomIn){
    size -= speed;
  }
  if(zoomOut) {
    size += speed;
  }

}

function looping() {
  requestAnimationFrame(looping,cnv);
  update();//processa a interação
	render();//desenha o mapa atualizado na tela
}
