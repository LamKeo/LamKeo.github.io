// I want to make 2 variables, players.
//global variables that can be used anywhere because they are outside of the function.
var playerMove;
var compMove;


// then call the function
// but lets make sure there is an answer
function myFunction() {
  playerMove = document.getElementById('playerMove').value;
  //takes whatever text in the input box and assigns it to playerMove but only when the submit button is clicked
  //if no text is in the input box but submit is clicked then...
  //alert('Choose rock, paper, or scissors');
  compMove = Math.random();

  if (playerMove.length != 0) {
    computerMove();
    compare(playerMove, compMove);
  } else {
    alert('Choose rock, paper, or scissors');
  }
}


// Generate a computer move
function computerMove() {
  var comp = Math.random();
//give the computer some parameters

  if (comp < 0.34) {
   compMove = "rock";
  } else if(comp <= 0.67) {
   compMove = "paper";
  } else {
   compMove = "scissors";
  }

}


//I want to make a function to compare player and comp's moves.


  function compare(playerMove, compMove) {
    console.log(compMove);

    if (playerMove === compMove) {
      document.getElementById('result').innerHTML = "It\'s a tie!";
    } else if (playerMove === 'rock') {
      if (compMove === "scissors") {
        document.getElementById('result').innerHTML = "It\'s The Rock!";
      } else {
        document.getElementById('result').innerHTML = "It\'s a wrap for you!";
      }
    } else if (playerMove === 'paper') {
      if (compMove === 'rock') {
        document.getElementById('result').innerHTML = "It\'s a wrap for you!";
      } else {
        document.getElementById('result').innerHTML = "You just got cut!";
      }
    } else if (playerMove === 'scissors') {
      if (compMove === "rock") {
        document.getElementById('result').innerHTML = "It\'s The Rock!";
      } else {
        document.getElementById('result').innerHTML = "You just got cut!";
      }
    }

  }


//}
