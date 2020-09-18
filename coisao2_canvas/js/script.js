(function(){
  //Variaveis
  const cnv = document.querySelector("canvas");
  const ctx = cnv.getContext("2d");

  // teclas
  const LEFT =37, UP =38, RIGTH =39, DOWN =40;
  //Movimentos
  let mvLeft = mvUp = mvRigth = mvDown = false;

  //Arrays
  let sprites = [];
  let blocks = [];

  //Objetos
  let character = new Sprite(50,175,50,50,"#00f");
  character.speed = 2;
  sprites.push(character);
  let block1 = new Sprite(500,100,50,50,"#f00");
  sprites.push(block1);
  blocks.push(block1)
  let block2 = new Sprite(200,300,100,50,"#8B6914");
  sprites.push(block2);
  blocks.push(block2)

  //entradas
  window.addEventListener("keydown",function(e){
    var key = e.keyCode;
    switch(key){
      case LEFT:
        mvLeft = true;
        break;
      case UP:
        mvUp = true;
        break;
      case DOWN:
        mvDown = true;
        break;
      case RIGTH:
        mvRigth = true;
        break;
    }
  },false)

  window.addEventListener("keyup",function(e){
    var key = e.keyCode;
    switch(key){
      case LEFT:
        mvLeft = false;
        break;
      case UP:
        mvUp = false;
        break;
      case DOWN:
        mvDown = false;
        break;
      case RIGTH:
        mvRigth = false;
        break;
    }
  },false)

  //funções
  function render() {
    ctx.clearRect(0,0,cnv.width,cnv.height);
    for(const i in sprites){
      let spr = sprites[i];
      if(spr.visible){
        ctx.fillStyle = spr.color;
        ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
      }
    }
  }
  function update() {
    if(mvLeft && !mvRigth){
      character.posX -= character.speed;
    }
    if(mvRigth && !mvLeft){
      character.posX += character.speed;
    }
    if(mvUp && !mvDown){
      character.posY -= character.speed;
    }
    if(mvDown && !mvUp){
      character.posY += character.speed;
    }
    //Limites da tela
    character.posX = Math.max(0, Math.min(cnv.width - character.width, character.posX));
    character.posY = Math.max(0, Math.min(cnv.height - character.height, character.posY));

    //Colisões
    for(const i in blocks) {
      let blk = blocks[i];
      if(blk.visible) {
        blockRect(character,blk); // bloqueando
        //blockRect(blk,character) // Empurrando
      }
    }

  }
  function loop() {
    window.requestAnimationFrame(loop,cnv);
    update();
    render();
  }

  loop();
}())