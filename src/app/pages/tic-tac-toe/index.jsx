import { useState } from "react";
import "./style.css";

const createInitialBoard = (size) => Array(size * size).fill(null);
const initialGameStatus = {
  hasWinner: false,
  isDraw: false,
  isGameOver: false,
  currentPlayer: "X",
};

const checkWinner = (player, board, cellIndex, size) => {
  const isRowComplete = () => {
    const row = Math.floor(cellIndex / size);
    for (let col = 0; col < size; col++) {
      if (board[row * size + col] !== player) return false;
    }
    return true;
  };

  const isColComplete = () => {
    const col = cellIndex % size;
    for (let row = 0; row < size; row++) {
      if (board[row * size + col] !== player) return false;
    }
    return true;
  };

  const isLeftDiagonalComplete = () => {
    const row = Math.floor(cellIndex / size);
    const col = cellIndex % size;

    if (row !== col) return false;
    for (let i = 0; i < size; i++) {
      if (board[i * size + i] !== player) return false;
    }
    return true;
  };

  const isRightDiagonalComplete = () => {
    const row = Math.floor(cellIndex / size);
    const col = cellIndex % size;

    if (row + col !== size - 1) return false;
    for (let i = 0; i < size; i++) {
      if (board[i * size + (size - 1 - i)] !== player) return false;
    }
    return true;
  };

  return (
    isRowComplete() ||
    isColComplete() ||
    isLeftDiagonalComplete() ||
    isRightDiagonalComplete()
  );
};

const TicTacToe = ({ gridSize = 3 }) => {
  const [board, setBoard] = useState(createInitialBoard(gridSize));
  const [gameStatus, setGameStatus] = useState(initialGameStatus);

  const handleCellClick = (cellIndex) => {
    if (board[cellIndex] || gameStatus.isGameOver) return;

    const updatedBoard = [...board];
    updatedBoard[cellIndex] = gameStatus.currentPlayer;
    setBoard(updatedBoard);

    if (
      checkWinner(gameStatus.currentPlayer, updatedBoard, cellIndex, gridSize)
    ) {
      setGameStatus((prevState) => ({
        ...prevState,
        hasWinner: true,
        isGameOver: true,
      }));
    } else if (!updatedBoard.includes(null)) {
      setGameStatus((prevState) => ({
        ...prevState,
        isDraw: true,
        isGameOver: true,
      }));
    } else {
      setGameStatus((prevState) => ({
        ...prevState,
        currentPlayer: prevState.currentPlayer === "X" ? "O" : "X",
      }));
    }
  };

  const handleStartClick = () => {
    setBoard(createInitialBoard(gridSize));
    setGameStatus(initialGameStatus);
  };

  return (
    <div className="tictactoe__container">
      <h1>Tic Tac Toe</h1>
      <div
        className="grid__container"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {board.map((cell, index) => (
          <span key={index} onClick={() => handleCellClick(index)}>
            {cell}
          </span>
        ))}
      </div>
      {gameStatus.isGameOver && (
        <div className="grid__winner">
          <span>
            {gameStatus.hasWinner
              ? `Winner is: ${gameStatus.currentPlayer}`
              : "Game is Over!!"}
          </span>
          <button onClick={handleStartClick}>Start Again</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
