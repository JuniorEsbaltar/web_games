window.onload= function() {
  const LEFT=37, UP=38, RIGHT = 39, DOWN = 40;
  const cnv = document.querySelector("canvas");
  const ctx = cnv.getContext("2d");
  const scene = new Image();
  scene.src = "./img/scene.png"
  const spriteSheet = new Image();
  spriteSheet.src = "./img/img.png"
  var personagem = new Sprite(spriteSheet);


  window.addEventListener("keydown",keydownHandler,false);
  window.addEventListener("keyup",keyupHandler,false);

  function keydownHandler(e) {
    switch(e.keyCode){
      case RIGHT:
        personagem.mvRight = true;
        personagem.mvLeft = false;
        personagem.mvUp = false;
        personagem.mvDown = false;
        break;
      case LEFT:
        personagem.mvRight = false;
        personagem.mvLeft = true;
        personagem.mvUp = false;
        personagem.mvDown = false;
        break;
      case UP:
        personagem.mvRight = false;
        personagem.mvLeft = false;
        personagem.mvUp = true;
        personagem.mvDown = false;
        break;
      case DOWN:
        personagem.mvRight = false;
        personagem.mvLeft = false;
        personagem.mvUp = false;
        personagem.mvDown = true;
        break;
    }
  }

  function keyupHandler(e) {
    switch(e.keyCode){
      case RIGHT:
        personagem.mvRight = false;
        personagem.srcX = 0;
        break;
      case LEFT:
        personagem.mvLeft = false;
        personagem.srcX = 0;
        break;
      case UP:
        personagem.mvUp = false;
        personagem.srcX = 0;
        break;
      case DOWN:
        personagem.mvDown = false;
        personagem.srcX = 0;
        break;
    }
  }


  spriteSheet.onload = function() {
    init();
  }

  function init() {
    personagem.posX = personagem.posY = 150;
    loop();
  }

  function update() {
    personagem.move();

  }

  function draw() {
    ctx.clearRect(0,0,cnv.width,cnv.height);
    ctx.drawImage(scene,0,0, scene.width,scene.height,0,0,cnv.width,cnv.height)
    personagem.draw(ctx);
  }

  function loop() {
    window.requestAnimationFrame(loop,cnv);
    update();
    draw();

  }
}