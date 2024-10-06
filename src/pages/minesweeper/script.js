const boardSize = 10;
const bombCount = 10;
let gameBoard = [];
let bombPositions = [];
let gameEnded = false;

// Initialize the game
function initGame() {
  const gameBoardElement = document.getElementById('game-board');
  gameBoardElement.innerHTML = ''; // Clear the board
  gameEnded = false; // Reset game state

  gameBoard = [];
  bombPositions = generateBombs(boardSize, bombCount);

  for (let row = 0; row < boardSize; row++) {
    const rowArray = [];
    for (let col = 0; col < boardSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      
      // on click element
      cell.addEventListener('click', () => revealCell(row, col));

      // on right click element
      cell.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        toggleFlag(row, col);
      });

      rowArray.push(cell);
      gameBoardElement.appendChild(cell);
    }
    gameBoard.push(rowArray);
  }
}

// Generate bomb positions randomly
function generateBombs(size, count) {
  const bombs = new Set();
  while (bombs.size < count) {
    const position = Math.floor(Math.random() * size * size);
    bombs.add(position);
  }
  return Array.from(bombs);
}

// Reveal a cell when clicked
function revealCell(row, col) {
    if (gameEnded) return; 
  const cell = gameBoard[row][col];
  
  
  if (cell.classList.contains('revealed') || cell.classList.contains('flagged')) {
    return;
  }

  const index = row * boardSize + col;

  
  if (bombPositions.includes(index)) {
    cell.classList.add('bomb');
    cell.innerHTML = '💣';
    endGame(false); 
  } else {
    const bombCount = countBombsAround(row, col);
    cell.classList.add('revealed');
    cell.innerHTML = bombCount > 0 ? bombCount : '';

    
    if (bombCount === 0) {
      revealEmptyCells(row, col);
    }

    
    checkWinCondition();
  }
}

// Count bombs around a cell
function countBombsAround(row, col) {
  let count = 0;

  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (r >= 0 && r < boardSize && c >= 0 && c < boardSize) {
        const index = r * boardSize + c;
        if (bombPositions.includes(index)) {
          count++;
        }
      }
    }
  }

  return count;
}

// Recursively reveal all empty cells around a cell with no bombs
function revealEmptyCells(row, col) {
    for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
          if (r >= 0 && r < boardSize && c >= 0 && c < boardSize) {
            const neighborCell = gameBoard[r][c];
            if (!neighborCell.classList.contains('revealed') && !neighborCell.classList.contains('bomb')) {
              revealCell(r, c); 
            }
          }
        }
      }
}

// Toggle flagging on a cell
function toggleFlag(row, col) {
    if (gameEnded) return; 
  const cell = gameBoard[row][col];

  
  if (cell.classList.contains('revealed')) {
    return;
  }

  
  if (cell.classList.contains('flagged')) {
    cell.classList.remove('flagged');
    cell.innerHTML = ''; 
  } else {
    cell.classList.add('flagged');
    cell.innerHTML = '🚩'; 
  }
}

// Reveal all bombs when the game is over
function revealAllBombs() {
    bombPositions.forEach(position => {
        const row = Math.floor(position / boardSize);
        const col = position % boardSize;
        const cell = gameBoard[row][col];
        cell.classList.add('bomb');
        cell.innerHTML = '💣'; 
      });
}

// End the game (either won or lost)
function endGame(won) {
  gameEnded = true;
  if (won) {
    alert('Congratulations, You Win!');
  } else {
    alert('Game Over! You clicked on a bomb!');
    revealAllBombs();
  }
}

// Check if the player has won
function checkWinCondition() {
    let revealedCount = 0;

  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const cell = gameBoard[row][col];
      const index = row * boardSize + col;

      // If the cell is revealed and not a bomb, count it
      if (cell.classList.contains('revealed') && !bombPositions.includes(index)) {
        revealedCount++;
      }
    }
  }

  // If the number of revealed cells equals the number of non-bomb cells, player wins
  if (revealedCount === (boardSize * boardSize - bombCount)) {
    endGame(true);
  }
}

// Reset the game
function resetGame() {
  initGame();
}

// Initialize the game when the page loads
window.onload = initGame;