//I want to make 2 variables.
var playerMove = prompt('Choose rock, paper, or scissors');
var compMove = Math.random();


//I want to make a function to compare player and comp's moves.
function myFunction() {

   function compare(playerMove, compMove) {
     document.getElementById('compare').innerHTML = 'result';
     if (playerMove === compMove) {
       document.getElementById('result').innerHTML = "It\s a tie!";
     }
   }

   if (playerMove === 'rock') {
     if (compMove === "scissors") {
       document.getElementById('result').innerHTML = "It\s The Rock!";
     } else {
       document.getElementById('result').innerHTML = "It\s a wrap for you!";
     }
   }

   else if (playerMove === 'paper') {
     if (compMove === 'rock') {
       document.getElementById('result').innerHTML = "It\s a wrap for you!";
     } else {
       document.getElementById('result').innerHTML = "You just got cut!";
     }
   }

   else if (playerMove === 'scissors') {
     if (compMove === "rock") {
       document.getElementById('result').innerHTML = "It\s The Rock!";
     } else {
       document.getElementById('result').innerHTML = "You just got cut!";
  }
}
}
