function playGame(player1Choice, player2Choice) {
  // Convert choices to lowercase
  player1Choice = player1Choice.toLowerCase();
  player2Choice = player2Choice.toLowerCase();

  // Check for valid choices
  if (player1Choice !== 'rock' && player1Choice !== 'paper' && player1Choice !== 'scissors') {
    return 'Player 1 entered an invalid choice.';
  }

  if (player2Choice !== 'rock' && player2Choice !== 'paper' && player2Choice !== 'scissors') {
    return 'Player 2 entered an invalid choice.';
  }

  // Determine the winner
  if (player1Choice === player2Choice) {
    return 'It\'s a tie!';
  } else if (
    (player1Choice === 'rock' && player2Choice === 'scissors') ||
    (player1Choice === 'paper' && player2Choice === 'rock') ||
    (player1Choice === 'scissors' && player2Choice === 'paper')
  ) {
    return 'Player 1 wins!';
  } else {
    return 'Player 2 wins!';
  }
}

// Example usage
const player1Choice = 'Rock';
const player2Choice = 'Scissors';
const result = playGame(player1Choice, player2Choice);
console.log(result);
