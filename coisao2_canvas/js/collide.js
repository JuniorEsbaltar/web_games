function blockRect(r1,r2) {
 //r1-> bloqueado
 //r2-> parede

 //catetos
 let catX = r1.centerX() - r2.centerX();
 let catY = r1.centerY() - r2.centerY();
 
 // somar das metades
 let sumHalfWidth = r1.halfWidth() + r2.halfWidth();
 let sumHalfHeight = r1.halfHeight() + r2.halfHeight();
 
  if(Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight){
    // r2.visible = false
    // setTimeout(function(){
    //   r2.visible = true
    // },1000)
    let overlapX = sumHalfWidth - Math.abs(catX);
    let overlapY = sumHalfHeight - Math.abs(catY);

    if(overlapX >= overlapY) { // colisão por cima ou por baixo
      if(catY > 0){ // por cima
        r1.posY += overlapY;
      }else {
        r1.posY -= overlapY;
      }
    }else { // Colisão pela esquerda ou direita
      if(catX > 0){// Colisão pela esquerda
        r1.posX += overlapX;
      }else { // Colisão pela direita
        r1.posX -= overlapX;
      }
    }
  }
}