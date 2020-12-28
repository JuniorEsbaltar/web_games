let arrayPosition = new Array;
let time = 0;
let gameStatus = false;
let move = 0;
let rate = 0;
let iaMove = true;

function start() {
  resetGame();
  document.getElementById("lost").classList.add("lost")

  gameStatus = true;
  iaGame();
}

function eventClickField(id) { 
  if(!gameStatus || iaMove) {
    return 0;
  }

  const fieldGame = getFieldGame(id);

  if(id == arrayPosition[time]) {
    paintFieldGame(fieldGame,"green");
    time += 1
    if(time  == arrayPosition.length) {
      setTimeout(iaGame,2000);
      rate += 1;
      document.getElementById("score").innerText = `Score: ${rate}`;
      iaMove = true;
    }
  }else {
    paintFieldGame(fieldGame,"red");
    document.getElementById("lost").classList.remove("lost")
    gameStatus = false;
    resetGame();  
   }
}

function resetGame() {
  arrayPosition.splice(0,arrayPosition.length);
  time = 0;
  rate = 0;
  document.getElementById("score").innerText = `Score: ${rate}`;
}

function getFieldGame(field) {
  return document.getElementById(`fieldGame${field}`);
}

function paintFieldGame(field,color) {
  field.classList.add(color);
  setTimeout(() => {field.classList.remove(color)},400);
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
  paintFieldGame(fieldGame,"green");
  setTimeout(iaGame,500);
  move += 1;
}

function randomFieldEvent() {
  const numberRandom = Math.floor(Math.random() * 9) + 1;
  const fieldGame = getFieldGame(numberRandom);

  paintFieldGame(fieldGame,"green");
  arrayPosition.push(numberRandom);
  move = 0;
  time = 0

  iaMove = false;
}
