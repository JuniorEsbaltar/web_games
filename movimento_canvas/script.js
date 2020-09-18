var cnv = document.querySelector("canvas");
var ctx = cnv.getContext("2d");

var UP = 38, DOWN = 40, LEFT = 37, RIGHT = 39;
var moveEsquerda = false, moveDireita = false, moveCima = false, moveBaixo = false;

//cria um retangulo sendo as cordenadas x,y depois a dimensão dele largura/altura
// ctx.fillRect(10,20,50,80);

var p1 = {
  x: 10,
  y: 10,
};

update();
//Window = navegar, adicionando um metodo para aguardar

window.addEventListener("keydown",keydownHandler);
window.addEventListener("keyup",keyupHandler);

function keydownHandler(e) {
  var key = e.keyCode;

  if(key === LEFT && key !== RIGHT) {
    moveEsquerda = true;
  }
  if(key === RIGHT && key !== LEFT) {
    moveDireita = true;
  }
  if(key === UP && key !== DOWN) {
    moveCima = true;
  }
  if(key === DOWN && key !== UP) {
    moveBaixo = true;
  }
}

function keyupHandler(e) {
  var key = e.keyCode;

  if(key === LEFT && key !== RIGHT) {
    moveEsquerda = false;
  }
  if(key === RIGHT && key !== LEFT) {
    moveDireita = false;
  }
  if(key === UP && key !== DOWN) {
    moveCima = false;
  }
  if(key === DOWN && key !== UP) {
    moveBaixo = false;
  }
}


function move() {
  if(moveEsquerda) {
    p1.x --; 
  }
  if(moveDireita) {
    p1.x ++;
  }
  if(moveCima) {
    p1.y --;
  }
  if(moveBaixo) {
    p1.y ++;
  }
}

function render() {
  //Limpa o canvar, primeiras 2 cordenadas iniciais e até onde limpar.
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  ctx.fillRect(p1.x,p1.y,50,50);
}

function update() {
  requestAnimationFrame(update,cnv);
  move();
  render();
}
