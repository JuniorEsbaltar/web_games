function Sprite(img) {
  //Atributos
  this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false;
  this.srcX = this.srcY = 0;
  this.width = 24;
  this.height = 32;
  this.posX = this.posY=0;
  this.img = img;
  this.speed = 2;
  this.countAnim = 0;
  //Métodos
  //desenho
  this.draw = function (ctx) {
    ctx.drawImage(this.img, //Imagem de origem
                  //Captura da imagem
                  this.srcX, //Origem da captura no eixo X
                  this.srcY, //Origem da captura no eixo Y
                  this.width, //Largura da imagem que será capturada
                  this.height, //Altura da imagem que será capturada
                  //Exibição da imagem
                  this.posX, //Posição no eixo X onde a imagem será exibida 
                  this.posY, //Posição no eixo Y onde a imagem será exibida 
                  this.width, //Largura da imagem a ser exibida 
                  this.height //Altura da imagem a ser exibida 
                  );

    this.animation()
  }

  //movimentação
  this.move = function () {
    if(this.mvRight) {
      this.posX += this.speed;
      this.srcY = this.height * 3;
    }else
    if(this.mvLeft) {
      this.posX -= this.speed;
      this.srcY = this.height * 2;
    } else
    if(this.mvUp) {
      this.posY -= this.speed;
      this.srcY =this.height * 1;
    }else
    if(this.mvDown) {
      this.posY += this.speed;
      this.srcY =this.height * 0;
    }
  }
  //Animação
  this.animation = function() {
    if(this.mvRight || this.mvLeft || this.mvUp || this.mvDown){
      this.countAnim++;
      if(this.countAnim >= 40) {
        this.countAnim = 0
      }
      this.srcX = Math.floor(this.countAnim / 5) * this.width;
    }
  }
}