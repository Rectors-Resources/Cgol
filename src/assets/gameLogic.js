export function generateGameBoard(size) {
  const gameBoard = [];
  for (let i = 0; i < size; i++) {
    gameBoard.push([]);
    for (let j = 0; j < size; j++) {
      gameBoard[i].push(0);
    }
  }
  return gameBoard;
}

export function gameOfLife(gameBoard) {
  const newArr = [];
  for (let i = 0; i < gameBoard.length; i++) {
    newArr.push([]);
    for(let y = 0; y < gameBoard[i].length; y++) {
      newArr[i].push(0)
    } 
    for (let j = 0; j < gameBoard[i].length; j++) {
      

      let aliveNeighbours = 0;

      for (let k = -1; k < 2; k++) {
        for (let r = -1; r < 2; r++) {
          if (
            i + k >= 0 &&
            i + k < gameBoard.length &&
            j + r >= 0 &&
            j + r < gameBoard[i].length
          )
            aliveNeighbours += gameBoard[i + k][j + r];
        }
      }
      aliveNeighbours -= gameBoard[i][j];

      if((gameBoard[i][j] === 1) && (aliveNeighbours < 2)) {
        newArr[i][j] = 0
      }else if((gameBoard[i][j] === 1) && (aliveNeighbours > 3)) {
        newArr[i][j] = 0
      } else if ((gameBoard[i][j] === 0) && (aliveNeighbours === 3)) {
        newArr[i][j] = 1
      }else {
        newArr[i][j] = gameBoard[i][j];
      }
      
    }
  }
  return newArr;
}

export function randomInput(gameBoard) {
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      const randNum = Math.floor(Math.random() * 100);
      if (randNum % 2 === 0) {
        gameBoard[i][j] = 1;
      }
    }
  }
  return gameBoard;
}

export function controlInput(gameBoard) {
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (i % 2 === 0) {
        gameBoard[i][j] = 1;
      }
    }
  }
  return gameBoard;
}
