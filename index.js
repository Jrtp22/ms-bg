let player1 = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const divs = document.querySelectorAll('.divs');
divs.forEach(div => {
  div.addEventListener('click', divClick);
});
function divClick(event){
  const index = event.target.id - 1;
  if (gameBoard[index] !== '') {
    return;
  }
  event.target.textContent = player1;
  gameBoard[index] = player1;
  if (win()) {
    alert(`${player1} wins!`);
    restart();
  } else if (tie()) {
    alert('Tie game!');
    restart();
  } else {
    player1 = player1 === 'X' ? 'O' : 'X';
  }
}
function win() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winConditions.some(condition => {
    return condition.every(index => {
      return gameBoard[index] === player1;
    });
  });
}
function tie() {
  return gameBoard.every(square => {
    return square !== '';
  });
}
function restart(){
    window.location.reload();
  }
