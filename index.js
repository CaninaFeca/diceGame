const diceOne = document.getElementById("playerOne");
const diceTwo = document.getElementById("playerTwo");

function rollDice() {
  document.getElementById("playerOne").style.backgroundColor = "#5c527f";
  document.getElementById("playerTwo").style.backgroundColor = "#5c527f";
  document.getElementById("playerTwoScore").style.backgroundColor = "#5c527f";
  document.getElementById("playerOneScore").style.backgroundColor = "#5c527f";
  let rndNumOne = Math.floor(Math.random() * 6);
  let rndNumTwo = Math.floor(Math.random() * 6);

  document.getElementById("score-one").innerHTML = rndNumOne + 1;
  document.getElementById("score-two").innerHTML = rndNumTwo + 1;

  changeDiceImage(diceOne, rndNumOne);
  changeDiceImage(diceTwo, rndNumTwo);

  if (rndNumOne > rndNumTwo) {
    document.getElementById("welcome-text").innerHTML = "Player One Wins!";
    document.getElementById("playerOneScore").style.backgroundColor = "#514481";
    document.getElementById("playerOne").style.backgroundColor = "#514481";
  } else if (rndNumTwo > rndNumOne) {
    document.getElementById("welcome-text").innerHTML = "Player Two Wins!";
    document.getElementById("playerTwoScore").style.backgroundColor = "#514481";
    document.getElementById("playerTwo").style.backgroundColor = "#514481";
  } else {
    document.getElementById("welcome-text").innerHTML = "Draw!";
  }
}

function changeDiceImage(dice, result) {
  switch (result) {
    case 0:
      dice.src = "images/one.png";
      break;
    case 1:
      dice.src = "images/two.png";
      break;
    case 2:
      dice.src = "images/three.png";
      break;
    case 3:
      dice.src = "images/four.png";
      break;
    case 4:
      dice.src = "images/five.png";
      break;
    case 5:
      dice.src = "images/six.png";
      break;
  }
}
