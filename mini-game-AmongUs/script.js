let arrayPosition = new Array;
let time = 0;
let gameStatus = true;
let move = 0;

function start() {
  document.getElementById("lost").classList.add("lost")
  gameStatus = true;
  iaGame();
}

function eventClickField(id) { 
  if(!gameStatus) {
    return 0;
  }

  const fieldGame = getFieldGame(id);

  if(id == arrayPosition[time]) {
    paintFieldGame(true,fieldGame);
    time += 1
    if(move  == arrayPosition.length) {
      console.log("entrou");
      // setTimeout(iaGame(),1000);
    }
    
  }else {
    paintFieldGame(false,fieldGame);
    document.getElementById("lost").classList.remove("lost")
    gameStatus = false;
    time = 0
  }
}

function getFieldGame(field) {
  return document.getElementById(`fieldGame${field}`);
}

function paintFieldGame(right,field) {
  if(right) {
    field.classList.add("green");
    setTimeout(() => {field.classList.remove("green")},500);
  } else {
    field.classList.add("red");
    setTimeout(() => {field.classList.remove("red")},500);
  }
}

function iaGame() {
  if(!gameStatus) {
    return 0;
  }

  if(move == arrayPosition.length) {
    randomFieldEvent();
  }
  else {
    showRightField()
  }
}

function showRightField() {
  const fieldGame = getFieldGame(arrayPosition[move]);
  paintFieldGame(true,fieldGame);
  setTimeout(iaGame,500);
  move += 1;
}

function randomFieldEvent() {
  const numberRandom = Math.floor(Math.random() * 9) + 1;
  const fieldGame = getFieldGame(numberRandom);

  paintFieldGame(true,fieldGame);
  arrayPosition.push(numberRandom);
  move = 0;
  time = 0
}
