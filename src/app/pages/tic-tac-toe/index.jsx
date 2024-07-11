import { useState } from "react";
import "./style.css";
const initialCells = Array(9).fill(null);
const initialStatus = {
  isWinner: false,
  isDraw: false,
  isGameOver: false,
  player: "X",
};
const checkForWinner = (newCells) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const winningCombination of winningCombinations) {
    const [a, b, c] = winningCombination;
    if (
      newCells[a] &&
      newCells[a] == newCells[b] &&
      newCells[b] == newCells[c]
    ) {
      return true;
    }
  }
  return false;
};

const TicTacToe = () => {
  const [cells, setCells] = useState(initialCells);
  const [status, setStatus] = useState(initialStatus);

  const onCellClickHandler = (id) => {
    if (cells[id] || status.isGameOver) return;
    const newCells = [...cells];
    newCells[id] = status.player;
    setCells(newCells);

    if (checkForWinner(newCells)) {
      setStatus((prevStatue) => ({
        ...prevStatue,
        isWinner: true,
        isGameOver: true,
      }));
    } else if (!newCells.some((newCell) => !newCell)) {
      setStatus((prevStatus) => ({
        ...prevStatus,
        isDraw: true,
        isGameOver: true,
      }));
    } else {
      setStatus((prevStatus) => ({
        ...prevStatus,
        player: prevStatus.player === "X" ? "O" : "X",
      }));
    }
  };
  const onStartClickHandler = () => {
    setStatus(initialStatus);
    setCells(initialCells);
  };
  return (
    <div className="tictactoe__container">
      <h1> This is Tic Tac Toe</h1>
      <div className="grid__conatiner">
        {cells.map((cell, index) => (
          <span key={index} onClick={() => onCellClickHandler(index)}>
            {cell}
          </span>
        ))}
      </div>
      {status.isGameOver && (
        <div className="grid__winner">
          <span>{`${
            status.isWinner ? `Winner is: ${status.player}` : "Game is Over!!"
          }`}</span>
          <button onClick={onStartClickHandler}>Start Again</button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
