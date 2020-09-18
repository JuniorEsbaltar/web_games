let status=true;
let gameOver=false;
let jogada = 0;
let ia = false;
let i = 0;

function computer() {
  ia ? ia=false:ia=true
}

function setImgIa(img) {
  iaIm = img;
  this.iaIm.src = ('src/o.png');
}

function comPlayer() {
  valor = Math.floor(Math.random() * (9 - 1)) + 1;
  idImg = document.getElementById('cel'+valor);

  if(i == 4){
    return ;
  }
  if(checkSrc(this.idImg.src) == 'b.png') {
    i++
    setImgIa(idImg);
  }else {
    comPlayer();
  }
}

function checkGame(id) {
  let src = document.getElementById(id); 
  jogada++;
  if(checkSrc(src.src) == 'x.png' || checkSrc(src.src) =='o.png') {
    return ;
  }

  if(jogada == 9) {
    return ;
  }
  
  if(ia==true) {
    jogada++
    src.src=('src/x.png')
    comPlayer();

    }else {
    if(status==true) {
      src.src=('src/x.png')
      status = false;
    }else {
      src.src=('src/o.png')
      status = true;
    }
  }
  if(jogada > 5) {
    gameOver = checkVictory(id);
  }
  if(gameOver==true) {
    alert("Fim de jogo");
    location.reload();
  }
}

function checkSrc(src) { 
  let img = src;
  return img.substring(img.length -5)
}

function checkVictory() {
  if(checkSrc(this.cel1.src) == checkSrc(this.cel2.src) 
  && checkSrc(this.cel1.src) == checkSrc(this.cel3.src)
  && checkSrc(this.cel1.src) != 'b.png') {
    return true;
  }

  if(checkSrc(this.cel1.src) == checkSrc(this.cel5.src) 
  && checkSrc(this.cel1.src) == checkSrc(this.cel9.src)
  && checkSrc(this.cel1.src) != 'b.png') {
    return true;
  } 

  if(checkSrc(this.cel1.src) == checkSrc(this.cel4.src) 
  && checkSrc(this.cel1.src) == checkSrc(this.cel7.src)
  && checkSrc(this.cel1.src) != 'b.png') {
    return true;
  } 

  if(checkSrc(this.cel2.src) == checkSrc(this.cel5.src) 
  && checkSrc(this.cel2.src) == checkSrc(this.cel8.src)
  && checkSrc(this.cel2.src) != 'b.png') {
    return true;
  } 

  if(checkSrc(this.cel3.src) == checkSrc(this.cel6.src) 
  && checkSrc(this.cel3.src) == checkSrc(this.cel9.src)
  && checkSrc(this.cel3.src) != 'b.png') {
    return true;
  } 

  if(checkSrc(this.cel3.src) == checkSrc(this.cel5.src) 
  && checkSrc(this.cel3.src) == checkSrc(this.cel7.src)
  && checkSrc(this.cel3.src) != 'b.png') {
    return true;
  } 

  if(checkSrc(this.cel4.src) == checkSrc(this.cel5.src) 
  && checkSrc(this.cel4.src) == checkSrc(this.cel6.src)
  && checkSrc(this.cel4.src) != 'b.png') {
    return true;
  } 

  if(checkSrc(this.cel7.src) == checkSrc(this.cel8.src) 
  && checkSrc(this.cel7.src) == checkSrc(this.cel9.src)
  && checkSrc(this.cel7.src) != 'b.png') {
    return true;
  } 

}
